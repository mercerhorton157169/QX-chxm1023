[MITM]
hostname = %APPEND% buy.itunes.apple.com


[Script]
pandavip_Picsew_Pro = type=http-response,pattern= ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontents.com/chxm1023/script/main/JB/pandavip.js
RC = type=http-request,pattern= ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontents.com/chxm1023/script/main/JB/Picsew.js,script-update-interval=0
