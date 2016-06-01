
// CRIME ****************************
var crime_suspect;
var crime_place;
var crime_weapon;
var crime_victim;
// **********************************

var historic = "";

// COLONEL MUSTARD
var mustard_relationships = new Array();
var mustard_knowledge = new Array();
var mustard_hasclue = new Array();
var mustard_isclue = new Array();
var mustard_cards = new Array();
mustard_isclue[0] = "un cheveu blanc";
mustard_isclue[1] = "une odeur de fumée";
mustard_isclue[2] = "une goutte de whisky";
mustard_isclue[3] = "du tabac";
mustard_isclue[4] = "une trace de botte";
var mustard = {
	"Name" : "Colonel Moutarde",
	"Description" : "Le colonel est un aventurier au riche passé militaire. Il aimer fumer la pipe, boire du whisky et mange de la viande rouge. Il continue de pratiquer le tir à l'arc et au fusil en allant à la chasse. Il adore défier les gens en duel s'ils le cherchent et n'a pas peur de dire ce qu'il pense.",
	"Image" : "col_mustard.gif",
	"Portrait" : "characters/col_mustard.jpg",
	"Place" : "default",
	"Relationships" : mustard_relationships,
	"Knowledge" : mustard_knowledge,
	"hasClue" : mustard_hasclue,
	"isClue" : mustard_isclue,
	"Cards" : mustard_cards
	};
	
// DOCTOR BLACK
var black_relationships = new Array();
var black_knowledge = new Array();
var black_hasclue = new Array();
var black_isclue = new Array();
var black_cards = new Array();
black_isclue[0] = "un cheveu noir";
black_isclue[1] = "une odeur de peinture";
black_isclue[2] = "de la musique venant d'un gramophone";
black_isclue[3] = "un fil sombre";
black_isclue[4] = "un livre";
var black = {
	"Name" : "Docteur Lenoir",
	"Description" : "Riche anthropologue et propriétaire du Manoir Tudor, il est surnommé Dr. Lenoir en référence à son oncle célèbre, Docteur Hugues Lenoir. Il fait collection de biographies d'espions célèbres et d'art, et aurait paraît-il peint le portrait d'une beauté exotique à plusieurs reprises dans son studio. Il est aussi connu pour son grand amour des livres et de la musique.",
	"Image" : "doc_black.gif",
	"Portrait" : "characters/doc_black.jpg",
	"Place" : "default",
	"Relationships" : black_relationships,
	"Knowledge" : black_knowledge,
	"hasClue" : black_hasclue,
	"isClue" : black_isclue,
	"Cards" : black_cards
	};
	
// MONSIEUR BRUNETTE
var brunette_relationships = new Array();
var brunette_knowledge = new Array();
var brunette_hasclue = new Array();
var brunette_isclue = new Array();
var brunette_cards = new Array();
brunette_isclue[0] = "un cheveu brun";
brunette_isclue[1] = "une odeur de peinture";
brunette_isclue[2] = "une goutte de whisky";
brunette_isclue[3] = "un fil clair";
brunette_isclue[4] = "une note déchirée en flamand";
var brunette = {
	"Name" : "Monsieur Prunelle",
	"Description" : "Marchand d'art belge tout juste arrivé en France, qui dit être un ancien avocat. Il a toujours de la monnaie dans ses poches et aime abuser de la boisson. Des oeuvres qu'il a vendues se sont retrouvées dans un incendie après que leur authenticité ait été questionnée. Connaît-il la différence entre Monet et Manet ? Son gain personnel semble être sa principale préoccupation.",
	"Image" : "m_brunette.gif",
	"Portrait" : "characters/m_brunette.jpg",
	"Place" : "default",
	"Relationships" : brunette_relationships,
	"Knowledge" : brunette_knowledge,
	"hasClue" : brunette_hasclue,
	"isClue" : brunette_isclue,
	"Cards" : brunette_cards
	};
	
// MISS PEACH
var peach_relationships = new Array();
var peach_knowledge = new Array();
var peach_hasclue = new Array();
var peach_isclue = new Array();
var peach_cards = new Array();
peach_isclue[0] = "un cheveu blond";
peach_isclue[1] = "un parfum de fleur";
peach_isclue[2] = "de la musique venant d'un gramophone";
peach_isclue[3] = "un pétale de fleur";
peach_isclue[4] = "un rouge à lèvres";
var peach = {
	"Name" : "Mlle Pêche",
	"Description" : "Cette jeune fille en décrochage de son école de droit, a un charme doux et innocent. Elle porte un écoeurant parfum de fleur et se passionne pour la musique classique. Elle aime porter quelques marguerites dans ses cheveux, mais sa fleur favorite est la belladone. Elle est une invitée du Manoir depuis que sa voiture est accidentellement tombée en panne juste au bas de la propriété.",
	"Image" : "miss_peach.gif",
	"Portrait" : "characters/miss_peach.jpg",
	"Place" : "default",
	"Relationships" : peach_relationships,
	"Knowledge" : peach_knowledge,
	"hasClue" : peach_hasclue,
	"isClue" : peach_isclue,
	"Cards" : peach_cards
	};
	
// MISS SCARLET
var scarlet_relationships = new Array();
var scarlet_knowledge = new Array();
var scarlet_hasclue = new Array();
var scarlet_isclue = new Array();
var scarlet_cards = new Array();
scarlet_isclue[0] = "un cheveu brun";
scarlet_isclue[1] = "un diamant tombé d'un bijou";
scarlet_isclue[2] = "une odeur de fumée";
scarlet_isclue[3] = "une pilule";
scarlet_isclue[4] = "un rouge à lèvres";
var scarlet = {
	"Name" : "Mlle Rose",
	"Description" : "Elle connaît sa beauté et sait en faire étalage. Très jeune déjà, elle attirait l'attention, rendant sa mère folle de jalousie. Depuis, elle a commencé à prendre des pilules pour calmer ses nerfs, et fume à l'occasion. Mlle Rose s'est fait écartée de la grande fortune financière de sa mère, qui fera tout pour ne jamais la partager, poussant Mlle Rose dès son jeune âge à sortir avec de riches célibataires afin d'avoir de l'argent.",
	"Image" : "miss_scarlet.gif",
	"Portrait" : "characters/miss_scarlet.jpg",
	"Place" : "default",
	"Relationships" : scarlet_relationships,
	"Knowledge" : scarlet_knowledge,
	"hasClue" : scarlet_hasclue,
	"isClue" : scarlet_isclue,
	"Cards" : scarlet_cards
	};
	
// MADAM CANELLA
var canella_relationships = new Array();
var canella_knowledge = new Array();
var canella_hasclue = new Array();
var canella_isclue = new Array();
var canella_cards = new Array();
canella_isclue[0] = "un cheveu blond";
canella_isclue[1] = "un diamant tombé d'un bijou";
canella_isclue[2] = "une plume";
canella_isclue[3] = "un peu de sel";
canella_isclue[4] = "une note déchirée en flamand";
var canella = {
	"Name" : "Mme Cannelle",
	"Description" : "C'est une célèbre diseuse de bonne aventure d'origine hongroise, venue en France pour y monter son affaire de paranormal, après son succès en Hongrie. Elle parle français, flamand, espagnol, et hongrois. Une personne curieuse de ses pouvoirs psychiques l'a mystérieusement invitée, et elle venue avec du sel, des plumes, des cristaux et des bougies afin de tenir une séance. Est-ce une vision dangereuse ou autre chose qui lui donne un air aussi inquiétant ?",
	"Image" : "mme_canella.gif",
	"Portrait" : "characters/mme_canella.jpg",
	"Place" : "default",
	"Relationships" : canella_relationships,
	"Knowledge" : canella_knowledge,
	"hasClue" : canella_hasclue,
	"isClue" : canella_isclue,
	"Cards" : canella_cards
	};
	
// MRS. PEACOCK
var peacock_relationships = new Array();
var peacock_knowledge = new Array();
var peacock_hasclue = new Array();
var peacock_isclue = new Array();
var peacock_cards = new Array();
peacock_isclue[0] = "un cheveu brun";
peacock_isclue[1] = "un diamant tombé d'un bijou";
peacock_isclue[2] = "une plume";
peacock_isclue[3] = "un pétale de fleur";
peacock_isclue[4] = "une trace de botte";
var peacock = {
	"Name" : "Mme Pervenche",
	"Description" : "Mme Pervenche est une veuve qui s'habille en bleu, délicatement parfumée de rose. Elle adore le jardinage et les fleurs, et passe souvent des bottes confortables quand elle sort se promener au jardin. L'héritage de son dernier mari décédé est presque totalement parti en fumée parce qu'elle tient à maintenir un mode de vie extravagant. Elle semble correcte et a d'excellentes manières, mais est-ce juste un masque ? Ses quatres maris ont soit disparus ou été retrouvés morts mystérieusement.",
	"Image" : "mrs_peacock.gif",
	"Portrait" : "characters/mrs_peacock.jpg",
	"Place" : "default",
	"Relationships" : peacock_relationships,
	"Knowledge" : peacock_knowledge,
	"hasClue" : peacock_hasclue,
	"isClue" : peacock_isclue,
	"Cards" : peacock_cards
	};
	
// MRS. WHITE
var white_relationships = new Array();
var white_knowledge = new Array();
var white_hasclue = new Array();
var white_isclue = new Array();
var white_cards = new Array();
white_isclue[0] = "un cheveu blanc";
white_isclue[1] = "un fil clair";
white_isclue[2] = "un fil sombre";
white_isclue[3] = "une goutte de whisky";
white_isclue[4] = "un peu de sel";
var white = {
	"Name" : "Mme Leblanc",
	"Description" : "Cette vieille bonne femme est la bonne et aussi la cuisinière du manoir. Elle met toujours trop de sel dans la nourriture, et a une faiblesse secrète pour les bons alcools. En dehors de cela, elle ne possède rien à son nom et prend ses devoirs de domestique très sérieusement. Si quelque chose est déplacé, il vaut mieux qu'elle ne soit pas au courant. Elle clame avoir vu passer beaucoup de guerres, et aime bien espionner au travers des trous de serrure.",
	"Image" : "mrs_white.gif",
	"Portrait" : "characters/mrs_white.jpg",
	"Place" : "default",
	"Relationships" : white_relationships,
	"Knowledge" : white_knowledge,
	"hasClue" : white_hasclue,
	"isClue" : white_isclue,
	"Cards" : white_cards
	};
	
