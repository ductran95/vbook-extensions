function execute() {
    const doc = Http.get("https://manhwa18.com/manga-list.html").html();
    const el = doc.select(".panel-default .panel-body a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}