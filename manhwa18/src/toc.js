function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select("div#tab-chapper tr a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://manhwa18.com"
        })
    }

    return Response.success(data);
}