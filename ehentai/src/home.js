function execute() {
    return Response.success([
        {title: "Manga list", input: "https://e-hentai.org", script: "gen.js"},
        {title: "Popular", input: "https://e-hentai.org/popular", script: "gen.js"},
        {title: "Toplist", input: "https://e-hentai.org/toplist.php?tl=11", script: "gen.js"}
    ]);
}