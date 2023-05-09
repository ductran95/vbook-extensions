function execute(url) {
    let urlParts = url.split("/");
    let slug = urlParts[urlParts.length - 1];
    let slugParts = slug.split("-");
    let id = slugParts[0];

    let sUrl = "https://chivi.app/_db/books/" + id + "/show";
    let response = fetch(sUrl);
    if (response.ok) {
        let doc = response.json();
        
        return Response.success({
            "name": doc.vtitle,
            "cover": doc.bcover,
            "host": "https://chivi.app",
            "author": doc.vauthor,
            "description": doc.bintro,
            "detail": "Tác giả: " + doc.vauthor +"<br>" + "Thể loại: " + doc.genres.toString(),
            "ongoing": doc.status == 0
        });
    }
    return null
}