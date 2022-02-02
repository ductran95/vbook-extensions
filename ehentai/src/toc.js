function execute(url) {
    let repsonse = fetch(url);

    if(repsonse.ok){
        let doc = repsonse.html();
        
        var el = doc.select(".ptt td");

        const data = [];

        var pageEl = el[el.length - 2];
        var pageNumber = Number(pageEl.text());

        for (var i = 1; i <= pageNumber; i++) {
            data.push({
                name: "Page " + i,
                url: url + "?p=" + (i - 1),
                host: "https://e-hentai.org/"
            });
        }

        return Response.success(data);
    }

    return null;
}
