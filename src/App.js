import AddForm from "./AddForm";
import QuoteList from "./QuoteList";
import './App.css';

const exampleQuotes = [
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
				"sentence": "Dat mensen bizar lange zinnen gaan toevoegen.",
				"author": "Jeroen"
			},
			{
				"sentence": "Dat mensen bizar lange zinnen gaan toevoegen.",
				"author": "Jeroen"
			},
			{
				"sentence": "Dat mensen bizar lange zinnen gaan toevoegen.",
				"author": "Jeroen"
			},
			{
				"sentence": "Dat mensen bizar lange zinnen gaan toevoegen.",
				"author": "Jeroen"
			},
			{
				"sentence": "Doe niet zo mal, Jeroen",
				"author": "Lena"
			}
		],
		"year": 2022,
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
			<QuoteList quotes={ exampleQuotes } />
		</div>
		<div className="text-left mt-6 border-gray-800 border-2 px-9 py-4 rounded-lg bg-white shadow">
			<AddForm />
		</div>
	  </div>
    </div>
  );
}

export default App;
