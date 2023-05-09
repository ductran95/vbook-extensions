function execute(url) {
  let response = fetch(url);

  if (response.ok) {
    let text = response.text().toString();
    text = text
    .replaceAll(/<v-n[a-zA-Z0-9\s\-\=]*>/ig, "")
    .replaceAll('</v-n>', "")
    .replaceAll(/<v-g[a-zA-Z0-9\s\-\=]*>/ig, "")
    .replaceAll('</v-g>', "");

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