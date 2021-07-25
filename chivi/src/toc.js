function execute(url) {
  var urlData = JSON.parse(url);

  var json = Http.get(urlData.url).string();

  var data = JSON.parse(json);

  var chapList = [];

  if (data && data.chaps) {
    chapList = data.chaps.map((item) => {
      return {
        name: item.title,
        url: "https://chivi.xyz/-" + urlData.book + "/-" + item.uslug + "-" + data.sname + "-" + item.chidx,
        host: "https://chivi.xyz",
      };
    });
  }

  return Response.success(chapList);
}
