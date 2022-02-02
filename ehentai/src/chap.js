function execute(url) {
    let response = fetch(url);

    if(response.ok){
        let doc = response.html();
        
        var data = [];

        // High quality
        var el = doc.select("#gdt .gdtm a");
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            var imgUrl = e.attr("href");

            let responseImg = fetch(imgUrl);
            if(responseImg.ok){
                let docImg = responseImg.html();
                var img = docImg.select("#img");
                data.push(img.attr("src"))
            }
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
    
    return null;
}