({
	handleComponentEventAccount : function(component, event, helper) {
	    var selectedIdGetFromEvent = event.getParam("recordIdByEvent");
        var objectName = event.getParam("objectAPINameEvent");
        if(objectName=='Account'){
            component.set("v.accountId" , selectedIdGetFromEvent); 
        }
  	  
	},
    
    handleComponentEventContact : function(component, event, helper) {
	   var selectedIdGetFromEvent = event.getParam("recordIdByEvent");
       var objectName = event.getParam("objectAPINameEvent");
       if(objectName=='Contact'){
          component.set("v.contactId" , selectedIdGetFromEvent); 
       }
  	    
	},
    
    handleComponentEventLead : function(component, event, helper) {
	   var selectedIdGetFromEvent = event.getParam("recordIdByEvent");
       var objectName = event.getParam("objectAPINameEvent");
       if(objectName=='Lead'){
          component.set("v.leadId" , selectedIdGetFromEvent); 
       }
  	   
	},
})