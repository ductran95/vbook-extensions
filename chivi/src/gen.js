function execute(url, page) {
    if (!page) {
        page = 1;
    }
    else {
        page = parseInt(page);
    }

    var newUrl = url + "&page=" + page + "&take=24"

    var json = Http.get(newUrl).string();

    var data = JSON.parse(json);
    var next = page;

    var novelList = [];

    if (data.books) {
        var total = data.total;
        if (page < total) {
            next = page + 1;
        }
        novelList = data.books.map(item => {
            return {
                "name": item.btitle_vi,
                "link": "/~" + item.bslug,
                "description": item.author_vi,
                "cover": item.bcover ? "/covers/" + item.bcover : "",
                "host": "https://chivi.xyz"
            }
        });
    }

    return Response.success(novelList, next);
}