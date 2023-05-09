function execute(url) {
  let response = fetch(url);

  if (response.ok) {
      let doc = response.html();
      doc.select("article.article section h1#L0").remove();
      let chapData = doc.select("article.article section").html();
      chapData = chapData
      .replaceAll(/<v-n[a-zA-Z0-9\s\-\=]*>/ig, "")
      .replaceAll('</v-n>', "")
      .replaceAll(/<v-g[a-zA-Z0-9\s\-\=]*>/ig, "")
      .replaceAll('</v-g>', "")
      ;
      return Response.success(chapData);
  }

  return null;
}