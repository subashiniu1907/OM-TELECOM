api.controller = function($location) {
  var c = this;

  c.navigateToOrder = function(sysId) {
    $location.search({ id: 'omt_order_detail', sys_id: sysId });
  };

  c.navigateToOrders = function() {
    $location.search({ id: 'omt_orders' });
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
};
