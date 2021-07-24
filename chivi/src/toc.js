function execute(url) {
    var doc = Http.get(url).html();

    const chapList = [];

    chapList.push({
        name: url,
        url: url,
        host: "https://chivi.xyz"
    });

    if (doc) {
        var el = doc.select(".chlist").select(".list").last().select("li > a")

        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            chapList.push({
                name: e.select(".title").text(),
                url: e.attr("href"),
                host: "https://chivi.xyz"
            });
        }
    }

    return Response.success(chapList);
}