function execute(url) {
    var chapUrl = url + "/chaps";
    var doc = Http.get(chapUrl).html();

    const chapList = [];

    if (doc) {
        var source = doc.select(".source ._active").text().toLowerCase()

        var pages = doc.select(".pagi a._line");
        var lastPage = pages.last().attr("href");

        const pageRegex = /.*page=(\d+)/g;
        const result = pageRegex.exec(lastPage);
        if (result) {
            var lastPageNo = parseInt(result[1]);
            for (var i = 1; i <= lastPageNo; i++) {

                var chapDoc = Http.get(chapUrl + "/" + source + "?page=" + i).html();
                
                if (chapDoc) {
                    var el = chapDoc.select(".chlist").select(".list").last().select("li > a")
            
                    for (var i = 0; i < el.size(); i++) {
                        var e = el.get(i);
                        chapList.push({
                            name: e.select(".title").text(),
                            url: e.attr("href"),
                            host: "https://chivi.xyz"
                        });
                    }
                }
            }
        }
        else {
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
    }

    return Response.success(chapList);
}