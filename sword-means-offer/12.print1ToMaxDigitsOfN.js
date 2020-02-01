var print1ToMaxDigitsOfN = function (n) {
    if (n <= 0) {
        return
    }
    printWithPrefix('', n)
}

var printWithPrefix = function (prefix, n) {
    if (prefix.length === n) {
        return
    }
    for (var i = 0; i < 10; i++) {
        // Don't print string start with 0
        if (prefix || i !== 0) {
            console.log(prefix + i)
            printWithPrefix(prefix + i, n)
        }
    }
}
