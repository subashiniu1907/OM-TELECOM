(function() {
  data.products = [];

  try {
    var gr = new GlideRecord('x_973795_om_tele_0_prod_offer');
    gr.addQuery('active', true);
    gr.orderBy('name');
    gr.setLimit(50);
    gr.query();
    while (gr.next()) {
      data.products.push({
        sys_id: gr.getUniqueValue(),
        name: gr.getValue('name') + '',
        description: gr.getValue('description') + '',
        price: gr.getValue('price') + '',
        currency: gr.getValue('currency') + '',
        status: gr.getDisplayValue('status') + '',
        status_val: gr.getValue('status') + '',
        product_spec: gr.getDisplayValue('product_spec') + ''
      });
    }
  } catch (e) {
    gs.error('OMT Product Catalog error: ' + e.message);
  }
})();
