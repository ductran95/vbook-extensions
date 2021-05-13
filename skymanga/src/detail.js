function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select(".post-title > h1").text(),
        cover: doc.select(".summary_image a > img").attr("data-src").replace('\t','').replace('\n',''),
        author: doc.select(".post-content_item:contains(Author) div.summary-content").text(),
        description: doc.select(".summary__content.active").text(),
        detail: doc.select(".post-content div.post-content_item").html(),
        category: doc.select(".post-content_item:contains(Genre) div.summary-content").text(),
        host: "https://skymanga.co",
        nsfw: true
    });
}