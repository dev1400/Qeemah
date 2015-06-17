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
            
            /*context._oBIOIMNCComboBox = context.getView().byId("idBIOIMultiNationalCompanyCombobox");
			context._oBIOIPreviewMNCCombobox = context.getView().byId("idBIOIPreviewMultiNationalCompanyCombobox");			
			var oPreviewMNCComboboxItemTemplate = context._oBIOIMNCComboBox.getSelectedItem();			
            context._oBIOIPreviewMNCCombobox.setSelectedItem(oPreviewMNCComboboxItemTemplate);*/
            
            context._oBIOICityComboBox = context.getView().byId("idCityComboBox");
			context._oBIOICityMNCCombobox = context.getView().byId("idBIOIPreviewCityComboBox");			
			var oPreviewCityComboboxItemTemplate = context._oBIOICityComboBox.getSelectedItem();			
            context._oBIOICityMNCCombobox.setSelectedItem(oPreviewCityComboboxItemTemplate);          
           
			
            context.oBIOILaborSizeInputText = context.getView().byId("idBIOILaborSizeInputText");	
            context._oBIOIPreviewLaborSizeInputText = context.getView().byId("idBIOIPreviewLaborSizeInputText");			
            context._oBIOIPreviewLaborSizeInputText.setValue(context.oBIOILaborSizeInputText.getValue());
            
//            context.oBIOILaborSizeInputText = context.getView().byId("idBIOILaborSizeInputText");	
//            context._oBIOIPreviewLaborSizeInputText = context.getView().byId("idBIOIPreviewLaborSizeInputText");			
//            context._oBIOIPreviewLaborSizeInputText.setValue(context.oBIOILaborSizeInputText.getValue());

           /* context.oBIOIPOBoxInputText = context.getView().byId("idBICIPOBoxInputText");	
            context._oBIOIPreviewPOBoxInputText = context.getView().byId("idBIOIPreviewPOBoxInputText");			
            context._oBIOIPreviewPOBoxInputText.setValue(context.oBIOIPOBoxInputText.getValue());*/
            
            context.oBIOICapitalInputText = context.getView().byId("idBIOICapitalInputText");	
            context._oBIOIPreviewCapitalInputText = context.getView().byId("idBIOIPreviewCapitalInputText");			
            context._oBIOIPreviewCapitalInputText.setValue(context.oBIOICapitalInputText.getValue());
            
            context.oBIOIPostalCodeInputText = context.getView().byId("idBICIPostalCodeInputText");	
            context._oBIOIPreviewPostalCodeInputText = context.getView().byId("idBIOIPreviewPostalCodeInputText");			
            context._oBIOIPreviewPostalCodeInputText.setValue(context.oBIOIPostalCodeInputText.getValue());
            
            context.oBIOITelephoneInputText = context.getView().byId("idBIOITelephoneInputText");	
            context._oBIOIPreviewTelephoneInputText = context.getView().byId("idBIOIPreviewTelephoneInputText");			
            context._oBIOIPreviewTelephoneInputText.setValue(context.oBIOITelephoneInputText.getValue());
			
//            context.oBIOITelephoneExtensionInputText = context.getView().byId("idBICITelephoneExtensionInputText");	
//            context._oBIOIPreviewTelephoneExtensionInputText = context.getView().byId("idBIOIPreviewTelephoneExtensionInputText");			
//            context._oBIOIPreviewTelephoneExtensionInputText.setValue(context.oBIOITelephoneExtensionInputText.getValue());
//
//            
            context.oBIOIStreetInputText = context.getView().byId("idBICIStreetInputText");	
            context._oBIOIPreviewStreetInputText = context.getView().byId("idBIOIPreviewStreetInputText");			
            context._oBIOIPreviewStreetInputText.setValue(context.oBIOIStreetInputText.getValue());
			
            context.oBIOIMobilePhoneInputText = context.getView().byId("idBIOIMobilephoneInputText");	
            context._oBIOIPreviewMobilePhoneInputText = context.getView().byId("idBIOIPreviewMobilephoneInputText");			
            context._oBIOIPreviewMobilePhoneInputText.setValue(context.oBIOIMobilePhoneInputText.getValue());
			
