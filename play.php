<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title>Cluedo en ligne Gratuit</title>
		<link href='http://fonts.googleapis.com/css?family=Jolly+Lodger' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'>
		<style type="text/css">
		<?php include 'design.css' ?>
		</style>
		<script type="text/javascript">
		<?php include 'buzz.js' ?>
		<?php include 'cluedo.js' ?>
		
		// SOUNDS ***************************	
		var game = new buzz.sound("sounds/game.wav");
				
		function sound_game() {
			game.fadeIn();
			game.play();
		}
		var door = new buzz.sound("sounds/door.wav");
				
		function sound_door() {
			door.play();
		}
		var clue = new buzz.sound("sounds/clue.wav");
				
		function sound_clue() {
			clue.play();
		}
		var portrait = new buzz.sound("sounds/portrait.wav");
		function sound_portrait() {
			portrait.play();
		}
		var roll = new buzz.sound("sounds/dice.wav");
		function sound_roll() {
			roll.play();
		}
		var paper = new buzz.sound("sounds/paper.wav");
		function sound_paper() {
			paper.play();
		}
		var bell = new buzz.sound("sounds/bell.wav");
		function sound_bell() {
			bell.play();
		}
		var guilty = new buzz.sound("sounds/guilty.wav");
		function sound_guilty() {
			guilty.play();
		}
		var found = new buzz.sound("sounds/found.wav");
		function sound_found() {
			found.play();
		}
		var ting = new buzz.sound("sounds/ting.wav");
		function sound_ting() {
			ting.play();
		}
		var magic = new buzz.sound("sounds/magic.wav");
		function sound_magic() {
			magic.play();
		}
		var knows = new buzz.sound("sounds/knows.wav");
		function sound_knows() {
			knows.play();
		}
		var tada = new buzz.sound("sounds/tada.wav");
		function sound_tada() {
			tada.play();
		}
		var lose = new buzz.sound("sounds/lose.wav");
		function sound_lose() {
			lose.play();
		}
		// **********************************
		
		function display_pawns(room,div) {
			div.innerHTML = "<h4>Qui est là ?</h4>";
			for(var k=0; k<suspects.length; k++){
				var disposition = suspects[k]["Place"];
				if(disposition == room) {
					div.innerHTML += "<a onClick=\"showCharacter('"+suspects[k]["Name"]+"');\"><img src=\""+suspects[k]["Image"]+"\"/>"+suspects[k]["Name"]+"</a><br/>";
				}
			}
		}
		
		function display_room(player_place) {
			var div = document.getElementById('board_objects');
			if(player_place == "la salle de bal") {
				game_window.style.backgroundImage='url(ballroom_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/ballroom.png"><br/><h4>La Salle de Bal</h4>';
			} else if(player_place == "la salle de billard") {
				game_window.style.backgroundImage='url(billiard_room_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/billiard_room.png"><br/><h4>La Salle de Billard</h4>';
			} else if(player_place == "la véranda") {
				game_window.style.backgroundImage='url(conservatory_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/conservatory.png"><br/><h4>La Véranda</h4>';
			} else if(player_place == "la salle à manger") {
				game_window.style.backgroundImage='url(dining_room_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/dining_room.png"><br/><h4>La Salle à Manger</h4>';
			} else if(player_place == "la fontaine") {
				game_window.style.backgroundImage='url(fountain_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/fountain.png"><br/><h4>La Fontaine</h4>';
			} else if(player_place == "le vestibule") {
				game_window.style.backgroundImage='url(hall_pattern.jpg)';
				board_window.innerHTML = '<img src="rooms/hall.png"><br/><h4>Le Vestibule</h4>';
			} else if(player_place == "la cuisine") {
				game_window.style.backgroundImage='url(kitchen_pattern.png)';
				board_window.innerHTML = '<img src="rooms/kitchen.png"><br/><h4>La Cuisine</h4>';
			} else if(player_place == "la bibliothèque") {
				game_window.style.backgroundImage='url(library_pattern.jpg)';
				board_window.innerHTML = '<img src="rooms/library.png"><br/><h4>La Bibliothèque</h4>';
			} else if(player_place == "le salon") {
				game_window.style.backgroundImage='url(lounge_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/lounge.png"><br/><h4>Le Salon</h4>';
			} else if(player_place == "la roseraie") {
				game_window.style.backgroundImage='url(rose_garden_pattern.jpg)';
				board_window.innerHTML = '<img src="rooms/rose_garden.png"><br/><h4>La Roseraie</h4>';
			} else if(player_place == "le bureau") {
				game_window.style.backgroundImage='url(study_pattern.gif)';
				board_window.innerHTML = '<img src="rooms/study.png"><br/><h4>Le Bureau</h4>';
			} else {
				game_window.style.backgroundImage='url(cellar_pattern.jpg)';
			}
			display_pawns(player_place,div);
		}
		
		function loading() {
			game_window = document.getElementById('game');
			board_window = document.getElementById('board');
			var player_place = player["Place"];
			display_room(player_place);
			
			if(player_place=="default") {
				board_window.innerHTML = "Javascript ne s'est pas exécuté correctement.<br/> Merci de recharger la page.";
			}
			
			draw_cards();

			// Fills the notebook suspect list
			var sList = document.getElementsByClassName('slist');
			  for (var i = 0, length = sList.length; i < length; i++) {
				 var content = sList[i].innerHTML;
				 if(content == crime_victim["Name"]) {
					sList[i].innerHTML = "<del>" + content + "</del>";
				 }
			  }
			 
			div = document.getElementById("profile");
			div.innerHTML = '<img src="' + player["Portrait"] + '"><br/><input type="button" class="action" value="CARTES" onClick="showCards();"/><br/><input type="button" class="action" value="SOUVENIRS" onClick="showHistoric();"/>';
			  
			// Set the plot
			set_plot();
			// Get and fills the plot dialog
			div = document.getElementById("plot");
			div.innerHTML = plot;
			if(player_place=="default") {
				div.innerHTML = "Javascript ne s'est pas exécuté correctement. Merci de recharger la page.";
			}
			div.innerHTML += '<br/><input type="button" class="action" value="Ok" onClick="overlay();" style="width:100%;text-align:center;"/>';
			overlay();
		}
		
		// FLAGS : used to know if an action as already been added to the action menu
		var flag1 = 0;
		var flag2 = 0;
		var flag3 = 0;
		var flag4 = 0;
		var flag5 = 0;
		var flag6 = 0;
	
		// Our function for using the flags
		function flags(number) {
			if(number==1) {
				flag1++;
				return flag1;
				
			} else if(number==2) {
				flag2++;
				return flag2;
				
			} else if(number==3) {
				flag3++;
				return flag3;
				
			} else if(number==4) {
				flag4++;
				return flag4;
				
			} else if(number==5) {
				flag5++;
				return flag5;
				
			} else if(number==6) {
				flag6++;
				return flag6;
			}
		}
		
		// DISPLAY ACTION BUTTON IN THE MENU
		function draw_actions(number) {
			var action_window = document.getElementById('actionland');
 
			if(number==1) {
				action_window.innerHTML += '<img src="move.png" id="dicemg">&nbsp;<input type="button" class="action" value="Bouger" onClick="move();"/><br/>';
				
			} else if(number==2) {
				action_window.innerHTML += '<img src="ask.png" id="dicemg">&nbsp;<input type="button" class="action" value="Questionner" onClick="ask();"><br/>';
				
			} else if(number==3) {
				action_window.innerHTML += '<img src="look.png" id="dicemg">&nbsp;<input type="button" class="action" value="Regarder" onClick="look();"><br/>';
				
			} else if(number==4) {
				action_window.innerHTML += '<img src="accuse.png" id="dicemg">&nbsp;<input type="button" class="action" value="Accuser" onClick="suggest();"><br/>';
				
			} else if(number==5) {
				action_window.innerHTML += '<img src="luck.png" id="dicemg">&nbsp;<input type="button" class="action" value="Chance" onClick="luck();"><br/>';
				
			} else if(number==6) {
				action_window.innerHTML += '<img src="move.png" id="dicemg">&nbsp;<input type="button" class="action" value="Bouger" onClick="move();"><br/>';
			}
			action_window.scrollIntoView();
		}
		
		function checkRoom() {
			var hasguest = false;
			for(var k=0; k<suspects.length; k++) {
				if(suspects[k]["Name"] !== player["Name"]) {
					if(suspects[k]["Place"] == player["Place"]) {
						hasguest = true;
						return hasguest;
					}
				}
			}
			return hasguest;
		}
		
		// ROLL DICE ************************
		function rolldice() {
					dice_window = document.getElementById('diceland');
					action_window = document.getElementById('actionland');
					action_window.innerHTML = " ";
					dice_window.innerHTML = '<img src="dicerolling.gif">';
					sound_roll();
					
					// This launches after the rolling dice animation
					var interval = window.setInterval(function(){
					
						// We draw a random number
						var number = Math.floor((Math.random()*5)+1);
						//var action = Math.floor((Math.random()*5)+1);
						
						if(number == 1) {
							dice_window.innerHTML = '<img src="one.png" width="50">';
							var action;
							var hasguest = checkRoom();
							if(hasguest){
								action = Math.floor((Math.random()*5)+1);
							} else {
								do {
									action = Math.floor((Math.random()*5)+1);
								} while((action == 2)||(action == 4));
							}
							var count = flags(action);
							if(count < 2) {
								draw_actions(action);
							}
						} else if(number == 2) {
							dice_window.innerHTML = '<img src="two.png" width="50">';
							var hasguest = checkRoom();
							for(var k=1;k<3;k++) {
								var action;
								if(hasguest){
									action = Math.floor((Math.random()*5)+1);
								} else {
									do {
										action = Math.floor((Math.random()*5)+1);
									} while((action == 2)||(action == 4));
								}
								var count = flags(action);
								if(count < 2) {
									draw_actions(action);
								}
							}
						} else if(number == 3) {
							dice_window.innerHTML = '<img src="three.png" width="50">';
							var hasguest = checkRoom();
							for(var k=1;k<4;k++) {
								var action;
								if(hasguest){
									action = Math.floor((Math.random()*5)+1);
								} else {
									do {
										action = Math.floor((Math.random()*5)+1);
									} while((action == 2)||(action == 4));
								}
								var count = flags(action);
								if(count < 2) {
									draw_actions(action);
								}
							}
							
						} else if(number == 4) {
							dice_window.innerHTML = '<img src="four.png" width="50">';
							var hasguest = checkRoom();
							for(var k=1;k<5;k++) {
								var action;
								if(hasguest){
									action = Math.floor((Math.random()*5)+1);
								} else {
									do {
										action = Math.floor((Math.random()*5)+1);
									} while((action == 2)||(action == 4));
								}
								var count = flags(action);
								if(count < 2) {
									draw_actions(action);
								}
							}
							
						} else if(number == 5) {
							dice_window.innerHTML = '<img src="five.png" width="50">';
							var hasguest = checkRoom();
							for(var k=1;k<6;k++) {
								var action;
								if(hasguest){
									action = Math.floor((Math.random()*5)+1);
								} else {
									do {
										action = Math.floor((Math.random()*5)+1);
									} while((action == 2)||(action == 4));
								}
								var count = flags(action);
								if(count < 2) {
									draw_actions(action);
								}
							}
							
						} else if(number == 6) {
							dice_window.innerHTML = '<img src="six.png" width="50">';
							var hasguest = checkRoom();
							for(var k=1;k<7;k++) {
								var action;
								if(hasguest){
									action = Math.floor((Math.random()*5)+1);
								} else {
									do {
										action = Math.floor((Math.random()*5)+1);
									} while((action == 2)||(action == 4));
								}
								var count = flags(action);
								if(count < 2) {
									draw_actions(action);
								}
							}
						}
						window.clearInterval(interval);
						
						// We put flags back to normal
						flag1 = 0;
						flag2 = 0;
						flag3 = 0;
						flag4 = 0;
						flag5 = 0;
						flag6 = 0;
						
						var button = document.getElementById('rolldice');
						button.disabled=true;
					},800);
				}
		// **********************************
		</script>
	</head>

	<body onload="loading();" style="background-image:url(case.png);background-repeat:repeat;">
	
		<div id="overlay">
			 <div id="plot">
				  
			 </div>
		</div>
			
		<div class="home">
		
			<img id="logo" src="logo.png"><br/>
			<div id="game" style="background-image:;">
				<div id="board" class="notes">
				</div>
				<div id="board_objects" class="notes">
				</div>
				<div id="character" class="notes">
				</div>
			</div>
			<div id="notebook">
				<div id="profile" class="notes">
				</div>
				<div id="historic">
				</div>
				<div class="notes">
					<h4>SUSPECTS</h4>
					<?php 
						$suspects = array(
							"mustard" => "Colonel Moutarde",
							"black" => "Docteur Lenoir",
							"grey" => "Comtesse Perle",
							"brunette" => "Monsieur Prunelle",
							"peach" => "Mlle Pêche",
							"scarlet" => "Mlle Rose",
							"canella" => "Mme Cannelle",
							"peacock" => "Mme Pervenche",
							"white" => "Mme Leblanc",
							"plum" => "Professeur Violet",
							"green" => "Révérend Olive"
						);
						
						$k = 1;

						foreach($suspects as $key => $value) {
							$message = "<input type='checkbox' name='check-".$k."' id='check-".$k."' /><label for='check-".$k."'></label><span class='slist'>".$value."</span><br/>";
							echo $message;
							$k++;
						}
					?>
				</div>
				<div class="notes">
					<h4>PIÈCES</h4>
					<input type='checkbox' name='check-51' id='check-51' /><label for='check-51'></label><span>Salle de bal</span><br/>
					<input type='checkbox' name='check-12' id='check-12' /><label for='check-12'></label><span>Salle de billard</span><br/>
					<input type='checkbox' name='check-13' id='check-13' /><label for='check-13'></label><span>Véranda</span><br/>
					<input type='checkbox' name='check-14' id='check-14' /><label for='check-14'></label><span>Salle à manger</span><br/>
					<input type='checkbox' name='check-15' id='check-15' /><label for='check-15'></label><span>Fontaine</span><br/>
					<input type='checkbox' name='check-16' id='check-16' /><label for='check-16'></label><span>Vestibule</span><br/>
					<input type='checkbox' name='check-17' id='check-17' /><label for='check-17'></label><span>Cuisine</span><br/>
					<input type='checkbox' name='check-18' id='check-18' /><label for='check-18'></label><span>Bibliothèque</span><br/>
					<input type='checkbox' name='check-19' id='check-19' /><label for='check-19'></label><span>Salon</span><br/>
					<input type='checkbox' name='check-20' id='check-20' /><label for='check-20'></label><span>Roseraie</span><br/>
					<input type='checkbox' name='check-21' id='check-21' /><label for='check-21'></label><span>Bureau</span><br/>
				</div>
				<div class="notes">
					<h4>ARMES</h4>
					<input type='checkbox' name='check-31' id='check-31' /><label for='check-31'></label><span>Hache</span><br/>
					<input type='checkbox' name='check-32' id='check-32' /><label for='check-32'></label><span>Chandelier</span><br/>
					<input type='checkbox' name='check-33' id='check-33' /><label for='check-33'></label><span>Poignard</span><br/>
					<input type='checkbox' name='check-34' id='check-34' /><label for='check-34'></label><span>Tuyau de plomb</span><br/>
					<input type='checkbox' name='check-35' id='check-35' /><label for='check-35'></label><span>Oreiller</span><br/>
					<input type='checkbox' name='check-36' id='check-36' /><label for='check-36'></label><span>Poison</span><br/>
					<input type='checkbox' name='check-37' id='check-37' /><label for='check-37'></label><span>Revolver</span><br/>
					<input type='checkbox' name='check-38' id='check-38' /><label for='check-38'></label><span>Corde</span><br/>
					<input type='checkbox' name='check-39' id='check-39' /><label for='check-39'></label><span>Seringue</span><br/>
					<input type='checkbox' name='check-40' id='check-40' /><label for='check-40'></label><span>Clef anglaise</span><br/>
				</div>
				
				<div class="notes">
					<h4>JOUER</h4>
					<img src="dice.gif" id="dicemg"><input type='button' id='rolldice' class='action' value='Lancer' onClick="rolldice();"/>
					<center><div id="diceland">
						
					</div></center>
				</div>
				
				<div class="notes" id="actionland">
				</div>
				<center><div id="suggestion">
				</div></center>
				<br/>
			</div>

		</div>
	</body>
</html>