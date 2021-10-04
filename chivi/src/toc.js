function execute(url) {
  return Response.success([{
    name: url,
    url: "/",
    host: "https://chivi.xyz",
  }]);

  var urlData = JSON.parse(url);

  var json = Http.get(urlData.url).string();

  var data = JSON.parse(json);

  var chapList = [];

  if (data && data.chaps) {
    chapList = data.chaps.map((item) => {
      return {
        name: item.title,
        url: "/-" + urlData.book + "/-" + data.sname + "/-" + item.uslug + "-" + item.chidx,
        host: "https://chivi.xyz",
      };
    });
  }

  return Response.success(chapList);
}
