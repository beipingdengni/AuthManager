
Ext.define('AuthManager.store.Menu',{
	extend:'Ext.data.TreeStore',

	alias: 'store.menu',

	defaultRootProperty: 'menu',

	root: {
        menu_name: '系统菜单',
        menu_type: '',
        menu: [
            {
                menu_name: '系统维护管理',
                menu_type: '',
                expanded: true,
                menu: [
                    {
                        menu_name: '配置系统',
                        menu_type: 'app-ConfigSystem',
                        leaf: true,
                        menu: []
                    },
                    {
                        menu_name: '修改系统',
                        menu_type: 'app-diagnosticplan',
                        leaf: true,
                        menu: []
                    },
                    {
                        menu_name: '删除系统',
                        menu_type: 'app-DelSystem',
                        leaf: true,
                        menu: []
                    }
                ]
            },

            {
                menu_name: '权限配置管理',
                menu_type: '',
                expanded: true,
                menu: [
                    {
                        menu_name: '权限查看',
                        menu_type: 'app-CkeckConfig',
                        leaf: true,
                        menu: []
                    },
                    {
                        menu_name: '个人配置',
                        menu_type: 'app-SelfConifg',
                        leaf: true,
                        menu: []
                    },
                    {
                        menu_name: '批量配置',
                        menu_type: 'app-AmountConfig',
                        leaf: true,
                        menu: []
                    },
                    {
                        menu_name: '自定义配置',
                        menu_type: 'app-CustomConfig',
                        leaf: true,
                        menu: []
                    }
                ]
            }
        ]
    }
})