function execute(url) {
    var json = Http.get(url).string();

    var data = JSON.parse(json);

    if (data) {
        return Response.success({
            "name": data.btitle_vi,
            "cover": data.bcover ? "/covers/" + data.bcover : "",
            "author": data.author_vi,
            "description": data.bintro.join("\n"),
            "detail": data.author_vi + "\n" + data.genres.join("\n") + (data.status == 0 ? "Còn tiếp" : "Hoàn thành") + "\n" + new Date(data.update).toLocaleString(),
            "ongoing": data.status == 0,
            "host": "https://chivi.xyz",
        });
    }

    return null
}