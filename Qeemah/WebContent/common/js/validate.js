jQuery.sap.declare("com.sagia.common.js.validate");

com.sagia.common.js.validate = {
		validateBasicInfo : function(context){
			//console.log("Reached Validate");
			var oBIOIOrganizationName = context.getView().byId("idBIOIOrganizationName");	
			var oBIOIPreviewOrganizationName = context.getView().byId("idBIOIPreviewOrganizationName");
			
			oBIOIPreviewOrganizationName.setValue(oBIOIOrganizationName.getValue());
			
			
			context._oBIOILegalStatusCombobox = context.getView().byId("idBILegalStatusComboBox");
			context._oBIOIPreviewLegalStatusCombobox = context.getView().byId("idBIOIPreviewLegalStatusComboBox");
			/*var oBIOIPreviewLegalStatusFilter = new sap.ui.model.Filter("Textlong", sap.ui.model.FilterOperator.NE, "");
			context._oBIOIPreviewLegalStatusCombobox.getBinding("items").filter(oBIOIPreviewLegalStatusFilter);
			console.log(context._oBIOILegalStatusCombobox.getSelectedKey());
			context._oBIOIPreviewLegalStatusCombobox.setSelectedKey("BRLL");
			console.log(context._oBIOIPreviewLegalStatusCombobox.getSelectedKey());*/
			
			var oItemTemplate = context._oBIOILegalStatusCombobox.getSelectedItem() ;
console.log(oItemTemplate);
context._oBIOIPreviewLegalStatusCombobox.setSelectedItem(oItemTemplate);
			
			//console.log(oBIOIOrganizationName);
		}
};