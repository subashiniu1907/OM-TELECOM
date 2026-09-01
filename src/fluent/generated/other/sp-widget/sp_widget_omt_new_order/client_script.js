api.controller = function($location) {
  var c = this;

  c.submitting = false;
  c.form = {
    customer: '',
    product_offering: '',
    order_type: 'new',
    description: '',
    requested_date: ''
  };

  c.submit = function() {
    if (!c.form.customer) {
      c.data.error = 'Please select a customer.';
      return;
    }
    c.submitting = true;
    c.data.error = '';
    c.server.get({
      action: 'create_order',
      customer: c.form.customer,
      product_offering: c.form.product_offering,
      order_type: c.form.order_type,
      description: c.form.description,
      requested_date: c.form.requested_date
    }).then(function(r) {
      c.submitting = false;
      if (r.data.createdOrderId) {
        $location.search({ id: 'omt_order_detail', sys_id: r.data.createdOrderId });
      } else {
        c.data = r.data;
      }
    }, function() {
      c.submitting = false;
      c.data.error = 'An unexpected error occurred.';
    });
  };

  c.cancel = function() {
    $location.search({ id: 'omt_orders' });
  };
};
