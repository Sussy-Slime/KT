let menu = ["rau xào", "thịt luộc", "gà rán"];
localStorage.setItem('menu', menu);

var ques1 = prompt("Xin chào menu có rau xào, thịt luộc, gà rán. Vui lòng bạn nhập chức năng")
var myAns1 = parseInt(ques1);


if (myAns1 = "C"){
    var ques2 = prompt("Mời người dùng nhập món ăn muốn thêm vào menu")
    var myAns2 = parseInt(ques2);
    localStorage.setItem('menu', menu) = localStorage.setItem('menu',myAns2);
}
if (myAns1 = "R"){
    
}