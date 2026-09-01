(function() {
  data.stats = {
    total: 0,
    in_fulfillment: 0,
    completed: 0,
    failed: 0
  };
  data.recentOrders = [];
  data.userName = '';

  try {
    // Get user display name
    var userGr = new GlideRecord('sys_user');
    if (userGr.get(gs.getUserID())) {
      data.userName = userGr.getDisplayValue('name') + '';
    }

    // Get order stats
    var orderTable = 'x_973795_om_tele_0_order';

    // Total orders
    var gaTotal = new GlideAggregate(orderTable);
    gaTotal.addAggregate('COUNT');
    gaTotal.query();
    if (gaTotal.next()) {
      data.stats.total = parseInt(gaTotal.getAggregate('COUNT')) || 0;
    }

    // In Fulfillment
    var gaFulfill = new GlideAggregate(orderTable);
    gaFulfill.addQuery('state', 'in_fulfillment');
    gaFulfill.addAggregate('COUNT');
    gaFulfill.query();
    if (gaFulfill.next()) {
      data.stats.in_fulfillment = parseInt(gaFulfill.getAggregate('COUNT')) || 0;
    }

    // Completed
    var gaComplete = new GlideAggregate(orderTable);
    gaComplete.addQuery('state', 'completed');
    gaComplete.addAggregate('COUNT');
    gaComplete.query();
    if (gaComplete.next()) {
      data.stats.completed = parseInt(gaComplete.getAggregate('COUNT')) || 0;
    }

    // Failed
    var gaFailed = new GlideAggregate(orderTable);
    gaFailed.addQuery('state', 'failed');
    gaFailed.addAggregate('COUNT');
    gaFailed.query();
    if (gaFailed.next()) {
      data.stats.failed = parseInt(gaFailed.getAggregate('COUNT')) || 0;
    }

    // Recent orders
    var gr = new GlideRecord(orderTable);
    gr.orderByDesc('sys_created_on');
    gr.setLimit(10);
    gr.query();
    while (gr.next()) {
      data.recentOrders.push({
        sys_id: gr.getUniqueValue(),
        number: gr.getValue('number') + '',
        customer: gr.getDisplayValue('customer') + '',
        order_type: gr.getDisplayValue('order_type') + '',
        state: gr.getValue('state') + '',
        state_display: gr.getDisplayValue('state') + '',
        requested_date: gr.getDisplayValue('requested_date') + ''
      });
    }
  } catch (e) {
    gs.error('OMT Dashboard error: ' + e.message);
    data.error = 'Failed to load dashboard data.';
  }
})();
