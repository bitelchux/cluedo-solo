<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title>Cluedo en ligne Gratuit</title>
		<link rel="stylesheet" media="screen" href="design.css" />
		<link href='http://fonts.googleapis.com/css?family=Jolly+Lodger' rel='stylesheet' type='text/css'>
		
		<SCRIPT language="Javascript">
			<?php include 'buzz.js' ?>
			var paper = new buzz.sound("sounds/paper.wav");
			function sound_paper() {
				paper.play();
			}
			function restart() {
				var div = document.getElementById('start');
				content = '<img id="logo" src="logo.png"><br/><input id="newgame" class="menu" type="button" value="Nouveau jeu" onClick="selectCharacter();"/><div id="select_characters"><input id="newgame" class="menu" type="button" value="Comment jouer ?" onClick="howTo();"/><input id="newgame" class="menu" type="button" value="Crédits" onClick="credits();"/></div>';
				div.innerHTML = content;
			}
			function selectCharacter() {
				var div = document.getElementById('select_characters');
				content = "<a href='play.php?player=black'><img src='characters/doc_black.jpg'></a>"
				content += "<a href='play.php?player=scarlet'><img src='characters/miss_scarlet.jpg'></a>"
				content += "<a href='play.php?player=canella'><img src='characters/mme_canella.jpg'></a>"
				content += "<a href='play.php?player=mustard'><img src='characters/col_mustard.jpg'></a>"
				content += "<a href='play.php?player=white'><img src='characters/mrs_white.jpg'></a>"
				content += "<a href='play.php?player=brunette'><img src='characters/m_brunette.jpg'></a>"
				content += "<a href='play.php?player=peach'><img src='characters/miss_peach.jpg'></a>"
				content += "<a href='play.php?player=plum'><img src='characters/prof_plum.jpg'></a>"
				content += "<a href='play.php?player=peacock'><img src='characters/mrs_peacock.jpg'></a>"
				content += "<a href='play.php?player=green'><img src='characters/rev_green.jpg'></a>"
				content += "<a href='play.php?player=grey'><img src='characters/lady_grey.jpg'></a>"
				div.innerHTML = content;
				var button = document.getElementById('newgame');
				button.value = "Qui êtes-vous ?";
				sound_paper();
			}
			function howTo() {
				var div = document.getElementById('select_characters');
				content = "<div style='text-align:justify;padding:5%;font-family:arial,verdana,sans-serif;'>Pour commencer, vous devez choisir le personnage avec lequel vous souhaitez jouer. Celui-ci ne pourra pas être la victime, mais pourrait être le meurtrier. À vous de découvrir ce qui s'est passé !<br/>";
				content += "Une boîte de dialogue vous donne ensuite le nom de la victime qui a été retrouvée morte dans le cellier, et voilà que le jeu débute.<br/><br/><hr/>";
				content += "1) Vous vous trouvez dans une des pièces du Manoir, seul ou en compagnie d'un ou plusieurs invités. Cliquez sur les pions en dessous de <b>'Qui est là ?'</b>afin de lire la description d'un personnage, ou la vôtre. Ces portraits peuvent plus tard vous aider à faire le lien entre une personne et un indice.<br/><hr/>";
				content += "2) En dessous de la carte portrait de votre personnage, vous pouvez cliquer sur <b>'Cartes'</b>.<br/>";
				content += "Pour chaque pièce, suspect et arme, il existe une carte. Le meurtrier, le lieu du meurtre et l'arme du meurtre ont été retirés du jeu, avant que les cartes aient été distribuées aux invités.<br/>";
				content += "Quand une carte vous est montrée, ou est présente dans votre main, vous pouvez exclure l'élément qu'elle représente de votre enquête. Les cartes que personne dans le manoir ne peut vous montrer, sont sans aucun doute celles du meurtre.<br/><hr/>";
				content += "3) Vous trouverez également sous votre carte portrait le bouton <b>'Souvenirs'</b>. Cliquez dessus quand vous voulez vous souvenir de ce que vous avez fait, de ce qu'on vous a dit ou montré etc.<br/><hr/>";
				content += "4) Trois colonnes (suspects, pièces, armes) avec des cases à cocher sont là pour vous aider à noter l'avancée de votre investigation, en écartant les personnages, pièces ou armes que des preuves excluent. Dès le début vous pouvez cocher les cases correspondant aux cartes que vous avez, en tant que premières preuves à exclure.<br/><hr/>";
				content += "5) Le véritable jeu commence maintenant : Cliquez sur <b>'Lancer le dé'</b>. Le nombre tiré vous donne un nombre de possibilités de 1 à x (le nombre tiré) de faire différentes actions.<br/>";
				content += "Les actions 'Questionner' et 'Accuser' ne sont disponibles que s'il y a d'autres personnes dans la pièce, et pour les utiliser, déplacez-vous dans une pièce où il y a un ou plusieurs autres invités.<br/><hr/>";
				content += "<h2 style='color:#33FFBD;'>ACTIONS :</h2>";
				content += "<hr/><b>BOUGER</b> | Vous permet de passer d'une pièce à une autre, ou de rester là où vous êtes si vous le souhaitez.<br/><hr/>";
				content += "<b>REGARDER</b> | Vous permet de regarder de plus près une personne ou une pièce, afin de trouver des indices. Cela peut-être utile si vous savez où a eu lieu le meurtre, et que vous cherchez des indices pour trouver le meurtrier ou l'arme.<br/><hr/>";
				content += "<b>QUESTIONNER</b> | Vous permet de demander à quelqu'un les personnes ou armes qu'elle a vu aux alentours de l'heure du meurtre, et où.<br/><hr/>";
				content += "<b>CHANCE</b> | Tire une action au hasard et vous en donne directement le résultat, déplacement, indice, révélation, ou preuve.<br/><hr/>";
				content += "<b>ACCUSER</b> | Vous permet de suggérer un meurtrier, un lieu et une arme du meurtre auprès des invités présent dans la pièce. Ils répondront en fonction des cartes qu'ils ont ou n'ont pas (preuves). Interrogez tout le monde, et découvrez les cartes que personne n'a en main.<br/><hr/>";
				content += "<br/><br/>";
				content += "Et voilà ! Lancer le dé jusqu'à ce que l'enquête soit résolue. Vous avez tout ce qu'il vous faut pour jouer. Maintenant, enquêtez et découvrez qui l'a fait, où et avec quoi ?<br/><input id='newgame' class='menu' type='button' value='Ok' onClick='restart();'/></div>";
				div.innerHTML = content;
			}
			function credits() {
				var div = document.getElementById('select_characters');
				content = "Ceci est un jeu gratuit fait par une fan, M. M. Techau, comme travail d'étudiant autour de javascript.<br/>Les concepts et images de Clue & Cluedo appartiennent à Hasbro.<br/>___________________________________<br/><br/>Le sons viennent de www.freesound.org et ont été réalisés par :<br/>RandomationPictures, rdholder, Robinhood76, Kastenfrosch, paulnorthyorks, keweldog.<br/><br/>Si je vous ai oublié dans la liste, merci de m'écrire à l'adresse candysuicide@hotmail.fr<br/><input id='newgame' class='menu' type='button' value='Ok' onClick='restart();'/>";
				div.innerHTML = content;
			}
		</SCRIPT>
	</head>

	<body>
		<div id="start" class="home" style="background-image:url('tudor_mansion.jpg');background-position:center top;background-repeat:repeat;">
			<img id="logo" src="logo.png"><br/>
			<input id="newgame" class="menu" type="button" value="Nouveau jeu" onClick="selectCharacter();"/>
			<div id="select_characters"><input id="newgame" class="menu" type="button" value="Comment jouer ?" onClick="howTo();"/><input id="newgame" class="menu" type="button" value="Crédits" onClick="credits();"/></div>
		</div>
	</body>
</html>