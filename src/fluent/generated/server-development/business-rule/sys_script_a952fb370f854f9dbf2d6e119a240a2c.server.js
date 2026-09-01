(function executeRule(current, previous) {
    var state = current.getValue('state');
    if (!state) {
        current.setValue('state', 'draft');
    }
})(current, previous);
