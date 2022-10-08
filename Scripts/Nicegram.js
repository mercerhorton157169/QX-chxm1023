/*********************************************

https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\d{5,10} url echo-response text/json echo-response https://raw.githubusercontents.com/chxm1023/QX/main/Scripts/Nicegram.js

hostname= restore-access.indream.app

*********************************************/
const obj = {
  "data": {
    "premiumAccess": true
  }
};
$done({status:200,headers:{'Content-Type':'application/json'},body:JSON.stringify(obj)});
