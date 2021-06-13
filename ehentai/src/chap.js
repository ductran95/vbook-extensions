function execute(url) {
    var doc = Http.get(url).html();

    var data = [];

    // High quality
    var el = doc.select("#gdt .gdtm a");
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var imgUrl = e.attr("href");
        var imgDoc = Http.get(imgUrl).html();
        var img = imgDoc.select("#img");
        data.push(img.attr("src"))
    }

    // var el = doc.select("#gdt .gdtm div");

    // var firstImg = el.first();
    // var style = firstImg.attr("style");
    // var urlIndex = style.indexOf("url(");
    // var endIndex = style.indexOf(")", urlIndex);
    // var cover = style.slice(urlIndex + 4, endIndex);
    
    // data.push(cover);

    return Response.success(data);
}