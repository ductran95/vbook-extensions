function execute(url) {
    let repsonse = fetch(url);

    if(repsonse.ok){
        let doc = repsonse.html();
        
        var style = doc.select(".gm #gleft #gd1 div").attr("style");
        var urlIndex = style.indexOf("url(");
        var endIndex = style.indexOf(")", urlIndex);
        var cover = style.slice(urlIndex + 4, endIndex);

        return Response.success({
            name: doc.select(".gm #gd2 #gn").text(),
            cover: cover,
            author: doc.select("#taglist tr:contains(artist:) div").text(),
            description: doc.select("#taglist tr:contains(female:) div").text(),
            detail: doc.select("#taglist tr:contains(female:) div").text(),
            category: doc.select("#taglist tr:contains(misc:) div").text(),
            host: "https://e-hentai.org/",
            nsfw: true
        });
    }
    
    return null;
}