//            context.oBIOIBuildingNoInputText = context.getView().byId("idBIOIBuildingNoInputText");	
//            context._oBIOIPreviewBuildingNoInputText = context.getView().byId("idBIOIPreviewBuildingNoInputText");			
//            context._oBIOIPreviewBuildingNoInputText.setValue(context.oBIOIBuildingNoInputText.getValue());
			
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

//            context._oBIOIPreApprovalFileUploader = context.getView().byId("idBIOIPreApprovalFileUploader");
//			context._oBIOIPReviewPreApprovalFileUploader = context.getView().byId("idBIOIPreviewPreApprovalFileUploader");
//            context._oBIOIPReviewPreApprovalFileUploader.setValue(context._oBIOIPreApprovalFileUploader.getValue());
            
            //CI Start
            context.oBICIFirstNameInputText = context.getView().byId("idBICIFirstNameInputText");	
            context._oBICIPreviewFirstNameInputText = context.getView().byId("idBICIPreviewFirstNameInputText");			
            context._oBICIPreviewFirstNameInputText.setValue(context.oBICIFirstNameInputText.getValue());
            
            context._oBICINationalityComboBox = context.getView().byId("idCINationalityComboBox");
			context._oBICIPreviewNationalityCombobox = context.getView().byId("idBICIPreviewNationalityInputText");			
			var oPreviewNationalityComboboxItemTemplate = context._oBICINationalityComboBox.getSelectedItem();			
            context._oBICIPreviewNationalityCombobox.setSelectedItem(oPreviewNationalityComboboxItemTemplate);

            context.oBICILastNameInputText = context.getView().byId("idBICILastNameInputText");	
            context._oBICIPreviewLastNameInputText = context.getView().byId("idBICIPreviewLastNameInputText");			
            context._oBICIPreviewLastNameInputText.setValue(context.oBICILastNameInputText.getValue());
            
            context.oBICICityNameInputText = context.getView().byId("idBICICityInputText");	
            context._oBICIPreviewCityNameInputText = context.getView().byId("idBICIPreviewCityInputText");			
            context._oBICIPreviewCityNameInputText.setValue(context.oBICICityNameInputText.getValue());
            
            context._oBICIGenderComboBox = context.getView().byId("idBICIGenderComboBox");
			context._oBICIPreviewGenderCombobox = context.getView().byId("idBICIPreviewGenderComboBox");			
			var oPreviewGenderComboboxItemTemplate = context._oBICIGenderComboBox.getSelectedItem();			
            context._oBICIPreviewGenderCombobox.setSelectedItem(oPreviewGenderComboboxItemTemplate);
            
            context.oBICIStreetInputText = context.getView().byId("idBICIStreetInputText");	
            context._oBICIPreviewStreetInputText = context.getView().byId("idBICIPreviewStreetInputText");			
            context._oBICIPreviewStreetInputText.setValue(context.oBICIStreetInputText.getValue());
			
              
            context._oBICICountryComboBox = context.getView().byId("idCICountryComboBox");
			context._oBICIPreviewCountryCombobox = context.getView().byId("idBICIPreviewCountryComboBox");			
			var oPreviewCountryComboboxItemTemplate = context._oBICICountryComboBox.getSelectedItem();			
            context._oBICIPreviewCountryCombobox.setSelectedItem(oPreviewCountryComboboxItemTemplate);
            
            context.oBICIPOBoxInputText = context.getView().byId("idBICIPOBoxInputText");	
            context._oBICIPreviewPOBoxInputText = context.getView().byId("idBICIPreviewPOBoxInputText");			
            context._oBICIPreviewPOBoxInputText.setValue(context.oBICIPOBoxInputText.getValue());
			
            context.oBICITelephoneCCInputText = context.getView().byId("idBICITelephoneCountryCodeInputText");	
            context._oBICIPreviewTelephoneCCInputText = context.getView().byId("idBICIPreviewTelephoneCountryCodeInputText");			
            context._oBICIPreviewTelephoneCCInputText.setValue(context.oBICITelephoneCCInputText.getValue());
			
