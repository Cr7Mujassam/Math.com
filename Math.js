alert("Hello Welcome to Maths Trick")




function table(){
    var num = document.getElementById("table").value;
    console.log(num);
    var t1 = num * 1;
    var t2 = num * 2;
    var t3 = num * 3;
    var t4 = num * 4;
    var t5 = num * 5;
    var t6 = num * 6;
    var t7 = num * 7;
    var t8 = num * 8;
    var t9 = num * 9;
    var t10 = num * 10;

    document.getElementById("p1").innerHTML = num + " * 1 = " + t1;
    document.getElementById("p2").innerHTML = num + " * 2 = " + t2;;
    document.getElementById("p3").innerHTML = num + " * 3 = " + t3;;
    document.getElementById("p4").innerHTML = num + " * 4 = " + t4;;
    document.getElementById("p5").innerHTML = num + " * 5 = " + t5;;
    document.getElementById("p6").innerHTML = num + " * 6 = " + t6;;
    document.getElementById("p7").innerHTML = num + " * 7 = " + t7;;
    document.getElementById("p8").innerHTML = num + " * 8 = " + t8;;
    document.getElementById("p9").innerHTML = num + " * 9 = " + t9;;
    document.getElementById("p10").innerHTML = num + " * 10 = " + t10;

}