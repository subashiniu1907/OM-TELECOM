(function() {
  data.order = null;
  data.orderLines = [];
  data.tree = [];
  data.error = '';
  data.success = '';

  var orderTable = 'x_973795_om_tele_0_order';
  var lineTable = 'x_973795_om_tele_0_order_line';

  // Handle actions
  if (input && input.action === 'submit_order') {
    try {
      var grUpd = new GlideRecord(orderTable);
      if (grUpd.get(input.order_id)) {
        grUpd.setValue('state', 'in_fulfillment');
        grUpd.update();
        data.success = 'Order submitted for fulfillment.';
      }
    } catch (e) {
      data.error = 'Failed to submit order: ' + e.message;
    }
  }

  if (input && input.action === 'cancel_order') {
    try {
      var grCancel = new GlideRecord(orderTable);
      if (grCancel.get(input.order_id)) {
        grCancel.setValue('state', 'cancelled');
        grCancel.update();
        data.success = 'Order cancelled.';
      }
    } catch (e) {
      data.error = 'Failed to cancel order: ' + e.message;
    }
  }

  // Get order sys_id from URL parameter
  var sysId = $sp.getParameter('sys_id');
  if (input && input.order_id) {
    sysId = input.order_id;
  }

  if (!sysId) {
    data.error = 'No order specified.';
    return;
  }

  try {
    // Load order details
    var gr = new GlideRecord(orderTable);
    if (gr.get(sysId)) {
      data.order = {
        sys_id: gr.getUniqueValue(),
        number: gr.getValue('number') + '',
        customer: gr.getDisplayValue('customer') + '',
        order_type: gr.getDisplayValue('order_type') + '',
        state: gr.getValue('state') + '',
        state_display: gr.getDisplayValue('state') + '',
        requested_date: gr.getDisplayValue('requested_date') + '',
        completed_date: gr.getDisplayValue('completed_date') + '',
        description: gr.getValue('description') + '',
        external_order_id: gr.getValue('external_order_id') + '',
        created_on: gr.getDisplayValue('sys_created_on') + ''
      };

      // Load order lines
      var allLines = [];
      var lineGr = new GlideRecord(lineTable);
      lineGr.addQuery('order', sysId);
      lineGr.orderBy('fulfillment_seq');
      lineGr.setLimit(200);
      lineGr.query();
      while (lineGr.next()) {
        allLines.push({
          sys_id: lineGr.getUniqueValue(),
          number: lineGr.getValue('number') + '',
          line_type: lineGr.getDisplayValue('line_type') + '',
          line_type_val: lineGr.getValue('line_type') + '',
          name: lineGr.getDisplayValue('product_spec') + '' || lineGr.getDisplayValue('service_spec') + '' || lineGr.getDisplayValue('resource_spec') + '' || lineGr.getDisplayValue('prod_offering') + '',
          state: lineGr.getValue('state') + '',
          state_display: lineGr.getDisplayValue('state') + '',
          fulfillment_state: lineGr.getDisplayValue('fulfillment_state') + '',
          action: lineGr.getDisplayValue('action') + '',
          parent_line: lineGr.getValue('parent_line') + '',
          children: []
        });
      }

      // Build tree structure
      var lineMap = {};
      for (var i = 0; i < allLines.length; i++) {
        lineMap[allLines[i].sys_id] = allLines[i];
      }

      var rootLines = [];
      for (var j = 0; j < allLines.length; j++) {
        var line = allLines[j];
        if (line.parent_line && lineMap[line.parent_line]) {
          lineMap[line.parent_line].children.push(line);
        } else {
          rootLines.push(line);
        }
      }

      data.tree = rootLines;
      data.orderLines = allLines;
    } else {
      data.error = 'Order not found.';
    }
  } catch (e) {
    gs.error('OMT Order Detail error: ' + e.message);
    data.error = 'Failed to load order details.';
  }
})();
