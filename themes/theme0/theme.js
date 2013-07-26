var engine;

(function () {

    var template = function (request) {
        var hbs, file, page,
            uri = request.getRequestURI(),
            Handlebars = require('handlebars').Handlebars;
        //page selection has been hardcoded
        if (uri.indexOf('/details') !== -1) {
            page = 'details.hbs';
        } else if (uri.indexOf('/list') !== -1) {
            page = 'list.hbs';
        } else {
            page = 'index.hbs';
        }
        file = new File('/themes/theme0/pages/' + page);
        file.open('r');
        hbs = Handlebars.compile(file.readAll());
        file.close();
        return hbs;
    };


    engine = {
        render: function (data, meta) {
            print(template(meta.request)(data));
        }
    };
}());