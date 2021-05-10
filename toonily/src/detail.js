function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("div.profile-manga div.post-title > h1").text(),
        cover: doc.select("div.profile-manga div.tab-summary div.summary_image a > img").attr("src"),
        author: doc.select("div.profile-manga div.tab-summary div.summary_content div.post-content div.post-content_item:contains(Author) div.summary-content").text(),
        description: doc.select("div.c-page-content div.description-summary").text(),
        detail: doc.select("div.profile-manga div.tab-summary div.summary_content div.post-content").html(),
        category: doc.select("div.profile-manga div.tab-summary div.summary_content div.post-content div.post-content_item:contains(Genre) div.summary-content").text(),
        host: "https://toonily.com",
        nsfw: true
    });
}