
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer greeting="PROP"/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
