function execute(url) {
    var doc = Http.get(url).html();

    var bookId = doc.select("#manga-chapters-holder").attr("data-id");

    var chapDoc = Http.post('https://skymanga.co/wp-admin/admin-ajax.php').params({
        action: 'manga_get_chapters',
        manga: bookId
    }).html();

    var el = chapDoc.select(".wp-manga-chapter a:not(.c-new-tag)")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://skymanga.co"
        })
    }

    return Response.success(data);
}
