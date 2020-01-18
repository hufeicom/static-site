function hashCode(value) {
    // Hashes a string
    let hashStr = function (string:string) {
        let hash = 0, i;
        for (i = 0; i < string.length; i++) {
            hash = (((hash << 5) - hash) + string.charCodeAt(i)) & 0xFFFFFFFF;
        }

        return hash;
    };
    return typeof value === 'string' ?  hashStr(value)+hashStr('string') : 0;
}


/* code 定义 http://wiki.okjiaoyu.cn/pages/viewpage.action?pageId=19465631 */
const platform = {
    'teacher': '01',
    'student-pad': '02',
    'teacher-pad': '03',
    'school': '04',
    'train-system': '05',
    'admin': '06',
    'parent-app': '07',
    'student': '08',
    'oms': '21',
    'resourceCenter': '40'
};

const getUUID = () => {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return uuid;
};


export const getRequestId = (key) => {
    return platform[key] ? platform[key] + String(hashCode(getUUID()) & 0x7fffffff).padStart(10, '0') : '';
}


