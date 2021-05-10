function execute(key, page) {
    if (!page) page = '1';
    const url = 'https://toonily.com' + '/page/' + page;
    const doc = Http.get(url).params({
        s: key,
        post_type: 'wp-manga'
    }).html()

    var next = doc.select("div.wp-pagenavi").select("span.current + a").text()

    const el = doc.select("div.content-area div.c-tabs-item div.c-tabs-item__content")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("div.tab-summary div.post-title").text(),
            link: e.select("div.tab-thumb > a").attr("href"),
            cover: e.select("div.tab-thumb > a > img").attr("src"),
            description: e.select("div.tab-summary div.post-content div.mg_status div.summary-content").text(),
            host: "https://toonily.com"
        })
    }

    return Response.success(data, next)
}