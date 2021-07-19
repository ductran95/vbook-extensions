function execute(url) {
    var doc = Http.get("https://chivi.xyz" + url).html();

    const chapList = [];

    chapList.push({
        name: "url: " + url,
        url: url,
        host: "https://chivi.xyz"
    });

    if (doc) {
        chapList.push({
            name: "doc ok",
            url: url,
            host: "https://chivi.xyz"
        });

        var chlist = doc.select(".chlist")

        chapList.push({
            name: "chlist: " + chlist.size(),
            url: url,
            host: "https://chivi.xyz"
        });

        var el = chlist.last().select(".list > li > a")

        chapList.push({
            name: "el: " + el.size(),
            url: url,
            host: "https://chivi.xyz"
        });

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