api.controller = function($location) {
  var c = this;

  c.orderProduct = function(productId) {
    $location.search({ id: 'omt_new_order' });
  };

  c.getStatusClass = function(status) {
    var map = {
      'active': 'label-success',
      'retired': 'label-default',
      'draft': 'label-warning'
    };
    return map[status] || 'label-info';
  };
};
