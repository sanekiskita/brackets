module.exports = function check(str, bracketsConfig) {
    console.log(str);
    console.log(bracketsConfig);
    var strco = "";
    for (var i = 0; i <= str.length; i++) {
        for (var i2 = 0; i2 < bracketsConfig.length; i2++) {
            for (var i3 = 0; i3 < 2; i3++) {
                if (str.substr(i, 1) === bracketsConfig[i2][i3]) {
                    strco = strco + str.substr(i, 1);
                }
            }
            if(  str.split(bracketsConfig[i2][0]).join("").length != str.split(bracketsConfig[i2][1]).join("").length )return false
        }


    }


    for (var i = 0; i <= strco.length; i++) {
        for (var i2 = 0; i2 < bracketsConfig.length; i2++) {
            if (bracketsConfig[i2][0] !== undefined)
                res = bracketsConfig[i2][0] + bracketsConfig[i2][1];

            while (strco.includes(res)) {
                strco = strco.split(res).join("");
            }
        }
   }
    if (strco === "")
        return true;
    else return false;

}
