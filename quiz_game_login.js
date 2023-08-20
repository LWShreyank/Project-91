function addUser() {
    player1_name = document.getElementById("player_1_name_input").value;
    player2_name = document.getElementById("player_2_name_input").value;

    localStorage.setItem("player1_name_0", player1_name);
    localStorage.setItem("player2_name_0", player2_name);

    window.location = "quiz_game_page.html";
}