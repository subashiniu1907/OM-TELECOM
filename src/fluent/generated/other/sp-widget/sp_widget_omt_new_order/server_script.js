(function() {
  data.customers = [];
  data.productOfferings = [];
  data.error = '';
  data.success = '';
  data.createdOrderId = '';

  // Handle create action
  if (input && input.action === 'create_order') {
    try {
      var orderGr = new GlideRecord('x_973795_om_tele_0_order');
      orderGr.initialize();
      orderGr.setValue('customer', input.customer);
      orderGr.setValue('order_type', input.order_type || 'new');
      orderGr.setValue('description', input.description || '');
      orderGr.setValue('state', 'draft');
      if (input.requested_date) {
        orderGr.setValue('requested_date', input.requested_date);
      }
      var orderId = orderGr.insert();

      if (orderId) {
        // Create first product order line
        if (input.product_offering) {
          var lineGr = new GlideRecord('x_973795_om_tele_0_order_line');
          lineGr.initialize();
          lineGr.setValue('order', orderId);
          lineGr.setValue('prod_offering', input.product_offering);
          lineGr.setValue('line_type', 'product');
          lineGr.setValue('action', 'add');
          lineGr.setValue('state', 'draft');
          lineGr.setValue('quantity', 1);
          lineGr.insert();
        }

        data.success = 'Order created successfully.';
        data.createdOrderId = orderId + '';
      } else {
        data.error = 'Failed to create order.';
      }
      return;
    } catch (e) {
      data.error = 'Error creating order: ' + e.message;
      return;
    }
  }

  // Load customers
  try {
    var custGr = new GlideRecord('x_973795_om_tele_0_customer');
    custGr.addQuery('active', true);
    custGr.orderBy('name');
    custGr.setLimit(100);
    custGr.query();
    while (custGr.next()) {
      data.customers.push({
        sys_id: custGr.getUniqueValue(),
        name: custGr.getValue('name') + ''
      });
    }
  } catch (e) {
    gs.error('OMT New Order - customer load error: ' + e.message);
  }

  // Load product offerings
  try {
    var poGr = new GlideRecord('x_973795_om_tele_0_prod_offer');
    poGr.addQuery('active', true);
    poGr.orderBy('name');
    poGr.setLimit(100);
    poGr.query();
    while (poGr.next()) {
      data.productOfferings.push({
        sys_id: poGr.getUniqueValue(),
        name: poGr.getValue('name') + '',
        price: poGr.getValue('price') + '',
        currency: poGr.getValue('currency') + ''
      });
    }
  } catch (e) {
    gs.error('OMT New Order - offering load error: ' + e.message);
  }
})();
