import AddForm from "./AddForm";
import QuoteList from "./QuoteList";
import './App.css';

const theQuotes = [
	{
		"quote": [
			{
				"sentence": "Niets voorzeggen! Ik wil mezelf pijnigen",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anton, er wacht een vrouw op je... in de badkamer",
				"author": "Annelieke"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anton kan dat",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan zit je naar tekst te kijken alsof het een afbeelding is",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "High fives zijn altijd gepast",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wilde je even met Danny spelen?",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Drommels!",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als ze technologie ontwikkelen waarmee ze hond naar mens kunnen omzetten, dan is Marc-Marie de chihuahua",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Stel je voor... 34 Andy's",
				"author": "Diede"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Van alle mensen die bij Yoast rondlopen is Irene niet de ergste om er 20 van rond te hebben lopen",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik begon serieus te denken aan de Windows phone, en toen begon ik te lachen",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee! Nee!",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "/b wordt het een puinhoop mee",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "/b is nooit een oplossing",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien is Anton wel Jezus",
				"author": "Annelieke"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Review is de nieuwe soa: overal verspreid",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Minder schoen, meer doen",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "André Rieu is eigenlijk een beetje de popster van het oude volk, toch?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "If it works for 'banana', it works for everything",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vraag me af wanneer er boeken komen met instructies over hoe je ze moet gebruiken",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Cuijk Noord of Cuijk Moord?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan krijg je langzaamaan zo'n Donald Duck-kledingkast",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Out plugin is fine, or we will plug you out",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wilde zeggen 'Over massagraven mag je geen grappen maken', maar dat heb ik zelf laatst ook gedaan",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Koffie doet leven",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "CodeClimate? More like KlootClimate",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je gaat sneller door auto's heen dan Taylor Swift door vriendjes heen gaat",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb vet verplaatst met kennis",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat zijn nou van die functies die je 's nachts in een donker steegje tegenkomt",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben eigenlijk een heel slecht marketingslachtoffer",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat je eigenlijk wil, is niet een jacuzzi, maar een life-size thermosfles waar je in kunt zitten",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je kunt A/B-testen door een paar Denen in Guantanamo Bay te droppen en te kijken wie het gelukkigst is",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We slaan de interventie gewoon over. We huren meteen een psycholoog in",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat ik naar Denemarken ga verhuizen. Mijn readability is 'god'",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Van de Sound of Music gaan we spontaan synchroon typen",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anton-robot will take care of it",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Nederlands? Que?",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Serieus, de duivel kan lessen bij jou nemen",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is nep-Lego",
				"author": "Ravi"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had geen zin om alles een voor een in mijn winkelwagentje te klikken, dus toen heb ik een javascriptje geschreven",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je bier kunt brouwen, dan kun je ook water bij een pak koekjes gooien",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is geen auto! Dat is een paasei!",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kun je dat even in slow motion doen?",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet het concreet maken, maar dan op een heel abstract niveau",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Och jee!",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan de LAN-man",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is hetzelfde als dat Anton zegt 'van een begrafenis wordt je niet vrolijk', en dat jij dan zegt 'ja, maar een crematie is ook niet leuk'",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat zei je dan? 'Hoofddoekjes, ik lust ze rauw'?",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is wel een raam voor gevorderden",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zo... Thijs is de nieuwe Bob",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Onthoud: het is geen poef, het is een doosje",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is met een communistisch regime ook: als je het volgens de regels doet, is alles makkelijk",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent eigenlijk gewoon een beetje, zeg maar, de hoer van het bedrijf",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Context moet je opbouwen door context te krijgen",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Duitsers zeggen meestal niet dat ze iets nodig hebben. Die pakken het gewoon",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het leven is mooi. Ik wou dat ik een prinsesje was",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alsof je terug bent in de baarmoeder",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat PvdA komt makkelijker van zetels af dan van theezakjes",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zou zelfs in een container willen wonen",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "'Undefined' is ook defined",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Soms moet je even getrold worden",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heb je nou nooit de behoefte om een verbinding te voelen met de hardware waarmee je werkt?",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan ga ik nu weer verder met stoepkrijten",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben in een algemene staat van haat. Dat kwam door de smoothie die vanmorgen in mijn voet gleed... En niet lachen!",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De meeste nieuwe mensen hebben nog geen mooi hoofd",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat ik daar een dwarslae-zie",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Pas maar op, Andy! Ik eet je op!",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Avondrood, banaan in de sloot",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, dan had je toch bakker moeten worden. Dan kun je ook elke ochtend je meel checken",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het was dat... of piemels",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan pak ik wel het kontje",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wil je naar mijn logic kijken?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is leuk in een boek, niet in de code",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je hebt dadelijk de structuur van mijn schoenzolen in je gezicht staan",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat is belangrijker? Koeien hebben of koeien hebben?",
				"author": "Manuel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik moest net een wind laten, en ik denk dat er een beetje jus is meegekomen",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alsof er een snorkel uit je oor komt",
				"author": "Diede"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ceekwake is net als naar het toilet gaan: in een keer moet je",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die stofzuigerslang is niet gemaakt om op te zitten",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh, het is een stekkerdoos. Ik dacht dat je een staafmixer in je handen had",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ze moet wel mijn gelul aankunnen",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "If there is a Danny, there is a way",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Wil je AUB je slurf van mijn monitor afhalen?",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben soms ook best grappig, alleen hebben jullie dat nooit door",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom gaat die knaap niet zo snel?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh, kut, ik moet naar huis blugguruguuhbllluu",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is een commit van Anton, en ik geloof dat Anton niet drinkt, dus er moet wel wat logica achter zitten",
				"author": "Anoniem"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben tenminste wél hard",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I just grabbed her buy the lipstick",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Andy was aan het wippen op Jip",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Uit de repo, uit het hart",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is niet hacky, dat zijn pure skills",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oude schilders moeten eerst dood voordat ze gewaardeerd worden",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Always blame Danny",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Michiel ging slaan met dat ding, en toen dacht ik 'Ik ben een samoerai'",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De string wordt toch op elk punt aangeraakt",
				"author": "Herre"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit klinkt goed. Even mijn bril opzetten",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zet er 'free candy' op en je komt een heel eind",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jij was de hond, dat is bewezen",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Tering, wat heb jij een blokhoofd",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I want to reincarnate as an iPhone",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Heb je Bob's 'D' groter gemaakt?",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom ben ik soms zo gehandicapt met technologie?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je 'D' is wel mooi",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit spel haat mij",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil ook een kind van Bob",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je krijgt hier toch gewoon een slappe lul van",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "O, hé, Andy is ineens niet meer lelijk",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had 'RB' fout geschreven",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "29 en nu al een eindbaas",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Herre, ik begreep dat jij een git magician bent...",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kunnen we jou niet hierheen rebasen?",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nu ik weet dat het 'aubergine' heet wil ik het niet meer. Ik vind aubergine echt een matige groente",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wie gehydrateerd wil blijven en zich te goed voelt voor kraanwater, die moet pijn lijden",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben jouw bijzettafel",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jouw global is groter dan die van mij",
				"author": "Diede"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Schiet op, offer een zondaar",
				"author": "Taco"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een library's dood is de ander z'n brood",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had heel even het gevoel dat je mij water ging geven. Ik voelde me heel even een plant",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben je je slang kwijt",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien doe ik morgen mijn tutu aan",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, nee, die gaat er niet op",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien is Jaro wel heel lekker",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Table, table table:nth-child(odd), table table table, table table table table:nth-child(odd){/*css*/} table:nth-child(odd), table table, table table tabl:nth-child(odd), table table table table {/*css*/}",
				"author": "Herre"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "You can't solve an issue if you don't recognize it as an issue",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb zin om spaghetti naar iemand toe te eten",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een aardbei is toch hetzelfde als een paprika?",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat als ik in Taco's arm had gebeten, ik een lekkerdere taco had gehad",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "WIl je alsjeblieft niet zo door je neus naar me lachen?",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jullie zijn hier lekker aan het pairen, dus dan dacht ik: dan gaan wij hier lekker... eh... staan pairen",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga even slingers zoeken want mijn leven is een feestje",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We ondersteunen het wel, maar het werkt niet",
				"author": "Diede"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is toch fijn, he, als je iemand onder je hebt",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Yarn link is evil",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "He, verdomme, ik heb een rood kruis",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als een developer is een rood kruis hebben niet erg, eh...",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben een toverfee. Ik ben een toverfee",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "En als je een kroket uit me trekt ben ik een tover-FEBO",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waar moet ik die euro in stoppen, Andy",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kom op, bob barbatruc",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben je ook een transformer, dat je gaat uitklappen?",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het klopt wel, maar het moet eigenlijk iets anders zijn",
				"author": "Manuel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lekker naar Andy kijken",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil het niet verder slopen, terwijl ik het probeer te repareren",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Omar, you are always partying",
				"author": "Andrea"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Die is mooi! Gooi maar tegen zijn neus",
				"author": "Taco"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "'Friemelen'",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ze vinden mij de Hodor van kantoor",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als dat soort dingen gebeuren, dan denk ik... wah hee?",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is gewoon een geëvolueerde sinaasappel",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij hoeft van mij niet dood, maar hij hoeft ook niet per se te blijven leven",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan bijna een café beginnen zoveel tabs heb ik open",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben nog steeds de rijst van mijn auto-ongeluk aan het opruimen",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga deze mergen... en dan smeer ik me in met chocopastaaaaaaa",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik opende dat ding in een ding en toen kreeg ik een dingetje",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We kunnen wel zijn handen eraf hakken maar dan gaat hij gewoon met zijn stompjes lopen klooien",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Puur door het woord 'oscillation' lijkt het zo'n Tell Sell-afslankding",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "En God dacht: een framboos ziet er nog niet vreemd genoeg uit, dus ik geef 'm ook nog haar",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ah, m'n koe is leeg! Laat ik m'n geit eens proberen. Misschien komt daar ook iets uit",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had nooit gedacht dat ik Andy live op tv zou vermoorden",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb wel mensen op hun rug zien liggen met hun voeten omhoog",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zou bijna pyromaan worden, als ik zoiets zie",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De schildpad dacht 'fuck it, ik heb honger, mweegeehhhh'",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht dat je intelligent was",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wilde serieus mijn ogen eruit trekken met een lepel",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als Bram zo door gaat, verliest hij zijn sentencebordrechten",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn tas piept. Ik kan niet eens meer mensen besluipen op straat",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind mijn laptop eng",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Super kut voor je...",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Daar hebben we al een algoritme voor. Dat heet Irene",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je had net allebei je ogen uitstaan",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We begrijpen elkaar goed. We zeggen alleen andere dingen",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nu kun je wel een cavia met een straalmotor maken",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is een slavink met een hoofd en een wortel",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Is die veer van diamant gemaakt, ofzo?",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "HAHH, ben jij even naïef",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij lacht mij button niet uit",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Manuel, nu moet jij ook sparklen",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is wel mijn thee, maar ik houd er niet van",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die logica pas ik altijd toe op friet... enzo",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zeg hier wel 'fixes #8021', maar dat doet het natuurlijk niet",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn mentale filter functioneert gewoon niet goed",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We are team button. We do what we have to do under pressure",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Het blijkt dat, met instructies, ik dit kan",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I guess you don't want to hear about buttons for at least a couple of months",
				"author": "Andrea"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Dit is voor het eerst in ongeveer anderhalf jaar dat ik me schuldig voel",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik was je muze",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oké, ik ga even m'n oor eraf snijden",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Perensap! Yes!",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik voel me nu al 5% meer communist",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jezus, kiek 'm omhoog gaan",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan word ik liever geraakt door een Noord-Koreaanse nucleaire raket",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anders moet ik de rest van m'n leven mosselen eten. Daar word je ook niet vrolijk van",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan Ben echt niet nog een keer zien. Ik heb Ben al te vaak gezien",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben is echt van de Amerikaanse emo-tv",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het getal is 79. Een cavia wil ik zien",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had even een referentiecavia nodig",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Is de kans dat de mediaan transseksueel is niet heel groot?",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Voor de overlevingskansen zou het handig zijn als de gemiddelde Duitser zich ongeslachtelijk kan voortplanten",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom heeft alles bij jou schurft?",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het lijkt net alsof Mickey Mouse een affaire heeft gehad met een cavia",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is echt de Arnold Schwarzenegger onder de cavia's",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik snap niet dat nog niemand Luke Skywalker heeft gepakt",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben tegen dierenmishandeling, maar die ik zou ik toch in de Maas laten zakken",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zie je wat ik aan het doen ben, of lijkt het alsof ik in zijn oog aan het poken ben?",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet toch eerst een cavia zien, voordat je weet hoe die zich verhoudt tot het getal 79",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "-€1 verlies, dat is €1 winst",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Stop met stijgen!",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik neem druiven alleen tot me in mijnige toestand",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ten opzichte van alleen maar omrollen, is dit een verbetering",
				"author": "Taco"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alles wat gewoon een array zou moeten returnen, returnt alleen een paar stringetjes",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb liever koekjes in mijn winkelwagen, dan een winkelwagen in mijn koekjes",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die blindedarm zag ik niet aankomen",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vooral Bob is hardnekkig",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is echt lelijk, en waarschijnlijk heb ik het zelf geschreven",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als Travis een persoon was, zou ik zo bij hem langs gaan om hem te vragen waar de fuck hij mee bezig is",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb geen zin om je actief te stoppen",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zelf nadenken is leuk, maar doe wat ik zeg",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben niet gek, ik ben een vogel",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn oma is echt fucking racistisch",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er staan twee patatjes in mijn kantoor te overleggen",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe schrijf je paaaattatjes?",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat was vest delivery service",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Miauw",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Coffee is more a life approach than a drinking habit",
				"author": "Andrea"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Je zei woorden. Ik heb er niets van opgeslagen",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jimmy, waar is je plank?",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Toen had ik opeens een appel tussen mijn benen",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Damn it, ik wil niet op het sentencebord",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bram kan in de hoek staan. Dan is 'ie een echte hoeker",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nice! Dan ga ik overal 'BBQ' achter zetten",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn frieten zijn nog niet goed genoeg uitgedeukt. Die van Michiel wel",
				"author": "Marieke"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Laten we alle bomen vervangen door betonnen varianten",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat probeer je te injecteren?",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I'll be black",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Mensen stalken is altijd een goede besteding van de tijd",
				"author": "Manuel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik riep nog 'heroïne!'",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Tutududutututudu",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Heb je jezelf niet in de fik gestoken? En broodjes kroket gegeten?",
				"author": "Karin"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn ouders hebben me iets te vaak laten vallen",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "M'n been trilt! Oh, dat is Anton",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Tegelijkertijd wil je niet mensen arresteren om hun hoofd",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je wil zo'n man toch matchen met iemand met een bomgordel",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Rrrrrrrrrrrrlll pffff",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Het ziet eruit alsof het een man is die een slechte tijd heeft gehad in het Midden-Oosten",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hopelijk heb ik niets stukgemaakt. De kans is groot van wel",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maarten is een hyperbool",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die sentences zijn echt als ijsbergsla op een pannenkoek",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "My butt was clenched",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil een draadloze föhn hebben, zodat ik mijn oksels kan droogföhnen",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, het is refrein, couplet, refrein, trompet, verkort, couplet, refrein, trompet, verkort, couplet, refrein, trompet, refrein",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als die je niet in je slaap komt vermoorden, dan weet ik het ook niet meer",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga echt lachen als 'ie wordt doorgereden door een ice cream van",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is alexander! Jij wilt sense!?",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn oma is gewóón racistisch",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alle ouderen zijn toch gewoon racistisch?",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ze hebben gewoon een andere levensvisie",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik voel me geberacistischt",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben ik nou echt zo blind?",
				"author": "Alexander"
			},
			{"sentence": "Ja!",
			"author":  "Patrick & Jimmy & Bram" }
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben Duitser, dus dat is racistisch",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Aan het begin van seizoen 1 dacht ik 'njèèè', maar nu denk ik 'mwa'",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Watskebuzyburt in de skuur?",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat? No mummie? Hier sarcofaag",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een 21ste eeuwse Frank Sinatra.",
				"author": "Alexander"
			},
			{
				"sentence": "Wie?",
				"author": "Jimmy"
			},			
			{
				"sentence": "Scooter.",
				"author": "Alexander"
			}

		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is geen sentence. Het is de waarheid",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als ik jou mond-op-mondbeademing moet geven omdat je een hartstilstand krijgt door een lachaanval, dan hoeft het van mij niet meer",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben wel blij dat ik nog niet op het naziturfbord sta",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben de beste nazi van jullie allemaal",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is wel een lekkere lange",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht je doet even een blitzkriegje",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Stief als een hark",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hoopte zo op een hobbeltje zo",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien kunnen we hem preventief platspuiten",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het lijkt wel een barbapapa met externe wimpers",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, het is eigenlijk 'roempia', maar ja",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat een Duitse herder gewoon naar schnitzel smaakt",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Travis draait echt op een aardappel",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan moet je niet feesten in een paraboolvlucht",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hobbel, hobbel, en je bent er",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waar willen ze dat je die stick inplugt?",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil twee pijpen aan elkaar moffelen",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben sowieso heel blij met alles",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij lijkt ook niet op zichzelf",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Slenderben",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een image tag is geen doosje",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar dat is maar goed ook. Ik bedoel... ja...",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nazi, nazi, nazi, (...) nazi! Ja, 30!",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben denk ik iets te veel klootzak voor BHV",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn buik is een watercooler",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat aapje ga je niet aan mij geven, die houd je zelf maar",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan me niet herinneren dat ik zoveel van je hoofd zie",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar dan FACKING WARNINGS",
				"author": "Herre"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als die op zijn dan hebben we echt een fruitetend spook ergens",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eerlijk is eerlijk, Bassie en Adriaan komt eigenlijk van mij af",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ze waren vroeger blijkbaar dol op splinters",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij heeft zijn aubergine uitgeveegd",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Whuoahh... er zit nog schurft aan deze vork",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik twijfel er niet over dat hij een smeerlap is (...) Maar eerlijk is eerlijk, hij heeft nog geen oorlog veroorzaakt",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "'Letterlijk' als in 'figuurlijk'",
				"author": "Herre"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Terrasjes is een deel van waarom het leven leuk is",
				"author": "Marieke"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die installatie is uit het jaar 8 voor christus",
				"author": "Karin"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Daar hebben de apostelen zelf de lucht nog ingeblazen",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien dat de slavernij weer terug komt, dan kunnen we het sinterklaasfeest weer rechtvaardigen.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom is die en die persoon nog niet ontslagen?",
				"author": "Marieke"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jij kwam binnen en toen had ik er weer een beetje zin in.",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Caroline, Danny betast je.",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er was een tijd dat ik heel goed een Turk kon nadoen.",
				"author": "Omar"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is veels te vrijdag.",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Fack jullie.",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Danny maakt meer kapot dan je lief is.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben bijna even groot als dat een helicopter hoog vliegt.",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De toppers lijkt me best wel leuk.",
				"author": "Maike"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kijk eens even naar de voeten van Felice.",
				"author": "Monique"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zat gewoon onzin uit te kramen, ik was gewoon even mezelf.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga terug naar mijn paleis.",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Toen je begon met praten dacht ik even dat het niet voor mijn ogen bedoeld was.",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als het Grieks is, dan is het dus niet door een Zuid-Afrikaan geschreven, want die hebben het niet ontdekt.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hee Jip, kom je me schoppen?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Otto, die heet toch niet Otto?",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Settings staan bij Settings.",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit is echt iets waarmee je bij de SOA-kliniek komt, ik heb me toch last van een Whomse.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het bekt niet zo lekker als Chlamydia.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Danny is Dushanthi's persoonlijke klok.",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou niet van een klok met push notificaties.",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die mensen klinken als een fluitketel.",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent een held.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vang die shit dan, hond.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is dat retarded question markje daar.",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zo proper.",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hachee is toch iets anders dan stoofvlees? 'Wat is het verschil dan?' Geen idee.",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zet thuis graag een lamp op mijn kop, waardoor het lijkt dat ik een interventie heb met god.",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou van het leven en van het werk",
				"author": "Manuel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hmm, leuk uitje. Hmblmblmbl",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Moeten we preventief de kinderbescherming bellen?",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij heeft zich thuis helemaal schraal gelikt",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er zat dermate veel stof in dat we voor elke Yoaster een trui konden breien",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Patrick heeft mij gisteren onzedelijk geknuffeld",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn biologische boterhammenklok is kapot",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Cats and boots and cats and boots and cats and boots",
				"author": "Siri"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Geld is belangrijker dan pettiness",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hey, kijk daar! Een vliegende spermacel",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat is een readme?",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een spermicopter",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Door dat... Bob heeft opeens standaarden",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Had ik nou maar niets gezegd",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zit Anton nog in Yoda?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bob heeft Caroline op zijn rug",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kom terug bij Yoast en ik neem mee... mijn oogkleppen",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bram, kun je me thuis afzetten? Er komt een kerstboom voor me binnen",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat een beetje ducttape Alexander niet zou misstaan",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zag je auto niet staan. Ben je met de bezem?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet niet te lange woorden gebruiken. Dan krijgt Patrick hoofdpijn.",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb altijd een flesje alcohol bij me",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kobe kan later niet studeren omdat ik deze tas heb",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Blijf van mijn Omar af",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kreeg Omar gister van Irene",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik twijfel nog steeds of dat een vent was of niet, die vrouw",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het moet wel leuk blijven",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het niet erg om te liggen",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben op de Moszkowicz",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Slow internet? Wat?! Zit 'ie een beetje m'n internet te dissen",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jullie gaan voedsel voedselen?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kom op man... Je bent geen 11 meer",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat ziet er eng uit. Waarom is dat rood?",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het spijt me echt heel erg, je bent echt het grootste probleem",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het zijn de dev-geesten van Peter",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh, buk eens",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een heb grote druif. Past bij jou",
				"author": "Chris"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Thuis ben ik altijd bang dat Taco ineens naast m'n bed staat omdat ik me niet op afwezig heb gezet",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er kriebelt iets aan m'n been",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb ontdekt dat mijn huid droog is, en mijn trui ook",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Fuck alles!",
				"author": "Herre"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Draag je truien in bad?",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Phrasing!",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik was mezelf aan het spelen",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Godverdomme",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom zou ik dingen leuk vinden?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat mogen jullie uitvechten. Daar ga ik me niet mee bemoeien. Ik zou het doen",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk niet dat Google daarvan wakker ligt",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik weet zeker dat mijn agenda duurder is dan jouw auto",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Omar valt uit elkaar",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is niet de activatorbanana, maar de validatorbanana",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb er wel zin in, om mijn ogen uit te krabben",
				"author": "Diede"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is 4 uur, ik ga weer werken",
				"author": "Manuel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb het idee dat ik onder stroom sta (...) er kriebelde iets aan mijn been",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wij hebben de Miss Montreal onder de Sonossen",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik snap dit niet. Laat ik een ananas voor m'n punani houden",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Had ik nou maar een kaptein Iglo gedaan",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik moet altijd aan Captain Iglo denken, Bob, met z'n sexy baard",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bananenbrood, WTF!?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Is 'happy' echt met H-A-P-P-Y?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We gaan niet dood van duplicate code",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat? Wat? Ik hoor een hele hoop geblabla",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wij zijn goede mensen. Wij sluiten bugs niet op. We laten ze vrij",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Tsja, ken je broden",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Huh, heb ik dat gezegd!?",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh ja, Andy! Andy is my man!",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Heeft hij een kind of een hond?",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heeft hij een mopshond of een kind met dreadlocks?",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Iedereen is op een bepaalde manier toch Omar",
				"author": "Anton"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben je een mens of een panda?",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "My pee is higher than yours, na na na na na",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het bijzonder dat je hier kunt filteren op dead queers",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lesbi honest...",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Muren zijn de bergen van vroeger",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had ook op Caroline kunnen zitten",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jimmy, je verpest alles",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Aaah! Blijf van m'n random codes af",
				"author": "Ravi"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anders maakt Jimmy zijn werk morgen wel af",
				"author": "Ravi"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alabama, waar je moeder ook meteen je zus en je tante kan zijn",
				"author": "Bram"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Doei, olifant",
				"author": "Ravi"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn Anton",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij zegt in feite dat je geen appels hebt terwijl ze voor je neus liggen",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Weet ik veel! Ik kan geen technisch gesprek voeren",
				"author": "Michelle"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe groot is de kans dat twee collega's in één week iets breken? Statistisch gezien ben ik volkomen veilig",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "December is de maand van vallen en niet meer opstaan",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dacht je dat die buik van mezelf was? Dat zijn al die bolletjes",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "U kiest ervoor om in Wijchen te gaan wonen. Dat is niet ons probleem",
				"author": "Apple guy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben niet zo bijdehand",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb nog nooit zo hard gelachen om mijn eigen kutgrap",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het probleem is dat ik heel erg van mijn stabureau houd, maar niet van staan",
				"author": "Manuel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lucifer Linthorst",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Beelzebob",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Kiekebob",
				"author": "Jip"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Veel woorden, geen issue",
				"author": "Ben"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Toen keken we gewoon hoe vaak Caroline in die ruimte paste, en dat was 1.2x",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Don't 'lieve schat' me",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben Irenes feeder",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik schrok van die plant",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het wel zorgwekkend dat een vrachtwagen leniger is dan ik",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik pak Caroline wel even. Die is wat harder",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, nee.. Sterf, kutding",
				"author": "Danny"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is eigenlijk een soort van poes-bericht dus",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan ga ik nu even voor Monique een blikje drinken",
				"author": "Andy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij kan echt verwonderd dom kijken",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zit je weer aan poep te denken, Caroline?",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is ook gewoon een lekker woord: ravijn",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Schrijf je dat eigenlijk met een lange ij?",
				"author": "Michiel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar daarvoor hebben we de illuminati",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij mag blij zijn dat ze hem niet in hebben laten slapen",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "'Close' is daadwerkelijk het sluiten...",
				"author": "Alexander"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe wist je dat het een vrouw was, en geen Pool?",
				"author": "Bob"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Gezien de logica is het best logisch",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Uiteindelijk voert iedereen zijn taak uit, dus iedereen heeft een uitvoerende taak",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Of ik met je doos wil spelen",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Composer install is niet genoeg!",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is zeker zo'n Indiër. Die kunnen dat allemaal",
				"author": "Annabel"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe lang heb ik je al niet aangeraakt",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ieuw, ieuw, ieuw, een spin!",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wil je a.u.b. niet je vocht over me heen gooien?",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het spannend om in de back-end te zitten",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Voel je één met het worstenbroodje",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Onduidelijk, maar helder",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Developing is copy/pasting",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Je kunt zo lekker je ballen onder je voet houden en dan zo ronddraaien",
				"author": "Maarten"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Caroline is niet de hardste poef",
				"author": "Diede"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Leg mijn schaamhaar terug!",
				"author": "Chris"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar ik heb wel zin in een frikandel",
				"author": "Maarten's laptop"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heb je een kind in je?",
				"author": "Thijs"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nog een fijn leven iedereen",
				"author": "Manuel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mollicitatie",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ziet eruit als een kale man met haar op zijn achterhoofd",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Beter een surprise-meeting dat een surprise-iets-anders",
				"author": "Jimmy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien toch iets minder bier drinken, Andy",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oke, GitHub is stuk, ik ga naar huis",
				"author": "Jip"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Gelegenheidsracist",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I'm only racist when I can make friends with it",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Oh Bob... He who creates spaces that are undetectable",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Maar Patrick ging net op hem zitten",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga gewoon eens boos kijken, en dan kijken of er iemand gaat lachen",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die heeft een GPS-chip in z'n hoofd",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je nu niet stopt, ga ik geen Finding Nemo met je kijken",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb een verdomd goed stukje code geschreven. Nu kijken of het werkt.",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "DJ Henk is mijn toetje vanavond",
				"author": "Jesse"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben mijn connectie-ober kwijt",
				"author": "Jesse"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben blij dat ik je leven moeilijk maak",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is een goede sport om in te shirten",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben een windowsmeneer",
				"author": "Danny"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lang leve shit die werkt!",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben heel benieuwd hoe de Nederlandse vlag eruit ziet",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had ruzie met mijn haar",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je ziet er gewoon heel Duits uit",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je koffie in een koffiefilter doet, verwacht je dat er koffie uitkomt, maar er kan ook een auto uitkomen",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent gewoon zo'n vergeetbaar persoon",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wou dat we gewoon met onze hersenen konden interfacen met de computer",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou niet van kijken",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat ben je aanwezig. Bijna irritant",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe werkt een spreadsheet?",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben altijd winderig, dus dat komt goed",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat een klungel",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het makkelijker om aardig te zijn tegen computers dan mensen",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Iets bjoetifoel!!",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dus je bent gewoon langzaam?",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Gutenberg is stom, Anton!",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nu is Jimmy mijn redelijk schuine onderbuurman",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik verbaas me altijd over hoeveel impact emoji's hebben op de samenleving",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb even een identiteitscrisis",
				"author": "Manuel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben niet op een boot!",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het doet niets, het voegt alleen functionaliteit toe",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bolletje vet?! Hoe noem je me nu?",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben je de pony's aan het pesten?",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het voelt af en toe echt als zo'n tamagochi.",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een kijken met wat voor grafherrie ik jullie kan verblijden.",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn hoofd staat 3x op die pagina.",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heb je dat niet wel eens dat je denkt 'Pew pew bitchslap'?",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb een Alexander-momentje",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind 28 km autorijden al lang",
				"author": "Danny"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Everything for the process!",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb wel potgrond, dat is net zo lekker!",
				"author": "Danny"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die man werkt volgens mij voor de NS. Hij heeft een coole snor!",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is geen irritatie, maar een stommitatie.",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil gewoon weten of ik gemount ben",
				"author": "Anton "
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik was blij als een aap met zeven lullen",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Sorry, heb jij een professionele carrière?",
				"author": "Sjardo"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "You are a smart man, also lazy",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "How can you be floppy when I touch you there?",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben echt dol op mijn lichaam",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou ook van mijn lichaam, want er is zoveel om van te houden",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wie wil de bonen zijn bij mijn spek?",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Echt, jij gaat zo hard dood nou, he",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "It sucks when you have to depend on other people",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Het lijkt mij wel leuk totdat iemand de billen moet sponzen",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik was aan het scrollen, en toen kwamen die billen voorbij",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga dood aan een wortel",
				"author": "Jip"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Smooth jazz for smooth programming",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Dus jij bent bi-objectueel?",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan niet alles tegelijk met ctrl z",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Al ik 17 kilo afval, dan moet ik stenen gaan meenemen als het waait",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "#codemusclememory",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Alexander! Stop met wafels googelen",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Did you just call Daniel a small Ikea?",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik had vanmorgen een klein ongelukje met mijn elektrische tandenborstel",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom is het internet zo goed en ik zo slecht?",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom zijn we naar een pizza aan het luisteren?",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wilde paniek! Ik moet verplicht dinosaurusgames spelen",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Iedereen zit aan elkaars dongles",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik praat onzin. Gelukkig",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je hoeft er niet in te werken, je moet gewoon alles verplaatsen",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "It's not coffee. It's black water",
				"author": "Andrea"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik word 10% van de tijd herkend als mens",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er komt een slang uit zijn neus",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oehhh... drugs",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Dan kun je dus ook luchtbedopblaassimulator doen",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn vingers doen pijn. Wat ben je hard",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Denk je dat je nog adem krijgt als ik op je ga zitten?",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jullie zijn een beetje gek",
				"author": "Caroline"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "First it was gross, but now it is circumfixed",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Kan ik niet gewoon doen alsof ik een jas ben?",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Volgens mij ben ik in de overgang",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn vingers doen pijn. Je tepels zijn scherp",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Muziekje is net afgelopen: 'Anus'",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alexander Batty Boy",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Babyproeven zijn altijd goed",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je weet wat ze zeggen! Liever een pop-up in je face, dan een pop-up in je anus.",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je ermee gaat knutselen, prima",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Irene, kun jij als manager van dit team een boze brief schrijven naar JavaScript?",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Niks mis met een lage standaard. Dat kan soms best praktisch zijn",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I just imagine a video of a screaming goat",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Pull je nou een Jimmy?",
				"author": "Igor"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Doe eerst stap 2, dan stap 1",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Grandma nazi",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Mijn oma als koorddanser is stabieler",
				"author": "Danny"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht heel even dat Anton de airco probeerde te highfiven",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe weet jij wat de tijdzone van mijn linkerarm is, Irene?",
				"author": "Danny"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We hebben een lane nodig met 'needs Anton'",
				"author": "Irene"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "In Soviet Russia websites optimize you",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "SEOvjet",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je mag me gewoon in bikini fotograferen",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan hebben we 3 palindromen in deze ruimte: Sonos, Bob en Alexander",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het zou leuk zijn als we alle bolletjes vervangen door Siobans die hun duimen opsteken",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht dat ik de grap maakte, maar jij maakte de grap",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vardump-driven development",
				"author": "Martijn G"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mag ik huilen terwijl ik het doe?",
				"author": "Herre"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is een grote vergisting",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die zijn toch dood",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind dat je alles overal in mag stoppen, zolang je het maar wel vertelt",
				"author": "Laura"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kontjes eten moet ook gebeuren",
				"author": "Anne"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik weet niet of er een andere man is",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het ook fijner als ik 'm uit m'n hoesje haal",
				"author": "Jip"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kijk even naar je eigen naam",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anton ik zit op jouw ding",
				"author": "Omar"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I've had too much coffee and I've gone a bit weird",
				"author": "Jono"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "If you need me, I'll be disappearing into the void of the Windows laptop",
				"author": "Andrea"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "'Fijn' en 'veilig' zijn nou niet direct woorden die ik associeer met Sjardo",
				"author": "Tim"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er liggen alleen maar chipskruimels in de ananas",
				"author": "Siobhan"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Chipsmomenten kun je niet plannen, die ontstaan",
				"author": "Fleur"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het ging goed hier totdat Caroline binnenkwam",
				"author": "Siobhan"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom is jouw vliegtuig een helikopter?",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Youtube denkt dat ik extreem-rechts ben",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is de meest Poolse cartoon die ik ooit heb gezien",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Daar ben ik mee gestopt want ik vond het te leuk",
				"author": "Omar"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan het gaatje niet vinden Gert",
				"author": "Joost Redelijk"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan woon je echt by far het dichtste bij",
				"author": "Tim"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Sommige dingen doen we in Yoast en sommige doen we in blokjes",
				"author": "Omar"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als we dit doen coden we ons alleen maar harder de afgrond in",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er zit helemaal geen Q in 'changed'",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat een verschrikkelijk leven heb je dan. Gelukkig krijg je er wel voor betaald",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er heet er eentje Salamandick",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Omdat je niet length of null kunt doen, dipshit",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Naar zijn jullie dan Jeur of Flimmy?",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zoek even naar alle veganistische producten bij Albert Heijn en kijk hoe bruin ze zijn",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "800 aanslagen per minuut is volgens mij de enige manier om overbevolking te voorkomen",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is wel echt zo dat hoe meer drank je aangeboden krijgt, hoe sneller je dronken wordt",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "100 jaar geleden dachten mensen dat ze van de pest konden genezen door in een bad met broden te gaan liggen",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die mogen in de hel bij de Kardashians gaan wonen",
				"author": "Alexander "
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind dat we Natalia op tour moeten sturen",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zat me vanochtend ineens te bedenken: als wij getrouwd zouden zijn, dan zou jij Irene Moors zijn",
				"author": "Jip"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "In theorie klopt mijn function. JavaScript klopt niet",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat ze dan zo'n dikke Duitser in dienst hebben die een dikke scheet komt laten",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is echt net alsof mijn computer parkinson heeft",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent beter dan een kikker",
				"author": "Daria"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Meer zielen, minder bier",
				"author": "Harm"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als iemand problemen heeft over mijn ongenuanceerde meningen: suck it!",
				"author": "Alexander"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is fijn om een teringlijer te zijn",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Natuurlijk, ik ben geen psychopaat",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eigenlijk moeten we allemaal schoenen met klittenband hebben. Dan zijn we van al die problemen af",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dus GPL is eigenlijk een psycho licentie",
				"author": "Omar"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is hetzelfde dat als je een nieuwe auto koopt en dat ze er dan bijzeggen: als hij ontploft, dan kun je gewoon met de bus gaan.",
				"author": "Dieter"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vlug spuiten Gert, we moeten voor elf uur klaar zijn",
				"author": "Bianca"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb ook een vis, maar die gaat maar niet dood",
				"author": "Wessel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent net op tijd, ik had m'n hand al op de zak",
				"author": "Tim"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik doe rare dingen met m'n voeten.",
				"author": "Anton"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is heel makkelijk maar het moet niet mis gaan",
				"author": "Wessel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet er gewoon drie tegelijk in je mond steken",
				"author": "Wessel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou niet van ribbels.",
				"author": "Martijn"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als jullie graag een filmpje van mijn achterkant willen dan mag dat",
				"author": "Lisanne"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben meer een Stan dan een Martijn",
				"author": "Inge"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet het maar zo zien: je moet blij zijn dat je het niet hebt gezien",
				"author": "Laura "
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht de hele tijd al 'wat doet dat mes op mijn bureau?', maar nu het er twee zijn snap ik het",
				"author": "Harm"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is prachtig... Het is niet prachtig, maar ",
				"author": "Jip"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat ik het gewoon negeer tot het weg is",
				"author": "Harm"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee ik ben netflix oma",
				"author": "Wessel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Moet jij hier nog zijn of kan ik zo alles uitdoen?",
				"author": "Patrick"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ah, fuck, dat was m'n koffie, niet de muis",
				"author": "Harm"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waar wil je 'm in hebben, Niels?",
				"author": "Erwin"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er gaat hier blijkbaar gespoten worden zometeen",
				"author": "Luc"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Amerikanen zijn toch allemaal miljonairs met pech",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil niet beweren dat ik principes heb die ik sterk zou verdedigen",
				"author": "Martijn"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb een voorliefde voor paal op 't moment",
				"author": "Ben"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh man, ik ademde in!",
				"author": "Tim"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien dat 'ie nog stijver wordt als je 'm in de koelkast doet",
				"author": "Michelle"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar dit is toch wat terrorisme is?",
				"author": "Omar"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jonge, ga toch lekker nadenken over dingen",
				"author": "Sjardo"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Gaat Wessel dan zijn trui weer uittrekken?",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht ik doe maar wat en dan vraag ik aan jou of je wat voelt",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet ook niet op dat ding van Ben gaan zitten",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Sommige mensen moeten gewoon een spuitje",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar dat is toch logisch! Of niet?",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jij bent eigenlijk een beetje de Drake van Yoast",
				"author": "Tim"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan moet je nu dus even Omar doen",
				"author": "Martijn"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij heeft de vingers niet meegenomen",
				"author": "Tim"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Danny heb jij een hele lange?",
				"author": "Alain"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is geen sentence. Het is wel een sentence, maar ik vind het geen sentencewaardige sentence",
				"author": "Fleur"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk altijd maar zo: nee heb je, uilen kun je krijgen",
				"author": "Jesse"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het altijd leuk als er mooie vrouwen bij Yoast komen werken",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Natuurlijk werkt het! Het is code!",
				"author": "Anton"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Sometimes I'm human",
				"author": "Samah"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Dan moeten we hier dus diezelfde logica doen, maar zonder de extra logica",
				"author": "Anton"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "That's some delicate ball handling",
				"author": "Daniel"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ja, maar dit is ook geen site voor gebruikers",
				"author": "Kai"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Rood is inderdaad een kleur",
				"author": "Herre Groen"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ontdekking van de dag: Mijn stoel is eigenlijk een mini-achtbaan",
				"author": "Natalia"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat was een snelle... ook wel eens lekker",
				"author": "Luc"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Werken met PHP 5 is als werken met poep van oude dinosaurussen",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De paper parser pakt een paper en parsed 'm naar een parsed paper.",
				"author": "Maarten & Hans-Christiaan"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "You like looking at your brain instead of using it.",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ziek zijn is geen excuus om geen superhero te zijn",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Onze transitie was geheel wolfloos. Daar waren we destijds ook al zo trots op!",
				"author": "Jesse"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Al die hangbejaarden!",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil je in tweeën zien splijten",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit ziet er heel lekker uit allemaal. Het zal wel weer helemaal niks zijn",
				"author": "Omar"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik herken Siobhan's voorhoofd overal met JPEG-compressie",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alexander, mag ik even met je stoel spelen",
				"author": "Alain"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik draai hier even aan, moet jij zeggen wanneer je wat voelt",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het lijkt een letter 's' met een blindedarm",
				"author": "Jimmy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Joost is echt zo'n chopper",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het werkt, het is echt verdrietig",
				"author": "Anton"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zonder #wp-rant zou dit bedrijf in zijn eigen woede imploderen",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Airconditioning heeft altijd zoveel promise, maar het maakt het bijna nooit waar",
				"author": "Anton"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anton... Shave",
				"author": "Andrea"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Waarom zei je dat nou? Ik krijg het spontaan warm",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er staan allemaal mannen in pakken buiten",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik was gewoon vervelend",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou niet van een kale muffin",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lekker roeien met de kraan dicht",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Why do you moeilijk?",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mensen zijn echt dure dingen",
				"author": "Maarten"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je weet gewoon dat God je verlaten heeft als Herre vensters gaat refreshen in de hoop dat het dan wel werkt",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I forked Alex's repo, could that cause problems?",
				"author": "Maarten"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "I sleep on the attic with my parents now",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Blijkbaar heeft mijn lichaam besloten dat ik heroïne doe",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je een combinatie van snake en scrabble speelt, kan dat wel",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Uhh, ik ben een slang",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als het niet kan rijden kan het glijden",
				"author": "Gertron"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben echt heel blij dat ik er maar twee keer in sta",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Irene is een beetje zacht",
				"author": "Taco"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ieuw, dit zakje voelt heel vies",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heilige uitwerpselen, wat een vies weer",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wachtte te lang. Ik wilde een grapje maken over je moeder",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jeeej, weekeeend, op morgen na",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I'm jealous of people that don't need to drink to enjoy themselves",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Degene die dat bedacht heeft verdient echt een vork in zijn oogbal",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een pixel is één pixel",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een pixel is géén pixel",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het woord 'obfusceert' zegt het al: daar zit 'verkeerd' in",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We need to document what swagger is",
				"author": "Diede"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Dit is gewoon door een brandend gebouw lopen en zeggen waar er overal fik is, heerlijk",
				"author": "Thijs"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja dat is leuk, het idee dat die mensen hier al jaren voor betaald krijgen iets minder",
				"author": "Tim"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "In de tussentijd dat mijn PR ergens brak ik de sloot heeft gelegen...",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, nee, dat is context. Dat mag niet",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heb jij een masterassociatie met mij?",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb weer eens een nemesisissue, hoor",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hé, tuig",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Twitter is soort van de Nokia van social media",
				"author": "Tim"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hé Jeroen, waarom ben jij vierkant?",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien moet je gewoon douchen",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I don't speak English",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "General Settings and Major Issue walk into a bar",
				"author": "??"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Wil jij mijn primaatje zijn?",
				"author": "Jip"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oké, we moeten wel enige standaarden aanhouden, hè?",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is echt heel fijn om nu een keer de proprietary bitches te kunnen zijn, met alle respect voor bitches",
				"author": "Omar"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom hebben we geen buitenbureaus met cocktailbar?",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien zijn we gewoon bittere ouwe lulletjes",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik voel me nu net zo'n developer, met al die schermpjes open",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er zijn 7 miljard mensen op deze aardbol, en dat zijn er eigenlijk gewoon een beetje te veel",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alleen mensen met een goede standaard mogen kinderen opvoeden",
				"author": "Maarten"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ah, de liefde die m'n moeder me nooit gegeven heeft",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik begin steeds meer te vermoeden dat jullie vakantie hebben van mij i.p.v. ik van het werk",
				"author": "Jannes"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eigenlijk ben ik gewoon op kleine knaagdieren aan het kauwen",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind jou bijzonderder dan Jip",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Door jou word ik helemaal wit en plakkerig",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit was ook echt een hele domme opmerking",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Misschien slaapt Irene in de koelkast elke nacht",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zet de airco eens hoger ... dan voel ik hem helemaal niet meer",
				"author": "Jeroen & Thijs"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wil je zitten? Je bent zo oud",
				"author": "Wessel"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan moet je je body vol met tekst gooien",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent toch Andy",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben ook een mini-mens",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die van Ben eruit en die van Alexander erin",
				"author": "Maarten"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die van mij komt niet zo makkelijk omhoog",
				"author": "Jannes"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Op de een of andere manier gaan je organen hiervan trillen",
				"author": "Patrick"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zeg echt domme dingen",
				"author": "Patrick"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan gewoon niks zeggen zonder dat het een sentence is",
				"author": "Patrick"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Was het een zweetreet of een zwanus? Met zwoksels!",
				"author": "Jannes"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is af en toe fijn om een eikel te zijn",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Driekwart van wat ik zeg is niet gemeen bedoeld, het komt alleen zo over",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "En dat is waarom ik in mijn leven nooit in een body bag terecht wil komen",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Leuk dat je het probeert",
				"author": "sport-Martijn"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat was geen sentence. Dat was een moment",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Rigoreus is altijd een goede keus",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, als je gewoon the claw even installeert...",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Igor zit de hele tijd tussen mijn ballen",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alles is dood",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ah, dus zo bestrijden ze bejaarden",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als het goed is, is het nu goed",
				"author": "Herre"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maarten is een vogel",
				"author": "Lisanne "
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eigenlijk ben jij gewoon een digitale Danny",
				"author": "Andy."
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eigenlijk alles default naar de default.",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Potverdorie is de nette versie van kak",
				"author": "Bob"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben niet gestresst. Ik ben gewoon agressief",
				"author": "Harm"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik doe gewoon aan luchtverplaatsing, en ik los problemen op",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je kunt ook query monitor installeren. Dan zie je de errors in ieder geval niet",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb het koud",
				"author": "Ben"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Because Darth Vader has Mickey Mouse ears",
				"author": "Bob"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Liever consequent kut dan sporadisch goed",
				"author": "Martijn (Trainer)"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "In mijn hoofd is alles aan het schreeuwen",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "The C in CSS stands for JavasCript",
				"author": "Andrea"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Het is belangrijk om de agenda's van je collega's te stalken",
				"author": "Johanna"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alle lego poppetjes zijn kaal met een gat in hun hoofd",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben hier gewoon de grootste zeiksnor die er is",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Woo kapitein Zeiksnor",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vaak kun je het dan ook nog, maar dat is omdat je slim bent",
				"author": "Johanna"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat ik een slechte dictator zou zijn, een maniak",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik durf niet met van die puppy ogen naar je te kijken. Ik ben bang dat je me anders laat inslapen",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We hebben een pettenprobleem",
				"author": "Omar"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het hoeft niet waar te zijn om leuk te klinken",
				"author": "Patrick"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het wel leuk hoe hij af en toe een soort van kleuter kan zijn",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die vrouw bestaat uit lijstjes",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik had jou vanochtend echt aan moeten rijden",
				"author": "Niels"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nou Igor, ik wil je beste Irene zien.",
				"author": "Joost"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bij mijn vorige baan had ik geen stoel",
				"author": "Sanne"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik krijg hier gewoon een neksnor van",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben verslaafd aan jullie. Man-slaved.",
				"author": "Maarten"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben echt een veertienjarig meisje",
				"author": "Martijn"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hoor 14 jarig meisje, en jij denkt sappig verhaal.",
				"author": "Jesse"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maak van jouw probleem Luc z'n probleem",
				"author": "Tim"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Duitsers kunnen echt helemaal niks.",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil mij nog best wel als goudvis gaan verkleden hoor",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik noem dat altijd een vlees-tondeuse",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er zijn hier keiveel WCs! Heb je deze al geprobeerd?",
				"author": "Milon"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ruik naar frikadel, ik doe ff een vest aan",
				"author": "Wessel"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ga ervoor, even tussendoor, op kantoor",
				"author": "Milon"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik word getriggerd als die erin gaat",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wilde positief zijn, maar het lukt niet. VERDOMME!",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je je been nou in je nek legt, dan is het nog naarder",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zat ie er bijna in hè",
				"author": "Lisanne"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "En jij hebt mooie balletjes!",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Is dat een 'dev thread'?",
				"author": "Johanna"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh nee, ik zit vast onder het bureau",
				"author": "Johanna"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zo hard sloeg ik mijn dochter vanochtend ook",
				"author": "Joost R"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zal ik jou eens wat vertellen over de kleur wit?",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom kijk je nu naar mij alsof je billenkoek wil, Alexander?",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik schijt in je beker met melk",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Spreek je Chinees? Nee. Maar je hebt wel een banaan in je mond.",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Is dat tandpasta of ben je gewoon blij me te zien?",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wil je mijn oogbal opeten?",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De auto van de prullenbak",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Stomme editor",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom is het leven oneerlijk?",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Meer patches, meer beter, meer geld",
				"author": "Jip"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik probeer hier gewoon rustig te werken, word ik aangevallen door een yoyo",
				"author": "Laura"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Voor iemand van 50, praat hij best wel hip",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, Danny gebruikt drugs",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Voor pillen moet je bij Danny zijn",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat als ik in die tijd geleefd had, dat ik als vader van Jezus aangewezen was",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, mijn piek is niet mooi",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Want natuurkunde, he?",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Denk eigenlijk dat het woord 'blokkade' hier voornamelijk in de weg zit",
				"author": "Joost"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Daar moet je even de IPA key invullen",
				"author": "Kai"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er komt zoveel vocht uit mijn neus dat ze een waterput willen aanslaan",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Van operettes word je ziek",
				"author": "Daria"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Donkey bridge is geen Engels, toch?",
				"author": "Andy"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat de weg nat is wil niet zeggen dat het geregend heeft ",
				"author": "Anton"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lisanne staat helemaal versteld van haar eigen ledematen",
				"author": "Jannes"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bob is geen psychopaat!",
				"author": "Danny"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "True or balls",
				"author": "Bob"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb geen dingen gezien die wijder openstonden",
				"author": "Alexander"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I'm going to try that, I mean, I do have balls",
				"author": "Bob"
			}
		],
		"year": 2019,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "De oprisping smaakte eigenlijk lekkerder dan het origineel",
				"author": "Anton"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Meestal voel ik wel alles",
				"author": "Inge"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik werk niet graag heet",
				"author": "Inge"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het enige wat vlees eet in deze kamer is de plant",
				"author": "Michiel"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik moet gaan, want mijn auto gaat zo",
				"author": "Andy "
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Herre is ook gewoon een beest hè?!",
				"author": "Thijs"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij krijgt gewoon een hele grote van me",
				"author": "Thijs"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Geef mij dan een golden turd!",
				"author": "Thijs"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben een seriemoordenaar",
				"author": "Hans-Christiaan"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We waren altijd bang dat het moeilijk zou worden met een baan vinden en dat ik dan leraar zou moeten worden",
				"author": "Johanna"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Iedereen zit hier met m'n ballen te spelen",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb even een augurken momentje. Mijn hele bewustzijn is overgenomen door augurken",
				"author": "Anton"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je blijft altijd mijn 007 hoor",
				"author": "Louise tegen Taco"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Blue-band is boter, boter is blue-band.",
				"author": "Josee"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, jij blijft zitten, Buffer Boy",
				"author": "Lisanne"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben bijna vergeten hoe lang je bent.",
				"author": "Natalia (tegen Igor)"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We hebben wel in ons hoofd allemaal drama's",
				"author": "Manuel"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, maar het gaat er om welke spermacel bij de eicel komt",
				"author": "Anton"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind deze mandarijnen heel erg shiny.",
				"author": "Hans-Christiaan"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Toen ik in Indonesië uit het vliegtuig stapte, snapte ik eindelijk waarom mensen sporten leuk vinden",
				"author": "Arnoud"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb m'n ogen dicht maar m'n blik is open",
				"author": "Wessel"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik verklaar jou bij deze een boontje",
				"author": "Martijn"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Weet jij van de spuitbus?",
				"author": "Anton"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Geloof nou gewoon in de destructieve kracht van Laura",
				"author": "Tim"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar ik heb ook puppy eyes.",
				"author": "Igor"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "...zeker als het sentence bestand open staat, dan moet ik nu even normaal doen.",
				"author": "Igor"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat is de snelheid van jouw baard?",
				"author": "Daria"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, we doen gewoon rare dingen.",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb Manuel-syndroom, denk ik.",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een vrouw in bed is altijd kunst",
				"author": "Patrick"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als ik een muur zou zijn dan zou ik niet de Chinese Muur willen zijn. Ik wil niet dat mensen over me heen lopen.",
				"author": "Patrick"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik denk dat het allemaal dan wel meevalt, maar ik ga toch voor de natte onderbroek",
				"author": "Martijn"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "En, zag je Martijns natte onderbroek?",
				"author": "Patrick"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als ik met ballen wil spelen, dan ga ik wel naar huis",
				"author": "Wessel"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat zit je gigantisch met je zak te kletsen",
				"author": "Patrick"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Everyday is BDSM day!",
				"author": "Patrick"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Jullie ruiken allemaal naar komkommer!",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je host slecht is, is alles een DDOS aanval",
				"author": "Herre"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De slug is dus de slug",
				"author": "Luc"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Naast dit bureau kan je makkelijk nog een matras kwijt",
				"author": "Erwin"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is vet en het is saai, het is vet saai",
				"author": "Igor"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wilde eigenlijk onze avatars faceswappen, want ik wilde weten hoe ik eruit zag met haar",
				"author": "Maarten"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb het beste idee van m'n leven: ik ga hier een sticker van maken",
				"author": "Alexander"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zeg het eens, waar moet ik spuiten?",
				"author": "Danny"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kreeg je nou zaad in je oog?",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, sorry, ik kom uit Limburg. Verzekeringsfraude is het eerste waar ik aan denk",
				"author": "Maarten"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan moeten we voor de volgende keer even dingetje dingetje doen",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben nog nooit zo nat geweest!",
				"author": "Inge"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het niet chill om helemaal kapot te gaan",
				"author": "Bob"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kom hier met die glibberige worst",
				"author": "Joost R"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb gisteravond nog een Billy in elkaar gestampt",
				"author": "Tim"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We hebben gewoon geen gat",
				"author": "Inge"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat een smeuïge toggle",
				"author": "Luc"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat een sexy modal",
				"author": "Kai"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "She's my friend and I love her; Can you photoshop her chin really big and her teeth yellow?",
				"author": "Samah"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "We kunnen ook gewoon allemaal in de lucht spugen",
				"author": "Lisanne"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik hou van een lekkere stevige achterkant",
				"author": "Danny"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als iemand een aanslag met een auto wil plegen op Yoast dan zijn wij de pineut",
				"author": "Johanna"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind het leuk om tegen iemand te praten terwijl ik huil",
				"author": "Bob"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het lijkt alsof we keuze hebben, maar eigenlijk hebben we niks",
				"author": "Bob"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eigenlijk moet je de dus een down-upgrade doen",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je bent jezelf nu voorbij, zit je dan op mij?",
				"author": "Milon"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb per ongeluk iets moois gemaakt",
				"author": "Sjardo"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee, ik mag geen hamsters meer eten thuis.",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is niet alsof ik altijd buiten loop met een handdoek ofzo.",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je leeft alsof je arm bent en eet alsof je dik bent",
				"author": "Milon"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jij krijgt de poepveren van Erwin",
				"author": "Luc"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De kans is groter dat ze m'n keel doorlikt dan doorsnijdt",
				"author": "Jimmy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die gast leeft echt in theoretisch happy land",
				"author": "Luc"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zie zo snel geen olifant",
				"author": "Jip"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I think... No I'm not thinking anything.",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind Jono nou niet echt een event",
				"author": "Kai"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hij vindt je gewoon lekker",
				"author": "Bram"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Na deze Bob moeten we wel even een Bob Stop",
				"author": "Fleur"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als we nog een vierde Bob aannemen kunnen we een Bobslee team starten",
				"author": "Martijn"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Krijgt elk gebouw dan z'n eigen Bob?",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is altijd mijn schuld als het regent op woensdag",
				"author": "Josee"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe werkt Google?!",
				"author": "Josee"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oke, ik moet gewoon mijn mond houden",
				"author": "Josee"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb niets bereikt en ik wil niets bereiken",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ga je nog liggen of wa?",
				"author": "Inge"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "EDD was niet olé olé olé",
				"author": "Anton"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I don't like magic.",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Je wil niet weten hoe goed ik haar middelvinger ken",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Beter dan jouw middelvinger opmeten",
				"author": "Jip"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nu lach ik, maar straks is het huilen",
				"author": "Igor"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een brief. Of nee ja, een digitale brief; Een e-mail.",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Parijs is mijn Disneyland",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil nog een keer een class 'Koffie' noemen, dan kan ik een Koffiemock maken voor de test.",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat een harde grappen! Dat verwacht ik niet van jou. Dat moeten we even aanmoedigen!",
				"author": "Igor"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Liever alleen je vingertoppen dan je hele hand",
				"author": "Ben"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zo te zien ben ik een heading geweest",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh oops, vallende boom vulde mijn hoofd aan met appels",
				"author": "Ben"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb nog nooit iemand zo sassy yoghurt zien eten.",
				"author": "Maarten"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Een kip tokt op de achtergrond ; Hey, hoor ik Laura nou lachen?",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben niks",
				"author": "Danny"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben denk ik een dansontkenner",
				"author": "Tim"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als iets me 's nachts komt knuffelen, dan word ik sowieso bang",
				"author": "Danny"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Community zonder Taco, is als taart zonder slagroom",
				"author": "Marieke"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zolang je maar niets scheurt, gaat het goed",
				"author": "Sport-Martijn"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bob heeft de A, dus hij is best wel vervangbaar",
				"author": "Bob"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Josee is zo'n neutraal persoon om te vermoorden",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ow wacht even, er loopt een kat in m'n badkamer",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lisanne, wil je 10 euro verdienen? Enige dat het jou kost is je waardigheid",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Danny is tijdelijk. Pepernoten zijn voor altijd.",
				"author": "Jimmy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jij bent een lief dongeltje hoor",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben er al lang niet meer in geweest",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ontvang gewoon meer kritiek dan complimenten, dus dan word je daar vanzelf beter in",
				"author": "Tycho"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Lieve Laura, zou ik alsjeblieft een een kaasstengel van je mogen?",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jannes kan ballen tekenen.",
				"author": "Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zeg je nou indirect dat je met mij wil spelen?",
				"author": "Laura"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vroeger had je goede ballen, nu maar matige",
				"author": "Martijn"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Holy shit! Dat is dit jaar, maar dan minder slecht (over 2019)",
				"author": "Alexander"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh, we hebben nog wel een kind",
				"author": "Marieke"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar ik ben geen meisje, of jongen, shitttttttt",
				"author": "Tycho"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ga eens kijken of de shit van de nieuwe werknemers op orde is",
				"author": "Danny"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik begin dat WordPress wel geniaal te vinden. Nog even en ik wil ook leren programmeren!",
				"author": "Chaya"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hebrew some beer, but no stemmer.",
				"author": "Jip"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik zie mezelf ook wel als dokter Jannes- Jannes"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Volgens mij ging de kat net af, dus het is tijd om te beginnen",
				"author": "Michiel"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja, Stan sloopt mij op een goede manier <3",
				"author": "Maarten"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik stopte deze zomaar in m'n mond",
				"author": "Anne"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Komt die pannenkoek nog terug of wat?!",
				"author": "Chaya "
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind wel dat pairen in duo's moet",
				"author": "Andy"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Debugging: The detective game where you are the detective, the victim and (most likely) the murderer. ",
				"author": "Alexander"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Italy, Europe, Planet Earth, Milky Way Galaxy, This Universe",
				"author": "Andrea"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Als je vragen hebt, stel ze. Chaya heeft ervaring, en ik ben de baas",
				"author": "Marieke"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Yoast is de meest vergrotende trap van yo",
				"author": "BobL"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nu ik soort van samen met Marieke aan het roer sta kunnen we gewoon samen als Duo Penotti",
				"author": "Chaya"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik weet niet, maar ik zit op een lijn met Satan",
				"author": "BobL"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "CR stands for Coffee Review",
				"author": "Enrico"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Iedereen verdient een Rolf in zijn leven",
				"author": "Kenneth"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb heel veel filmpjes van jongens op mijn telefoon staan",
				"author": "Martijn W"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "sentencezakken",
				"author": "Martijn W"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dus ik pakte zijn frikandel vast, en toen werd ie boos",
				"author": "Maike"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Maar heb je ooit een kip gezien in een korte broek?",
				"author": "Ben"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wauw... Ik was hier niet klaar voor",
				"author": "BobL"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Al die SEOma's",
				"author": "Diede"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je kunt niet alles voorkomen. Je kunt niet alle fouten wegpoetsen. Ik zit niet op curling",
				"author": "Jessie"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben gewoon een code monkey",
				"author": "Igor"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Want uiteindelijk verandert er niet heel veel maar het is op eerste opzicht wel de grootste change ooit.",
				"author": "Herre"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit vraagt om een meer gekantelde stoel",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zit ik van tabjes te switchen, heb ik opeens een rainbow in mijn gezicht",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom heb ik nu Rolf met zijwieltjes in mijn hoofd?",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We leven nu met een gevoel alsof het ieder moment afgelopen kan zijn",
				"author": "Johanna"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wij doen alles op de oprit",
				"author": "Joyce"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik weet niet hoe die variabele werken in de backhand!",
				"author": "BobB"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan kunnen we 'm gewoon zo instellen zodat hij ook voor mensen werkt",
				"author": "Herre"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Enrico, Pizza Pasta is this place that makes pizza. It's basically like a cookie, with some sauce on the cookie",
				"author": "Andrea "
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "As an Italian, I have a genetic fear of bureaucracy",
				"author": "Enrico"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Kunnen PDFs tegenwoordig ook van vrachtwagens vallen?",
				"author": "Diede "
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat ben je toch een heerlijk pragmatisch jongetje",
				"author": "Maarten"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je hoofd doet het goed op een scherm",
				"author": "Jessie"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I was scheduled to go next, cat permitting",
				"author": "Enrico"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "I'd rather not die for Local SEO",
				"author": "Jimmy"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "If @herre can look at this without vomiting, I can have an RC in ~40 minutes",
				"author": "Maarten"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik was de hele ochtend aan het stoeien met die relaties",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vroeger, toen de flippo's nog van steen waren",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oeh hij gaat bewegen, leuk",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bob is even een geit ophalen",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb zoals altijd een aantal vragen",
				"author": "Dieter"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wij hebben echt een databasehygiëne van een junkie",
				"author": "Iris"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Capitalization doesn't help very mug 🇳🇱 ",
				"author": "Lisanne's laptop"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Hoe maak je tijd voor het grote plaatje terwijl je omsingeld bent door kikkers",
				"author": "Herre"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Someone honking their horn in the Netherlands is the last step before killing them",
				"author": "Steven"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil weten of ik access heb omdat ik in een user zit",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oke! Jip is niet meer creepy",
				"author": "Lisanne"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Zo iemand wil je toch een eind de oceaan in slingeren met een trebuchet",
				"author": "Alexander"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hook spaghetti is my belief.",
				"author": "Jannes"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Op een schaal van 'nul' tot 'Lisanne', hoe roze is die jurk?",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "God, mijn bord is nu toch wel heel lang geworden",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mijn hersenen rotten weg terwijl ik praat",
				"author": "Bob L"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik waardeer je mate van luiheid",
				"author": "Igor tegen Marijn"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Herre + Irene = Omar",
				"author": "Luc"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Honger is niets vergeleken met de mentale pijn van deze bug",
				"author": "Manuel"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Baby Yoda zit op mijn rug",
				"author": "Sanne"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb ook nog een twerkende oude man als je dat wil",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ok, het was Irene",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Stuur maar iets...",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mag ik ook mensen renamen? Ik vraag het voor een vriend",
				"author": "Bob."
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Gaan we eerst slapen of gaan we ...",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je stoel is net hoog genoeg dat het op een snor lijkt",
				"author": "Bob L"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We hebben nu een brug pleisters, die gaan we wegwerken",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Komen ze nou eindelijk zijn geit bezorgen?",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan Rolf er niet uitgooien, misschien moet hij er dan maar bij zijn",
				"author": "Dieter"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het wordt nog best een epicje",
				"author": "Dieter"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zag opeens iedereen hangen",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat waren mijn lange bijzonderheden",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mag ik mijn issue delen?",
				"author": "Lisanne"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is een laag slagroom die je eigenlijk niet wilt, omdat je een gezonde taart aan het bakken bent",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Pingetje, pongetje, doe eens een sprongetje",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben even verbijsterd. Er komt een kudde schapen door de straat lopen",
				"author": "Bob"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je moet me niet enthousiasmeren met grijs gebied",
				"author": "Martijn W."
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Poepende Jenkins, dat klinkt als problemen",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb het sentence-document open, zal ik het er zelf even inzetten?",
				"author": "Joost Boomkamp"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben ik een idioot? Nee, sorry, dat stel ik niet ter discussie.",
				"author": "Bob L"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vind alles goed. Zolang het maar geen oude twerkende man is.",
				"author": "Bob L"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nou heb ik een banaan-vriend boven mijn schouder",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Tijd om een bosjesman uit te hangen",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit kan alleen maar goed gaan",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bal! Bal! Bal.. Bal, Bal... Bal!",
				"author": "Thomas (Jip's son, 14 months)"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik kan papier aanbevelen. Naast hangmatten",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Leuk dat je hem ook zo uit zijn kribbe kan halen",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wtf doe ik, ik zit allemaal zooi op mijzelf te smeren",
				"author": "Nolle"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Fuck die thunder",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is kapitein Iglo, maar dan omgedraaid. Thanks Zoom...",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb mijn luikje dicht gedaan, dan hoop ik dat het wat langer licht blijft",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zie heel veel knopjes, ik denk dat ik het ben",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oooh god! Ik heb een redelijke Joost voor de deur staan",
				"author": "Bob"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik zou het gewoon lekker KISSen als ik jou was",
				"author": "Bob"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als een slecht plan werkt, dan is het geen slecht plan",
				"author": "Martijn"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "The code looks Yoasty now, Yoasty-flavored",
				"author": "Enrico"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Objectief vind ik dat",
				"author": "Floortje Rasenberg "
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan moet Papa Rolf het oplossen",
				"author": "Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Never waste a good Jip",
				"author": "Dieter"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ja maar dit was gewoon laag hangend water",
				"author": "Arnoud"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Eindig me",
				"author": "Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Of ik moet javascript schrijven van voor de oorlog",
				"author": "Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Rol, rol rol, rollen naar Rolf",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nou ding dong Herre",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vertrouw op jouw ieniemienie",
				"author": "Bob"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Buiten schijnt de zon, binnen schijnt de Ben",
				"author": "Maarten"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mocht je mij nodig hebben, channel je inner Luc. Misschien ook wel een goede voor algemeen in je leven",
				"author": "Luc"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "You cannot have privilege escalation without privileges",
				"author": "Enrico"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Wat is GitHub?",
				"author": "Nolle"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik schrijf wel met een ander lettertype",
				"author": "Wout"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben gewoon de Anneloes van de sprint",
				"author": "Wouter"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "In practice zal dat wel weer gemarteld worden",
				"author": "Nolle"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als ik die klachten krijg, dan kan ik naar dokter Rolf",
				"author": "Wout"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "There was some miscommunication about Bob's thing",
				"author": "Lisanne"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Can we stop talking about Bob's thing",
				"author": "Dieter"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Is het interessant om Bob z'n ding te showen?",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Oh ik dacht dat het altijd onder de bitterballen zat",
				"author": "Dieter"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I prefer nasty over clever any day",
				"author": "Jip"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Zoom made sure that we miss Rolf's story time",
				"author": "Guido"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "I am Thijs, and I approve this message",
				"author": "Thijs"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ze hadden het gevoel dat ze een dode vis zijn",
				"author": "Daria"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je kunt ook gewoon een hoorn op een zebra plakken",
				"author": "Nolle"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is wel een grote",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Thank you! I don't appreciate it",
				"author": "Petar"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "There are a lot of goats in Bob's life",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "The Danny dance",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "We hebben nu goede programmeurs die spaghetti moeten eten",
				"author": "Joost B"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dit is grote mensen code, heerlijk",
				"author": "Joost B"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik noem projecten altijd Barbapapa's, hoe meer ruimte je ze geeft, hoe meer ruimte ze innemen",
				"author": "Irene"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Die leeftijd heb ik nog niet bereikt dat ik op mn vrijdag ochtend wil gaan puzzelen",
				"author": "Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Nee dat is niet logisch, maar in dit geval wel",
				"author": "Joop"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik heb besloten. Screw trappetjes",
				"author": "Bob"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Let's keep that out of the sentence document. It makes me sounds like a d***.",
				"author": "Bob L."
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "If you don't want to be touched by Sam, that's ok too.",
				"author": "Marieke vd R. "
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Eten jullie maar lekker veel, dan lijk ik dunner",
				"author": "Anne "
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Yesterday was the happiest day of my life because the API tests started working",
				"author": "Konrad"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Shit is leuk, maar concrete shit is toch echt leuker",
				"author": "BobL"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "It's messy and dirty, but it feels like home",
				"author": "Enrico"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "I want to know everything that's in Dieter's head, so that will be a long meeting",
				"author": "BobB"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik kreeg daar gewoon Vietnam flashbacks van",
				"author": "Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is leuk om gewoon ff niet je werk te doen",
				"author": "Nynke"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Het is net campinglife hier",
				"author": "Kenneth & Nynke"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als dit nou ziet, Danny, wil dan ook niet kinderen pakken?",
				"author": "Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wil mensen die anders zijn. 1 Joop is wel genoeg",
				"author": "Joop"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je de kleur groen ruikt met je linkeroor, dan gaat er iets mis",
				"author": "Martijn"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dan maak je toch je eigen sinterklaasvlees...",
				"author": "Diede"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Kut, ik op dingen geklikt",
				"author": "Nolle"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je gaat er echt niet dood aan. Hooguit leggen ze eitjes in je darmwand",
				"author": "Alexander"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Stop met het strelen van Danny's ballen.",
				"author": "Jannes"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I'm Karen, I never would have expected",
				"author": "Leonidas"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Oke ik heb nu een hekel aan mezelf.. Sorry",
				"author": "Josee"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Papa Rolf strikes again",
				"author": "Thijs v.d. H"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Het is niet voor niets dat hier meer boeken over geschreven zijn dan over God",
				"author": "Karin B. "
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We know that front-end is crisis",
				"author": "Konrad"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Tja. Covid.. Alles is een dinsdag",
				"author": "Joost B"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "You're the Harry Potter of scrum masters",
				"author": "Enrico"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ik zie een bepaalde vinger opkomen op mijn hand ",
				"author": "Thijs de Valk"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben mijn eigen Grunt ",
				"author": "Hans-Christiaan"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "We huren gewoon een Leontien in, Taco ",
				"author": "Raymond"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als ik heupen en knieën zie bewegen, dan weet ik wat het is ",
				"author": "Martijn"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Van welk bouwjaar ben jij?",
				"author": "Rolf"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Wat tof dat jullie je zo out there aan het putten zijn ",
				"author": "Thijs de Valk"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ja sorry, wij zijn naar Chinese toetsenborden aan het kijken. Niet op mij letten.",
				"author": "Bob L"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "The Web is a web",
				"author": "Joost"
			}
		],
		"year": 2022,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Opcache is opzich handig. Het is alleen.. Je moet je priemgetallen kennen.",
				"author": "Jannes"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "I had to get scuba certified and descent real deep into their code to find this ",
				"author": "Nolle"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Er is pijn lijden en creperen ",
				"author": "Sportmartijn"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben de afgelopen jaren ook wel wat jaren ouder geworden ",
				"author": "JoostR"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "It's pretty nice working in the office alone, like working at home ",
				"author": "Nolle"
			}
		],
		"year": 2022,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ja, je gleuf zit niet in het midden",
				"author": "Jannes"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "By her saying 'hello' you're already learning PHP by osmosis ",
				"author": "Enrico"
			}
		],
		"year": 2022,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Reanimatie is overal hetzelfde he, maar de lunch niet ",
				"author": "Martijn"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik ben gelukkig een lekkere specerij",
				"author": "Jannes"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Door die scheiding kun je het echt gaan hebben over jouw soep",
				"author": "Dennis"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Waarom heb je een bril nodig als je gaat slapen?",
				"author": "???"
			},
			{
				"sentence": "Anders ziet hij zijn dromen niet",
				"author": "Irene"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Jullie kunnen er gewoon niet tegen dat ik een superieure machine heb",
				"author": "Danny"
			},
			{
				"sentence": "Haha, beste grap van de week, Danny!",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heet je geen Kristel?",
				"author": "???"
			},
			{
				"sentence": "Nee, in het weekend, maar nu niet",
				"author": "Sylvia"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik wordt niet heel opgewonden van servo-geluiden",
				"author": "Jimmy "
			},
			{
				"sentence": "Ik wel",
				"author": "Maarten"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoe oud was Jezus?",
				"author": "Jesse"
			},
			{
				"sentence": "Hij was 0 toen hij geboren werd",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Je had mij ook gewoon even in mijn gezicht kunnen swaffelen",
				"author": "Alexander"
			},
			{
				"sentence": "Niet waar andere mensen bij zijn",
				"author": "Ben"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat mensen vragen wat development inhoudt, en dat je ze dan meeneemt naar een ruimte waar 4 mensen zitten te huilen.",
				"author": "Andy"
			},
			{
				"sentence": "In het donker, met een blikje Redbull.",
				"author": "Harm"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hier past toch gewoon een lijk in?",
				"author": "Jip"
			},
			{
				"sentence": "Ja hoor, twee zelfs",
				"author": "Michiel"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Alex, je bent een eikel. Zeg het maar.",
				"author": "Alexander"
			},
			{
				"sentence": "Alex, je bent een eikel",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "en jij sambal?",
				"author": "Andy"
			},
			{
				"sentence": "Nee, niet persoonlijk",
				"author": "Igor"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Hoezo ben je niet gelovig terwijl Jezus gewoon daar staat? (wijst naar Tim)",
				"author": "Luc"
			},
			{
				"sentence": "Hij is weer opgestaan he. Hij zat net aan de lunchtafel namelijk.",
				"author": "Kai"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Vreemd dat slaap zo fijn is want je maakt er niks van mee",
				"author": "Inge"
			},
			{
				"sentence": "Vreemd maar wel lekker",
				"author": "Tim"
			},
			{
				"sentence": "Net als Rivella",
				"author": "Irene"
			}
		],
		"year": 2019,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Do more. Do better. Do Jip.",
				"author": "Taco"
			},
			{
				"sentence": "Mmmm.",
				"author": "Jip"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Hoe doen jullie dit altijd?",
				"author": "Igor"
			},
			{
				"sentence": "Met bloed, zweet en tranen.",
				"author": "Hans-Christiaan."
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Why is my screen so blurry?",
				"author": "Iolanda"
			},
			{
				"sentence": "You must be stressed",
				"author": "Manuel"
			}
		],
		"year": 2020,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Het is moeilijk om te programmeren en een tompouce op te eten tegelijkertijd.",
				"author": "Hans-Christiaan"
			},
			{
				"sentence": "Focus volledig op je tompouce.",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Non-user facing unicorn!",
				"author": "Manuel"
			},
			{
				"sentence": "Is het dan buttfacing unicorn?",
				"author": "Natalia"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Als je heel sterk wil worden moet je met mij gaan bowlen!'",
				"author": "Anne"
			},
			{
				"sentence": "...",
				"author": "Taco & Danny"
			},
			{
				"sentence": "ANNEBOLEN!",
				"author": "Anne"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Trouwens, over vibrators gesproken...",
				"author": "Sjardo"
			},
			{
				"sentence": "Dit bruggetje bevalt me helemaal niks",
				"author": "Kai"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Heeft iemand je wel eens gezegd dat je geniaal bent?",
				"author": "Kai"
			},
			{
				"sentence": "Ja.",
				"author": "Sjardo"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik dacht dat ik iets slims zei maar ik had het fout",
				"author": "Luc"
			},
			{
				"sentence": "Da's niet de eerste keer",
				"author": "Sjardo"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Soms moet je mooie dingen onder het tapijt schoppen",
				"author": "Andy"
			},
			{
				"sentence": "Dat spreekwoord ken ik niet",
				"author": "Hans-Christiaan"
			}
		],
		"year": 2020,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "At least it is consistent. Consistency is key right now.",
				"author": "Jimmy"
			},
			{
				"sentence": "Is it consistently broken?",
				"author": "Andrea"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Thank you!",
				"author": "Enrico"
			},
			{
				"sentence": "No, thank you!",
				"author": "Andrea"
			},
			{
				"sentence": "No, thank you!",
				"author": "Enrico"
			},
			{
				"sentence": "No, thank you!",
				"author": "Andrea"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Ahh je miste gewoon Node.js, dat was het probleem!",
				"Author": "Luc"
			},
			{
				"sentence": "Fijn dat ik in geval van Node op jullie kan rekenen",
				"author": "Kai"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bob is coming back next week",
				"author": "Lisanne"
			},
			{
				"sentence": "Get the goats",
				"author": "Rolf"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "^_^",
				"author": "Kenneth"
			},
			{
				"sentence": "I'm 40. i don't know how to read that kind of emojis",
				"author": "Petar"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Dat moet je kijken bij 'pp_action'.",
				"author": "Diede"
			},
			{
				"sentence": "pp_action hihi",
				"Author": "Bob L."
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "De test faalt succesvol!",
				"author": "Joop"
			},
			{
				"sentence": "Eeeeh oke... kunnen we die ook succesvol laten slagen?",
				"author": "Lisanne"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Mag ik een biertje? (bij café Anneke)",
				"author": "Diede"
			},
			{
				"sentence": "Mag ik uw ID zien?",
				"author": "Ober van café Anneke"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Deze krimpt. Normaal groeien ze",
				"author": "Arnoud"
			},
			{
				"sentence": "De kinderen?",
				"author": "Camille & Kenneth"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Dat is van lang geleden.",
				"author": "Rolf"
			},
			{
				"sentence": "Toen Diede en ik nog een concept waren.",
				"author": "Thijs v.d. H"
			},
			{
				"sentence": "Zijn jullie nu een stelletje dan?",
				"author": "Alexander"
			}
		],
		"year": 2021,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "yeap, netherlands did the right thing with locking down, it seems. we dont have the money to do that or the brains fwiw",
				"author": "Leonidas"
			},
			{
				"sentence": "it feels like all intelligence ever allocated to Greece was already spent back in the day when you guys invented Maths and stuff.",
				"author": "Joost B"
			}
		],
		"year": 2021,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "We have 23 points in total, right?",
				"author": "Iolanda"
			},
			{
				"sentence": "[silence]",
				"author": "Team Lingo"
			},
			{
				"sentence": "Nobody was counting with me?",
				"author": "Iolanda"
			},
			{
				"sentence": "We were all counting on you.",
				"author": "Hans-Christiaan"
			}
		],
		"year": 2022,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Jannes is de zon in het leven ",
				"author": "Sem"
			},
			{
				"sentence": "Ja, iedereen die naar me kijkt wordt blind ",
				"author": "Jannes"
			}
		],
		"year": 2022,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Taco en ik zijn je moeder!",
				"author": "Jimmy"
			},
			{
				"sentence": "Als dat zo was, dan had ik wel een betere jeugd gehad",
				"author": "Patrick"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ik vraag me nu af of ik racistisch ben, aangezien Eminem de enige rapper is waar ik naar kan luisteren",
				"author": "Alexander"
			},
			{
				"sentence": "Gezien je Duitse achtergrond snap ik dat wel",
				"author": "Jimmy"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Ben ik aan mezelf aan het ontwikkelen?",
				"author": "Bob"
			},
			{
				"sentence": "Wil je dat doen als wij er niet bij zijn?",
				"author": "Caroline"
			}
		],
		"year": 2017,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Bob, ik wil je kruis!",
				"author": "Maarten"
			},
			{
				"sentence": "Welke wil je?",
				"author": "Bob"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Anyone something to drink?",
				"author": "Maarten"
			},
			{
				"sentence": "Whiskey... Please...",
				"author": "Daniel"
			}
		],
		"year": 2018,
		"language": "en"
	},
	{
		"quote": [
			{
				"sentence": "Gaat hij naar Italië?",
				"author": "Alexander"
			},
			{
				"sentence": "Nee, hij dacht 'genitalia'",
				"author": "Andy"
			}
		],
		"year": 2018,
		"language": "nl"
	},
	{
		"quote": [
			{
				"sentence": "Sta ik erin? Control F Jessie",
				"author": "Jessie"
			},
			{
				"sentence": "Nee! Aah mooi",
				"author": "Jessie"
			}
		],
		"year": 2020,
		"language": "nl"
	}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Here be the best quotes</p>
      </header>
	  <div className="grid grid-cols-3 gap-2">
		<div className="col-span-2">
			<QuoteList quotes={ theQuotes } />
		</div>
		<div className="text-left mt-6 border-gray-800 border-2 px-9 py-4 rounded-lg bg-white shadow">
			<AddForm />
		</div>
	  </div>
    </div>
  );
}

export default App;
