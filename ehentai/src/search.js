function execute(key, page) {
    if (!page) page = '0';
    const url = 'https://e-hentai.org/?f_search=' + key + '&page=' + page;
    
    const doc = Http.get(url).html();

    var next = "";
    var nextPage = doc.select(".ptt td.ptds + td a").text();
    if(nextPage){
        var nextNumber = Number(nextPage);
        next = (nextNumber - 1).toString();
    }

    const el = doc.select(".gltc tbody tr")

    const data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        var coverEl = e.select(".glthumb img");
        var coverDataSrc = coverEl.attr("data-src");
        var coverSrc = coverEl.attr("src");
        data.push({
            name: e.select(".glname > a .glink").text(),
            link: e.select(".glname > a").attr("href"),
            cover: coverDataSrc ? coverDataSrc : coverSrc,
            description: e.select(".glname > a div.glink + div").text(),
            host: "https://e-hentai.org/"
        })
    }

    return Response.success(data, next)
}