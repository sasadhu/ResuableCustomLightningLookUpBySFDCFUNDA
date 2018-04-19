/* 
Name: LightningLookUpBySFDCFundaController
Description: Create this class for lightning Lookup component
Version | Author-Email       | Date        | Comment
========|====================|=============|=====================
1.0     | Sayanton Sadhu     | 17.04.2018  | initial version

*/
public class LightningLookUpBySFDCFundaController {

   @AuraEnabled
    public static List < sObject > getObjectNameList(String typedString, String objectApi, Integer num) {
        system.debug('ObjectName-->' + objectApi);
        String searchKey = '%'+ typedString + '%';

        List < sObject > returnList = new List < sObject > ();

        // Create a Dynamic SOQL Query For Fetch Record List with LIMIT 5
        String sQuery =  'select id, Name from ' +objectApi + ' where Name LIKE: searchKey order by createdDate DESC limit '+num;
        List < sObject > lstOfRecords = Database.query(sQuery);

        for (sObject obj: lstOfRecords) {
            returnList.add(obj);
        }
        return returnList;
    }

}