// PROFESSOR PLUM
var plum_relationships = new Array();
var plum_knowledge = new Array();
var plum_hasclue = new Array();
var plum_isclue = new Array();
var plum_cards = new Array();
plum_isclue[0] = "un cheveu brun";
plum_isclue[1] = "un livre";
plum_isclue[2] = "une pilule";
plum_isclue[3] = "du tabac";
plum_isclue[4] = "une croix";
var plum = {
	"Name" : "Professeur Violet",
	"Description" : "Archéologiste récemment viré du Musée d'Histoire Naturelle, après que son collègue soit mort dans un étrange accident. Il est distrait et très tête-en-l'air, et prend des pilules pour l'aider à se concentrer et à se relaxer. Il adore se perdre dans la lecture et fume une bonne pipe de temps à autre. Malgré ses travaux scientifiques, il croit à la spiritualité et porte toujours une croix avec lui. Il essaye de convaincre ses riches amis de donner des fonds à son expédition en Égypte.",
	"Image" : "prof_plum.gif",
	"Portrait" : "characters/prof_plum.jpg",
	"Place" : "default",
	"Relationships" : plum_relationships,
	"Knowledge" : plum_knowledge,
	"hasClue" : plum_hasclue,
	"isClue" : plum_isclue,
	"Cards" : plum_cards
	};
	
// REVEREND GREEN
var green_relationships = new Array();
var green_knowledge = new Array();
var green_hasclue = new Array();
var green_isclue = new Array();
var green_cards = new Array();
green_isclue[0] = "un cheveu blanc";
green_isclue[1] = "un fil sombre";
green_isclue[2] = "une plume";
green_isclue[3] = "de la musique venant d'un gramophone";
green_isclue[4] = "une croix";
var green = {
	"Name" : "Révérend Olive",
	"Description" : "Il vit au village depuis deux ans, et s'est rendu à la fête pour demander à son hôte de l'argent afin de réparer le toit de l'église. Bizarrement, il a déjà fait beaucoup de levées de fond, mais l'argent semble avoir disparu - ou bien a-t-il été entièrement dépensé pour les pauvres ? Quoiqu'il en soit, le révérend semble être un homme jovial amoureux de la musique et des oiseaux - son passe-temps est d'élever des colombes.",
	"Image" : "rev_green.gif",
	"Portrait" : "characters/rev_green.jpg",
	"Place" : "default",
	"Relationships" : green_relationships,
	"Knowledge" : green_knowledge,
	"hasClue" : green_hasclue,
	"isClue" : green_isclue,
	"Cards" : green_cards
	};
	
// LADY GREY
var grey_relationships = new Array();
var grey_knowledge = new Array();
var grey_hasclue = new Array();
var grey_isclue = new Array();
var grey_cards = new Array();
grey_isclue[0] = "un cheveu noir";
grey_isclue[1] = "une odeur de fumée";
grey_isclue[2] = "un diamant tombé d'un bijou";
grey_isclue[3] = "un parfum de fleur";
grey_isclue[4] = "un rouge à lèvres";
var grey = {
	"Name" : "Comtesse Perle",
	"Description" : "Elle a débuté comme bonne, puis s'est marié à son très riche et très vieux employeur, et est devenue comtesse. Elle est assez arrogante et cynique malgré sa nouvelle position, elle se recouvre de parfums luxueux et fume d'excellentes cigarettes. Son mari est malade depuis plusieurs mois, et n'a pas pu rendre visite à son vieil ami le Dr. Lenoir. C'est pour cela que la Comtesse Perle s'y est rendue seule.",
	"Image" : "lady_grey.gif",
	"Portrait" : "characters/lady_grey.jpg",
	"Place" : "default",
	"Relationships" : grey_relationships,
	"Knowledge" : grey_knowledge,
	"hasClue" : grey_hasclue,
	"isClue" : grey_isclue,
	"Cards" : grey_cards
	};
	
// SUSPECT **************************
var suspects = new Array();
suspects[0] = mustard;
suspects[1] = black;
suspects[2] = brunette;
suspects[3] = peach;
suspects[4] = scarlet;
suspects[5] = canella;
suspects[6] = peacock;
suspects[7] = white;
suspects[8] = plum;
suspects[9] = green;
suspects[10] = grey;
// **********************************

// AXE
var axe_hasclue = new Array();
var axe_isclue = new Array();
axe_isclue[0] = "de la sciure";
axe_isclue[1] = "une petite pile de bois";
var axe = {
	"Name" : "la hache",
	"Image" : "weapons/axe.jpg",
	"Pawn" : "weapons/axe.gif",
	"Place" : "default",
	"hasClue" : axe_hasclue,
	"isClue" : axe_isclue
	};
	
// CANDLESTICK
var candlestick_hasclue = new Array();
var candlestick_isclue = new Array();
candlestick_isclue[0] = "de la cire";
candlestick_isclue[1] = "un petit fragment métallique";
var candlestick = {
	"Name" : "le chandelier",
	"Image" : "weapons/candlestick.jpg",
	"Pawn" : "weapons/candlestick.gif",
	"Place" : "default",
	"hasClue" : candlestick_hasclue,
	"isClue" : candlestick_isclue
	};
	
// DAGGER
var dagger_hasclue = new Array();
var dagger_isclue = new Array();
dagger_isclue[0] = "une coupure dans le sol";
dagger_isclue[1] = "des lettres ouvertes";
var dagger = {
	"Name" : "le poignard",
	"Image" : "weapons/dagger.jpg",
	"Pawn" : "weapons/dagger.gif",
	"Place" : "default",
	"hasClue" : dagger_hasclue,
	"isClue" : dagger_isclue
	};
	
// LEAD PIPE
var lead_pipe_hasclue = new Array();
var lead_pipe_isclue = new Array();
lead_pipe_isclue[0] = "un peu de poudre de rouille";
lead_pipe_isclue[1] = "une fuite d'eau";
var lead_pipe = {
	"Name" : "le tuyau de plomb",
	"Image" : "weapons/lead_pipe.jpg",
	"Pawn" : "weapons/lead_pipe.gif",
	"Place" : "default",
	"hasClue" : lead_pipe_hasclue,
	"isClue" : lead_pipe_isclue
	};
	
// PILLOW
var pillow_hasclue = new Array();
var pillow_isclue = new Array();
pillow_isclue[0] = "une plume";
pillow_isclue[1] = "un morceau de tissu blanc";
var pillow = {
	"Name" : "l'oreiller",
	"Image" : "weapons/pillow.jpg",
	"Pawn" : "weapons/pillow.gif",
	"Place" : "default",
	"hasClue" : pillow_hasclue,
	"isClue" : pillow_isclue
	};
	
// POISON
var poison_hasclue = new Array();
var poison_isclue = new Array();
poison_isclue[0] = "une goutte d'un liquide étrange";
poison_isclue[1] = "un verre vide";
var poison = {
	"Name" : "le poison",
	"Image" : "weapons/poison.jpg",
	"Pawn" : "weapons/poison.png",
	"Place" : "default",
	"hasClue" : poison_hasclue,
	"isClue" : poison_isclue
	};
	
// REVOLVER
var revolver_hasclue = new Array();
var revolver_isclue = new Array();
revolver_isclue[0] = "une poudre grise";
revolver_isclue[1] = "une balle";
var revolver = {
	"Name" : "le revolver",
	"Image" : "weapons/revolver.jpg",
	"Pawn" : "weapons/revolver.gif",
	"Place" : "default",
	"hasClue" : revolver_hasclue,
	"isClue" : revolver_isclue
	};
	
// ROPE
var rope_hasclue = new Array();
var rope_isclue = new Array();
rope_isclue[0] = "des fibres couleur paille";
rope_isclue[1] = "un petit couteau";
var rope = {
	"Name" : "la corde",
	"Image" : "weapons/rope.jpg",
	"Pawn" : "weapons/rope.gif",
	"Place" : "default",
	"hasClue" : rope_hasclue,
	"isClue" : rope_isclue
	};
	
// SYRINGE
var syringe_hasclue = new Array();
var syringe_isclue = new Array();
syringe_isclue[0] = "un flacon gradué vide";
syringe_isclue[1] = "une goutte d'un liquide étrange";
var syringe = {
	"Name" : "la seringue",
	"Image" : "weapons/syringe.jpg",
	"Pawn" : "weapons/syringe.png",
	"Place" : "default",
	"hasClue" : syringe_hasclue,
	"isClue" : syringe_isclue
	};
	
// WRENCH
var wrench_hasclue = new Array();
var wrench_isclue = new Array();
wrench_isclue[0] = "des traces de graisse noire";
wrench_isclue[1] = "un boulon";
var wrench = {
	"Name" : "la clef anglaise",
	"Image" : "weapons/wrench.jpg",
	"Pawn" : "weapons/wrench.gif",
	"Place" : "default",
	"hasClue" : wrench_hasclue,
	"isClue" : wrench_isclue
	};
	
// WEAPONS **************************
var weapons = new Array();
weapons[0] = axe;
weapons[1] = candlestick;
weapons[2] = dagger;
weapons[3] = lead_pipe;
weapons[4] = pillow;
weapons[5] = poison;
weapons[6] = revolver;
weapons[7] = rope;
weapons[8] = syringe;
weapons[9] = wrench;
// **********************************

// BALLROOM
var ballroom_hasclue = new Array();
var ballroom_isclue = new Array();
ballroom_isclue[0] = "a le bout des doigts rougis, peut-être après avoir récemment joué d'un instrument.";
ballroom_isclue[1] = "semble avoir les pieds douloureux, peut-être après avoir dansé ou être resté longtemps debout.";
ballroom_isclue[2] = "porte une tenue de soirée digne d'un gala.";
var ballroom = {
	"Name" : "la salle de bal",
	"Image" : "rooms/ballroom.jpg",
	"Pawn" : "rooms/ballroom_icon.png",
	"hasClue" : ballroom_hasclue,
	"isClue" : ballroom_isclue
	};
	
// BILLIARD ROOM
var billiard_room_hasclue = new Array();
var billiard_room_isclue = new Array();
billiard_room_isclue[0] = "a de la craie bleu au bout des doigts.";
billiard_room_isclue[1] = "a des fibres de laine verte collées à ses vêtements.";
billiard_room_isclue[2] = "porte un curieux gant fait seulement pour le pouce et deux doigts.";
var billiard_room = {
	"Name" : "la salle de billard",
	"Image" : "rooms/billiard_room.jpg",
	"Pawn" : "rooms/billiard_room_icon.png",
	"hasClue" : billiard_room_hasclue,
	"isClue" : billiard_room_isclue
	};
	
