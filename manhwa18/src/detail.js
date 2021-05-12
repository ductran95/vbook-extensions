function execute(url) {
    const doc = Http.get(url).html()

    var lineEls = doc.select("div.info-manga ul.manga-info li:gt(1)");
    var lines = [];
    for (var i = 0; i < lineEls.size(); i++) {
        var lineEl = lineEls.get(i);
        lines.push(lineEl.text());
    }
    var linesText = lines.join("\n");

    return Response.success({
        name: doc.select("div.info-manga ul.manga-info > h1").text(),
        cover: doc.select("div.info-manga div.info-cover img.thumbnail").attr("src"),
        author: doc.select("div.info-manga ul.manga-info > li:contains(Author) small a").text(),
        description: doc.select("div.info-manga div.row:contains(Description) p").text(),
        category: doc.select("div.info-manga ul.manga-info > li:contains(Genre) small a").text(),
        detail: linesText,
        host: "https://manhwa18.com",
        nsfw: true
    });
}