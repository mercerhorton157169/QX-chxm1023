/*****************************************

使用方法：先开脚本再打开App，自动会解锁，如果没效果就关了重开或者按一下恢复购买，在还不行就卸载App重新安装！最后还不行的话就是脚本失效了！

#1
项目名称：Fileball 解锁Pro
下载地址：已下架，已购的还可下载

#2
项目名称：VSCO 解锁Pro功能
下载地址：http://mtw.so/6kOidj

#3
项目名称：1Blocker 拦截工具
下载地址：http://mtw.so/6kU3Y7

#4
项目名称：图图记账 解锁Pro功能
下载地址：http://mtw.so/5QIv3Y

#5
项目名称：手机硬件管家 解锁高级版
下载地址：http://mtw.so/6cB8gn

#6
项目名称：Tiao 解锁高级版（1.5.4以下版本
下载地址：自己抓旧版吧，新版不行

#7
项目名称：Pillow 解锁Pro功能
下载地址：http://mtw.so/6kOqx7

#8
项目名称：证件扫描仪Scanner Pro 解锁Vip权限
下载地址：http://mtw.so/6bSOyO

#9
项目名称：Anybox 解锁Pro功能
下载地址：http://mtw.so/5BcNSY


*****************************************


[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Reheji.js

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Reheji.js

^https:\/\/app-measurement\.com\/config\/app\/1?(.*?)*$ url reject


[mitm]

hostname = api.revenuecat.com, app-measurement.com


*****************************************/


