// a=[1,2,3];
// delete a[1];
// console.log(1 in a);
// console.log(a.length);
//window.String = 
var CommonHelper = {
    _log: function () {
        return window.console && console.log;
    },
    formatDate: function () {
        throw e;
    },
    formatDateTime: function () {
        throw e;
    },
    idCardValidate: function (val) {
        if (val.length == 15) {
            return isValidityBrithBy15IdCard(val);
        } else if (val.length == 18) {
            var a_idCard = val.split(""); // 得到身份证数组   
            if (isValidityBrithBy18IdCard(val) && isTrueValidateCodeBy18IdCard(a_idCard)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    toJsonArray: function (array) {
        if (!array || array === null) {
            return [];
        }
        else if (array instanceof Array) {
            var json = '[{';
            for (var i in array) {
                //console.log(i);
                var obj = array[i];
                json += "'" + obj.name + "':'" + obj.value + "'";
            }
            json += "}]";
            return JSON.stringify(json);
        }
    }
};
/**  
 * 验证15位数身份证号码中的生日是否是有效生日  
 * @param idCard15 15位书身份证字符串  
 * @return  
 */
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
    if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
/**  
 * 判断身份证号码为18位时最后的验证位是否正确  
 * @param a_idCard 身份证号码数组  
 * @return  
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0; // 声明加权求和变量   
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作   
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i]; // 加权求和   
    }
    valCodePosition = sum % 11; // 得到验证码所位置   
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}

/**  
 * 验证18位数身份证号码中的生日是否是有效生日  
 * @param idCard 18位书身份证字符串  
 * @return  
 */
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题   
    if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}

function $$(id) {
    return typeof id === 'String' ? document.getElementById(id) : '';
}

function getFileSize(byteSize) {
    return byteSize / 1024 + 'KB';
}
var formatDateTime = function(datetime1) {}
String.prototype = {
    isNullOrEmpty: function(val) {
        if (!val || val.length == 0 || val == null) {
            return false;
        }
        return true;
    }
};

function Student(props) {
    this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function() {
    alert('Hello,' + this.name + '!');
}

function init() {
    //window.
}