// CONSERVATORY
var conservatory_hasclue = new Array();
var conservatory_isclue = new Array();
conservatory_isclue[0] = "a une petite feuille coincée dans les cheveux.";
conservatory_isclue[1] = "a un peu de terre dans le dos.";
conservatory_isclue[2] = "a un peu de sciure sur les vêtements.";
var conservatory = {
	"Name" : "la véranda",
	"Image" : "rooms/conservatory.jpg",
	"Pawn" : "rooms/conservatory_icon.png",
	"hasClue" : conservatory_hasclue,
	"isClue" : conservatory_isclue
	};
	
// DINING ROOM
var dining_room_hasclue = new Array();
var dining_room_isclue = new Array();
dining_room_isclue[0] = "a une tache de vin sur son vêtement.";
dining_room_isclue[1] = "a les mains qui sentent le citron.";
dining_room_isclue[2] = "semble avoir l'estomac bien rempli.";
var dining_room = {
	"Name" : "la salle à manger",
	"Image" : "rooms/dining_room.jpg",
	"Pawn" : "rooms/dining_room_icon.png",
	"hasClue" : dining_room_hasclue,
	"isClue" : dining_room_isclue
	};
	
// FOUNTAIN
var fountain_hasclue = new Array();
var fountain_isclue = new Array();
fountain_isclue[0] = "a de multiples éclaboussures sur les vêtements et les cheveux.";
fountain_isclue[1] = "a de la boue sur les chaussures.";
fountain_isclue[2] = "a les cheveux mouillés et porte une serviette autour du cou.";
var fountain = {
	"Name" : "la fontaine",
	"Image" : "rooms/fountain.jpg",
	"Pawn" : "rooms/fountain_icon.png",
	"hasClue" : fountain_hasclue,
	"isClue" : fountain_isclue
	};
	
// HALL
var hall_hasclue = new Array();
var hall_isclue = new Array();
hall_isclue[0] = "porte l'écharpe de quelqu'un d'autre.";
hall_isclue[1] = "porte des chaussures dépareillées.";
hall_isclue[2] = "porte son manteau.";
var hall = {
	"Name" : "le vestibule",
	"Image" : "rooms/hall.jpg",
	"Pawn" : "rooms/hall_icon.png",
	"hasClue" : hall_hasclue,
	"isClue" : hall_isclue
	};
	
// KITCHEN
var kitchen_hasclue = new Array();
var kitchen_isclue = new Array();
kitchen_isclue[0] = "a des éclaboussures de thé sur ses vêtements.";
kitchen_isclue[1] = "a des taches de graisse sur ses vêtements.";
kitchen_isclue[2] = "a un petit pansement sur la main.";
var kitchen = {
	"Name" : "la cuisine",
	"Image" : "rooms/kitchen.jpg",
	"Pawn" : "rooms/kitchen_icon.png",
	"hasClue" : kitchen_hasclue,
	"isClue" : kitchen_isclue
	};
	
// LIBRARY
var library_hasclue = new Array();
var library_isclue = new Array();
library_isclue[0] = "a un bout de papier collé sous la chaussure.";
library_isclue[1] = "a des lunettes de presbytie dans sa poche.";
library_isclue[2] = "a un marque-page dans sa poche.";
var library = {
	"Name" : "la bibliothèque",
	"Image" : "rooms/library.jpg",
	"Pawn" : "rooms/library_icon.png",
	"hasClue" : library_hasclue,
	"isClue" : library_isclue
	};
	
// LOUNGE
var lounge_hasclue = new Array();
var lounge_isclue = new Array();
lounge_isclue[0] = "a le visage rouge d'être resté trop longtemps devant une cheminée.";
lounge_isclue[1] = "a des marques de pli sur la joue, peut-être après s'être endormi sur un canapé.";
lounge_isclue[2] = "a des cartes de jeu à la main.";
var lounge = {
	"Name" : "le salon",
	"Image" : "rooms/lounge.jpg",
	"Pawn" : "rooms/lounge_icon.png",
	"hasClue" : lounge_hasclue,
	"isClue" : lounge_isclue
	};
	
// ROSE GARDEN
var rose_garden_hasclue = new Array();
var rose_garden_isclue = new Array();
rose_garden_isclue[0] = "dégage un parfum de gazon fraîchement tondu.";
rose_garden_isclue[1] = "a les genoux salis par de la terre.";
rose_garden_isclue[2] = "a de nombreuses piqûres rouges sur les mains.";
var rose_garden = {
	"Name" : "la roseraie",
	"Image" : "rooms/rose_garden.jpg",
	"Pawn" : "rooms/rose_garden_icon.png",
	"hasClue" : rose_garden_hasclue,
	"isClue" : rose_garden_isclue
	};
	
// STUDY
var study_hasclue = new Array();
var study_isclue = new Array();
study_isclue[0] = "a de l'encre bleue sur les doigts.";
study_isclue[1] = "dégage une odeur de crayon et de cuir.";
study_isclue[2] = "a une goutte de cire rouge séchée sur ses vêtements.";
var study = {
	"Name" : "le bureau",
	"Image" : "rooms/study.jpg",
	"Pawn" : "rooms/study_icon.png",
	"hasClue" : study_hasclue,
	"isClue" : study_isclue
	};
	
// ROOMS ***************************
var rooms = new Array();
rooms[0] = ballroom;
rooms[1] = billiard_room;
rooms[2] = conservatory;
rooms[3] = dining_room;
rooms[4] = fountain;
rooms[5] = hall;
rooms[6] = kitchen;
rooms[7] = library;
rooms[8] = lounge;
rooms[9] = rose_garden;
rooms[10] = study;
// **********************************

// PHP GIVES US THE SELECTED PLAYER
var player = <?php echo $_GET['player'] ?>;

// COMMIT CRIME ***************************************
// Draw victim
var victim = Math.floor(Math.random()*11);
crime_victim = suspects[victim];
// Player can't be a victim
while(player["Name"] == crime_victim["Name"]) {
	var victim = Math.floor(Math.random()*11);
	crime_victim = suspects[victim];
}
var suspect = victim;
// Suspect can't be a victim - draw suspect
while(suspect == victim) 
{
	var suspect = Math.floor(Math.random()*11);
}
var weapon = Math.floor(Math.random()*10);
var place = Math.floor(Math.random()*11);
// Define the game variables
crime_suspect = suspects[suspect];
crime_weapon = weapons[weapon];
crime_place = rooms[place];
// ***************************************************

// STORY'S CONCLUSION ********************************
var conclusion;
var discovering;

conclusion = "<img src='"+crime_weapon["Image"]+"'/><img src='"+crime_place["Image"]+"'/><br/><h4>VOUS AVEZ GAGNÉ !</h4><br/>";

