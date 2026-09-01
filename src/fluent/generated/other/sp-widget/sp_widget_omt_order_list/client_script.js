api.controller = function($location) {
  var c = this;

  c.activeFilter = '';
  c.loading = false;

  c.tabs = [
    { label: 'All', value: '' },
    { label: 'Draft', value: 'draft' },
    { label: 'In Fulfillment', value: 'in_fulfillment' },
    { label: 'Completed', value: 'completed' },
    { label: 'Failed', value: 'failed' }
  ];

  c.setFilter = function(state) {
    c.activeFilter = state;
    c.loading = true;
    c.server.get({ action: 'filter', filterState: state, page: 1 }).then(function(r) {
      c.data = r.data;
      c.loading = false;
    }, function() {
      c.loading = false;
    });
  };

  c.goToPage = function(page) {
    if (page < 1 || page > c.data.totalPages) return;
    c.loading = true;
    c.server.get({ action: 'filter', filterState: c.activeFilter, page: page }).then(function(r) {
      c.data = r.data;
      c.loading = false;
    }, function() {
      c.loading = false;
    });
  };

  c.navigateToOrder = function(sysId) {
    $location.search({ id: 'omt_order_detail', sys_id: sysId });
  };

  c.navigateToNewOrder = function() {
    $location.search({ id: 'omt_new_order' });
  };

  c.getStateClass = function(state) {
    var map = {
      'draft': 'label-default',
      'in_fulfillment': 'label-warning',
      'completed': 'label-success',
      'failed': 'label-danger',
      'cancelled': 'label-default'
    };
    return map[state] || 'label-info';
  };

  c.getPageRange = function() {
    var pages = [];
    for (var i = 1; i <= c.data.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };
};
