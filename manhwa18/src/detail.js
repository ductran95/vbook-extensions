function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("div.info-manga ul.manga-info > h1").text(),
        cover: doc.select("div.info-manga div.info-cover img.thumbnail").attr("src"),
        author: doc.select("div.info-manga ul.manga-info > li:nth-child(2) small").text(),
        description: doc.select("div.info-manga div.row:nth-child(1) p").text(),
        category: doc.select("div.info-manga ul.manga-info > li:nth-child(3) small").html(),
        host: "https://manhwa18.com",
        nsfw: true
    });
}