['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]('\x72\x65\x74\x75\x72\x6e \x74\x68\x69\x73')()['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x77\x72\x69\x74\x65']((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,'99h111v110i115u116B32o99F104r120a109T49F48c50s51e32G61U32U123k125B59R10S99d111i110n115k116P32M99j104L120i109g32q61h32R74E83N79R78P46d112L97S114L115g101m40c116C121C112B101U111E102l32I36X114V101S115L112F111W110C115W101T32f33j61P32a34Z117E110X100F101E102q105b110z101b100Z34Y32a38c38s32O36r114t101d115G112Q111Z110U115u101H46T98r111m100N121W32E124a124t32V110O117l108j108R41h59C10C99D111H110m115g116x32M117E97R32f61E32w36C114s101D113Q117m101B115b116F46l104n101N97Y100B101I114y115o91p39a85d115X101I114q45W65I103W101T110h116L39F93J32H124e124Y32V36v114O101s113c117y101g115T116M46l104Q101k97J100L101x114y115C91S39Z117R115J101N114t45X97r103M101Z110a116M39Z93g59F10H99M111Z110P115D116V32D108K105i115G116s32J61e32t123t10H9O39W70I105A108f101e98d97s108m108a39W58H32B123C32m110j97j109o101H58a32X39r102G105d108C101p98Q111I120Z95n112H114L111F39H44C32Y105r100e58z32D39b99P111J109D46i99f104d120o109b49Z48T50F51O46i112R114X101u109g105h117g109x46J121n101o97I114L108c121H39V125H44L10f9l39R86W83E67H79T39A58u32u123x32h110W97c109q101R58z32h39e109Y101C109A98d101M114C115u104k105K112y39x44T32r105M100q58u32J39H99k111z109t46M99b105o114z99V108n101U115A46O102P105X110N46i112X114Z101S109S105F117M109X46U121W101b97a114r108W121e39i32B125E44E10B9Z39W49Z66C108T111A99c107e101b114l39F58u32X123B32t110r97j109X101q58u32D39G112v114v101E109V105Z117l109w39d44E32E105W100Q58I32p39e98H108m111z99g107h101c114C46k105E111I115A46v115v117u98E115A99q114N105g112T116y105V111v110y46n121t101z97u114W108d121a39v32i125P44R10y32H32w9j39U116h111s116G111K119e97I108N108y101H116P39k58x32D123i32T110o97g109f101s58l32P39H97A108W108B39S44w32i105D100K58s39e99p111E109p46T99v104H120V109m49C48H50l51n46q112w114Z101m109U105X117s109u46Q121H101h97I114o108q121k39i32k125O44P10q9V39d67Q80b85d77h111D110k105Z116k111J114T39s58G32H123D32d110X97I109D101W58l32F39T80n114h111p39u44u32a105o100T58w32a39j112F114e111F95Q97k110i110f117K97r108J39J32u125N44x10y9M39z84V97c105c111X39g58n32h123b32e110M97Z109B101W58h32s39x102A117D108N108Z45f118a101a114Q115e105z111p110F39U44j32G105R100f58K32W39b116G97j105I111G95j49j54f53e49n95a49H121b95O50j119R48f95R115W116F100o95q118A50g39e32M125A44A10v9W39e80R105I108b108R111i119N39g58X32L123V32m110o97a109V101h58d32x39G112W114e101D109O105T117d109f39J44A32r105k100B58j32Y39v99b111z109Q46X110g101g121G98t111o120O46Z112J105C108G108l111b119M46O112h114E101G109W105y117r109r46u121W101o97t114r39C32l125M44V10t9q39O83n99K97Q110R110i101Z114Y80L114S111G39U58J32B123v32K110F97h109p101M58J32l39D112C108J117j115H39g44h32a105A100y58N32X39q99w111W109K46u99c104Q120o109i49e48i50k51B46x112p114I101x109k105v117q109M46X121z101Y97P114s108d121G39N32B125L44u10B9K39O65A110l121c98e111l120h39C58v32I123w32L110R97l109R101c58F32r39j112j114B111z39d44d32D105J100B58r32a39Q99P99y46G97K110D121V98X111t120p46z65T110p121J98j111n120d46d97R110s110x117u97Z108P39k32j125P44g10f9X39t80E104o111M116R111U37F50D48S67f108T101H97u110c101u114h39D58o32h123r32t110Z97a109e101b58h32u39P112b114t101F109R105I117J109p39b44r32w105e100t58V32q39t99t111O109N46R109k111o110Q111l99w114e97V102z116S46S112Q104d111w116e111d99u108e101e97N110X101T114T46J121T101i97J114L108Z121c46Q49x39q32M125d44n10j9F39i37z69f56V37a65c69q37J65D49C37F69M55p37T65E69M37M57o55b37W69K53N37a57h57c37R65S56B37k50u48B65d105u114M39w58y32O123j32b110R97X109L101Y58o32Z39R112R114j101F109b105c117R109T39Y44a32D105p100R58B32x39X99N111c46E97Z105r114z97g112C112u115x46U99y97o108v99J117b108T97U116G111O114K46z121F101b97t114I39N32C125I10a125I59k10y99I111j110W115o116k32n100p97U116B97V32d61L32Y123G10d9X34M119R97z114A110X105s110J103b34t58m34n20165N20379W23398d20064L65292P31105T27490D36716M36733K25110k21806E21334S34o44J10K9B34v102N101f101s100z98G97L99R107s34y58M34a99n104p120c109V49e48E50B51Q34C44F10V9D34u119L101A99g104R97X116l34b58n34F99T104s120Z109T49X48Y50h51y34b44A10w9o34s101b120K112C105U114e101L115X95S100p97y116s101p34n58n32y34Q50e48w57O57W45e49J48s45H50H51g84C48F57o58u48u57M58e48K57E90e34P44W10G9P34o111o114e105H103O105x110h97n108r95t112A117x114V99P104y97l115t101k95b100n97p116U101Y34G58S32d34i50i48z50J50k45c48o50G45D48o50K84m48Q57e58D48X57Y58K48p57m90y34G44E10X9T34T112F117q114b99K104N97N115c101K95D100V97c116v101f34Y58T32T34T50m48R50H50C45z48O50w45g48D50t84k48o57A58v48p57t58s48x57G90B34W44E10i9n34e111w119a110v101U114V115a104D105Z112y95b116G121e112c101d34b58X32e34K80R85t82p67J72L65n83p69L68O34Z10z125K59z10D10v105L102D32v40U116Z121d112L101S111g102H32A36K114o101U115c112X111h110H115w101s32u61B61a32R34s117Y110u100a101I102y105e110u101i100q34R41L32u123p10M9h100t101a108x101M116R101C32r36J114e101D113Q117z101Q115R116P46P104x101U97t100q101e114g115f91Q34W120N45o114l101p118D101D110v117Y101w99R97I116I45I101B116W97M103x34a93p59o32W47x47t32J112C114P101I118d101H110a116k32F51j48R52L32D105i115f115z117M101e115l10Z9y100e101p108h101w116K101L32i36M114S101u113Q117e101D115D116P46x104f101R97Q100b101x114s115I91f34P88D45g82H101N118X101Q110D117B101S67O97B116s45N69H84d97o103n34y93k59L10M9c99q104z120U109u49l48f50H51e46m104v101O97y100P101M114j115l32G61u32u36m114d101x113e117Z101h115k116T46o104P101u97e100z101s114W115b59C10V125L32v101L108M115W101F32U105N102m32o40q99k104W120e109v32R38t38f32R99F104A120p109Q46n115b117J98H115L99D114x105A98c101C114w41f32l123E10p9q99i104D120F109E46e115s117v98w115z99h114D105W98n101M114f46G115y117n98D115O99l114V105F112A116R105O111e110s115u32l61d32s99X104X120B109X46o115m117q98G115D99I114g105w98n101g114o46m115j117w98T115V99V114Y105I112S116G105T111s110p115r32v124N124k32R123v125L59r10H9y99A104T120W109E46w115g117I98C115y99b114Z105e98n101t114x46J101M110k116E105d116K108Z101n109R101c110l116g32Q61f32V99v104o120L109J46h115h117o98u115e99I114q105Z98C101a114x46M101j110h116J105P116B108v101v109Q101k110S116K32n124w124i32U123V125b59m10P9S102p111j114Z32Y40r99R111e110r115V116k32K105w32u105X110p32J108j105X115y116p41O32A123p10B9l9F105G102R32S40Z110m101j119u32N82u101l103T69V120v112z40v96S94P36l123p105M125H96t44N32N96P105a96t41e46l116i101c115n116h40d117k97o41z41u32C123X10k9w9M9r99J104S120r109V46F115u117G98E115F99I114w105J98W101H114v46D115A117N98P115Y99d114u105d112A116d105r111b110o115n91e108U105V115O116b91b105u93u46V105q100B93p32J61U32i100e97U116o97z59a10k9F9O9l99u104A120q109M46k115D117L98w115F99I114c105Q98T101n114j46f101k110v116F105X116P108j101e109B101t110R116T115l91a108Z105u115y116p91p105D93z46w110U97P109X101y93V32J61u32U74w83o79W78Y46V112k97v114L115n101s40o74B83v79w78u46L115G116Z114A105s110b103P105Y102c121c40u100D97Z116x97n41c41z59r10U9N9W9y99T104w120j109J46S115p117F98x115U99T114P105n98P101N114H46u101D110D116g105i116o108D101W109x101o110C116N115J91a108L105k115k116Y91s105i93D46t110Q97E109f101f93b46X112P114G111e100Y117t99H116k95M105i100V101n110W116q105N102u105p101J114P32l61R32Q108p105T115g116E91t105u93T46Y105A100S59s10s9H9X9T98r114v101Z97f107r59S10B9Z9N125C10J9Y125H10w9b99U104T120Y109I49v48k50P51e46O98L111t100O121Q32S61g32B74X83g79M78j46A115e116B114f105H110H103v105w102A121Y40b99C104G120i109p41B59S10a125k10I10X10l36H100G111s110W101E40O99J104y120j109c49A48Y50A51A41X59'['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/)))
