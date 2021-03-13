module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        stack.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    for (let i = 0; i < stack.length; i++) {
        if (str.includes(stack[i])) {
            str = str.replace(stack[i], "");
            i = -1;
            console.log(str);
        }
    }

    if (str.length % 2 != 0) {
        return false;
    }

    if (str.length != 0) {
        return false;
    } else {
        return true;
    }
}
