Ext.define('AuthManager.Saints', {
    requires: [
        //use all ext component
        'Ext.layout.*',
        'Ext.button.*',
        'Ext.toolbar.*',
        'Ext.window.*',
        'Ext.tree.*',
        'Ext.tab.*',
        'Ext.panel.*',
        'Ext.form.*',
        'Ext.ux.form.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.grid.*',
        'Ext.tip.QuickTip'
    ],

    statics: {
        API_PREFIX: 'http://192.168.0.135:8094/api/v1',

        COPYRIGHT: '&copy北平等你技术有限公司版权所有',

        MENU_MAP: [
            {type: 'app-relatecamera', model: 'model.device', store: 'deviceStore'},
            {type: 'app-diagnosticgroup', model: 'model.diagnosticgroup', store: 'diagnosticGroupStore'},
            {type: 'app-diagnosticplan', model: 'model.diagnosticplan', store: 'diagnosticPlanStore'},
            {type: 'app-diagnosticplandispatch', model: 'model.diagnosticgroup', store: 'diagnosticGroupStore'},
            {type: 'app-storageevent', model: 'model.storageevent', store: 'storageEventStore'},
            {type: 'app-storagegroup', model: 'model.storagegroup', store: 'storageGroupStore'},
            {type: 'app-storageeventdispatch', model: 'model.storagegroup', store: 'storageGroupStore'},
            {type: 'app-storageplan', model: 'model.storageplan', store: 'storagePlanStore'},
            {type: 'app-storageplandispatch', model: 'model.storagegroup', store: 'storageGroupStore'}
        ],

        DATA_FORMAT: {
            DATE_DISPLAY_FORMAT: 'Y年m月d日',
            DATE_TIME_DISPLAY_FORMAT: 'Y年m月d日H:i:s',
            TIME_DISPLAY_FORMAT: 'H:i:s',
            DATE_FORMAT: 'c'
        },

        VALIDATION_MESSAGE: {
            PRESENCE: '该字段为必填项不可为空',
            LENGTH: '该字段长度必须在{0}到{1}之间',
            INCLUSION: '该字段值限定在{0}之内'
        },

        findModel: function (type) {
            var model = null;
            for (var i = 0; i < this.MENU_MAP.length; i++) {
                if (this.MENU_MAP[i].type === type) {
                    model = this.MENU_MAP[i].model;
                    break;
                }
            }
            return model
        },

        findStore: function (type) {
            var store = null;
            for (var i = 0; i < this.MENU_MAP.length; i++) {
                if (this.MENU_MAP[i].type === type) {
                    store = this.MENU_MAP[i].store;
                    break;
                }
            }
            return store;
        },
        showSuccess: function (msg, width, height) {
            Ext.toast({
                title: '成功',
                html: msg,
                width: width || 300,
                height: height || 150,
                iconCls: 'fa fa-smile-o',
                useXAxis: true,
                shadow: true,
                timeout:1000
            })
        },

        showFailure: function (msg, width, height) {
            Ext.toast({
                title: '失败',
                html: msg,
                width: width || 300,
                height: height || 150,
                iconCls: 'fa fa-frown-o',
                useXAxis: true,
                shadow: true
            })
        },

        showConfirm: function (msg, callback) {
            Ext.Msg.show({
                title: '确认操作',
                message: msg,
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.WARNING,
                fn: function (btn) {
                    if (btn == 'yes') {
                        callback();
                    }
                }
            })
        },
        showAlert: function (msg) {
            Ext.Msg.alert('提示', msg);
        }
    }
});