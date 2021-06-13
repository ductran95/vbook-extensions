function execute(key, page) {
    if (!page) page = '1';
    const url = 'https://e-hentai.org/?f_search=' + key + '&page' + page;
    
    const doc = Http.get(nextUrl).html();

    var next = "";
    var nextPage = doc.select(".ptt td.ptds + td.a").text();
    if(nextPage){
        var nextNumber = Number(next);
        next = (nextNumber - 1).toString();
    }

    const el = doc.select(".gltc tbody tr")

    const data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".glname > a .glink").text(),
            link: e.select(".glname > a").attr("href"),
            cover: e.select(".glthumb img").attr("src"),
            description: e.select(".glname > a div.glink + div").text(),
            host: "https://e-hentai.org/"
        })
    }

    return Response.success(data, nextPage)
}