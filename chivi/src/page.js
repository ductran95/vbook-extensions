function execute(url) {
    var chapUrl = url + "/chaps";
    var doc = Http.get(chapUrl).html();
    const pageList = [];

    if (doc) {
        var source = doc.select(".source ._active").text().toLowerCase()
        pageList.push(chapUrl + "/" + source)

        var pages = doc.select(".pagi a._line");
        var lastPage = pages.last().attr("href");

        const pageRegex = /.*page=(\d+)/g;
        const result = pageRegex.exec(lastPage);
        if (result) {
            var lastPageNo = parseInt(result[1]);
            for (var i = 2; i <= lastPageNo; i++) {
                pageList.push(chapUrl + "/" + source + "?page=" + i);
            }
        }
    }

    return Response.success(pageList);
}