/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AuthManager.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [    
        'AuthManager.view.main.MainController',
        'AuthManager.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout:'border',

    items: [{        
        region:'west',
        width:250,
        split:true,
        xtype: 'treepanel',
        scrollable: 'y',
        collapsible: true,
        collapseToolText: '',
        expandToolText: '',
        split:true,
        displayField: 'menu_name',
        rootVisible: false,
        rowLines: false,
        iconCls:'fa fa-home',
        bind: {
            title: '{treeTitle}',
            selection: '{selectedMenu}',
            store: '{menuStore}'
        }
    }, {
        iconCls:'fa fa-user',
        region:'center',
        xtype:'panel',
        bodyStyle:{
            background:'transparent'
        },
        bind: {
            title: '{conetentTitle}'
        },
        items:[

        ],
        bbar:{
            defaults:{
                xtype:'label',
                style: {
                    color: '#0000ff',
                    'font-size':'12px',
                    'font-weight':600
                }
            },
            items:[
                '->',
                {
                    html:AuthManager.Saints.COPYRIGHT
                }
            ]
        }
    }]

});
