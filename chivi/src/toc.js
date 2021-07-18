function execute(url) {
    var page = 1
    var tocPrefixUrl = url + "/chaps/"
    const chapList = [];

    while(true){
        var doc = Http.get(tocPrefixUrl + page).html()

        if (doc) {
            var el = doc.select(".chlist").last().select(".list > li > a")

            if(el.size() == 0){
                break
            }
    
            for (var i = 0; i < el.size(); i++) {
                var e = el.get(i);
                chapList.push({
                    "name": e.select(".title").text(),
                    "url": e.attr("href"),
                    "host": "https://chivi.xyz"
                });
            }
        }
        else {
            break
        }

        page++
    }

    return Response.success(chapList);
}