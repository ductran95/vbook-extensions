function execute(url) {
    var chapUrl = "https://chivi.xyz" + url + "/chaps";
    var doc = Http.get(chapUrl).html();
    const pageList = [];

    if (doc) {
        var pages = doc.select(".pagi a._line");
        var lastPage = pages.last().attr("href");

        const pageRegex = /.*page=(.*)/g;
        const result = pageRegex.exec(lastPage);
        if (result) {
            var lastPageNo = parseInt(result[1]);
            for (var i = 1; i <= lastPageNo; i++) {
                pageList.push(chapUrl + "?page=" + i);
            }
        }
        else {
            pageList.push(chapUrl)
        }
    }

    return Response.success(pageList);
}