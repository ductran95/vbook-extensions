function execute() {
    return Response.success([
        {title: "New", input: "https://toonily.com/webtoons/?m_orderby=new-manga", script: "gen.js"},
        {title: "Trending", input: "https://toonily.com/webtoons/?m_orderby=trending", script: "gen.js"},
        {title: "Completed", input: "https://toonily.com/webtoon-tag/completed-webtoon/", script: "gen.js"}
    ]);
}