// DISCOVERING
if (crime_victim["Name"]=="Colonel Moutarde"){
	discovering = " ne pensait pas que le Colonel Moutarde serait si tenance à suivre la piste qu'il avait flairé. ";
} else if(crime_victim["Name"]=="Docteur Lenoir"){
	discovering = " ne s'attendait pas à ce que le Docteur Lenoir utilise son esprit aiguisé contre un ami, et cette énigme ne devait pas être résolue par l'anthropologiste. ";
} else if(crime_victim["Name"]=="Comtesse Perle"){
	discovering = " ne savait pas que le cynisme de la Comtesse Perle la motiverait à faire un scandale publique, et n'eût pas d'autre choix que de la faire taire. ";
} else if(crime_victim["Name"]=="Monsieur Prunelle"){
	discovering = " ne pensait que Monsieur Prunelle était une menace, jusqu'à ce que le belge se lance dans le chantage. ";
} else if(crime_victim["Name"]=="Mlle Pêche"){
	discovering = " ne s'imaginait pas que la mystérieuse Mlle Pêche s'apprêtait à tout révéler dans un journal afin de lancer sa carrière de journaliste, jusqu'à ce qu'elle se montre trop arrogante en faisant des allusions. ";
} else if(crime_victim["Name"]=="Mlle Rose"){
	discovering = " eût une surprise, quand Mlle Rose insinua qu'elle fréquentait des gens qui 'parlaient beaucoup', et décida rapidement de prévenir toute pression ou chantage. ";
} else if(crime_victim["Name"]=="Mme Cannelle"){
	discovering = " ne s'attendait pas à ce que la voyante hongroise ait de vrais pouvoirs, mais la terrible vision qu'elle évoqua discrètement au cours de la soirée en révélait beaucoup trop, et il valait mieux la réduire au silence. ";
} else if(crime_victim["Name"]=="Mme Pervenche"){
	discovering = " subissait déjà le chantage de Mme Pervenche, mais découvrit qu'un peu d'alcool la rendait beaucoup trop bavarde, et ça ne faisait pas partie du contrat. ";
} else if(crime_victim["Name"]=="Mme Leblanc"){
	discovering = " a surpris Mme Leblanc en train d'écouter aux portes au mauvais moment, et se dit qu'une femme de son âge ne serait pas une grande perte pour le monde. ";
} else if(crime_victim["Name"]=="Professeur Violet"){
	discovering = " eût une surprise quand le Professeur Violet, dans un éclair de lucidité, commença à réunir ensemble différents indices découverts par hasard, et décida de stopper ce cerveau avant que tout soit découvert. ";
} else if(crime_victim["Name"]=="Révérend Olive"){
	discovering = " confessa tout au Révérend, avant de réaliser que même un religieux pouvait avoir des faiblesses et briser ses voeux afin de prévenir la police, et il était pour le mieux de ne prendre aucun risque. ";
}
// MURDER CAUSE
// MANQUE COLONEL MOUTARDE
if(crime_suspect["Name"]=="Colonel Moutarde"){
	conclusion += crime_suspect["Name"] + discovering + "Le Colonel Moutarde cachait une activité bien monstrueuse : la guerre l'avait laissé avec un goût particulier... pour le meurtre. Son amour de la chasse pouvait enfin s'exprimer tout entier, quand, après avoir capturé quelque clochard sans-abri, le Colonel se lançait dans une chasse à l'homme sur son propre domaine. Une fois, deux fois... Et cela durait depuis des années. À quoi s'attendait " + crime_victim["Name"] + " ? Le Colonel n'allait pas laisser quelqu'un l'empêcher de poursuivre une si agréable activité, tout ça parce qu'un(e) nanti(e) trop prude voulait défendre des clochards sans aucune valeur.";
} else if(crime_suspect["Name"]=="Docteur Lenoir"){
	conclusion += crime_suspect["Name"] + discovering + "Le Docteur Lenoir cachait un lourd secret : il récupérait des oeuvres d'art volées, en échange d'aide et d'argent données à des fugitifs nazis. Il risquait de perdre l'héritage de son oncle, sa réputation et surtout de passer une partie de sa vie en prison, et il s'y refusait.<br/>";
} else if(crime_suspect["Name"]=="Comtesse Perle"){
	conclusion += crime_suspect["Name"] + discovering + "La Comtesse Perle avait un petit secret : chaque jour elle empoisonnait son mari, dans le but de toucher au plus vite l'héritage de ce vieux bouc richissime. Qu'était un meurtre de plus pour assurer son avenir, et enfin, obtenir la liberté et l'argent qu'elle avait attendus toute sa vie ?<br/>";
} else if(crime_suspect["Name"]=="Monsieur Prunelle"){
	conclusion += crime_suspect["Name"] + discovering + "Monsieur Prunelle avait une vie secrète : obsédé par le jeu et les paris, déjà criblé de dettes, menacé de mort, il ne s'était pas contenter d'arnaquer quelques personnes, mais avait commencé à voler des tableaux, et même des bijoux. Fuir jusqu'en France n'était apparemment pas suffisant, et sa vie était toujours en danger. C'était lui ou " + crime_victim["Name"] + ".<br/>";
} else if(crime_suspect["Name"]=="Mlle Pêche"){
	conclusion += crime_suspect["Name"] + discovering + "Mlle Pêche cachait bien son jeu : sa voiture n'était pas tombée en panne, et elle était venue au manoir avec une idée précise en tête. Son amant était atteint d'une maladie que seuls des traitements très coûteux pouvaient guérir, et il était un meurtrier activement recherché par la police. Elle était sûre qu'en prétendant être la fille bâtarde, ou la nièce éloignée d'un des riches invités, elle pourrait obtenir l'argent nécessaire. Mais son secret découvert, son amour mourrait comme un chien en prison, et c'était une idée insupportable.<br/>";
} else if(crime_suspect["Name"]=="Mlle Rose"){
	conclusion += crime_suspect["Name"] + discovering + "Mlle Rose cachait un noir passé : sa mère soi-disant perdue de vue, elle l'avait en fait assassinée de ses propres mains, croyant enfin toucher son héritage mérité, mais jusqu'à la fin sa mère se moqua d'elle, car celle-ci était en réalité complètement ruinée. Perdant peu à peu l'esprit depuis ce jour, Mlle Rose n'allait pas hésiter à tuer de nouveau. Son horrible histoire révélée, même sans preuves, les riches fréquentations qu'elle mettait dans son lit allaient la fuir et elle perdrait tout ce qui lui restait.<br/>";
} else if(crime_suspect["Name"]=="Mme Cannelle"){
	conclusion += crime_suspect["Name"] + discovering + "Mme Cannelle cachait un business bien noir : son entreprise de voyance n'était qu'une couverture à un trafic de drogue international. Elle divertissait les plus riches afin de maintenir les apparences, et de trouver d'éventuels partenaires financiers, mais derrière ses airs mystiques la baronne de la drogue, meurtrière de sang froid, était toujours là.<br/>";
} else if(crime_suspect["Name"]=="Mme Pervenche"){
	conclusion += crime_suspect["Name"] + discovering + "Mme Pervenche était déjà une meurtrière : elle avait tué absolument tous ses maris. Par jalousie, parce qu'ils refusaient qu'elle dépense trop d'argent... n'importe quelle dispute et son sang ne faisait qu'un tour, la menant jusqu'au meurtre. Elle n'allait pas laisser quelqu'un ruiner ses chances de se remarier, et de retrouver des fonds pour continuer à vivre dans l'extravagance et le luxe.<br/>";
} else if(crime_suspect["Name"]=="Mme Leblanc"){
	conclusion += crime_suspect["Name"] + discovering + "Mme Leblanc avait un petit secret : le Docteur Hugues Lenoir n'était pas mort à cause de son grand âge, mais plutôt à cause d'une soupe un peu trop salée. Après s'être rapprochée de lui pendant des années, s'attendant à une très juteuse récompense sur son testament, elle était extrêmement déçue. La vérité devait rester enterrée, afin qu'elle puisse réessayer avec le Docteur Lenoir. Toutes ces années de bons et loyaux services auprès de nantis aux moeurs grotesques et déplorables ! Personne n'allait l'empêcher d'obtenir ce qu'elle méritait.<br/>";
} else if(crime_suspect["Name"]=="Professeur Violet"){
	conclusion += crime_suspect["Name"] + discovering + "Professeur Violet cachait un lourd secret : ce n'était pas un accident qui avait tué son collègue. Il l'avait provoqué de toutes pièces, fou de jalousie, sachant que ses travaux à lui étaient mauvais ou bourrés de mensonges. Alors qu'il allait enfin changer, améliorer son image, et enfin avoir sa propre expédition en Égypte, quelqu'un allait encore ruiner sa vie de toutes pièces.<br/>";
} else if(crime_suspect["Name"]=="Révérend Olive"){
	conclusion += crime_suspect["Name"] + discovering + "Le Révérend Olive cachait bien son jeu : tout ce qu'il gagnait au nom des pauvres, il le gardait pour lui. Il laissait l'église tomber en ruines et utilisait tout l'argent pour boire, se rendre dans des maisons closes et manger de somptueux repas. Pas étonnant que le révérend fut prêt à briser le 5ème commandement pour protéger sa secrète vie de débauche, après avoir brisé tous ses voeux.<br/>";
}
// ROOM CHOICE
if(crime_place["Name"]=="la salle de bal") {
	conclusion += "Quand " + crime_victim["Name"] + " fut finalement seul(e), fredonnant un petit air, après que tous aient quitté la salle de bal, " + crime_suspect["Name"] + " y vit une opportunité. ";
} else if(crime_place["Name"]=="la salle de billard") {
	conclusion += "Quand " + crime_victim["Name"] + " fut laissé seul(e) dans la salle de billard, alors que les autres étaient partis chercher des boissons, " + crime_suspect["Name"] + " y vit une occasion en or. ";
} else if(crime_place["Name"]=="la véranda") {
	conclusion += "Alors que " + crime_victim["Name"] + " se trouvait dans la véranda, regardant la pluie tomber sur les vitres, et que la foudre fit soudainement sauter le courant, " + crime_suspect["Name"] + " se dit que c'était sa chance. ";
} else if(crime_place["Name"]=="la salle à manger") {
	conclusion += "Alors que " + crime_victim["Name"] + " appréciait un petit verre de brandy dans la salle à manger, et que les autres invités partirent écouter une lecture intéressante, " + crime_suspect["Name"] + " pensa que c'était le bon moment pour agir. ";
} else if(crime_place["Name"]=="la fontaine") {
	conclusion += "Quand " + crime_victim["Name"] + " se retrouva seul(e) à la fontaine, profitant de la fraîcheur du soir après le dîner, " + crime_suspect["Name"] + " y vit une excellente opportunité. ";
} else if(crime_place["Name"]=="le vestibule") {
	conclusion += "Quand " + crime_victim["Name"] + " se retrouva seul(e) dans le vestibule, le temps de mettre son manteau avant de quitter le manoir, " + crime_suspect["Name"] + " sut que c'était une parfaite occasion. ";
} else if(crime_place["Name"]=="la cuisine") {
	conclusion += "Alors que " + crime_victim["Name"] + " était enfin seul(e), buvant une infusion digestive dans la cuisine, " + crime_suspect["Name"] + " se dit qu'il était temps d'agir. ";
} else if(crime_place["Name"]=="la bibliothèque") {
	conclusion += "Quand " + crime_victim["Name"] + " préféra rester dans la bibliothèque afin de regarder certains livres de plus près, et que tout le monde quitta la pièce, " + crime_suspect["Name"] + " pensa que ce genre d'occasion ne se présentait pas deux fois. ";
} else if(crime_place["Name"]=="le salon") {
	conclusion += "Quand " + crime_victim["Name"] + " fut laissé seul(e) au salon lorsque les autres invités se rendirent à la salle de bal pour écouter un peu de musique, " + crime_suspect["Name"] + " se dit qu'il fallait en profiter. ";
} else if(crime_place["Name"]=="la roseraie") {
	conclusion += "Alors que " + crime_victim["Name"] + " se promenait seul(e) dans la roseraie, respirant le parfum des fleurs sous le soir, " + crime_suspect["Name"] + " se dit que la situation était idéale pour agir discrètement. ";
} else if(crime_place["Name"]=="le bureau") {
	conclusion += "Quand " + crime_victim["Name"] + " resta seul(e) dans le bureau, s'attendant à avoir une discussion privée, " + crime_suspect["Name"] + " y vit une occasion trop belle pour la laisser passer. ";
}
// WEAPON CHOICE
if(crime_weapon["Name"]=="la hache") {
	conclusion += "La hache couperait court au problème.<br/>";
} else if(crime_weapon["Name"]=="le chandelier") {
	conclusion += "Un coup de chandelier sur la tête pourrait-il passer pour un accident avec le bon maniement ?<br/>";
} else if(crime_weapon["Name"]=="le poignard") {
	conclusion += "Il était nécessaire d'aller au coeur du problème, et une dague plantée dans celui-ci était une plaisante idée.<br/>";
} else if(crime_weapon["Name"]=="le tuyau de plomb") {
	conclusion += "Un tuyau rouillé assené sur la tête serait rapide et propre.<br/>";
} else if(crime_weapon["Name"]=="l'oreiller") {
	conclusion += "Étouffer le problème sous un oreiller serait si facile, et pourrait même passer pour une mort naturelle.<br/>";
} else if(crime_weapon["Name"]=="le poison") {
	conclusion += "Une goutte de poison serait un moyen élégant de mettre fin au problème, et comment trouveraient-ils la personne l'ayant versée ?<br/>";
} else if(crime_weapon["Name"]=="le revolver") {
	conclusion += "Un simple coup de feu et tout rentrerait dans l'ordre.<br/>";
} else if(crime_weapon["Name"]=="la corde") {
	conclusion += "Un lent étranglement avec une corde ne serait que justice.<br/>";
} else if(crime_weapon["Name"]=="le seringue") {
	conclusion += "Un poison mortel injecté directement dans le sang ne laisserait aucune trace.<br/>";
} else if(crime_weapon["Name"]=="la clef anglaise") {
	conclusion += "Un grand coup derrière la tête et il n'y aurait plus de problème.<br/>";
}

conclusion += "Et c'est ainsi que " + crime_suspect["Name"] + " tua " + crime_victim["Name"] + " avec " + crime_weapon["Name"] + " dans " + crime_place["Name"] + ".<br/> Mais grâce à vous, " + crime_suspect["Name"] + " sera arrêté ! Vous avez prouvé votre talent de détective.";
var chance = Math.floor(Math.random()*1);
if(chance==0) {
	conclusion += "<br/><br/>Oh non ! " + crime_suspect["Name"] + " a réussi à s'échapper !! Mais au moins la police sait qui poursuivre.";
} else if(chance==1) {
	conclusion += "<br/><br/>" + crime_suspect["Name"] + " a été arrêté(e). Et cette sombre nuit au Manoir Tudor prend fin...";
}

