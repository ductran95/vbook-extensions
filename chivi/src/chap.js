function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let article = doc.select("article.article").first();
        let section = article.select("section").first();

        if(section != null) {
            return Response.success(section.html());
        }
        else {
            return Response.success(article.html());
        }
    }

    return null;
}