//            context.oBICITelephoneInputText = context.getView().byId("idBICITelephoneInputText");	
//            context._oBICIPreviewTelephoneInputText = context.getView().byId("idBICIPreviewTelephoneInputText");			
//            context._oBICIPreviewTelephoneInputText.setValue(context.oBICITelephoneInputText.getValue());
			
            context.oBICITelephoneInputText = context.getView().byId("idBICITelephoneInputText");	
            context._oBICIPreviewTelephoneInputText = context.getView().byId("idBICIPreviewTelephoneInputText");			
            context._oBICIPreviewTelephoneInputText.setValue(context.oBICITelephoneInputText.getValue());
			
//            context.oBICITelephoneExtInputText = context.getView().byId("idBICIExtensionInputText");	
//            context._oBICIPreviewTelephoneExtInputText = context.getView().byId("idBICIPreviewExtensionInputText");			
//            context._oBICIPreviewTelephoneExtInputText.setValue(context.oBICITelephoneExtInputText.getValue());
			
            context.oBICIPostalCodeInputText = context.getView().byId("idBICIPostalCodeInputText");	
            context._oBICIPreviewPostalCodeInputText = context.getView().byId("idBICIPreviewPostalCodeInputText");			
            context._oBICIPreviewPostalCodeInputText.setValue(context.oBICIPostalCodeInputText.getValue());
			
            context.oBICIMobileCCInputText = context.getView().byId("idBICIMobileCountryCodeInputText");	
            context._oBICIPreviewMobileCCInputText = context.getView().byId("idBICIPreviewMobileCountryCodeInputText");			
            context._oBICIPreviewMobileCCInputText.setValue(context.oBICIMobileCCInputText.getValue());
            
            context.oBICIMobileInputText = context.getView().byId("idBICIMobilePhoneInputText");	
            context._oBICIPreviewMobileInputText = context.getView().byId("idBICIPreviewMobileInputText");			
            context._oBICIPreviewMobileInputText.setValue(context.oBICIMobileInputText.getValue());
            
            
            context._oBICICommMethodComboBox = context.getView().byId("idBICICommMethodComboBox");
			context._oBICIPreviewCommMethodCombobox = context.getView().byId("idBICIPreviewCommMethodInputText");			
			var oBICIPreviewCommMethodComboboxItemTemplate = context._oBICICommMethodComboBox.getSelectedItem();			
            context._oBICIPreviewCommMethodCombobox.setSelectedItem(oBICIPreviewCommMethodComboboxItemTemplate);
            
            context.oBICIFaxCCInputText = context.getView().byId("idBICIFaxCountryCodeInputText");	
            context._oBICIPreviewFaxCCInputText = context.getView().byId("idBICIPreviewFaxCountryCodeInputText");			
            context._oBICIPreviewFaxCCInputText.setValue(context.oBICIFaxCCInputText.getValue());
           
            
            context.oBICIFaxInputText = context.getView().byId("idBICIFaxInputText");	
            context._oBICIPreviewFaxInputText = context.getView().byId("idBICIPreviewFaxInputText");			
            context._oBICIPreviewFaxInputText.setValue(context.oBICIFaxInputText.getValue());
            
            context._oBICIRoleComboBox = context.getView().byId("idBICIRoleInputText");
			context._oBICIPreviewRoleCombobox = context.getView().byId("idBICIPreviewRoleInputText");			
			var oBICIPreviewCommMethodComboboxItemTemplate = context._oBICIRoleComboBox.getSelectedItem();			
            context._oBICIPreviewRoleCombobox.setSelectedItem(oBICIPreviewCommMethodComboboxItemTemplate);
            
            context.oBICIEmailInputText = context.getView().byId("idBICIEmailInputText");	
            context._oBICIPreviewEmailInputText = context.getView().byId("idBICIPreviewEmailInputText");			
            context._oBICIPreviewEmailInputText.setValue(context.oBICIEmailInputText.getValue());
            
            context._oBICIPassportCopyFileUploader = context.getView().byId("idBICIPassportCopyFileUploader");
			context._oBICIPreviewPassportCopyFileUploader = context.getView().byId("idBICIPreviewPAssportCopyFileUploader");
            context._oBICIPreviewPassportCopyFileUploader.setValue(context._oBICIPassportCopyFileUploader.getValue());
           
            context._oBICIPowerOfAttorneyFileUploader = context.getView().byId("idBICIPowerofAttorneyFileUploader");
			context._oBICIPreviewPowerOfAttorneyFileUploader = context.getView().byId("idBICIPreviewPowerofAttorneyFileUploader");
            context._oBICIPreviewPowerOfAttorneyFileUploader.setValue(context._oBICIPowerOfAttorneyFileUploader.getValue());
           

            //CI End
            
            
     // License Info  -  Start
            
