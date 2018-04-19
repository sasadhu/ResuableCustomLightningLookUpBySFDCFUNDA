/* 
Name: LightningLookUpBySFDCFundaControllerTest
Description: Create this class for test lightning Lookup component
Version | Author-Email       | Date        | Comment 
========|====================|=============|===================== 
1.0     | Sayanton Sadhu     | 18.04.2018  | initial version

*/
@isTest
public class LightningLookUpBySFDCFundaControllerTest {
    
    public static testmethod void testgetObjectNameList(){
        String typed='ab';
        String objectName='Account';
        Integer listSize =5;
        LightningLookUpBySFDCFundaController.getObjectNameList(typed,objectName,listSize);
    }

}