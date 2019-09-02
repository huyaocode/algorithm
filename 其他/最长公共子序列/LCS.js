function LCS(str1, str2) {
    const len1 = str1.length,
        len2 = str2.length;
    var table = new Array(len1 + 1),
        dirTable = new Array(len1 + 1);
    for (let i = 0; i <= len1; i++) {
        table[i] = [];
        dirTable[i] = [];
        for (let j = 0; j <= len2; j++) {
            table[i][j] = 0;
            dirTable[i][j] = 0;
        }
    }
    var commonStr = [];

    function crateTable() {
        if (len1 == 0 || len2 == 0) {
            return;
        }
        for (var i = 1; i <= len1; i++) {
            for (var j = 1; j <= len2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    table[i][j] = table[i - 1][j - 1] + 1;
                    dirTable[i][j] = 1;
                } else {
                    if (table[i - 1][j] >= table[i][j - 1]) {
                        table[i][j] = table[i - 1][j];
                        dirTable[i][j] = 2;
                    } else {
                        table[i][j] = table[i][j - 1];
                        dirTable[i][j] = 3;
                    }
                }
            }
        }
    }

    function getlengestStr(i, j) {
        if (i == 0 || j == 0)
            return;
        if (dirTable[i][j] == 1) {
            getlengestStr(i - 1, j - 1);
            commonStr.unshift(str1[i - 1])
        }
        else if (dirTable[i][j] == 2)
            getlengestStr(i - 1, j);
        else
            getlengestStr(i, j - 1);
    }
    crateTable();
    getlengestStr(len1, len2);

    return commonStr;
}