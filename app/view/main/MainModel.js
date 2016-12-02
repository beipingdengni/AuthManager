/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AuthManager.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires:[
    	'AuthManager.store.Menu'
    ],
    data: {
    	treeTitle:'系统权限目录',
    	conetentTitle:'内容',
        name: 'AuthManager',
        selectedMenu:null
    },
    stores:{
    	menuStore: {
            type: 'menu'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
