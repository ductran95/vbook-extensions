function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        doc.select("article.article section h1#L0").remove();
        return Response.success(doc.select("article.article section").html());
    }

    return null;
}