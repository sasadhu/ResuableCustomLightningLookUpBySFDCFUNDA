# ResuableCustomLightningLookUpBySFDCFUNDA
This is a Reusable Custom Lightning Look Up Component which you can use for Lookup field. You can use this component several times in your Lightning component.

STEPS TO DO AFTER INSTALLATION

After Install this,when you will call this component in your lightning component, there you can assign some values as a parameter.

Standard Object:
<c:LightningLookUpBySFDCFUNDA objectAPIName="Contact" nameIcon="custom:custom85"/>

Custom Object:
<c:LightningLookUpBySFDCFUNDA objectAPIName="CustomObject__c" nameIcon="custom:custom80"/>

Parameter Pass:

1) objectAPIName = Correct API Name of you standard/custom objectAPIName. (Ex: objectAPIName="Account")
2) listSize = How many records you want after typing some string. (Ex: listSize="10"), but by default 5
3) readOnly = You can disabled that lookup when you want. (Ex: readOnly="true"), but by default false
4) nameIcon = You can set your icon in the List. (Ex: nameIcon="custom:custom84"), but by default custom:custom57 


After calling this component You Need add One Event Handler in Your component:

<aura:handler name="selectRecordIdEvent" event="c:LightningLookUpEventSFDCFunda" action="{!c.handleComponentEventAccount}"/>

And you need to create one Aura Attribute.

<aura:attribute name="accountId" type="String"/>

After adding this you need to go the controller of your component, you can handle the event like below mentioned way:

File :: LightningLookUpBySFDCFundaController.js	

//Code

handleComponentEventAccount : function(component, event, helper) {
	//getting record Id from the event
	var selectedIdGetFromEvent = event.getParam("recordIdByEvent");
	//getting object API Name from the Event
	var objectName = event.getParam("objectAPINameEvent");
	
	//in if condition you need check with exact API Name, which you have provided while creating the component
	if(objectName=='Account'){
		component.set("v.accountId" , selectedIdGetFromEvent); 
	} 
},




For Further Help :
Email : mayukh.sadhu@gmail.com
FB : www.fb.com/sayanton1.sadhu



	
