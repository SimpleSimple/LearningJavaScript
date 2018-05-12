# 《JavaScript权威指南》错误汇总

第159页 7.3章节中
var a1 = [,,,];
var a2 = new Array(3);
原文中0 in a1 =>true写错了，0 in a1 =>false 应该一样是false