(function executeRule(current, previous) {
    var state = current.getValue('state');

    // If state is not 'draft' and customer is empty, abort
    if (state !== 'draft') {
        var customer = current.getValue('customer');
        if (!customer) {
            gs.addErrorMessage('Customer is required for non-draft orders');
            current.setAbortAction(true);
            return;
        }
    }

    // If order_type is 'amend' and original_order is empty, abort
    var orderType = current.getValue('order_type');
    if (orderType === 'amend') {
        var originalOrder = current.getValue('original_order');
        if (!originalOrder) {
            gs.addErrorMessage('Original order reference is required for amend orders');
            current.setAbortAction(true);
            return;
        }
    }
})(current, previous);
