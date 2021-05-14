function execute(url) {
    // Bypass cloudflare
    var browser = Engine.newBrowser();
    browser.launch(url, 15*1000);
    var doc = browser.html();

    browser.close();

    return Response.success({
        name: doc.select("div.profile-manga div.post-title > h1").text(),
        cover: doc.select("div.profile-manga div.tab-summary div.summary_image a > img").attr("src").replace('\t','').replace('\n',''),
        author: doc.select("div.profile-manga div.tab-summary div.summary_content div.post-content div.post-content_item:contains(Author) div.summary-content").text(),
        description: doc.select("div.c-page-content div.description-summary").text(),
        detail: doc.select("div.profile-manga div.tab-summary div.summary_content div.post-content div.post-content_item").html(),
        category: doc.select("div.profile-manga div.tab-summary div.summary_content div.post-content div.post-content_item:contains(Genre) div.summary-content").text(),
        host: "https://toonily.com",
        nsfw: true
    });
}