function execute(url) {
    var json = Http.get(url).string();

    var data = JSON.parse(json);

    if (data) {
        var book = data.cvbook;
        var updateTime = new Date(book.mftime * 1000);
        var updateStr = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds() 
                        + " " + updateTime.getDate() + "/" + updateTime.getMonth() + "/" + updateTime.getFullYear()

        return Response.success({
            "name": book.vtitle,
            "cover": book.bcover ? "/covers/" + book.bcover : "",
            "author": book.vauthor,
            "description": book.bintro.join(" "),
            "detail": book.vauthor + " " + book.genres.join(" ") + " " + book.status + " " + "Update: " + updateStr,
            "ongoing": book.status == 0,
            "host": "https://chivi.xyz",
        });
    }

    return null
}