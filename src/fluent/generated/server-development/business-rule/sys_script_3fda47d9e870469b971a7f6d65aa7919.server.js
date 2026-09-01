(function executeRule(current, previous) {
    var orderId = current.getUniqueValue();

    // Set state to validating
    current.setValue('state', 'validating');
    current.update();

    // Run validation
    var validator = new OrderValidator();
    var validationResult = validator.validate(orderId);

    if (!validationResult.valid) {
        current.setValue('state', 'failed');
        current.setValue('description',
            current.getValue('description') +
            '\nValidation failed: ' + validationResult.errors.join('; ')
        );
        current.update();
        gs.error('Order validation failed for ' + orderId + ': ' + validationResult.errors.join('; '));
        return;
    }

    // Set state to decomposing and run decomposition
    current.setValue('state', 'decomposing');
    current.update();

    var decomposer = new OrderDecomposition();
    decomposer.decompose(orderId);

    // Set state to in_fulfillment and start fulfillment
    current.setValue('state', 'in_fulfillment');
    current.update();

    var engine = new FulfillmentEngine();
    engine.startFulfillment(orderId);
})(current, previous);
