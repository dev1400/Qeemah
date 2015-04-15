jQuery.sap.declare("com.sagia.common.ModelHelper");

com.sagia.common.ModelHelper = {
		oBundle : null,
		oODataModel : null,
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
		// Return text from i18n model
		getText : function (sPath, sArg1){
		
			var sText = this.oBundle.getText(sPath);
			
			if(sArg1){
				sText = sText.replace("&", sArg1);
			}
				
			return sText;
		},
		/**
		 * Supply here the service url of the service to fetch data from
		 */
		getServiceUrl : function () {
			
			// OData Service URL
			//var sServiceUrl = "proxy/http://rhocrmdev1.mysagia.gov:8000/sap/opu/odata/sap/ZSAMPLE1_SRV/";
			var sServiceUrl = "/sap/opu/odata/sap/ZSAMPLE1_SRV/";
			
			
			//for local testing prefix with proxy
			  if (window.location.hostname == "localhost") {
			      return "proxy" + sServiceUrl;
			  } else {
			      return sServiceUrl;
			  }
			return sServiceUrl;
		},
		/**
		 * Build ODataModel instance and return
		 */
		getODataModel : function () {
			
			// Create OData Model
//			var sUrl = dia.cmc.model.Config.getServiceUrl();
			var sUrl = this.getServiceUrl();
			this.oODataModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			
			this.oODataModel.setSizeLimit(300);
					
			this.oODataModel.setCountSupported(false);
			
			return this.oODataModel;
		},
		
		oDealsInAmendmentCollectionModel : new sap.ui.model.json.JSONModel(),
		
		/**
		 * Read Deal Collection and convert it to JSON Model
		 */

		readDealsInAmendmentCollection : function (){

			var that = this;		
			
			this.oODataModel.read("/USER_REGISTRATION_ENT(Flag='L',Userid='4000000087',Password='123456',MobileNo='',Email='')", null, null , false, 
				
				function(oData, oResponse){
					that.oDealsInAmendmentCollectionModel.setData({DealsInAmendmentCollection:oData.results});
				},
				
				function(oResponse){
				   oResponse = jQuery.parseJSON(oResponse.response.body);

				   sap.m.MessageBox.alert(oResponse.error.message.value, {
						title : "Result"
					});
				});
			
	            
			return this.oDealsInAmendmentCollectionModel;
		},

		////////////////////////////////////////////////////////////////////////////////////////////////
};