function execute(url) {
    var json = Http.get(url).string();

    var data = JSON.parse(json);

    const pageList = [];

    if (data) {
        var source = "";

        data.snames.every(sn => {
            if(sn != "chivi"){
                source = sn;
                return false;
            }
            return true;
        });

        var chapUrl = "/api/chaps/" + data.id + "/" + source + "?mode=0" + "&page=";

        var chapJson = Http.get(chapUrl + "1").string();
        var chapData = JSON.parse(chapJson);

        if(chapData) {
            for (var i = 1; i <= chapData.pgmax; i++) {
                var pageObj = {
                    book: data.bslug,
                    url: chapUrl + i
                };

                pageList.push(JSON.stringify(pageObj));
            }
        }
    }

    return Response.success(pageList);
}