function send() {
    number_1 = document.getElementById("word").value
    number_2 = document.getElementById("word2").value
    actual_answer = parseInt(number_1) * parseInt(number_2)
    question_word = "<h4> Q." + number_1 + "*" + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word2").value = "";
}
var player_1_name_0 = localStorage.getItem("player1_name_0");
var player_2_name_0 = localStorage.getItem("player2_name_0");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player_1_name_01").innerHTML = player_1_name_0 + " : "
document.getElementById("player_2_name_01").innerHTML = player_2_name_0 + " : "

document.getElementById("player_1_score_0").innerHTML = player1_score ;
document.getElementById("player_2_score_0").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name_0 ;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2_name_0 ;

var question_turn = "player1";
 var answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;

    
if(get_answer == actual_answer)
{
   if(answer_turn == "player1")
   {
      update_player1_score = player1_score +1;
      document.getElementById("player_1_score_0").innerHTML = player1_score;
   }
   else
   {
      update_player2_score = player2_score +1;
      document.getElementById("player_2_score_0").innerHTML = player2_score;
   }
}
if(question_turn == "player1")
{
   question_turn = "player2"
   document.getElementById("player_question").innerHTML = "Question Turn -" + player_2_name_0;
}
else
{
   question_turn = "player1"
   document.getElementById("player_question").innerHTML = "Question Turn -" + player_1_name_0;
}
if(answer_turn == "player2")
{
   answer_turn = "player1"
   document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_1_name_0;
}
else
{
   answer_turn = "player2"
   document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2_name_0;
}
}