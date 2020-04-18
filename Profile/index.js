function startGame(){
    var q1 = document.getElementById("mygame").q1.value;
    var q2 = document.getElementById("mygame").q2.value;
    var q3 = document.getElementById("mygame").q3.value;
    var q4 = document.getElementById("mygame").q4.value;
    var q5 = document.getElementById("mygame").q5.value;
    var q6 = document.getElementById("mygame").q6.value;
    var q7 = document.getElementById("mygame").q7.value;
    var q8 = document.getElementById("mygame").q8.value;
    var q9 = document.getElementById("mygame").q9.value;
    var q10 = document.getElementById("mygame").q10.value;
    var score = 0;
    
    if (q1 == 4){
        score++;
    }
    if (q2 == 3){
        score++;
    }
    if (q3 == 5){
        score++;
    }
    if (q4 == 6){
        score++;
    }
    if (q5 == 8){
        score++;
    }
    if (q6 == 1){
        score++;
    }
    if (q7 == 11){
        score++;
    }
    if (q8 == 2){
        score++;
    }
    if (q9 == 5){
        score++;
    }
    if (q10 == 4){
        score++;
    }



var response = ["Wow, that's awesome", "It's Fair enough but you can do better", "Not Good enough, you need to study your mathematics more", "This is Bad!"];
    for (var i = 0; i < response.length; i++) { }
        if(score == 8 || score <=10) {
            response [i = 0];
        }
        if( score == 5 || score < 8){
            response [i = 1];
        }
        if(score == 3 || score < 5){
            response [i = 2];
        }
        if(score < 3) {
            response [i = 3];
        } 
    








    
    
    document.getElementById("formsubmit").style.visibility = "visible";
    document.getElementById("myscores").innerHTML = "you scored " +  score + "/10";

   document.getElementById("comments").innerHTML = response[i]; 

}