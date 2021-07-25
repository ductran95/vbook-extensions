function execute(url) {
  var urlData = JSON.parse(url);

  var json = Http.get(urlData.url).string();

  var data = JSON.parse(json);

  const chapList = [];

  chapList.push({
    name: urlData.book + "  " + urlData.url,
    url: urlData.url,
    host: "https://chivi.xyz",
  });

  if (data && data.chaps) {
    novelList = data.chaps.map((item) => {
      return {
        name: item.title,
        url: "/~" + urlData.book + "/~" + item.uslug,
        host: "https://chivi.xyz",
      };
    });
  }

  return Response.success(chapList);
}
