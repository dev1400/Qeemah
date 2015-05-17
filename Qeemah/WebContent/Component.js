jQuery.sap.declare("com.sagia.Component");
jQuery.sap.require("com.sagia.common.ModelHelper");


sap.ui.core.UIComponent.extend("com.sagia.Component",{
	metadata : {
		routing : {
			config : { 
				viewType:"XML",
				viewPath:"com.sagia.view",
				targetControl:"navContainer",
				targetAggregation:"pages",
				clearTarget : false
			},
			routes : [
			          {
			        	  pattern : "",
			        	  name:"Overview",
			        	  view:"Overview"
			          },
			          {
			        	  pattern : "SecondPage/{id}",
			        	  name : "SecondPage",
			        	  view : "SecondPage"
			          }]
		}
	}
});
//The prototype property allows you to add properties and methods to an object.
com.sagia.Component.prototype.init = function(){
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	
	sap.ui.core.UIComponent.prototype.init.apply(this);
	
	var router = this.getRouter();
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	router.initialize();
	
	// Get ODataModel instance
    var oODataModel = com.sagia.common.ModelHelper.getODataModel();
    // Set OData Model
    this.setModel(oODataModel, "ODataModel");
	
	// Get i18n model 
	var i18nModel =	com.sagia.common.ModelHelper.getI18nModel("i18n/messageBundle.properties","en");
	
	// set i18n model
	this.setModel(i18nModel, "i18n");
};
com.sagia.Component.prototype.destroy = function(){
	if(this.routeHandler){
		this.routeHandler.destroy();
	}
	sap.ui.core.UIComponent.destroy.apply(this,arguments);
};
com.sagia.Component.prototype.createContent = function(){
	this.view = sap.ui.view({id:"app",viewName:"com.sagia.view.App",type:sap.ui.core.mvc.ViewType.JS});
	return this.view;
};