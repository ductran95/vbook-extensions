function execute(url) {
    var json = Http.get(url).string();

    var data = JSON.parse(json);

    var pageList = [];

    pageList.push(url);

    if (data) {
        var book = data.cvbook;
        var source = "";

        // Get source in chseed which has utime = book.mftime
        for (var si = 0; si < book.snames.length; si++) {
            source = book.snames[si];
            var sourceData = book.chseed[source];

            if (sourceData && sourceData.utime == book.mftime) {
                break;
            }
        }

        pageList.push(book.id);
        pageList.push(source);

        var chapUrl = "https://chivi.xyz/api/chaps/" + book.id + "/" + source + "?mode=0" + "&page=";

        pageList.push(chapUrl);

        var chapJson = Http.get(chapUrl + "1").string();
        var chapData = JSON.parse(chapJson);

        if (chapData && chapData.total) {
            for (var i = 1; i <= chapData.pgmax; i++) {
                var pageObj = {
                    book: book.bslug,
                    url: chapUrl + i.toString()
                };

                // pageList.push(JSON.stringify(pageObj));
                pageList.push(chapUrl + i.toString());
            }
        }
    }

    return Response.success(pageList);
}