//            console.log("Reached");
            /*context._oLISectionComboBox = context.getView().byId("idLISectionComboBox");
			context._oLIPreviewSectionComboBox = context.getView().byId("idLIPreviewSectionComboBox");			
			var oLIPreviewSectionComboBoxItemTemplate = context._oLISectionComboBox.getSelectedItem();			
            context._oLIPreviewSectionComboBox.setSelectedItem(oLIPreviewSectionComboBoxItemTemplate);
            
            context._oLIDivisionComboBox = context.getView().byId("idLIDivisionComboBox");
			context._oLIPreviewDivisionComboBox = context.getView().byId("idLIPreviewDivisionComboBox");			
			var oLIPreviewDivisionComboBoxItemTemplate = context._oLIDivisionComboBox.getSelectedItem();			
            context._oLIPreviewDivisionComboBox.setSelectedItem(oLIPreviewDivisionComboBoxItemTemplate);
            
            context._oLIGroupComboBox = context.getView().byId("idLIGroupComboBox");
			context._oLIPreviewGroupComboBox = context.getView().byId("idLIPreviewGroupComboBox");			
			var oLIPreviewGroupComboBoxItemTemplate = context._oLIGroupComboBox.getSelectedItem();			
            context._oLIPreviewGroupComboBox.setSelectedItem(oLIPreviewGroupComboBoxItemTemplate);
            
            context._oLIClassComboBox = context.getView().byId("idLIClassComboBox");
			context._oLIPreviewClassComboBox = context.getView().byId("idLIPreviewClassComboBox");			
			var oLIPreviewClassComboBoxItemTemplate = context._oLIClassComboBox.getSelectedItem();			
            context._oLIPreviewClassComboBox.setSelectedItem(oLIPreviewClassComboBoxItemTemplate);
            
            context._oLILicenseActivityComboBox = context.getView().byId("idLILicenseActivityComboBox");
			context._oLIPreviewLicenseActivityComboBox = context.getView().byId("idLIPreviewLicenseActivityComboBox");			
			var oLIPreviewLicenseActivityComboBoxItemTemplate = context._oLILicenseActivityComboBox.getSelectedItem();			
            context._oLIPreviewLicenseActivityComboBox.setSelectedItem(oLIPreviewLicenseActivityComboBoxItemTemplate);*/
            
            
//            //Activity Description still to be Coded
//            context.oBICIEmailInputText = context.getView().byId("idBICIEmailInputText");	
//            context._oBICIPreviewEmailInputText = context.getView().byId("idBICIPreviewEmailInputText");			
//            context._oBICIPreviewEmailInputText.setValue(context.oBICIEmailInputText.getValue());
            
            //ID for Product is missing in the respective Preview tab
            
            //Quantity has to be changed as InputText in Preview --->> Same like License Info
            
            
            /*context._oLIUnitOfMeasurementComboBox = context.getView().byId("idLIUnitOfMeasurementComboBox");
			context._oLIPreviewUnitOfMeasurementComboBox = context.getView().byId("idLIPreviewUnitOfMeasurementComboBox");			
			var oLIPreviewUnitOfMeasurementComboBoxItemTemplate = context._oLIUnitOfMeasurementComboBox.getSelectedItem();			
            context._oLIPreviewUnitOfMeasurementComboBox.setSelectedItem(oLIPreviewUnitOfMeasurementComboBoxItemTemplate);*/
	
    // License Info  -  End
            
            
//     Start of Shareholder Details
            
            
            
//     End of   Shareholder Details       

		}
};