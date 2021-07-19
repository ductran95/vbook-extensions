function execute(url) {
    // var doc = Http.get(url + "/chaps").html();
    const pageList = [];

    pageList.push(url + "/chaps")

    // if (doc) {
        // var lastPage = doc.select(".pagi a").last().attr("href");

        // var slashIndex = lastPage.lastIndexOf("/");

        // if(slashIndex > -1) {
        //     var prefixUrl = lastPage.substring(0, slashIndex);
        //     var lastPageNo = Number(lastPage.substring(slashIndex+1));

        //     for (var i = 1; i <= lastPageNo; i++) {
        //         pageList.push(prefixUrl + "/" + i);
        //     }
        // }
        // else {
        //     pageList.push(lastPage)
        // }

        // pageList.push(lastPage)
    // }

    return Response.success(pageList);
}