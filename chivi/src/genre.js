function execute() {
    let t = [["Loại khác", "loai-khac", !1], ["Huyền ảo", "huyen-ao", !0], ["Kỳ huyễn", "ky-huyen", !0], ["Giả tưởng", "gia-tuong", !1], ["Ma pháp", "ma-phap", !1], ["Lịch sử", "lich-su", !0], ["Quân sự", "quan-su", !1], ["Đô thị", "do-thi", !0], ["Hiện thực", "hien-thuc", !1], ["Chức trường", "chuc-truong", !1], ["Quan trường", "quan-truong", !1], ["Vườn trường", "vuon-truong", !1], ["Thương chiến", "thuong-chien", !1], ["Tiên hiệp", "tien-hiep", !1], ["Tu chân", "tu-chan", !0], ["Khoa viễn", "khoa-vien", !0], ["Không gian", "khong-gian", !1], ["Trò chơi", "tro-choi", !0], ["Thể thao", "the-thao", !0], ["Thi đấu", "thi-dau", !1], ["Huyền nghi", "huyen-nghi", !0], ["Kinh dị", "kinh-di", !0], ["Thần quái", "than-quai", !1], ["Đồng nhân", "dong-nhan", !0], ["Võ hiệp", "vo-hiep", !0], ["Đam mỹ", "dam-my", !1], ["Nữ sinh", "nu-sinh", !1], ["Ngôn tình", "ngon-tinh", !0], ["Xuyên việt", "xuyen-viet", !1], ["Trạch văn", "trach-van", !0], ["Phi sắc", "phi-sac", !0], ["Lý phiên", "ly-phien", !0]];
    
    let nav = [];
    t.forEach(e => {
        if(e[0] !== "Tất cả" )
        {
            nav.push({ 
                title: e[0], 
                input: "https://chivi.app/_db/books" + encodeURI("?genres=" + e[0]), 
                script: "gen.js" 
            });
        }
        
    })
    return Response.success(nav);
}