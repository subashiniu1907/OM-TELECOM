(function executeRule(current, previous) {
    var orderId = current.getValue('order');
    if (!orderId) {
        return;
    }

    var stateManager = new OrderStateManager();
    stateManager.updateOrderState(orderId);
})(current, previous);
