var render = function (theme, data, meta, require) {
    theme('index', {
        body: [
            {
                partial: 'details',
                context: data.sample
            }
        ]
    });
};