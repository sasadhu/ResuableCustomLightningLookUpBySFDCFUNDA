/*
Name: LightningLookUpBySFDCFUNDAController
Description: Create this controller for reusable custom lightning Lookup component
Version | Author-Email       | Date        | Comment
========|====================|=============|=====================
1.0     | Sayanton Sadhu     | 17.04.2018  | initial version
*/


({

		onValueChange : function(component, event, helper) {
				var target = event.target;
    		console.log('target.value :: '+target.value);
				var objectName = component.get("v.objectAPIName");
				var inputBox=document.getElementById("inputMain"+objectName);

				//Clear the timer
				clearTimeout(window.timer);
				//Setting the timer to 0.5 second / 500 ms. After the user stops typing, 0.5 seconds later the below server call will be made
         window.timer = setTimeout($A.getCallback(function(){
             // if the input text box is blank, template search list is given null value
             if(target.value==''){
                console.log('inside query empty string');
            	  component.set('v.templateSearchList', null);
								component.set('v.queryString',null);
             }else{
                 var action = component.get('c.getObjectNameList');
                  action.setParams({
                          "typedString" : target.value,
                          "objectApi" : component.get("v.objectAPIName"),
                          "num" : component.get("v.listSize")
                  });
                  action.setCallback(this,function(response){
                    var state = response.getState();
                    if(state =='SUCCESS'){

                      // Result contains the list of template names along with its IDs
                      var result = response.getReturnValue();
                      console.log('Success and the template list are-->'+JSON.stringify(result, null, 4));
                      if(result != null){
                         // set the list of templates retrieved from server as a drop down list below the inputText box in the component
                         if(result.length>0){
                          component.set("v.NoResultBooleanValue",false);
                         }else{
                           console.log('Inside another lse of null ');
                            component.set("v.NoResultBooleanValue",true);
                         }
                        var tempList = document.getElementById("listShow"+objectName);
                        $A.util.removeClass(tempList, 'slds-hide');

                       component.set('v.templateSearchList', result);
                      }else{
                          // If there is no result, show a message saying no result found
											}
                    }
                  });
                  $A.enqueueAction(action);
           }

         }),500);
		},

	 //show spinner
	 showSpinner : function (component) {
        component.set("v.spinnerLoad","true");
   },

   //Hide spinner
   hideSpinner : function (component) {
      component.set("v.spinnerLoad","false");
   },

	 //when user will click on the value in a the record list
	 selectedTemplate : function(component, event, helper){
        var target =event.target || event.srcElement;
      	console.log('clicked on slelect template -->');
				var recordsId = target.dataset.id;
				var objectName = component.get("v.objectAPIName");

        var recordsName = target.dataset.name;
        console.log('recordsName-->'+recordsName);
				console.log('recordsId-->'+recordsId);


       //Populate the textinput field with the complete name of the Objects Record template since it is selected by the user.
			 component.set("v.valueSelectedId",recordsId);
			 component.set("v.valueSelectedName",recordsName);

			 var recordIdForEvent = component.get("v.valueSelectedId");

			 // call the event
			 var compEvent = component.getEvent("selectRecordIdEvent");
			 console.log('compEvent value :: '+compEvent);
			 // set the Selected sObject Record to the event attribute.
			 compEvent.setParams({"recordIdByEvent" : recordsId, "objectAPINameEvent" : objectName });
			 // fire the event
			 compEvent.fire();


       //hide input textbox after clicking on the record from the list
       var tempBoxx = document.getElementById("smallDiv"+objectName);
			 console.log('dom tempBoxx :: '+tempBoxx);
			 $A.util.removeClass(tempBoxx, 'slds-show');
       $A.util.addClass(tempBoxx, 'slds-hide');

			 //show lookup pill with selected value after clicking on the record from the list
			 var pill = document.getElementById("lookuppill"+objectName);
			 console.log('dom pill :: '+pill);
			 $A.util.removeClass(pill, 'slds-hide');
       $A.util.addClass(pill, 'slds-show');


       //Hide the iterating list of template names
       var tempList = document.getElementById("listShow"+objectName);
       console.log('Checking tempList :: '+tempList);
       $A.util.removeClass(tempList, 'slds-show');
       $A.util.addClass(tempList, 'slds-hide');
			 component.set('v.templateSearchList', null);
			 component.set("v.valueSelectedId",null);

   },

	 //when user will click on the cross button in the looup pill
	 removePill : function(component, event, helper){

			var objectName = component.get("v.objectAPIName");

			//hide lookup pill with selected value after clicking on the cross button in the looup pill
			var pill = document.getElementById("lookuppill"+objectName);
			console.log('dom pill :: '+pill);
			$A.util.removeClass(pill, 'slds-show');
			$A.util.addClass(pill, 'slds-hide');

		  //show input textbox after clicking on the cross button in the looup pill
			var tempBoxx = document.getElementById("smallDiv"+objectName);
			console.log('dom tempBoxx :: '+tempBoxx);
			$A.util.removeClass(tempBoxx, 'slds-hide');
			$A.util.addClass(tempBoxx, 'slds-show');

			component.set("v.queryString",null);
      component.set("v.templateSearchList",null);
			component.set("v.valueSelectedId",null);
			component.set("v.valueSelectedName",null);
		},

		//when user will hover  on the cross button cross button will be live
		onCrossChange : function(component, event, helper){
			console.log('onCrossChange onCrossChange onCrossChange :: ');

			var objectName = component.get("v.objectAPIName");

			var close1 = document.getElementById("closeButton1"+objectName);
			console.log('dom close1 :: '+close1);
			$A.util.removeClass(close1, 'slds-show');
			$A.util.addClass(close1, 'slds-hide');

			var close2 = document.getElementById("closeButton2"+objectName);
			console.log('dom closeButton2 :: '+close2);
			$A.util.removeClass(close2, 'slds-hide');
			$A.util.addClass(close2, 'slds-show');

		},

		//when user will hover  on the cross button cross button will be live
		onCrossChangeOut  : function(component, event, helper){
				console.log('onCrossChangeOut onCrossChangeOut onCrossChangeOut :: ');

				var objectName = component.get("v.objectAPIName");

				var close2 = document.getElementById("closeButton2"+objectName);
				console.log('dom closeButton2 :: '+close2);
				$A.util.removeClass(close2, 'slds-show');
				$A.util.addClass(close2, 'slds-hide');

				var close1 = document.getElementById("closeButton1"+objectName);
				console.log('dom close1 :: '+close1);
				$A.util.removeClass(close1, 'slds-hide');
				$A.util.addClass(close1, 'slds-show');


		},


})