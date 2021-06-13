function execute(url, page) {
    if (!page) page = '0';

    var nextUrl = "";

    if(url.includes("?tl")){
        nextUrl = url + '&p=' + page;
    }
    else if(url.includes("/?")){
        nextUrl = url + '&page=' + page;
    }
    else if(url == 'https://e-hentai.org/popular') {
        nextUrl = url; // Popular does not have paging
    }
    else {
        nextUrl = url + '/?page=' + page;
    }

    const doc = Http.get(nextUrl).html();

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