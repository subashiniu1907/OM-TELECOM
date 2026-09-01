(function() {
  data.orders = [];
  data.totalCount = 0;
  data.pageSize = 20;
  data.currentPage = 1;

  var orderTable = 'x_973795_om_tele_0_order';
  var filterState = '';
  var page = 1;

  if (input) {
    if (input.action === 'filter') {
      filterState = input.filterState || '';
      page = parseInt(input.page) || 1;
    }
  }

  try {
    // Get total count
    var gaCount = new GlideAggregate(orderTable);
    if (filterState) {
      gaCount.addQuery('state', filterState);
    }
    gaCount.addAggregate('COUNT');
    gaCount.query();
    if (gaCount.next()) {
      data.totalCount = parseInt(gaCount.getAggregate('COUNT')) || 0;
    }

    data.currentPage = page;
    data.totalPages = Math.ceil(data.totalCount / data.pageSize) || 1;

    // Query orders
    var gr = new GlideRecord(orderTable);
    if (filterState) {
      gr.addQuery('state', filterState);
    }
    gr.orderByDesc('sys_created_on');
    gr.setLimit(data.pageSize);
    var startRow = (page - 1) * data.pageSize;
    gr.chooseWindow(startRow, startRow + data.pageSize);
    gr.query();
    while (gr.next()) {
      data.orders.push({
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
    gs.error('OMT Order List error: ' + e.message);
  }
})();
