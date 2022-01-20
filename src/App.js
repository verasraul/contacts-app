import './App.css';
import contacts from "./data/contacts.json"
import Contact from "./components/Contact"

function App() {
  
  const info = contacts.results.map( (person, index)=> {
    return (
      <Contact 
      person = {person}  
      key = {index}
      />
    )
  } )


  return (
    <div className="App">
      
      <h1>Contact List</h1>
      {info}


    </div>
  );
}

export default App;
