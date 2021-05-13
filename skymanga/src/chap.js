function execute(url) {
    var resp = Http.get(url).string();
    var respMatch = resp.match("<body(.*)</body>");
    var doc = Jsoup.parse(respMatch[0]);
    var el = doc.select("img.wp-manga-chapter-img");

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