import AddForm from "./AddForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Here be the best quotes</p>
      </header>
	  <div className="grid grid-cols-3 gap-2">
		<div>
			hoi
		</div>
		<div>
			hoi2
		</div>
		<div className="text-left mt-6 border-gray-800 border-2 px-9 py-4 rounded-lg bg-white shadow">
			<AddForm />
		</div>
	  </div>
    </div>
  );
}

export default App;
