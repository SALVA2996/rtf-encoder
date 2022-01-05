function hex_encoder(str, hexStrLength = 2, escapingStr = '', encodeAllAscii = false) {
    str = str.split('').map(char => {
        const charCode = char.charCodeAt(0);
        if (encodeAllAscii || charCode > 127) {
            return escapingStr + charCode.toString(16).padStart(hexStrLength, '0');
        }
        return char;
    }).join("");

    return str;
}

/**
 * Encodes all extended ASCII characters in a given string to Hex Unicode used by RTF display software (E.g. á : \'e1).
 * Converts all ASCII codes beginning from 128.
 * @param {string} originalString - String to be converted.
 * @param {boolean} encodeAscii - If true, all non-extended characters will get encoded to Hex. 
 * @returns {string} A string with all specified characters encoded to Hex.
 */
function asciiStringToRTFHex(originalString, encodeAllAscii = false) {
    return hex_encoder(originalString, 2, '\\\'', encodeAllAscii);
}

exports.asciiStringToRTFHex = asciiStringToRTFHex;

/**
 * Encodes every character in a given string to Hex Unicode escaping (E.g. á : \u00e1).
 * Converts all ASCII codes beginning from 128.
 * @param {string} originalString - String to be converted.
 * @param {boolean} encodeAscii - If true, all non-extended characters will get encoded to Hex. 
 * @returns {string} A string with all specified characters encoded to Hex.
 */
function asciiStringToUnicodeHex(originalString, encodeAllAscii = false) {
    return hex_encoder(originalString, 4, '\\u', encodeAllAscii);
}

exports.asciiStringToUnicodeHex = asciiStringToUnicodeHex;

/**
 * Encodes every character in a given string to Hex without escaping (E.g. á : \u00e1).
 * Converts all ASCII codes beginning from 128.
 * @param {string} originalString - String to be converted.
 * @param {boolean} encodeAscii - If true, all non-extended characters will get encoded to Hex. 
 * @returns {string} A string with all specified characters encoded to Hex.
 */
function asciiStringToHex(originalString, encodeAllAscii = false) {
    return hex_encoder(originalString, 2, '', encodeAllAscii);
}

exports.asciiStringToHex = asciiStringToHex;
