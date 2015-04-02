jQuery.sap.declare("com.sagia.common.ModelHelper");

com.sagia.common.ModelHelper = {
		oBundle : null,
		/**
		 * Build i18n Model instance and return
		 */
		getI18nModel : function (sPath) {
			
			// set i18n model
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl : sPath
			});
			
			this.oBundle = i18nModel.getResourceBundle();
			
			return i18nModel;
		},
};