function execute(url) {
    var tocUrl = url + "/chaps"
    const chapList = []

    var doc = Http.get(tocUrl).html()

    chapList.push({
        "name": doc ? "ok" : "error",
        "url": tocUrl,
        "host": "https://chivi.xyz"
    });

    // if (doc != null) {
    //     var chList = doc.select(".chlist").last()
    //     var el = chList.select(".list > li > a")

    //     for (var i = 0; i < el.size(); i++) {
    //         var e = el.get(i);
    //         chapList.push({
    //             "name": e.select(".title").text(),
    //             "url": e.attr("href"),
    //             "host": "https://chivi.xyz"
    //         });
    //     }

    // }

    // while(true){
    //     var doc = Http.get(tocUrl).html()

    //     if (doc) {
    //         var chList = doc.select(".chlist").last();
    //         var el = chList.select(".list > li > a")

    //         if(el.size() == 0){
    //             break
    //         }
    
    //         for (var i = 0; i < el.size(); i++) {
    //             var e = el.get(i);
    //             chapList.push({
    //                 "name": e.select(".title").text(),
    //                 "url": e.attr("href"),
    //                 "host": "https://chivi.xyz"
    //             });
    //         }

    //         var nextEl = chList.select(".pagi ._primary + a")
    //         if(nextEl.size() == 0 || nextEl.hasClass("_disable") || nextEl.attr("href") == tocUrl){
    //             break
    //         }
    //         tocUrl = nextEl.attr("href")
    //     }
    //     else {
    //         break
    //     }
    // }

    return Response.success(chapList);
}