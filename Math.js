alert("Hello Welcome to Maths Trick")

var p = prompt("Please enter Your Name")
console.log(p);




function table(){
    var num = document.getElementById("table").value;
    console.log(num);
    for(var i=1;i<=10;i++){
        document.getElementById("p1").innerHTML += num + " * " +  i  + " = " + (num*i)+ '<br>' ;
    }

    document.getElementById("name1").innerHTML = " Thank You " + p + " Visit Again.";

}


function prime(){
    var pri = document.getElementById("prime").value;
    var count = 0;
    console.log(pri);
    for(var i=1;i<=pri;i++){

        if(pri%i===0){
            count++;
        }
    }

    if(count===2){
        document.getElementById("primeAns").innerHTML = "Yes Prime Number";
    }else{
        document.getElementById("primeAns").innerHTML = "Not Prime Number";
    }


    document.getElementById("name1").innerHTML = " Thank You " + p + " Visit Again.";

}

function factor(){
    alert("Now you will get your factors of that given number");
    var fac= document.getElementById("factor").value;

    for(var i=1;i<fac;i++){

        if(fac%i==0){
            document.getElementById("factorAns").innerHTML += i + " " ;
        }
    }

    document.getElementById("name1").innerHTML = " Thank You " + p + " Visit Again.";
    document.getElementById("are").innerHTML= "Are the Factors";
}

function reset(){

}
