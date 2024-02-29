import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  axios.get("/api/main").then((result)=>{
    console.log(result.data);
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
