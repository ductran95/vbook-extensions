function execute(url) {
    var doc = Http.get(url).string();
    var el = doc.select("div.chapter-content img");

    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("src");
        if (img) {
            data.push(img);
        }
    }

    return Response.success(data);
}