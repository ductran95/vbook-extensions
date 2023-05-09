function execute(url) {
  let response = fetch(url);

  if (response.ok) {
      let text = response.text();
      text = text
      .replaceAll(/<v-n[a-zA-Z0-9\s\-\=]*>/ig, "")
      .replaceAll('</v-n>', "")
      .replaceAll(/<v-g[a-zA-Z0-9\s\-\=]*>/ig, "")
      .replaceAll('</v-g>', "");

      let doc = Html.parse(text);
      doc.select("article.article section h1#L0").remove();
      return Response.success(doc.select("article.article section").html());
  }

  return null;
}