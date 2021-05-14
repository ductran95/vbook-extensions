function execute(url) {
    // Bypass cloudflare
    var browser = Engine.newBrowser();
    browser.launch(url, 10 * 1000);
    var doc = browser.html();

    var el = doc.select("img.wp-manga-chapter-img");

    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src").trim();
        if (img) {
            data.push(img);
        }
    }

    browser.close();

    return Response.success(data);
}