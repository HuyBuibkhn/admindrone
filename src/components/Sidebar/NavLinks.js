// sidebar nav links
export default {
	category1: [
		{
			"menu_title": "Xem trực tiếp video",
			"menu_icon": "zmdi zmdi-view-dashboard",
			"child_routes": [
			]
		},
        {
            "menu_title": "Quản lý video",
            "menu_icon": "zmdi zmdi-view-dashboard",
            "child_routes": [
                {
                    "menu_title": "Xem video theo ngày",
                    "path": "/app/dashboard/ecommerce",
                },
                {
                    "path": "/horizontal/dashboard/saas",
                    "menu_title": "Xem video theo drone"
                }
            ]
        },
        {
            "menu_title": "Quản lý cảnh báo",
            "menu_icon": "zmdi zmdi-view-dashboard",
            "path": "/app/dashboard/lala"
        },

        {
            "menu_title": "Quản lý sai phạm",
            "menu_icon": "zmdi zmdi-view-dashboard",
            "child_routes": [
            ]
        }
	]
}
