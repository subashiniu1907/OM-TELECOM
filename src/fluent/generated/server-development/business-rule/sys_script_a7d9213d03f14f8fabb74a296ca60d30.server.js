(function executeRule(current, previous) {
    var orderId = current.getUniqueValue();

    var lines = new GlideRecord('x_973795_om_tele_0_order_line');
    lines.addQuery('order', orderId);
    lines.addQuery('state', '!=', 'completed');
    lines.query();

    while (lines.next()) {
        lines.setValue('state', 'cancelled');
        lines.setValue('fulfillment_state', 'not_started');
        lines.update();
    }
})(current, previous);
