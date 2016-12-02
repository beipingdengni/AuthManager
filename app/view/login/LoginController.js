
Ext.define("AuthManager.view.login.LoginController",{
	extend:'Ext.app.ViewController',

	alias: 'controller.login',

	nav: null,

	afterLoginRender:function(){
		var form=this.lookupReference('loginForm');
		var el=this.getView().getEl();
		this.nav=new Ext.util.KeyNav({
			target:el,
			enter:function(){
				if (form.isValid()) {
					this.login();
				}
			},
			scope:this
		});
		this.nav.enable();
	},

	login:function(){
		var me=this;
		var name=this.getViewModel().get("userName")
		var password=me.getViewModel().get("userPassword")

		if (name=='tian'&&password=='123456') {

			//Ext.Msg.alert('提示','登录成功！')
			AuthManager.Saints.showSuccess('登录成功！');
			me.nav.destroy();
            me.getView().destroy();
            var main = Ext.widget('app-main');
		}
	}
})