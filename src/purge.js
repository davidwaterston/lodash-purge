var _ = require('lodash');

function purge(arr, predicate) {
    var arrLocal = _.cloneDeep(arr);
    var removed = _.remove(arrLocal, predicate);

    return arrLocal;
}

_.mixin({'purge': purge});
