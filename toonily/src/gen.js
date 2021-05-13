function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page/' + page).html();

    var next = doc.select("div.wp-pagenavi").select("span.current + a").text()

    const el = doc.select("div.content-area div.c-page div.page-content-listing div.page-item-detail.manga")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("div.item-summary div.post-title").text(),
            link: e.select("div.item-thumb > a").attr("href"),
            cover: e.select("div.item-thumb > a > img").first().attr("src").replace('\t','').replace('\n',''),
            description: e.select("div.item-summary div.list-chapter div.chapter-item:nth-child(1) .chapter a").text(),
            host: "https://toonily.com"
        })
    }

    return Response.success(data, next)
}