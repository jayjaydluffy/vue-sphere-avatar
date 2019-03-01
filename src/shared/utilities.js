export const getInitials = str => {
    if (str === undefined || str === null || str.length === 0) {
        return '?';
    }
    
    const matches = str.match(/\b(\w)/g);
    if (!matches) {
        return '?';
    }
    return matches.join('').slice(0,3);
}

export const hashCode = str => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

export const intToRGB = i => {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

export const getColorByString = str => {
    let newStr = str;

    if (str === undefined || str.length === 0) {
        newStr = '?';
    }

    return intToRGB(hashCode(newStr))
}