function validParentheses(parens){
    const result = [];

    parens.split('').forEach((item) => {
        if(item === '(') {
            result.push(item)
        }

        if(item === ')') {
            if (result[result.length - 1] === '(') {
                result.pop();
            } else {
                result.push(item);
            }
        }
    })

    return !result.length;
}

// Best
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}