// sidebar nav links
export default {
	category1: [
		{
			"menu_title": "Xem thống kê",
			"menu_icon": "zmdi zmdi-view-dashboard",
            "path": "/app/dashboard"
		},
        {
            "menu_title": "Xem trực tiếp",
            "menu_icon": "zmdi zmdi-view-dashboard",
            "path": "/live",
            // "child_routes": [
            //
            // ]
        },
        {
            "menu_title": "Video",
            "menu_icon": "zmdi zmdi-play-circle-outline",
            "path": "/video",
            // "child_routes": [
            //
            // ]
        },
        {
            "menu_title": "Quản lý cảnh báo",
            "menu_icon": "zmdi zmdi-minus-circle-outline",
            "path": "/app/report"
        },

        {
            "menu_title": "Quản lý sai phạm",
            "menu_icon": "zmdi zmdi-close-circle-o",
            "child_routes": [
            ]
		}
	]
}
