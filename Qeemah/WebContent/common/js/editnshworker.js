jQuery.sap.declare("com.sagia.common.js.editnshworker");

com.sagia.common.js.editnshworker = {
		
		editNSHWorker : function(othis, oData){
			othis.CreateNewShareHolderButton = othis.getView().byId("idCreateNewShareHolderButton");
			othis.UpdateNewShareHolderButton = othis.getView().byId("idUpdateNewShareHolderButton");
			othis.CancelNewShareHolderButton = othis.getView().byId("idCancelNewShareHolderButton");
			
			othis.CreateNewShareHolderButton.setVisible(false);
			othis.UpdateNewShareHolderButton.setVisible(true);
			othis.CancelNewShareHolderButton.setVisible(true);
			
			
			var that = this;
			var oRequestFinishedDeferredEditShareHolder = othis.oModelHelper.editSavedShareHolders(othis.oRef_id, oData);

			 jQuery.when(oRequestFinishedDeferredEditShareHolder).then(jQuery.proxy(function(oResponse) {
				    
				    if(oResponse.data.ShldrType === "Person"){
				    	othis.oShareHolderTypeComboBox.setSelectedKey(1);
				    	
					    othis.oShareHolderTypeComboBox.fireSelectionChange();
					    
						othis.oNSHFirstNameInputText.setValue(oResponse.data.EntityFname);
						othis.oNSHCountryComboBox.setSelectedKey(oResponse.data.Country);
						othis.oNSHLastNameInputText.setValue(oResponse.data.EntityLname);
						othis.oNSHCityNameInputText.setValue(oResponse.data.City);
						othis.oNSHGenderComboBox.setSelectedKey(oResponse.data.Gender);
						othis.oNSHPOBoxInputText.setValue(oResponse.data.PoBox);
						othis.oNSHMaritalStatusComboBox.setSelectedKey(oResponse.data.MaritalStatus);
						othis.oNSHPostalCodeInputText.setValue(oResponse.data.PostalCode);
						othis.oNSHAcademicTitleComboBox.setSelectedKey(oResponse.data.Academic);
						othis.oNSHStreetInputText.setValue(oResponse.data.Street);
						//oDOBSplittedString,
						//othis.oNSHDOBDate.getDateValue().toISOString().substring(0,10).replace(/-/g,""),
						othis.oNSHWebsiteInputText.setValue(oResponse.data.Website);
						othis.oNSHTelephoneInputText.setValue(oResponse.data.Telephone);
						othis.oNSHNationalityComboBox.setSelectedKey(oResponse.data.CurrNationalty);
						othis.oNSHMobilePhoneInputText.setValue(oResponse.data.Mobile);
						othis.oNSHPreviousNationalityInputText.setSelectedKey(oResponse.data.PrevNationalty);
						othis.oNSHFaxInputText.setValue(Number(oResponse.data.Fax).toString());
						othis.oNSHCommMethodInputText.setSelectedKey(oResponse.data.CommMtd);
						othis.oNSHEmailInputText.setValue(oResponse.data.Email);
						othis.oNSHPercentageInputText.setValue(oResponse.data.Percentage);
		  				//othis.oNSHDOBDate.setDateValue(oResponse.data.Dob);
		  				
						var year = parseInt(oResponse.data.Dob.substring(0, 4));
						var month = parseInt(oResponse.data.Dob.substring(4, 6));
						var day = parseInt(oResponse.data.Dob.substring(6));
		  				var oDOB = new Date(year, month-1, day);//parseInt(oResponse.data.Dob)
		  				
		  				othis.oNSHDOBDate.setDateValue(oDOB);
		  				
						var oRequestFinishedDeferredReadNSHAttachePassportFilename = othis.oModelHelper.checkIfNSHtAttached(othis.oRef_id, oData, "PASS");

						jQuery.when(oRequestFinishedDeferredReadNSHAttachePassportFilename).then(jQuery.proxy(function(oResponse) {

							if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
								
								
								othis.NSHPassPortAttachmentName.setVisible(true);
								othis.NSHPassPortAttachmentName.setText(oResponse.data.FileName);
								
								}else{
									othis.NSHPassPortAttachmentName.setVisible(false);
								}
							
							/*var oRequestFinishedDeferredReadNSHAttachCommercialRegFilename = othis.oModelHelper.checkIfNSHtAttached(othis.oRef_id, oData, "COMM");

							jQuery.when(oRequestFinishedDeferredReadNSHAttachCommercialRegFilename).then(jQuery.proxy(function(oResponse) {

								if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
									
									othis.NSHCommercialAttachmentName.setVisible(true);
									othis.NSHCommercialAttachmentName.setText(oResponse.data.FileName);
									
									}else{
										othis.NSHCommercialAttachmentName.setVisible(false);
									}*/
								var oRequestFinishedDeferredReadNSHAttachBankStmtFilename = othis.oModelHelper.checkIfNSHtAttached(othis.oRef_id, oData, "BANK");

								jQuery.when(oRequestFinishedDeferredReadNSHAttachBankStmtFilename).then(jQuery.proxy(function(oResponse) {

									if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
										othis.NSHBankStatementAttachmentName.setVisible(true);
										othis.NSHBankStatementAttachmentName.setText(oResponse.data.FileName);
										
										}else{
											othis.NSHBankStatementAttachmentName.setVisible(false);
										}
								/*	var oRequestFinishedDeferredReadNSHAttachBalSheetFilename = othis.oModelHelper.checkIfNSHtAttached(othis.oRef_id, oData, "BAL");

									jQuery.when(oRequestFinishedDeferredReadNSHAttachBalSheetFilename).then(jQuery.proxy(function(oResponse) {

										if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){								
											
											othis.NSHBalanceSheetAttachmentName.setVisible(true);
											othis.NSHBalanceSheetAttachmentName.setText(oResponse.data.FileName);
											
											}else{
												othis.NSHBalanceSheetAttachmentName.setVisible(false);
											}*/
										var oRequestFinishedDeferredReadNSHAttachOthrFilename = othis.oModelHelper.checkIfNSHtAttached(othis.oRef_id, oData, "OTHR");

										jQuery.when(oRequestFinishedDeferredReadNSHAttachOthrFilename).then(jQuery.proxy(function(oResponse) {

											if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){
										
												othis.NSHOtherAttachmentName.setVisible(true);
												othis.NSHOtherAttachmentName.setText(oResponse.data.FileName);
												
												}else{
													othis.NSHOtherAttachmentName.setVisible(false);
												}
											//set AQ answers
											/*for(var j=0; j < othis.oTotalActivityQuestions; j++){
												 var oAQAnswer = sap.ui.getCore().byId("idAQAnswer"+j);
												 oAQAnswer.setSelectedKey("");
											}*/
											
										}, this));//end of reading other attachment name
								//	}, this));//end of reading balance sheet attachment name
								}, this));//end of reading bank statement attachment name	
							//}, this));//end of reading commercial attachment name	
						}, this));//end of reading PASS attachment name 	
						
				    }else{
				    	othis.oShareHolderTypeComboBox.setSelectedKey(2);
				    }
	
			 }, this));	//end of reading share holder details
		}
		
};