// ***************************************************

// CREATING THE CARDS ********************************
var cards = new Array();
var total_length = suspects.length + weapons.length + rooms.length;
for(var i=0; i<suspects.length; i++) {
	cards.push(suspects[i]["Name"]);
}
for(var j=0; j<weapons.length; j++) {
	cards.push(weapons[j]["Name"]);
}
for(var l=0; l<rooms.length; l++) {
	cards.push(rooms[l]["Name"]);
}
// ***************************************************

// RANDOMLY GIVING THE CARDS **************************
function draw_cards() {
	// Notre compteur
	var k=0;
	var limit=cards.length-4;
	// Tant qu'on a pas distribué toutes les cartes
	while(k<=limit){  
		// A chaque suspect
		for(var i=0; i<suspects.length; i++) {
			if(k<=limit) {
				// Sauf la victime
				if(suspects[i]["Name"] !== crime_victim["Name"]) {
					// On distribue une carte
					k++;
					// Tant qu'on a pas distribué toutes les cartes
					if(k<=limit) {
						draw_one_card(i);
					}
				}
			}
		} // for
	} // while
}
// ***************************************************

// USEFUL DRAW CARD FUNCTION *************************
function draw_one_card(i) {
	// Dans le domaine des cartes 0 à size
	var size = cards.length;
	// Tant qu'une carte n'a pas été distribuée au suspect
	var given = false;
	do {
		// On choisit un carte au hasard
		var number = Math.floor(Math.random()*size);
		// On enlève les cartes de crime du jeu quand on tombe dessus
		if((cards[number] == crime_victim["Name"])||(cards[number] == crime_weapon["Name"])||(cards[number] == crime_suspect["Name"])||(cards[number] == crime_place["Name"])) {
					cards[number] = null;
		}
		// Si la carte n'a pas été déjà tirée, et donc nullifiée
		if(cards[number]!== null) {
			// On distribue la carte au suspect
			suspects[i]["Cards"].push(cards[number]);
			// On confime qu'elle a été donnée
			given = true;
			// On nullifie la carte distribuée
			cards[number] = null;
		}
	} while(given == false);
}
// ***************************************************


historic = '<a onClick="showHistoric();">[X]</a> <u>VOS SOUVENIRS</u><br/><br/>';
historic += crime_victim["Name"] + " a été tué(e).<br/>";

/*--FIRST STAGE : ESTABLISHING THE STORY--*/

	// ####################################
	// ## SUSPECT PLACEMENT IN THE ROOMS ##
	// ####################################
	for(var k=0; k<suspects.length; k++) {
		// WE DEAL ONLY WITH SUSPECTS AND NOT THE VICTIM
		if( (suspects[k] != crime_victim) && (suspects[k] != crime_suspect) ) {
			// We draw a random place
			var choosen_place = Math.floor(Math.random()*11);
			// And place the suspect in it
			suspects[k]["Place"] = rooms[choosen_place]["Name"];
			// LEAVING A CLUE ON THE SUSPECT
			var choosen_room = rooms[choosen_place];
			var suspect_clue = Math.floor(Math.random()*3);
			var clue = choosen_room["isClue"][suspect_clue];
			suspects[k]["hasClue"].push(clue);

			// LEAVING A CLUE IN A ROOM
			var choosen_suspect = suspects[k];
			var room_clue = Math.floor(Math.random()*5);
			// If the room already has some clue we put it at the end of the array
			var clue = choosen_suspect["isClue"][room_clue];
			rooms[choosen_place]["hasClue"].push(clue);
			
		// WE DEAL WITH THE GUILTY SUSPECT
		} else if (suspects[k] == crime_suspect) {
			// We put the suspect on the crime scene
			suspects[k]["Place"] = crime_place["Name"];
			// LEAVING A CLUE ON THE SUSPECT
			var choosen_room = crime_place;
			var suspect_clue = Math.floor(Math.random()*3);
			var clue = choosen_room["isClue"][suspect_clue];
			suspects[k]["hasClue"].push(clue);

			// LEAVING A CLUE IN A ROOM
			var choosen_suspect = suspects[k];
			var room_clue = Math.floor(Math.random()*5);
			var notfound = true;
			var x=0;
			// We retrieve the original room object
			while(notfound) {
				if(crime_place == rooms[x]) {
					notfound = false;
					var clue = choosen_suspect["isClue"][room_clue];
					rooms[x]["hasClue"].push(clue);
				} else {
					notfound = true;
					x++;
				}
			}
		
		// WE DEAL WITH THE VICTIM
		} else if (suspects[k] == crime_victim) {
			// We put the suspect on the crime scene
			suspects[k]["Place"] = "the cellar";
		}
	}
	
	// ####################################
	// ## WEAPONS PLACEMENT IN THE ROOMS ##
	// ####################################
	// Then we take care of the weapons
	for(var k=0; k<weapons.length; k++) {
		// WE DEAL ONLY WITH REGULAR WEAPONS
		if(weapons[k] != crime_weapon) {
			// We draw a random place
			var choosen_place = Math.floor(Math.random()*11);
			// And place the weapon in it
			weapons[k]["Place"] = rooms[choosen_place]["Name"];
			// LEAVING A CLUE IN A ROOM
			var choosen_weapon = weapons[k];
			var room_clue = Math.floor(Math.random()*1);
			var clue = choosen_weapon["isClue"][room_clue];
			rooms[choosen_place]["hasClue"].push(clue);

		} else if(weapons[k] == crime_weapon) {
			// And place the weapon in it
			weapons[k]["Place"] = crime_place["Name"];
			// LEAVING A CLUE IN A ROOM
			var choosen_weapon = weapons[k];
			var room_clue = Math.floor(Math.random()*1);
			var notfound = true;
			var x=0;
			// We retrieve the original room object
			while(notfound) {
				if(crime_place == rooms[x]) {
					notfound = false;
				} else {
					notfound = true;
					x++;
				}
			}
			var clue = choosen_weapon["isClue"][room_clue];
			rooms[x]["hasClue"].push(clue);
		}
	}
	
	// ##########################
	// ## KNOWLEDGE GENERATION ##
	// ##########################
	// Knowledge depens on the rooms where the suspects were at the murder time
	for(var k=0; k<rooms.length; k++) {
		var whowashere = {};
		var whatwashere = {};
		var m=0;
		var n=0;
		// For each room we find who was there
		for(var i=0; i<suspects.length; i++) {
			// If the suspect was here
			if(suspects[i]["Place"] == rooms[k]["Name"]) {
				// We register in an object any suspect that has been in the room
				var roomroom = rooms[k]["Name"] + m;
				whowashere[roomroom] = suspects[i]["Name"];
				m++;
			}
		}
		// For each room we find what was there
		for(var i=0; i<weapons.length; i++) {
			// If the suspect was here
			if(weapons[i]["Place"] == rooms[k]["Name"]) {
				// We register in an object any weapon that has been in the room
				var roomroom = rooms[k]["Name"] + n;
				whatwashere[roomroom] = weapons[i]["Name"];
				n++;
			}
		}
		var whoarray = Object.keys(whowashere);
		var whatarray = Object.keys(whatwashere);
		// CREATING THE KNOWLEDGE FOR EACH SUSPECT
		for(var i=0; i<suspects.length; i++) {
			// IF THE SUSPECT WAS IN THE ROOM AT THAT TIME
			if(suspects[i]["Place"] == rooms[k]["Name"]) {
				// About who was in the room
				for(var j=0; j<whoarray.length; j++) {
					var whocase = rooms[k]["Name"] + j;
					var who = whowashere[whocase];
					var phrase;
					if(who == suspects[i]["Name"]) {
						phrase = "Je me trouvais dans " + rooms[k]["Name"] + " aux alentours de l'heure du meurtre.";
					} else {
						phrase = who + " était dans " + rooms[k]["Name"] + " aux alentours de l'heure du meurtre.";
					}
					suspects[i]["Knowledge"].push(phrase);
				}
				// About what was in the room
				for(var j=0; j<whatarray.length; j++) {
					var whatcase = rooms[k]["Name"] + j;
					var what = whatwashere[whatcase];
					var phrase = "J'ai vu " + what + " dans " + rooms[k]["Name"] + " aux alentours de l'heure du meurtre.";
					suspects[i]["Knowledge"].push(phrase);
				}
			}
		}
	}

	// ################################
	// ## RE-PLACEMENT OF EVERYTHING ##
	// ################################
	// Re-placement of suspects
	for(var k=0; k<suspects.length; k++) {
		// WE DEAL ONLY WITH SUSPECTS AND NOT THE VICTIM
		if(suspects[k] != crime_victim) {
			// We draw a random place
			var choosen_place = Math.floor(Math.random()*11);
			// And place the suspect in it
			suspects[k]["Place"] = rooms[choosen_place]["Name"];
		}
	}
	// Re-placement of weapons
	for(var k=0; k<weapons.length; k++) {
		// We draw a random place
		var choosen_place = Math.floor(Math.random()*11);
		// And place the suspect in it
		weapons[k]["Place"] = rooms[choosen_place]["Name"];
	}
	// **********************************

historic += "Vous avez commencé dans " + player["Place"] + ".<br/>";
for(var k=0;k<player["hasClue"].length;k++) {
	historic += player["Name"] + " "+ player["hasClue"][k] + "<br/>";
}
for(var k=0;k<player["Knowledge"].length;k++) {
	historic += player["Name"] + " sait : "+ player["Knowledge"][k] + "<br/>";
}

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
	el.scrollIntoView();
	sound_game();
}

function showHistoric() {
	div = document.getElementById("historic");
	div.style.display = (div.style.display == "block") ? "none" : "block";
	div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
	div.innerHTML = historic;
	div.scrollIntoView();
	sound_paper();
}

function showCards() {
	div = document.getElementById("historic");
	div.style.display = (div.style.display == "block") ? "none" : "block";
	div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
	div.innerHTML = "<a onClick='showCards();'>[X]</a> <b>Your cards :</b><br/>";
	for(var k=0; k<player["Cards"].length; k++) {
		var card = player["Cards"][k];
		for(var i=0; i<suspects.length; i++) {
			if(card==suspects[i]["Name"]) {
				div.innerHTML += '<img src="' + suspects[i]["Portrait"] + '" />';
			} else {
			}
		}
		for(var j=0; j<weapons.length; j++) {
			if(card==weapons[j]["Name"]) {
				div.innerHTML += '<img src="' + weapons[j]["Image"] + '" />';
			}
		}
		for(var m=0; m<rooms.length; m++) {
			if(card==rooms[m]["Name"]) {
				div.innerHTML += '<img src="' + rooms[m]["Image"] + '" />';
			}
		}
	}
	div.scrollIntoView();
	sound_paper();
}

