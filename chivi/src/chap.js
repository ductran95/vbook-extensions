function execute(url) {
  let response = fetch(url);

  if (response.ok) {
      let doc = response.html();
      doc.select("article.article section h1#L0").remove();
      doc.select("article.article section v-n").unwrap();
      doc.select("article.article section v-g").unwrap();
      return Response.success(doc.select("article.article section").html());
  }

  return null;
}