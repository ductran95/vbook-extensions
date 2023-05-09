function execute(url) {
  let response = fetch(url);

  if (response.ok) {
    let text = response.text();
    text = text
    .replace(/<v-n[a-zA-Z0-9\s\-\=]*>/ig, "")
    .replace(/<\/v-n>/ig, "")
    .replace(/<v-g[a-zA-Z0-9\s\-\=]*>/ig, "")
    .replace(/<\/v-g>/ig, "");

    let doc = Html.parse(text);
    doc.select("article.article section h1#L0").remove();
    return Response.success(doc.select("article.article section").html());
  }

  // if (response.ok) {
  //   let doc = response.html();
    
  //   doc.select("article.article section h1#L0").remove();
  //   doc.select("article.article section v-n").unwrap();
  //   doc.select("article.article section v-g").unwrap();
  //   return Response.success(doc.select("article.article section").html());
  // }

  return null;
}