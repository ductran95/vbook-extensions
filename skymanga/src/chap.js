function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("img.wp-manga-chapter-img");

    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src").trim();
        if (img) {
            data.push(img);
        }
    }

    return Response.success(data);
}