function showCharacter(name) {
		var character;
		for(var k=0; k<suspects.length; k++) {
			if(suspects[k]["Name"] == name) {
				character = suspects[k];
			}
		}
		div = document.getElementById("character");
		div.innerHTML = "<div><img src='"+ character["Portrait"] + "'><br/><p>" + character["Description"] + "</p><br/><input type=\"button\" class=\"action\" value=\"Ok\" onClick=\"notShowCharacter();\" style=\"width:100%;text-align:center;\"/></div>";
		div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
		div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
		div.scrollIntoView();
		sound_portrait();
}

function notShowCharacter() {
	div = document.getElementById("character");
	div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
	div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
}

var plot = "";

// STORY PLOT ***********************
function set_plot(){
	if(crime_victim["Name"] == "Colonel Moutarde") {
		plot = "Même un chasseur peut se retrouver chassé. Le <b>Colonel Moutarde</b> a été retrouvé gisant dans le cellier, mort. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Docteur Lenoir") {
		plot = "Un dur remède a été administré au <b>Docteur Lenoir</b>. Il a été retrouvé gisant dans le cellier, mort. Enquêtez et découvrez qui l'a fait, où, et avec quoi";
	} else if(crime_victim["Name"] == "Monsieur Prunelle") {
		plot = "Certains diraient que le meurtre est un art, mais <b>Monsieur Prunelle</b> ne serait pas d'accord. Il a été retrouvé gisant dans le cellier, mort. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Mlle Pêche") {
		plot = "Même la plus fraîche des roses bientôt se fanera, et c'est ce qui est arrivé à <b>Mlle Pêche</b>. Elle a été retrouvée gisant dans le cellier, morte. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Mlle Rose") {
		plot = "La séduction est un jeu dangereux et <b>Mlle Rose</b> l'a perdu. Elle a été retrouvée gisant dans le cellier, morte. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Mme Cannelle") {
		plot = "La clairvoyance peut dévoiler des secrets dangereux. <b>Mme Cannelle</b> a été retrouvée gisant dans le cellier, morte. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Mme Pervenche") {
		plot = "L'argent a un puissant pouvoir d'attraction, mais il ne peut pas tout acheter. <b>Mme Pervenche</b> a été retrouvée gisant dans le cellier, morte. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Mme Leblanc") {
		plot = "Quelque chose se préparait, mais ce n'était pas un petit plat de <b>Mme Leblanc</b> cette fois-ci. Elle a été retrouvée gisant dans le cellier, morte. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Professeur Violet") {
		plot = "Après avoir déterré tant de sarcophages, </b>Professeur Violet</b> a découvert que la mort n'était pas toujours aussi grandiose. Il a été retrouvé gisant dans le cellier, mort. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Révérend Olive") {
		plot = "Une vie de religion n'était peut-être pas assez pour préparer <b>Révérend Olive</b> à aller au paradis. Il a été retrouvé gisant dans le cellier, mort. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	} else if(crime_victim["Name"] == "Comtesse Perle") {
		plot = "Ce n'est pas toujours le riche et vieux mari qui meurt le premier. La <b>Comtesse Perle</b> a été retrouvée gisant dans le cellier, morte. Enquêtez et découvrez qui l'a fait, où, et avec quoi.";
	}
}
// **********************************

	// CHARACTER DIALOG FUNCTION ************
	function charac_dialog(character, dialog) {
		div = document.getElementById("character");
		div.innerHTML = "<div><img src='"+ character + "'><br/><p>''" + dialog + "''</p><br/><input type=\"button\" class=\"action\" value=\"Ok\" onClick=\"notShowCharacter();\" style=\"width:100%;text-align:center;\"/></div>";
		div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
		div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
		div.scrollIntoView();
	}
	// **************************************

// ACTION : MOVE > GOTO *************
function goingto(room_name) {
	player["Place"] = room_name;
	display_room(room_name);
	div = document.getElementById("actionland");
	div.innerHTML = "";
	historic += "<br/>Vous vous êtes déplacé vers " + room_name + ".<br/>";
	var button = document.getElementById('rolldice');
	button.disabled=false;
	home = document.getElementById('game');
	home.scrollIntoView();
	sound_door();
}
// **********************************

// ACTION : MOVE ********************
function move() {
	div = document.getElementById("actionland");
	div.innerHTML = "<h4>SE DÉPLACER VERS :</h4>";
	for(var k=0; k<rooms.length; k++) {
		var room_name = rooms[k]["Name"];
		var string = '<input type="button" class="buttony" value="' + room_name + '" onClick="goingto(this.value);"><br/>';
		div.innerHTML += string;
	}
	div.scrollIntoView();
}
// **********************************

