function execute(url) {
    // Bypass cloudflare
    var browser = Engine.newBrowser();
    browser.launch(url, 15*1000);
    var doc = browser.html();

    browser.close();
    
    var el = doc.select("div.reading-content img");

    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("src").replace('\t','').replace('\n','');
        if (img) {
            data.push(img);
        }
    }

    return Response.success(data);
}