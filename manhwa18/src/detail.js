function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("div.info-manga ul.manga-info > h1").text(),
        cover: doc.select("div.info-manga div.info-cover img.thumbnail").attr("src"),
        author: doc.select("div.info-manga ul.manga-info > li:contains(Author) small").text(),
        description: doc.select("div.info-manga div.row:contains(Description) p").text(),
        category: doc.select("div.info-manga ul.manga-info > li:contains(Genre) small").text(),
        host: "https://manhwa18.com",
        nsfw: true
    });
}