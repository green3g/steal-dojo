import loader from '@loader';

export function fetch (load) {
    var name = load.name.split('!')[0];
    return new Promise(function (resolve, reject) {
        window.require([name], function (module) {
            resolve('');
        });
    });
}

export function instantiate (load) {
    var name = load.name.split('!')[0];
    return {
        deps: [],
        execute: function () {
            return loader.newModule({
                default: window.require.modules[name].result
            });
        }
    };
}
