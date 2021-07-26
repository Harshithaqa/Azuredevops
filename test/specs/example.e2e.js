
describe('PaySchools Mobile', () => {
    // const Loginpage = require('../pageobjects/login.page.js');
    const LoginPage = require('../pageobjects/login.page.js');
  //  var using = require("jasmine-data-provider");
    //var d=  require("./data.js");
   
      // using(d.DatadrivenLogin, function(data, description) {
       
           it('should allow access with correct creds', () => {
       
            LoginPage.username.setValue("psmtesting01@mailinator.com");
            LoginPage.password.setValue("Test@123");
         //   LoginPage.submit();
       
               Login.cancel.click();    
       
             //  Login.cancel.click();  
               
               
               driver.pause(5000);
       
       
              // Login.menu();   
       
              /* driver.touchAction([
                   { action: 'press',x: 500, y: 1400 },
                   { action: 'moveTo',x: 500, y: 300 },
                   'release'
       
               ])*/
              // Login.logout();
       
            //   driver.saveScreenshot('./screenshots/Loggedin.png');
       
           });
       });
       
   
   
       
       
     