api.controller = function($location) {
  var c = this;

  c.submitting = false;

  c.submitOrder = function() {
    if (!c.data.order) return;
    c.submitting = true;
    c.server.get({ action: 'submit_order', order_id: c.data.order.sys_id }).then(function(r) {
      c.data = r.data;
      c.submitting = false;
    }, function() {
      c.submitting = false;
    });
  };

  c.cancelOrder = function() {
    if (!c.data.order) return;
    c.submitting = true;
    c.server.get({ action: 'cancel_order', order_id: c.data.order.sys_id }).then(function(r) {
      c.data = r.data;
      c.submitting = false;
    }, function() {
      c.submitting = false;
    });
  };

  c.goBack = function() {
    $location.search({ id: 'omt_orders' });
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

  c.getLineTypeIcon = function(lineType) {
    var map = {
      'product': 'glyphicon-briefcase',
      'service': 'glyphicon-cog',
      'resource': 'glyphicon-hdd'
    };
    return map[lineType] || 'glyphicon-record';
  };

  c.canSubmit = function() {
    return c.data.order && c.data.order.state === 'draft';
  };

  c.canCancel = function() {
    return c.data.order && c.data.order.state !== 'completed' && c.data.order.state !== 'cancelled';
  };
};
