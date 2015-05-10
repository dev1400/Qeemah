jQuery.sap.declare("com.sagia.common.js.validate");

com.sagia.common.js.validate = {
		validateBasicInfo : function(context){
			//console.log("Reached Validate");
			var oBIOIOrganizationName = context.getView().byId("idBIOIOrganizationName");	
			var oBIOIPreviewOrganizationName = context.getView().byId("idBIOIPreviewOrganizationName");			
			oBIOIPreviewOrganizationName.setValue(oBIOIOrganizationName.getValue());
			
			
			context._oBIOILegalStatusCombobox = context.getView().byId("idBILegalStatusComboBox");
			context._oBIOIPreviewLegalStatusCombobox = context.getView().byId("idBIOIPreviewLegalStatusComboBox");			
			var oPreviewLegalStatusComboboxItemTemplate = context._oBIOILegalStatusCombobox.getSelectedItem();			
            context._oBIOIPreviewLegalStatusCombobox.setSelectedItem(oPreviewLegalStatusComboboxItemTemplate);
            
            context._oBIOIRegionComboBox = context.getView().byId("idRegionComboBox");
			context._oBIOIPreviewRegionCombobox = context.getView().byId("idBIOIPreviewRegionComboBox");			
			var oPreviewRegionComboboxItemTemplate = context._oBIOIRegionComboBox.getSelectedItem();			
            context._oBIOIPreviewRegionCombobox.setSelectedItem(oPreviewRegionComboboxItemTemplate);

            context._oBIOIMNCComboBox = context.getView().byId("idBIOIMultiNationalCompanyCombobox");
			context._oBIOIPreviewMNCCombobox = context.getView().byId("idBIOIPreviewMultiNationalCompanyCombobox");			
			var oPreviewMNCComboboxItemTemplate = context._oBIOIMNCComboBox.getSelectedItem();			
            context._oBIOIPreviewMNCCombobox.setSelectedItem(oPreviewMNCComboboxItemTemplate);
            
            context._oBIOIMNCComboBox = context.getView().byId("idBIOIMultiNationalCompanyCombobox");
			context._oBIOIPreviewMNCCombobox = context.getView().byId("idBIOIPreviewMultiNationalCompanyCombobox");			
			var oPreviewMNCComboboxItemTemplate = context._oBIOIMNCComboBox.getSelectedItem();			
            context._oBIOIPreviewMNCCombobox.setSelectedItem(oPreviewMNCComboboxItemTemplate);
            
            context._oBIOICityComboBox = context.getView().byId("idCityComboBox");
			context._oBIOICityMNCCombobox = context.getView().byId("idBIOIPreviewCityComboBox");			
			var oPreviewCityComboboxItemTemplate = context._oBIOICityComboBox.getSelectedItem();			
            context._oBIOICityMNCCombobox.setSelectedItem(oPreviewCityComboboxItemTemplate);          
           
			
            context.oBIOILaborSizeInputText = context.getView().byId("idBIOILaborSizeInputText");	
            context._oBIOIPreviewLaborSizeInputText = context.getView().byId("idBIOIPreviewLaborSizeInputText");			
            context._oBIOIPreviewLaborSizeInputText.setValue(context.oBIOILaborSizeInputText.getValue());
            
            context.oBIOILaborSizeInputText = context.getView().byId("idBIOILaborSizeInputText");	
            context._oBIOIPreviewLaborSizeInputText = context.getView().byId("idBIOIPreviewLaborSizeInputText");			
            context._oBIOIPreviewLaborSizeInputText.setValue(context.oBIOILaborSizeInputText.getValue());

            context.oBIOIPOBoxInputText = context.getView().byId("idBIOIPOBoxInputText");	
            context._oBIOIPreviewPOBoxInputText = context.getView().byId("idBIOIPreviewPOBoxInputText");			
            context._oBIOIPreviewPOBoxInputText.setValue(context.oBIOIPOBoxInputText.getValue());
            
            context.oBIOICapitalInputText = context.getView().byId("idBIOICapitalInputText");	
            context._oBIOIPreviewCapitalInputText = context.getView().byId("idBIOIPreviewCapitalInputText");			
            context._oBIOIPreviewCapitalInputText.setValue(context.oBIOICapitalInputText.getValue());
            
            context.oBIOIPostalCodeInputText = context.getView().byId("idBIOIPostalCodeInputText");	
            context._oBIOIPreviewPostalCodeInputText = context.getView().byId("idBIOIPreviewPostalCodeInputText");			
            context._oBIOIPreviewPostalCodeInputText.setValue(context.oBIOIPostalCodeInputText.getValue());
            
            context.oBIOITelephoneInputText = context.getView().byId("idBIOITelephoneInputText");	
            context._oBIOIPreviewTelephoneInputText = context.getView().byId("idBIOIPreviewTelephoneInputText");			
            context._oBIOIPreviewTelephoneInputText.setValue(context.oBIOITelephoneInputText.getValue());
			
            context.oBIOITelephoneExtensionInputText = context.getView().byId("idBIOITelephoneExtensionInputText");	
            context._oBIOIPreviewTelephoneExtensionInputText = context.getView().byId("idBIOIPreviewTelephoneExtensionInputText");			
            context._oBIOIPreviewTelephoneExtensionInputText.setValue(context.oBIOITelephoneExtensionInputText.getValue());

            
            context.oBIOIStreetInputText = context.getView().byId("idBIOIStreetInputText");	
            context._oBIOIPreviewStreetInputText = context.getView().byId("idBIOIPreviewStreetInputText");			
            context._oBIOIPreviewStreetInputText.setValue(context.oBIOIStreetInputText.getValue());
			
            context.oBIOIMobilePhoneInputText = context.getView().byId("idBIOIMobilephoneInputText");	
            context._oBIOIMobilePhoneInputText = context.getView().byId("idBIOIPreviewMobilephoneInputText");			
            context._oBIOIMobilePhoneInputText.setValue(context.oBIOIMobilePhoneInputText.getValue());
			
            context.oBIOIBuildingNoInputText = context.getView().byId("idBIOIBuildingNoInputText");	
            context._oBIOIBuildingNoInputText = context.getView().byId("idBIOIPreviewBuildingNoInputText");			
            context._oBIOIBuildingNoInputText.setValue(context.oBIOIBuildingNoInputText.getValue());
			
            context.oBIOIFaxInputText = context.getView().byId("idBIOIFaxInputText");	
            context._oBIOIPreviewFaxInputText = context.getView().byId("idBIOIPreviewFaxInputText");			
            context._oBIOIPreviewFaxInputText.setValue(context.oBIOIFaxInputText.getValue());
            
            context.oBIOIEmailInputText = context.getView().byId("idBIOIEmailInputText");	
            context._oBIOIPreviewEmailInputText = context.getView().byId("idBIOIPReviewEmailInputText");			
            context._oBIOIPreviewEmailInputText.setValue(context.oBIOIEmailInputText.getValue());
            
            context.oBIOIWebsiteInputText = context.getView().byId("idBIOIWebSiteInputText");	
            context._oBIOIPreviewWebsiteInputText = context.getView().byId("idBIOIPreviewWebSiteInputText");			
            context._oBIOIPreviewWebsiteInputText.setValue(context.oBIOIWebsiteInputText.getValue());
            
            
            context._oBIOICommMethodComboBox = context.getView().byId("idBIOICommMethodComboBox");
			context._oBIOIPreviewCommMethodCombobox = context.getView().byId("idBIOIPreviewCommMethodComboBox");			
			var oPreviewCommMethodComboboxItemTemplate = context._oBIOICommMethodComboBox.getSelectedItem();			
            context._oBIOIPreviewCommMethodCombobox.setSelectedItem(oPreviewCommMethodComboboxItemTemplate);

            context._oBIOIPreApprovalFileUploader = context.getView().byId("idBIOIPreApprovalFileUploader");
			context._oBIOIPReviewPreApprovalFileUploader = context.getView().byId("idBIOIPreviewPreApprovalFileUploader");
            context._oBIOIPReviewPreApprovalFileUploader.setValue(context._oBIOIPreApprovalFileUploader.getValue());
			

		}
};