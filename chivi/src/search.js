function execute(key, page) {
    if (!page) {
        page = 1;
    }
    else {
        page = parseInt(page);
    }

    var json = Http.get("https://chivi.xyz/api/books").params({
        page: page,
        btitle: key,
        listType: 'weight',
        take: '24',
    }).string();

    var data = JSON.parse(json);
    var next = page;

    var novelList = [];

    if (data && data.books) {
        if (page < data.pgmax) {
            next = page + 1;
        }
        
        novelList = data.books.map(item => {
            return {
                "name": item.btitle_vi,
                "link": "/api/books/" + item.bslug,
                "description": item.author_vi,
                "cover": item.bcover ? "/covers/" + item.bcover : "",
                "host": "https://chivi.xyz"
            }
        });
    }

    return Response.success(novelList, next);
}