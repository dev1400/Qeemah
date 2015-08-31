jQuery.sap.declare("com.sagia.common.js.bicivalidateworker");

com.sagia.common.js.bicivalidateworker = {
		
	validateDataBICI : function(othis){
		othis.oValidationLILIStatus = true;
		
		if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( othis.oBICIEmailInputText.getValue() ))){
			othis.oValidationLILIStatus = false;
			
			 
			 
			 
			 othis.oBICIEmailInputText.setValueState("Error");
			 othis.oBICIEmailInputText.setShowValueStateMessage(false);

			if(!othis.oShowAlertDialog.isOpen())
			{
			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIInvalidEmail"));
			othis.oShowAlertDialog.open();
			
			}
		}else if(othis._oBICICountryCombobox.getSelectedKey() === ""){			
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 
			 othis._oBICICountryCombobox.setValueState("Error");
			 othis._oBICICountryCombobox.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICountry"));
				othis.oShowAlertDialog.open();
			 }
				
		 }else if(!(/^\d*$/.test( othis.oBICITelephoneCountryCodeInputText.getValue() ))){	
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICITelephoneCountryCodeInputText.setValueState("Error");
			 othis.oBICITelephoneCountryCodeInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICITelephoneCountryCodeDigitsOnly"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^\d*$/.test( othis.oBICITelephoneInputText.getValue() ))){
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICITelephoneInputText.setValueState("Error");
			 othis.oBICITelephoneInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICITelephoneNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^\d*$/.test( othis.oBICIFaxCountryCodeInputText.getValue() ))){	
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIFaxCountryCodeInputText.setValueState("Error");
			 othis.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFaxCCNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^\d*$/.test( othis.oBICIFaxInputText.getValue() ))){
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIFaxInputText.setValueState("Error");
			 othis.oBICIFaxInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFaxNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^\d*$/.test( othis.oBICIMobileCountryCodeInputText.getValue() ))){	
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIMobileCountryCodeInputText.setValueState("Error");
			 othis.oBICIMobileCountryCodeInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIMobileCountryCodeDigitsOnly"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^\d*$/.test( othis.oBICIMobilePhoneInputText.getValue() ))){
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIMobilePhoneInputText.setValueState("Error");
			 othis.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIMobileNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^[a-zA-Z ]*$/.test( othis.oBICIFirstNameInputText.getValue() ))){
	   		othis.oValidationLILIStatus = false;
	   		
			 
			 
			 othis.oBICIFirstNameInputText.setValueState("Error");
			 othis.oBICIFirstNameInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFirstNameValidation"));
				othis.oShowAlertDialog.open();
			 }
	   	 }else if(!(/^[a-zA-Z ]*$/.test( othis.oBICILastNameInputText.getValue() ))){
	   		othis.oValidationLILIStatus = false;
	   		
			 
			 
			 othis.oBICILastNameInputText.setValueState("Error");
			 othis.oBICILastNameInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICILastNameValidation"));
				othis.oShowAlertDialog.open();
			 }
	   	 } else if (!(othis.oBICIMobilePhoneInputText.getValue().length <= 30 && othis.oBICIMobilePhoneInputText
				.getValue().length >= 5)) {
			othis.oValidationLILIStatus = false;

			othis.oBICIMobilePhoneInputText.setValueState("Error");
			othis.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIMobileNoLength"));
				othis.oShowAlertDialog.open();
			}

		}

		else if (othis.oBICIFirstNameInputText.getValue().length > 40) {
			othis.oValidationLILIStatus = false;

			othis.oBICIFirstNameInputText.setValueState("Error");
			othis.oBICIFirstNameInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIFirstName"));
				othis.oShowAlertDialog.open();
			}
		} else if (othis.oBICILastNameInputText.getValue().length > 40) {
			othis.oValidationLILIStatus = false;

			othis.oBICILastNameInputText.setValueState("Error");
			othis.oBICILastNameInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICILAstName"));
				othis.oShowAlertDialog.open();
			}
		}
		else if(!(/^[a-zA-Z ]*$/.test( othis.oBICICityInputText.getValue() ))){
    		othis.oValidationLILIStatus = false;
    		
   		 
   		 
   		 othis.oBICICityInputText.setValueState("Error");
   		 othis.oBICICityInputText.setShowValueStateMessage(false);

   		 if(!othis.oShowAlertDialog.isOpen())
   		 {
   			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICityValidation"));
   			othis.oShowAlertDialog.open();
   		 }
      }

		else if (othis.oBICICityInputText.getValue().length > 40) {
			othis.oValidationLILIStatus = false;

			othis.oBICICityInputText.setValueState("Error");
			othis.oBICICityInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICICity"));
				othis.oShowAlertDialog.open();
			}
		} else if (othis.oBICIPOBoxInputText.getValue().length > 10) {
			othis.oValidationLILIStatus = false;

			othis.oBICIPOBoxInputText.setValueState("Error");
			othis.oBICIPOBoxInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIPOBox"));
				othis.oShowAlertDialog.open();
			}
		} else if (othis.oBICIPostalCodeInputText.getValue().length > 10) {
			othis.oValidationLILIStatus = false;

			othis.oBICIPostalCodeInputText.setValueState("Error");
			othis.oBICIPostalCodeInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIPostalCode"));
				othis.oShowAlertDialog.open();
			}
		} else if (othis.oBICIStreet.getValue().length > 60) {
			othis.oValidationLILIStatus = false;

			othis.oBICIStreet.setValueState("Error");
			othis.oBICIStreet.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIStreetLength"));
				othis.oShowAlertDialog.open();
			}
		} else if (othis.getView().byId("idBICIPowerofAttorneyFileUploader")
				.getValue().length > 90) {
			othis.oValidationLILIStatus = false;

			othis.getView().byId("idBICIPowerofAttorneyFileUploader")
					.setValueState("Error");
			othis.getView().byId("idBICIPowerofAttorneyFileUploader")
					.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BasicInfoPOAFileNameExceed"));
				othis.oShowAlertDialog.open();
			}
		} else if (othis.getView().byId("idBICIPassportCopyFileUploader")
				.getValue().length > 90) {
			othis.oValidationLILIStatus = false;

			othis.getView().byId("idBICIPassportCopyFileUploader")
					.setValueState("Error");
			othis.getView().byId("idBICIPassportCopyFileUploader")
					.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BasicInfoPassportFileNameExceed"));
				othis.oShowAlertDialog.open();
			}
		}

		else if (!(othis.oBICIMobileCountryCodeInputText.getValue().length <= 5 && othis.oBICIMobileCountryCodeInputText
				.getValue().length >= 2)) {
			othis.oValidationLILIStatus = false;

			othis.oBICIMobileCountryCodeInputText.setValueState("Error");
			othis.oBICIMobileCountryCodeInputText
					.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIMobileCountryCodeLength"));
				othis.oShowAlertDialog.open();
			}

		}

		else if (!(othis.oBICIFaxInputText.getValue().length <= 20 && othis.oBICIFaxInputText
				.getValue().length >= 5)) {
			othis.oValidationLILIStatus = false;

			othis.oBICIFaxInputText.setValueState("Error");
			othis.oBICIFaxInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIFaxNoLength"));
				othis.oShowAlertDialog.open();
			}

		}

		else if (!(othis.oBICIFaxCountryCodeInputText.getValue().length <= 5 && othis.oBICIFaxCountryCodeInputText
				.getValue().length >= 2)) {
			othis.oValidationLILIStatus = false;

			othis.oBICIFaxCountryCodeInputText.setValueState("Error");
			othis.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICIFaxCCNoLength"));
				othis.oShowAlertDialog.open();
			}

		}

		else if (!(othis.oBICITelephoneInputText.getValue().length <= 30 && othis.oBICITelephoneInputText
				.getValue().length >= 5)) {
			othis.oValidationLILIStatus = false;

			othis.oBICITelephoneInputText.setValueState("Error");
			othis.oBICITelephoneInputText.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICITelephoneNoLength"));
				othis.oShowAlertDialog.open();
			}

		}

		else if (!(othis.oBICITelephoneCountryCodeInputText.getValue().length <= 5 && othis.oBICITelephoneCountryCodeInputText
				.getValue().length >= 2)) {
			othis.oValidationLILIStatus = false;

			othis.oBICITelephoneCountryCodeInputText.setValueState("Error");
			othis.oBICITelephoneCountryCodeInputText
					.setShowValueStateMessage(false);

			if (!othis.oShowAlertDialog.isOpen()) {
				othis.oAlertTextView.setText(othis.oModelHelper
						.getText("BICITelephoneCountryCodeLength"));
				othis.oShowAlertDialog.open();
			}

		}
		
		return othis.oValidationLILIStatus;
	},
	validatePresenceBICI : function(othis){
		othis.oValidationLILIStatus = true;
		
		if(othis.oBICIFirstNameInputText.getValue() === ""){		
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIFirstNameInputText.setValueState("Error");
			 othis.oBICIFirstNameInputText.setShowValueStateMessage(false);
			/* othis.oBICILastNameInputText.setValueState("Error");
			 othis.oBICILastNameInputText.setShowValueStateMessage(false);*/

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("CIFNameMand"));
				othis.oShowAlertDialog.open();
			 }
				
	   	 }if(othis.oBICILastNameInputText.getValue() === ""){		
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			/* othis.oBICIFirstNameInputText.setValueState("Error");
			 othis.oBICIFirstNameInputText.setShowValueStateMessage(false);*/
			 
			 othis.oBICILastNameInputText.setValueState("Error");
			 othis.oBICILastNameInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("CILNameMand"));
				othis.oShowAlertDialog.open();
			 }
				
	   	 }else if(othis.oBICIMobilePhoneInputText.getValue() === ""){
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIMobilePhoneInputText.setValueState("Error");
			 othis.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIMobileNoRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	   	 }else if(!(othis.oBICIMobilePhoneInputText.getValue().length <= 30 && othis.oBICIMobilePhoneInputText.getValue().length >= 5)){
			 othis.oValidationLILIStatus = false;
			 
			 
			 
			 othis.oBICIMobilePhoneInputText.setValueState("Error");
			 othis.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIMobileNoLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBICIRoleInputText.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
				 
				 
				 
				 othis.oBICIRoleInputText.setValueState("Error");
				 othis.oBICIRoleInputText.setShowValueStateMessage(false);

				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIRole"));
					othis.oShowAlertDialog.open();
				 }
					
			 }
			else if(othis.oBICICommMethodComboBox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
				 othis.oBICICommMethodComboBox.setValueState("Error");
				 othis.oBICICommMethodComboBox.setShowValueStateMessage(false);

				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICommunicationMethod"));
					othis.oShowAlertDialog.open();
				 }
					
			 }
			else if(othis._oBICICountryCombobox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
				 
				 
				 
				 othis._oBICICountryCombobox.setValueState("Error");
				 othis._oBICICountryCombobox.setShowValueStateMessage(false);

				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICountry"));
					othis.oShowAlertDialog.open();
				 }
					
			 }
			else if(othis.oBICIGenderComboBox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
				 
				 
				 
				 othis.oBICIGenderComboBox.setValueState("Error");
				 othis.oBICIGenderComboBox.setShowValueStateMessage(false);

				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIGender"));
					othis.oShowAlertDialog.open();
				 }
					
		 	 }
			else if(othis._oBICINationalityCombobox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
				 
				 
				 
				 othis._oBICINationalityCombobox.setValueState("Error");
				 othis._oBICINationalityCombobox.setShowValueStateMessage(false);

				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICINationality"));
					othis.oShowAlertDialog.open();
				 }
					
		  	 }
			else if(othis.oBICIEmailInputText.getValue() === ""){			
				 othis.oValidationLILIStatus = false;
				 
				 
				 
				 
				 othis.oBICIEmailInputText.setValueState("Error");
				 othis.oBICIEmailInputText.setShowValueStateMessage(false);

				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIEmailRequired"));
					othis.oShowAlertDialog.open();
				 }
					
		   	 }		
			else if(othis.oBICIFirstNameInputText.getValue().length > 40){
		 		othis.oValidationLILIStatus = false;
		 		
				 
				 
				 othis.oBICIFirstNameInputText.setValueState("Error");
				 othis.oBICIFirstNameInputText.setShowValueStateMessage(false);

		  		 if(!othis.oShowAlertDialog.isOpen())
		  		 {
		  			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFirstName"));
		  			othis.oShowAlertDialog.open();
		  		 }
		    }else if(othis.oBICILastNameInputText.getValue().length > 40){
		    		othis.oValidationLILIStatus = false;
		    		
		   		 
		   		 
		   		 othis.oBICILastNameInputText.setValueState("Error");
		   		 othis.oBICILastNameInputText.setShowValueStateMessage(false);

		   		 if(!othis.oShowAlertDialog.isOpen())
		   		 {
		   			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICILAstName"));
		   			othis.oShowAlertDialog.open();
		   		 }
		     }else if(!(/^[a-zA-Z ]*$/.test( othis.oBICICityInputText.getValue() ))){
		    		othis.oValidationLILIStatus = false;
		    		
		   		 
		   		 
		   		 othis.oBICICityInputText.setValueState("Error");
		   		 othis.oBICICityInputText.setShowValueStateMessage(false);

		   		 if(!othis.oShowAlertDialog.isOpen())
		   		 {
		   			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICityValidation"));
		   			othis.oShowAlertDialog.open();
		   		 }
		      }else if(othis.oBICICityInputText.getValue().length > 40){
		  		othis.oValidationLILIStatus = false;
		  		
				 
				 
				 othis.oBICICityInputText.setValueState("Error");
				 othis.oBICICityInputText.setShowValueStateMessage(false);

		  		 if(!othis.oShowAlertDialog.isOpen())
		  		 {
		  			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICity"));
		  			othis.oShowAlertDialog.open();
		  		 }
		      }else if(othis.oBICIPOBoxInputText.getValue().length > 10){
		    		othis.oValidationLILIStatus = false;
		    		
		   		 
		   		 
		   		 othis.oBICIPOBoxInputText.setValueState("Error");
		   		 othis.oBICIPOBoxInputText.setShowValueStateMessage(false);

		     		 if(!othis.oShowAlertDialog.isOpen())
		     		 {
		     			othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIPOBox"));
		     			othis.oShowAlertDialog.open();
		     		 }
			   }else if(othis.oBICIPostalCodeInputText.getValue().length > 10){
				othis.oValidationLILIStatus = false;
				
				 
				 
				 othis.oBICIPostalCodeInputText.setValueState("Error");
				 othis.oBICIPostalCodeInputText.setShowValueStateMessage(false);
			
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIPostalCode"));
					othis.oShowAlertDialog.open();
				 }
			   }else if(othis.oBICIStreet.getValue().length > 60){
			  		othis.oValidationLILIStatus = false;
			  		
					 
					 
					 othis.oBICIStreet.setValueState("Error");
					 othis.oBICIStreet.setShowValueStateMessage(false);
			
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIStreetLength"));
					othis.oShowAlertDialog.open();
				 }
			   }else if(othis.getView().byId("idBICIPowerofAttorneyFileUploader").getValue().length > 90){
			  		othis.oValidationLILIStatus = false;
			  		
					 
					 
					 othis.getView().byId("idBICIPowerofAttorneyFileUploader").setValueState("Error");
					 othis.getView().byId("idBICIPowerofAttorneyFileUploader").setShowValueStateMessage(false);
			  		
					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BasicInfoPOAFileNameExceed"));
						othis.oShowAlertDialog.open();
					 }
			   }else if(othis.getView().byId("idBICIPassportCopyFileUploader").getValue().length > 90){
			  		othis.oValidationLILIStatus = false;
			  		
					 
					 
					 othis.getView().byId("idBICIPassportCopyFileUploader").setValueState("Error");
					 othis.getView().byId("idBICIPassportCopyFileUploader").setShowValueStateMessage(false);
			  		
					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BasicInfoPassportFileNameExceed"));
						othis.oShowAlertDialog.open();
					 }
			   }else if(othis.oBICICityInputText.getValue() === ""){	
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICICityInputText.setValueState("Error");
					 othis.oBICICityInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICICityRequired"));
						othis.oShowAlertDialog.open();
					 }
						
			   	 }
			   else if(othis.oBICIMobileCountryCodeInputText.getValue() === ""){		
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICIMobileCountryCodeInputText.setValueState("Error");
					 othis.oBICIMobileCountryCodeInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIMobileCountryCodeRequired"));
						othis.oShowAlertDialog.open();
					 }
						
			   	 }else if(!(othis.oBICIMobileCountryCodeInputText.getValue().length <= 5 && othis.oBICIMobileCountryCodeInputText.getValue().length >= 2)){			
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICIMobileCountryCodeInputText.setValueState("Error");
					 othis.oBICIMobileCountryCodeInputText.setShowValueStateMessage(false);

			  		 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIMobileCountryCodeLength"));
						othis.oShowAlertDialog.open();
					 }
						
			  	 }
			   	else if(othis.oBICIFaxInputText.getValue() === ""){		
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICIFaxInputText.setValueState("Error");
					 othis.oBICIFaxInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFaxNoRequired"));
						othis.oShowAlertDialog.open();
					 }
						
			   	 }else if(!(othis.oBICIFaxInputText.getValue().length <= 20 && othis.oBICIFaxInputText.getValue().length >= 5)){
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICIFaxInputText.setValueState("Error");
					 othis.oBICIFaxInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFaxNoLength"));
						othis.oShowAlertDialog.open();
					 }
						
			  	 }
			   	else if(othis.oBICIFaxCountryCodeInputText.getValue() === ""){	
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICIFaxCountryCodeInputText.setValueState("Error");
					 othis.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFaxCountryCodeRequired"));
						othis.oShowAlertDialog.open();
					 }
						
			   	 }else if(!(othis.oBICIFaxCountryCodeInputText.getValue().length <= 5 && othis.oBICIFaxCountryCodeInputText.getValue().length >= 2)){			
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICIFaxCountryCodeInputText.setValueState("Error");
					 othis.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

			  		 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICIFaxCCNoLength"));
						othis.oShowAlertDialog.open();
					 }
						
			  	 }
			   	else if(othis.oBICITelephoneInputText.getValue() === ""){		
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICITelephoneInputText.setValueState("Error");
					 othis.oBICITelephoneInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICITelephoneNoRequired"));
						othis.oShowAlertDialog.open();
					 }
						
			   	 }else if(!(othis.oBICITelephoneInputText.getValue().length <= 30 && othis.oBICITelephoneInputText.getValue().length >= 5)){
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICITelephoneInputText.setValueState("Error");
					 othis.oBICITelephoneInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICITelephoneNoLength"));
						othis.oShowAlertDialog.open();
					 }
						
			  	 }
			   	else if(othis.oBICITelephoneCountryCodeInputText.getValue() === ""){
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICITelephoneCountryCodeInputText.setValueState("Error");
					 othis.oBICITelephoneCountryCodeInputText.setShowValueStateMessage(false);

					 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICITelephoneCountryCodeRequired"));
						othis.oShowAlertDialog.open();
					 }
						
			   	 }else if(!(othis.oBICITelephoneCountryCodeInputText.getValue().length <= 5 && othis.oBICITelephoneCountryCodeInputText.getValue().length >= 2)){			
					 othis.oValidationLILIStatus = false;
					 
					 
					 
					 othis.oBICITelephoneCountryCodeInputText.setValueState("Error");
					 othis.oBICITelephoneCountryCodeInputText.setShowValueStateMessage(false);

			  		 if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BICITelephoneCountryCodeLength"));
						othis.oShowAlertDialog.open();
					 }
						
			  	 }
		
		
		return othis.oValidationLILIStatus;

	},
	saveData : function(othis, oOpenBusyDialog){
		othis.basicInfoFileAttachmentOperations(othis.oBIOIOrganizationName.getValue());
		if(oOpenBusyDialog){
			othis.openBusyDialog();
		}

		if(othis.oContactInfoRecordExists){
			
			
			try{
			var oRequestFinishedDeferred = othis.oModelHelper.saveBICI(
					othis.oRef_id,
					othis.oBICIFirstNameInputText.getValue(),
					othis.oBICILastNameInputText.getValue(),
					othis.oBICICityInputText.getValue(),
					othis.oBICIGenderComboBox.getSelectedKey(),
					othis.oBICIPOBoxInputText.getValue(),
					othis.oBICITelephoneCountryCodeInputText.getValue(),
					othis.oBICITelephoneInputText.getValue(),
					othis.oBICIPostalCodeInputText.getValue(),
					othis.oBICIMobileCountryCodeInputText.getValue(),
					othis.oBICIMobilePhoneInputText.getValue(),
					othis.oBICICommMethodComboBox.getSelectedKey(),
					othis.oBICIFaxCountryCodeInputText.getValue(),
					othis.oBICIFaxInputText.getValue(),
					othis.oBICIRoleInputText.getSelectedKey(),
					othis.oBICIEmailInputText.getValue(),
					othis._oBICICountryCombobox.getSelectedKey(),
					othis._oBICINationalityCombobox.getSelectedKey(),						
					othis.oBICIStreet.getValue()
							);
			

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function() {    	
                
				if(oOpenBusyDialog){
					othis.closeBusyDialog();//
				}
            	
				
			}, othis));	
		    
			}
			catch(err){
				sap.m.MessageToast.show(othis.oModelHelper
    					.getText(err));	
			}
			
		}else{
			
			
			try{
			var oRequestFinishedDeferred = othis.oModelHelper.createAndUpdateBICI(
					othis.oRef_id,
					othis.oBICIFirstNameInputText.getValue(),
					othis.oBICILastNameInputText.getValue(),
					othis.oBICICityInputText.getValue(),
					othis.oBICIGenderComboBox.getSelectedKey(),
					othis.oBICIPOBoxInputText.getValue(),
					othis.oBICITelephoneCountryCodeInputText.getValue(),
					othis.oBICITelephoneInputText.getValue(),
					othis.oBICIPostalCodeInputText.getValue(),
					othis.oBICIMobileCountryCodeInputText.getValue(),
					othis.oBICIMobilePhoneInputText.getValue(),
					othis.oBICICommMethodComboBox.getSelectedKey(),
					othis.oBICIFaxCountryCodeInputText.getValue(),
					othis.oBICIFaxInputText.getValue(),
					othis.oBICIRoleInputText.getSelectedKey(),
					othis.oBICIEmailInputText.getValue(),
					othis._oBICICountryCombobox.getSelectedKey(),
					othis._oBICINationalityCombobox.getSelectedKey(),						
					othis.oBICIStreet.getValue(),
					othis.oBICIPowerofAttorneyFileUploader,
					othis.oBICIPassPortCopyFileUploader
					);	 	
			
				
            jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
            	
            	if(oOpenBusyDialog){
					othis.closeBusyDialog();
				}
            
				
			}, othis));	
			}
			catch(err){
				if(oOpenBusyDialog){
					othis.closeBusyDialog();
				}

			}
			
		}
		sap.m.MessageToast.show(othis.oModelHelper.getText("ContactInfoSaved"), {duration : 1000});
	},	
};