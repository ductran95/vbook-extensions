function execute(url) {
    var bookApiUrl = url.replace("/~", "/api/books/");
    var bookJson = Http.get(bookApiUrl).string();
    var book = JSON.parse(bookJson);

    var src = "";

    Object.keys(book.chseed).forEach(function(key) {
        if(book.chseed[key][1] == book.update) {
            src = key
        }
    })

    var doc = Http.get(url + "/chaps/" + src).html();
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