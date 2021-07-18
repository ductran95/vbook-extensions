function execute(url) {
    var doc = Http.get(url + "/chaps").html();
    const pageList = [];

    if (doc) {
        var lastPage = doc.select(".pagi a").last().attr("href");

        var slashIndex = lastPage.lastIndexOf("/");

        if(slashIndex > -1) {
            var prefixUrl = lastPage.substring(0, slashIndex);
            var lastPage = Number(lastPage.substring(slashIndex+1))

            for (var i = 1; i <= lastPage; i++) {
                pageList.push(prefixUrl + "/" + i);
            }
        }
        else {
            pageList.push(lastPage)
        }
    }

    return Response.success(pageList);
}