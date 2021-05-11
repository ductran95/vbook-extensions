function execute(key, page) {
    if (!page) page = '1';
    const url = 'https://manhwa18.com/danh-sach-truyen.html';
    const doc = Http.get(url).params({
        name: key,
        page: page,
        listType: 'pagination',
        sort: 'last_update',
        sort_type: 'DESC'
    }).html()

    var next = doc.select("ul.pagination.pagination-v4").select("li:has(a.active) + li").text()

    const el = doc.select("div.row-list")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("div.media div.media-body .media-heading > a").text(),
            link: e.select("div.media div.media-body .media-heading > a").attr("href"),
            cover: e.select("div.media img.img-thumb").first().attr("src"),
            description: 'Chapter ' + e.select("div.media div.media-body > a").text(),
            host: "https://manhwa18.com"
        })
    }

    return Response.success(data, next)
}