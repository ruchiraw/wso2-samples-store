var render = function (theme, data, meta, require) {
    theme('index', {
        body: [
            {
                partial: 'thumbnails',
                context: data.samples
            }
        ]
    });
};