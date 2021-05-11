function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("div.info-manga ul.manga-info > h1").text(),
        cover: doc.select("div.info-manga div.info-cover img.thumbnail").attr("src"),
        author: doc.select("div.info-manga ul.manga-info > li:contains(Author) small a").text(),
        description: doc.select("div.info-manga div.row:contains(Description) p").text(),
        category: doc.select("div.info-manga ul.manga-info > li:contains(Genre) small a").text(),
        detail: doc.select("div.info-manga ul.manga-info li:gt(1)").map(x=>x.html()).join('\n'),
        host: "https://manhwa18.com",
        nsfw: true
    });
}