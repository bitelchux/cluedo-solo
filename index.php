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
				content = '<img id="logo" src="logo.png"><br/><input id="newgame" class="menu" type="button" value="Nouveau jeu" onClick="selectCharacter();"/><div id="select_characters"><input id="newgame" class="menu" type="button" value="Comment jouer ?" onClick="howTo();"/><input id="newgame" class="menu" type="button" value="Cr�dits" onClick="credits();"/></div>';
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
				button.value = "Qui �tes-vous ?";
				sound_paper();
			}
			function howTo() {
				var div = document.getElementById('select_characters');
				content = "<div style='text-align:justify;padding:5%;font-family:arial,verdana,sans-serif;'>Pour commencer, vous devez choisir le personnage avec lequel vous souhaitez jouer. Celui-ci ne pourra pas �tre la victime, mais pourrait �tre le meurtrier. � vous de d�couvrir ce qui s'est pass� !<br/>";
				content += "Une bo�te de dialogue vous donne ensuite le nom de la victime qui a �t� retrouv�e morte dans le cellier, et voil� que le jeu d�bute.<br/><br/><hr/>";
				content += "1) Vous vous trouvez dans une des pi�ces du Manoir, seul ou en compagnie d'un ou plusieurs invit�s. Cliquez sur les pions en dessous de <b>'Qui est l� ?'</b>afin de lire la description d'un personnage, ou la v�tre. Ces portraits peuvent plus tard vous aider � faire le lien entre une personne et un indice.<br/><hr/>";
				content += "2) En dessous de la carte portrait de votre personnage, vous pouvez cliquer sur <b>'Cartes'</b>.<br/>";
				content += "Pour chaque pi�ce, suspect et arme, il existe une carte. Le meurtrier, le lieu du meurtre et l'arme du meurtre ont �t� retir�s du jeu, avant que les cartes aient �t� distribu�es aux invit�s.<br/>";
				content += "Quand une carte vous est montr�e, ou est pr�sente dans votre main, vous pouvez exclure l'�l�ment qu'elle repr�sente de votre enqu�te. Les cartes que personne dans le manoir ne peut vous montrer, sont sans aucun doute celles du meurtre.<br/><hr/>";
				content += "3) Vous trouverez �galement sous votre carte portrait le bouton <b>'Souvenirs'</b>. Cliquez dessus quand vous voulez vous souvenir de ce que vous avez fait, de ce qu'on vous a dit ou montr� etc.<br/><hr/>";
				content += "4) Trois colonnes (suspects, pi�ces, armes) avec des cases � cocher sont l� pour vous aider � noter l'avanc�e de votre investigation, en �cartant les personnages, pi�ces ou armes que des preuves excluent. D�s le d�but vous pouvez cocher les cases correspondant aux cartes que vous avez, en tant que premi�res preuves � exclure.<br/><hr/>";
				content += "5) Le v�ritable jeu commence maintenant : Cliquez sur <b>'Lancer le d�'</b>. Le nombre tir� vous donne un nombre de possibilit�s de 1 � x (le nombre tir�) de faire diff�rentes actions.<br/>";
				content += "Les actions 'Questionner' et 'Accuser' ne sont disponibles que s'il y a d'autres personnes dans la pi�ce, et pour les utiliser, d�placez-vous dans une pi�ce o� il y a un ou plusieurs autres invit�s.<br/><hr/>";
				content += "<h2 style='color:#33FFBD;'>ACTIONS :</h2>";
				content += "<hr/><b>BOUGER</b> | Vous permet de passer d'une pi�ce � une autre, ou de rester l� o� vous �tes si vous le souhaitez.<br/><hr/>";
				content += "<b>REGARDER</b> | Vous permet de regarder de plus pr�s une personne ou une pi�ce, afin de trouver des indices. Cela peut-�tre utile si vous savez o� a eu lieu le meurtre, et que vous cherchez des indices pour trouver le meurtrier ou l'arme.<br/><hr/>";
				content += "<b>QUESTIONNER</b> | Vous permet de demander � quelqu'un les personnes ou armes qu'elle a vu aux alentours de l'heure du meurtre, et o�.<br/><hr/>";
				content += "<b>CHANCE</b> | Tire une action au hasard et vous en donne directement le r�sultat, d�placement, indice, r�v�lation, ou preuve.<br/><hr/>";
				content += "<b>ACCUSER</b> | Vous permet de sugg�rer un meurtrier, un lieu et une arme du meurtre aupr�s des invit�s pr�sent dans la pi�ce. Ils r�pondront en fonction des cartes qu'ils ont ou n'ont pas (preuves). Interrogez tout le monde, et d�couvrez les cartes que personne n'a en main.<br/><hr/>";
				content += "<br/><br/>";
				content += "Et voil� ! Lancer le d� jusqu'� ce que l'enqu�te soit r�solue. Vous avez tout ce qu'il vous faut pour jouer. Maintenant, enqu�tez et d�couvrez qui l'a fait, o� et avec quoi ?<br/><input id='newgame' class='menu' type='button' value='Ok' onClick='restart();'/></div>";
				div.innerHTML = content;
			}
			function credits() {
				var div = document.getElementById('select_characters');
				content = "Ceci est un jeu gratuit fait par une fan, M. M. Techau, comme travail d'�tudiant autour de javascript.<br/>Les concepts et images de Clue & Cluedo appartiennent � Hasbro.<br/>___________________________________<br/><br/>Le sons viennent de www.freesound.org et ont �t� r�alis�s par :<br/>RandomationPictures, rdholder, Robinhood76, Kastenfrosch, paulnorthyorks, keweldog.<br/><br/>Si je vous ai oubli� dans la liste, merci de m'�crire � l'adresse candysuicide@hotmail.fr<br/><input id='newgame' class='menu' type='button' value='Ok' onClick='restart();'/>";
				div.innerHTML = content;
			}
		</SCRIPT>
	</head>

	<body>
		<div id="start" class="home" style="background-image:url('tudor_mansion.jpg');background-position:center top;background-repeat:repeat;">
			<img id="logo" src="logo.png"><br/>
			<input id="newgame" class="menu" type="button" value="Nouveau jeu" onClick="selectCharacter();"/>
			<div id="select_characters"><input id="newgame" class="menu" type="button" value="Comment jouer ?" onClick="howTo();"/><input id="newgame" class="menu" type="button" value="Cr�dits" onClick="credits();"/></div>
		</div>
	</body>
</html>