function execute(url) {
    let response = fetch(url);
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