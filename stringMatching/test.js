const StrMatchHelper = require('./StrMatchHelper');
const Horspool = require('./Horspool');
const BoyerMoore = require('./BoyerMoore');


var horspool = new Horspool();
var boyerMoore = new BoyerMoore();

var helper = new StrMatchHelper();

var str1 = helper.gennerateRandom01Array(200);
var str2 = helper.copyStr(str1);

helper.speedTest(horspool,'1',str1);