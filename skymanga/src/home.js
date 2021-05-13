function execute() {
    return Response.success([
        {title: "Manga list", input: "https://skymanga.co/manga/", script: "gen.js"},
        {title: "Romance", input: "https://skymanga.co/manga-genre/romance/", script: "gen.js"},
        {title: "Adult", input: "https://skymanga.co/manga-genre/adult/", script: "gen.js"}
    ]);
}