// ACTION : LOOK > Look at ********************
		function lookat(val,is) {
			div = document.getElementById("actionland");
			div.innerHTML = "";
			if(is == "room") {
				var room;
				if(val == "la salle de bal") {
					room = ballroom;
				} else if(val == "la salle de billard") {
					room = billiard_room;
				} else if(val == "la véranda") {
					room = conservatory;
				} else if(val == "la salle à manger") {
					room = dining_room;
				} else if(val == "la fontaine") {
					room = fountain;
				} else if(val == "le vestibule") {
					room = hall;
				} else if(val == "la cuisine") {
					room = kitchen;
				} else if(val == "la bibliothèque") {
					room = library;
				} else if(val == "le salon") {
					room = lounge;
				} else if(val == "la roseraie") {
					room = rose_garden;
				} else if(val == "le bureau") {
					room = study;
				}
				var number = room["hasClue"].length - 1;
				var clue = room["hasClue"][number];
				if(!clue) {
					var dialog = "Vous n'avez rien trouvé.";
					charac_dialog(player["Portrait"], dialog);
				} else {
					var dialog = "Vous avez trouvé " + clue + ".";
					sound_clue();
					charac_dialog(player["Portrait"], dialog);
				}
				historic += "Dans " + room["Name"] + " : " + dialog + "<br/>";
				room["hasClue"][number] = null;
			} else if(is == "suspect") {
				var pawn;
				if(val == "Colonel Moutarde") {
					pawn = mustard;
				} else if(val == "Docteur Lenoir") {
					pawn = black;
				} else if(val == "Monsieur Prunelle") {
					pawn = brunette;
				} else if(val == "Mlle Rose") {
					pawn = scarlet;
				} else if(val == "Mlle Pêche") {
					pawn = peach;
				} else if(val == "Mme Cannelle") {
					pawn = canella;
				} else if(val == "Mme Pervenche") {
					pawn = peacock;
				} else if(val == "Mme Leblanc") {
					pawn = white;
				} else if(val == "Professeur Violet") {
					pawn = plum;
				} else if(val == "Révérend Olive") {
					pawn = green;
				} else if(val == "Comtesse Perle") {
					pawn = grey;
				}
				var size = pawn["hasClue"].length - 1;
				var number = Math.floor(Math.random()*size);
				var clue = pawn["hasClue"][number];
				if(!clue) {
					var dialog = "Vous n'avez rien trouvé.";
					charac_dialog(player["Portrait"], dialog);
					historic += dialog + " (sur " + pawn["Name"] +")<br/>";
				} else {
					var dialog = pawn["Name"] + " " + clue;
					sound_clue();
					charac_dialog(player["Portrait"], dialog);
					historic += dialog + "<br/>";
				}
				pawn["hasClue"][number] = null;
			}
			var button = document.getElementById('rolldice');
			button.disabled=false;
		}
		// ********************************************

		// ACTION : LOOK ********************
		function look() {
			div = document.getElementById("actionland");
			div.innerHTML = "<h4>REGARDER DE PLUS PRÈS :</h4>";
			var room_name = player["Place"];
			var string = '<input type="button" class="buttony" value="' + room_name + '" onClick="lookat(this.value,\'room\');"><br/>';
			div.innerHTML += string;
			for(var k=0; k<suspects.length; k++) {
				var player_place = suspects[k]["Place"];
				if((player_place == room_name)&&(suspects[k]["Name"] != player["Name"])) {
					var player_name = suspects[k]["Name"];
					string = '<input type="button" class="buttony" value="' + player_name + '" onClick="lookat(this.value,\'suspect\');"><br/>';
					div.innerHTML += string;
				}
			}
			div.scrollIntoView();
		}
		// **********************************
	
	// SUGGESTION VARIABLES
	var s_suspect;
	var s_room;
	var s_weapon;
	// ********************
		
	// ACTION  : SUGGEST ********************
	function add_suspect(image) {
		for(var k=0; k<suspects.length; k++) {
			if(suspects[k]["Image"] == image) {
				s_suspect = suspects[k]["Name"];
			}
		}
		div = document.getElementById("actionland");
		var replace = "<img src='"+image+"'/>";
		var string = div.innerHTML;
		string = string.replace("Suspect",replace);
		string = string.replace("suggest_suspect();"," ");
		div.innerHTML = string;
		notSuggest();
	}

	// **************************************
		
	// ACTION  : SUGGEST ********************
	function suggest_suspect() {
		div = document.getElementById("suggestion");
		div.innerHTML = "<h4>Suggérer un suspect</h4>";
		var character;
		for(var k=0; k<suspects.length; k++) {
			character = suspects[k];
			if(character["Name"] !== crime_victim["Name"]) {
				div.innerHTML += "<p id='"+ character["Image"] +"' onClick='add_suspect(this.id);'><img src='"+ character["Image"] + "'><br/>" + character["Name"] + "</p>";
			}
		}
		div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
		div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
		div.scrollIntoView();
	}
	
	function notSuggest() {
		div = document.getElementById("suggestion");
		div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
		div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
	}
	// **************************************
	
	// ACTION  : SUGGEST ********************
	function add_room(image) {
		for(var k=0; k<rooms.length; k++) {
			if(rooms[k]["Pawn"] == image) {
				s_room = rooms[k]["Name"];
			}
		}
		div = document.getElementById("actionland");
		var replace = "<img src='"+image+"'/>";
		var string = div.innerHTML;
		string = string.replace("Lieu",replace);
		string = string.replace("suggest_room();"," ");
		div.innerHTML = string;
		notSuggest();
	}

	// **************************************
		
	// ACTION  : SUGGEST ********************
	function suggest_room() {
		div = document.getElementById("suggestion");
		div.innerHTML = "<h4>Suggérer un lieu</h4>";
		var theroom;
		for(var k=0; k<rooms.length; k++) {
			theroom = rooms[k];
			div.innerHTML += "<p id='"+ theroom["Pawn"] +"' onClick='add_room(this.id);'><img src='"+ theroom["Pawn"] + "'><br/>" + theroom["Name"] + "</p>";
		}
		div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
		div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
		div.scrollIntoView();
	}
	// **************************************
	
	// ACTION  : SUGGEST ********************
	function add_weapon(image) {
		for(var k=0; k<weapons.length; k++) {
			if(weapons[k]["Pawn"] == image) {
				s_weapon = weapons[k]["Name"];
			}
		}
		div = document.getElementById("actionland");
		var replace = "<img src='"+image+"'/>";
		var string = div.innerHTML;
		string = string.replace("Arme",replace);
		string = string.replace("suggest_weapon();"," ");
		div.innerHTML = string;
		notSuggest();
	}

	// **************************************
		
	// ACTION  : SUGGEST ********************
	function suggest_weapon() {
		div = document.getElementById("suggestion");
		div.innerHTML = "<h4>Suggérer une arme</h4>";
		var theweapon;
		for(var k=0; k<weapons.length; k++) {
			theweapon = weapons[k];
			div.innerHTML += "<p id='"+ theweapon["Pawn"] +"' onClick='add_weapon(this.id);'><img src='"+ theweapon["Pawn"] + "'><br/>" + theweapon["Name"] + "</p>";
		}
		div.style.display = (div.style.display == "inline-block") ? "none" : "inline-block";
		div.style.visibility = (div.style.visibility == "visible") ? "hidden" : "visible";
		div.scrollIntoView();
	}
	// **************************************
	
	// INVESTIGATION FLAGS
	var suspect_found = false;
	var weapon_found = false;
	var room_found = false;
	
	// SOLVE FUNCTION ***********************
	function resolve() {
		var guests = new Array();
		for(var k=0; k<suspects.length; k++) {
			if(suspects[k]["Name"] !== player["Name"]) {
				if(suspects[k]["Place"] == player["Place"]) {
					guests.push(suspects[k]);
				}
			}
		}
		if( (!s_suspect) ||  (!s_weapon) || (!s_room) ) {
			alert('Merci de sélectionner tous les éléments nécessaires.');
		} else {
			historic += "<br/>Vous avez accusé " + s_suspect + " d'avoir tué " + crime_victim["Name"] + " avec " + s_weapon + " dans " + s_room + "<br/>";
			div = document.getElementById("actionland");
			div.innerHTML = "";
			if( (s_room == crime_place["Name"])&&(s_weapon == crime_weapon["Name"])&&(s_suspect == crime_suspect["Name"]) ) {
				charac_dialog(crime_suspect["Portrait"],conclusion);
				sound_tada();
				var string = 'window.location = \"cluedo.php\";';
				var a = setTimeout(string,40000);
			} else {
					if((s_suspect == crime_suspect["Name"])&&(suspect_found == false)) {
						for(var k=0; k<guests.length; k++) {
							if(guests[k]["Name"] == s_suspect) {
								suspect_found = true;
								historic += guests[k]["Name"] + " est outré(e) par votre accusation mais n'a pas de véritable alibi.<br/>";
								charac_dialog(guests[k]["Portrait"],"C'est un outrage ! Que quelqu'un lui dise que ça ne peut pas être moi ! ... Quoi ??! ... Alors comme ça tout le monde pense que je n'ai pas d'alibi solide ... Vous entendrez parler de mon avocat.");
								sound_guilty();
							}
						}
					}
						var foundCards = {};
						var found_a_card = false; var fsuspect = false; var fweapon = false; var froom = false;
						// On va parcourir les suspects
						for(var k=0; k<guests.length; k++) {
							// Vérifier leurs cartes
							for(var i=0; i<guests[k]["Cards"].length; i++) {
								// Et on enregistre associativement les correspondances
								if(guests[k]["Cards"][i] == s_suspect) {
									found_a_card = true;
									fsuspect = true;
									// A la carte est associé l'objet suspect
									foundCards[s_suspect] = guests[k];
								}
								if(guests[k]["Cards"][i] == s_weapon) {
									found_a_card = true;
									fweapon = true;
									// A la carte est associé l'objet suspect
									foundCards[s_weapon] = guests[k];
								}
								if(guests[k]["Cards"][i] == s_room) {
									found_a_card = true;
									froom = true;
									// A la carte est associé l'objet suspect
									foundCards[s_room] = guests[k];
								}
							}
						}
						
						var card_showed = false;
						if(found_a_card) {
							do {
								if((fsuspect)&&(fweapon)&&(froom)) {
									// We draw a random number to show to the player a random card
									var k = Math.floor((Math.random()*3)+1);
								} else if((fsuspect)&&(fweapon)) {
									var k = Math.floor((Math.random()*1)+1);
								} else if((fsuspect)&&(froom)) {
									var x = Math.floor(Math.random()*1);
									if(x==0) {
										k=1;
									} else if(x==1) {
										k=3;
									}
								} else if((froom)&&(fweapon)) {
									var x = Math.floor(Math.random()*1);
									if(x==0) {
										k=2;
									} else if(x==1) {
										k=3;
									}
								} else if(fsuspect) {
									k=1;
								} else if(fweapon) {
									k=2;
								} else if(froom) {
									k=3;
								}
								// SUSPECTS
								if(k==1) {
									card_showed = true;
									var speaker = foundCards[s_suspect];
									var message = "J'ai une preuve qui contredit votre accusation.<br/><br/>";
									var image;
									for(var k=0; k<suspects.length; k++) {
										if(s_suspect==suspects[k]["Name"]) {
											image = suspects[k]["Portrait"];
										}
									}
									message += "<center><img src='"+image+"' style='border:none;-webkit-box-shadow: 2px 2px 2px 2px #443F2B;-moz-box-shadow: 2px 2px 2px 2px #443F2B; box-shadow: 2px 2px 2px 2px #443F2B; '/></center>";
									charac_dialog(speaker["Portrait"],message);
									sound_paper();
									historic += speaker["Name"] + " a montré une preuve excluant " + s_suspect + "<br/>";
								// WEAPONS
								} else if(k==2) {
									card_showed = true;
									var speaker = foundCards[s_weapon];
									var message = "J'ai une preuve qui contredit votre accusation.<br/>";
									var image;
									for(var k=0; k<weapons.length; k++) {
										if(s_weapon==weapons[k]["Name"]) {
											image = weapons[k]["Image"];
										}
									}
									message += "<center><img src='"+image+"' style='border:none;-webkit-box-shadow: 2px 2px 2px 2px #443F2B;-moz-box-shadow: 2px 2px 2px 2px #443F2B; box-shadow: 2px 2px 2px 2px #443F2B; '/></center>";
									charac_dialog(speaker["Portrait"],message);
									sound_paper();
									historic += speaker["Name"] + " a montré une preuve excluant " + s_weapon + "<br/>";
								// ROOMS
								} else if(k==3) {
									card_showed = true;
									var speaker = foundCards[s_room];
									var message = "J'ai une preuve qui contredit votre accusation.<br/>";
									var image;
									for(var k=0; k<rooms.length; k++) {
										if(s_room==rooms[k]["Name"]) {
											image = rooms[k]["Image"];
										}
									}
									message += "<center><img src='"+image+"' style='border:none;-webkit-box-shadow: 2px 2px 2px 2px #443F2B;-moz-box-shadow: 2px 2px 2px 2px #443F2B; box-shadow: 2px 2px 2px 2px #443F2B; '/></center>";
									charac_dialog(speaker["Portrait"],message);
									sound_paper();
									historic += speaker["Name"] + " a montré une preuve excluant " + s_room + "<br/>";
								} else if((suspect_found==true)&&(weapon_found==true)&&(room_found==true)) {
									alert('Erreur : vous avez gagné, mais ça ne marche pas correctement. Désolé.');
									card_showed = true;
								}
							} while(card_showed==false);
						} else {
							var size = guests.length - 1;
							var k = Math.floor(Math.random()*size);
							var phrase = "Je crains que personne ici ne puisse vous contredire à ce sujet.";
							historic += "Personne n'a pu vous renseigner concernant " + s_suspect + ", " + s_room + ", ou " + s_weapon;
							charac_dialog(guests[k]["Portrait"],phrase);
							sound_lose();
						}
				}
			}
			var button = document.getElementById('rolldice');
			button.disabled=false;
		}
	// **************************************
	
