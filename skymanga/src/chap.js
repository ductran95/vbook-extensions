function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".reading-content img");

    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src").replace('\t','').replace('\n','');
        if (img) {
            data.push(img);
        }
    }

    return Response.success(data);
}