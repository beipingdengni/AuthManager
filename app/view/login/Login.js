Ext.define("AuthManager.view.login.Login",{
	extend: 'Ext.container.Viewport',

	requires:[
		'AuthManager.view.login.LoginController',
		'AuthManager.view.login.LoginModel'
	],

	xtype:"app-login",
	
	controller: 'login',

    viewModel: 'login',

    layout:'center',

    items:[
    	{
    		title: '系统登录',
            xtype: 'form',
    		width: 350,
            reference: 'loginForm',
            frame: true,
    		defaults:{
    			xtype: 'textfield',
                labelWidth: 70,
                labelAlign: 'right',
                margin: 10,
                allowBlank: false,
                width: 300 			
    		},
    		items:[
    			{
    				fieldLabel: '用户名',
                    emptyText: '请输入用户名',
                    blankText: '用户名不能为空',
                    bind:{
                    	value:'{userName}'
                    }
    			},
    			{
    				inputType:'password',
    				fieldLabel:"密码",
    				emptyText:"请输入密码",
    				blankText:"密码不能为空",
    				bind:{
    					value:'{userPassword}'
    				}
    			},    			
                {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'button',
                            width: 100,
                            formBind: true,
                            text: '登录',
                            handler: 'login'
                        }
                    ]
                }
    		],
    		listeners:{
    			afterrender:'afterLoginRender'
    		}
    	}
    ]

})