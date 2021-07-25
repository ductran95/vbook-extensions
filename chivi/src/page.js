function execute(url) {
    var json = Http.get(url).string();

    var data = JSON.parse(json);

    var pageList = [];

    if (data) {
        var source = "";

        for (var si = 0; si < data.snames.length; si++) {
            source = data.snames[si];

            var chapUrl = "https://chivi.xyz/api/chaps/" + data.id + "/" + source + "?mode=0" + "&page=";

            var chapJson = Http.get(chapUrl + "1").string();
            var chapData = JSON.parse(chapJson);
    
            if(chapData && chapData.total) {
                for (var i = 1; i <= chapData.pgmax; i++) {
                    var pageObj = {
                        book: data.bslug,
                        url: chapUrl + i.toString()
                    };
    
                    pageList.push(JSON.stringify(pageObj));
                }

                break;
            }
        }
    }

    return Response.success(pageList);
}