function execute(url) {
    var doc = Http.get(url + "/chaps").html();
    const pageList = [];

    if (doc) {
        var pages = doc.select(".pagi a");
        var firstPage = pages.first().attr("href");
        var lastPage = pages.last().attr("href");

        if(firstPage == lastPage) {
            pageList.push("https://chivi.xyz" + firstPage)
        }
        else {
            var slashIndex = lastPage.lastIndexOf("/");
            var prefixUrl = "https://chivi.xyz" + lastPage.substring(0, slashIndex);
            var lastPageNo = parseInt(lastPage.substring(slashIndex+1));

            for (var i = 1; i <= lastPageNo; i++) {
                pageList.push(prefixUrl + "/" + i);
            }
        }
    }

    return Response.success(pageList);
}