// LUCK SOLVE FUNCTION ***********************
	function lucksolve() {
		if( (!s_suspect) ||  (!s_weapon) || (!s_room) ) {
			alert('Merci de sélectionner tous les éléments nécessaires.');
		} else {
			historic += "<br/>Vous avez accusé " + s_suspect + " d'avoir tué " + crime_victim["Name"] + " avec " + s_weapon + " dans " + s_room + "<br/>";
			div = document.getElementById("actionland");
			div.innerHTML = "";
			if( (s_room == crime_place["Name"])&&(s_weapon == crime_weapon["Name"])&&(s_suspect == crime_suspect["Name"]) ) {
				charac_dialog(crime_suspect["Portrait"],conclusion);
				sound_tada();
				var string = 'window.location = \"cluedo.php\";';
				var a = setTimeout(string,40000);
			} else {
					if((s_suspect == crime_suspect["Name"])&&(suspect_found == false)) {
						for(var k=0; k<suspects.length; k++) {
							if(suspects[k]["Name"] == s_suspect) {
								suspect_found = true;
								historic += suspects[k]["Name"] + " est outré(e) par votre accusation mais n'a pas de véritable alibi.<br/>";
								charac_dialog(suspects[k]["Portrait"],"C'est un outrage ! Que quelqu'un lui dise que ça ne peut pas être moi ! ... Quoi ??! ... Alors comme ça tout le monde pense que je n'ai pas d'alibi solide ... Vous entendrez parler de mon avocat.");
								sound_guilty();
							}
						}
					} else if((s_weapon == crime_weapon["Name"])&&(weapon_found == false)){
						var k=-1;
						do {
							k = Math.floor(Math.random()*11);
						} while (suspects[k]["Name"] == crime_victim["Name"]);
						weapon_found = true;
						historic += "Vous avez visé juste avec " + s_weapon + " car personne n'a pu vous montrer de preuve contradictoire.<br/>";
						charac_dialog(suspects[k]["Portrait"],"Je crois que vous avez mis le doigt sur quelque chose. Personne n'a de quoi contredire votre supposition concernant "+ s_weapon +".");
						sound_found();
					} else if((s_room == crime_place["Name"])&&(room_found == false)) {
						var k=-1;
						do {
							k = Math.floor(Math.random()*11);
						} while (suspects[k]["Name"] == crime_victim["Name"]);
						room_found = true;
						historic += "Vous avez visé juste avec " + s_room + " car personne n'a pu vous montrer de preuve contradictoire.<br/>";
						charac_dialog(suspects[k]["Portrait"],"Je crois que vous avez mis le doigt sur quelque chose. Personne n'a de quoi contredire votre supposition concernant "+ s_room +".");
						sound_found();
					} else {
						var foundCards = {};
						// On va parcourir les suspects
						for(var k=0; k<suspects.length; k++) {
							// Vérifier leurs cartes
							for(var i=0; i<suspects[k]["Cards"].length; i++) {
								// Et on enregistre associativement les correspondances
								if(suspects[k]["Cards"][i] == s_suspect) {
									// A la carte est associé l'objet suspect
									foundCards[s_suspect] = suspects[k];
								}
								if(suspects[k]["Cards"][i] == s_weapon) {
									// A la carte est associé l'objet suspect
									foundCards[s_weapon] = suspects[k];
								}
								if(suspects[k]["Cards"][i] == s_room) {
									// A la carte est associé l'objet suspect
									foundCards[s_room] = suspects[k];
								}
							}
						}
						
						var card_showed = false;
							do {
								// We draw a random number to show to the player a random card
								var k = Math.floor((Math.random()*3)+1);
								// SUSPECTS
								if((k==1)&&(suspect_found==false)) {
									card_showed = true;
									var speaker = foundCards[s_suspect];
									var message = "J'ai une preuve qui contredit votre accusation.<br/><br/>";
									var image;
									for(var k=0; k<suspects.length; k++) {
										if(s_suspect==suspects[k]["Name"]) {
											image = suspects[k]["Portrait"];
										}
									}
									message += "<center><img src='"+image+"' style='border:none;-webkit-box-shadow: 2px 2px 2px 2px #443F2B;-moz-box-shadow: 2px 2px 2px 2px #443F2B; box-shadow: 2px 2px 2px 2px #443F2B; '/></center>";
									charac_dialog(speaker["Portrait"],message);
									sound_paper();
									historic += speaker["Name"] + " a montré une preuve excluant " + s_suspect + "<br/>";
								// WEAPONS
								} else if((k==2)&&(weapon_found==false)) {
									card_showed = true;
									var speaker = foundCards[s_weapon];
									var message = "J'ai une preuve qui contredit votre accusation.<br/>";
									var image;
									for(var k=0; k<weapons.length; k++) {
										if(s_weapon==weapons[k]["Name"]) {
											image = weapons[k]["Image"];
										}
									}
									message += "<center><img src='"+image+"' style='border:none;-webkit-box-shadow: 2px 2px 2px 2px #443F2B;-moz-box-shadow: 2px 2px 2px 2px #443F2B; box-shadow: 2px 2px 2px 2px #443F2B; '/></center>";
									charac_dialog(speaker["Portrait"],message);
									sound_paper();
									historic += speaker["Name"] + " a montré une preuve excluant " + s_weapon + "<br/>";
								// ROOMS
								} else if((k==3)&&(room_found==false)) {
									card_showed = true;
									var speaker = foundCards[s_room];
									var message = "J'ai une preuve qui contredit votre accusation.<br/>";
									var image;
									for(var k=0; k<rooms.length; k++) {
										if(s_room==rooms[k]["Name"]) {
											image = rooms[k]["Image"];
										}
									}
									message += "<center><img src='"+image+"' style='border:none;-webkit-box-shadow: 2px 2px 2px 2px #443F2B;-moz-box-shadow: 2px 2px 2px 2px #443F2B; box-shadow: 2px 2px 2px 2px #443F2B; '/></center>";
									charac_dialog(speaker["Portrait"],message);
									sound_paper();
									historic += speaker["Name"] + " a montré une preuve excluant " + s_room + "<br/>";
								} else if((suspect_found==true)&&(weapon_found==true)&&(room_found==true)) {
									alert('Erreur : vous avez gagné, mais ça ne marche pas correctement. Désolé.');
									card_showed = true;
								}
							} while(card_showed==false);
				}
			}
			var button = document.getElementById('rolldice');
			button.disabled=false;
		}
	}
	// **************************************
		
	// ACTION  : SUGGEST ********************
	function suggest() {
		div = document.getElementById("actionland");
		div.innerHTML = '<h4>ACCUSER :</h4><a onClick="suggest_suspect();">Suspect</a><br/><a onClick="suggest_room();">Lieu</a><br/><a onClick="suggest_weapon();">Arme</a><br/><br/><p class="yes" onClick="resolve();">OUI</p> <p class="no" onClick="suggest();">NON</p>';
		div.scrollIntoView();
		sound_bell();
	}
	// **************************************
	
// ACTION : ANSWERING *****************************
function answering(suspect,object) {
	div = document.getElementById("actionland");
	div.innerHTML = "";
	for(var k=0; k<suspects.length; k++) {
		if(suspects[k]["Name"]==suspect) {
			var phrase;
			var memory = -1;
			var nothingfound = true;
			for(var i=0; i<suspects[k]["Knowledge"].length; i++) {
				if(suspect==object) {
					memory = suspects[k]["Knowledge"][i].search("Je");
					if(memory !== -1) {
						var phrase = suspects[k]["Knowledge"][i];
						charac_dialog(suspects[k]["Portrait"], phrase);
						historic += suspects[k]["Name"] + " vous a dit : " + phrase + "<br/>";
						sound_knows();
						nothingfound = false;
						var button = document.getElementById('rolldice');
						button.disabled=false;
						break;
					}
				} else {
					memory = suspects[k]["Knowledge"][i].search(object);
					if(memory !== -1) {
						var phrase = suspects[k]["Knowledge"][i];
						charac_dialog(suspects[k]["Portrait"], phrase);
						historic += suspects[k]["Name"] + " vous a dit : " + phrase + "<br/>";
						sound_knows();
						nothingfound = false;
						var button = document.getElementById('rolldice');
						button.disabled=false;
						break;
					}
				}
			}
			if(nothingfound) {
				var phrase = "Je suis désolé(e) je ne sais rien concernant "+ object;
				charac_dialog(suspects[k]["Portrait"], phrase);
				sound_ting();
				var button = document.getElementById('rolldice');
				button.disabled=false;
			}
		}
	}
	
}
// ******************************************

// ACTION : ASKING *****************************
function asking(suspect) {
	div = document.getElementById("actionland");
	div.innerHTML = "<h4>Questionner "+suspect+" sur :</h4>";
	for(var k=0; k<suspects.length; k++) {
		if((suspects[k]["Name"]!==crime_victim["Name"])&&(suspects[k]["Name"]!==player["Name"])) {
			var player_name = suspects[k]["Name"];
			var string = '<img src="'+suspects[k]["Image"]+'" /><input type="button" class="buttony" value="' + player_name + '" onClick="answering(\''+suspect+'\',this.value);"><br/>';
			div.innerHTML += string;
		}
	}
	for(var k=0; k<weapons.length; k++) {
		var weapon_name = weapons[k]["Name"];
		var string = '<img src="'+weapons[k]["Pawn"]+'" /><input type="button" class="buttony" value="' + weapon_name + '" onClick="answering(\''+suspect+'\',this.value);"><br/>';
		div.innerHTML += string;
	}
	div.scrollIntoView();
}
// ******************************************
	
// ACTION : ASK *****************************
function ask() {
	div = document.getElementById("actionland");
	div.innerHTML = "<h4>QUESTIONNER :</h4>";
	var room_name = player["Place"];
	for(var k=0; k<suspects.length; k++) {
		var player_place = suspects[k]["Place"];
		if((player_place == room_name)&&(suspects[k]["Name"] != player["Name"])) {
			var player_name = suspects[k]["Name"];
			string = '<input type="button" class="buttony" value="' + player_name + '" onClick="asking(this.value);"><br/>';
			div.innerHTML += string;
		}
	}
	div.scrollIntoView();
}
// ******************************************

// ACTION : LUCK ****************************
function luck() {
	sound_magic();
	el = document.getElementById("overlay");
	el.innerHTML = "<img src='sparkle.gif'/>";
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
	el.scrollIntoView();
	// This launches after the music
	var interval = window.setInterval(function(){
		el.innerHTML = "";
		el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
		div = document.getElementById("actionland");
		div.innerHTML = "";
		var drawing = Math.floor((Math.random()*4)+1);
		// YOU ARE MOVED TO A RANDOM PLACE
		if(drawing == 1) {
			var room;
			do {
				var k = Math.floor(Math.random()*11);
				room = rooms[k]["Name"];
			} while(room == player["Place"]);
			goingto(room);
		// A RANDOM QUESTION IS ASKED
		} else if(drawing == 2) {
			var suspect;
			var object;
			var k = Math.floor(Math.random()*11);
			suspect = suspects[k]["Name"];
			var x = Math.floor((Math.random()*1)+1);
			if(x==1) {
				var i;
				do {
					i = Math.floor(Math.random()*11);
				} while((suspects[i]["Name"] == player["Name"])||(suspects[i]["Name"] == crime_victim["Name"]));
				object = suspects[i]["Name"];
			} else if(x==2) {
				var i = Math.floor(Math.random()*10);
				object = weapons[i]["Name"];
			}
			answering(suspect,object);
		// A RANDOM CARD IS SHOWED
		} else if(drawing == 3) {
			var i;
			do {
				i = Math.floor(Math.random()*11);
			} while((suspects[i]["Name"] == player["Name"])||(suspects[i]["Name"] == crime_victim["Name"]));
			s_suspect = suspects[i]["Name"];
			var j = Math.floor(Math.random()*10);
			s_weapon = weapons[j]["Name"];
			var k = Math.floor(Math.random()*11);
			s_room = rooms[k]["Name"];
			lucksolve();
		// A RANDOM CLUE IS FOUND
		} else if(drawing == 4) {
			var drawtype = Math.floor((Math.random()*1)+1);
			var type;
			var object;
			if(drawtype==1) {
				type = "room";
				var k = Math.floor(Math.random()*11);
				object = rooms[k]["Name"];
			} else if(drawtype==2) {
				type = "suspect";
				var k = Math.floor(Math.random()*11);
				object = suspects[k]["Name"];
			}
			lookat(object,type);
		// THE DICE IS REROLLED
		} else if(drawing == 5) {
			rolldice();
		}
		window.clearInterval(interval);
	},1000);
}
// ******************************************

// PROBLEMES : accusation n'affiche pas les icones - écrire le reste des textes