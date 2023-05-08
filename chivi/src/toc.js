function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.json();
        
        let pageNo = 1;
        let tocUrl = "https://chivi.app/_wn/chaps/" + doc.id;

        chapList.push({
            "name": tocUrl,
            "url": tocUrl,
            "host": "https://chivi.app"
        });
        
        let chapList = [];
        let hasChap = true;
        while(hasChap) {
            let tocResponse = fetch(tocUrl + "/_?pg=" + pageNo);
            if (tocResponse.ok) {
                chapList.push({
                    "name": tocResponse,
                    "url": tocUrl,
                    "host": "https://chivi.app"
                });

                let data = tocResponse.json();
                hasChap = data.length > 0;

                data.forEach(e => {
                    chapList.push({
                        "name": e.title,
                        "url": "/wn/" + doc.bslug + "/ch/_/" + e.schid + "/" + e.uslug + "--mt",
                        "host": "https://chivi.app"
                    });
                });
            }
            else {
                hasChap = false;
            }

            pageNo++;
        }

        return Response.success(chapList);
    }

    return null;
}