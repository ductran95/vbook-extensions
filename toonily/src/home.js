function execute() {
    return Response.success([
        {title: "Manga List", input: "https://manhwa18.com/manga-list.html", script: "gen.js"},
        {title: "Manhwa", input: "https://manhwa18.com/manga-list-genre-manhwa.html", script: "gen.js"},
        {title: "Raw", input: "https://manhwa18.com/manga-list-genre-raw.html", script: "gen.js"},
        {title: "Completed", input: "https://manhwa18.com/manga-completed.html", script: "gen.js"}
    ]);
}