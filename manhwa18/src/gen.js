function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({
        page: page,
        listType: 'pagination',
        sort: 'last_update',
        sort_type: 'DESC'
    }).html();

    var next = doc.select("ul.pagination.pagination-v4").select("li:has(a.active) + li").text()

    const el = doc.select("div.row-list")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("div.media div.media-body .media-heading > a").text(),
            link: e.select("div.media div.media-body .media-heading > a").attr("href"),
            cover: e.select("div.media img.img-thumb").first().attr("src"),
            description: e.select(".chapters a").first().text(),
            host: "https://manhwa18.com"
        })
    }

    return Response.success(data, next)
}