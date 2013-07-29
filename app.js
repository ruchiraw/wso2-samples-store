var caramel = require('caramel');

caramel.configs({
    context: '/wso2-samples-store',
    cache: true,
    negotiation: true,
    themer: function () {
        var meta = caramel.meta(),
            theme = meta.request.getParameter('theme');
        if (theme) {
            session.put('theme', theme);
        } else {
            theme = session.get('theme') || 'theme0';
        }
        return theme;
    }/*,
     languagesDir: '/i18n',
     language: function() {
     return 'si';
     }*/
});