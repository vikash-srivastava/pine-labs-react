import './App.css';
import { Userform } from "./components/userform/userform";
function App() { //component
  return (  //JSX
    <div className="App">
      <Userform label='First Name' color='white'></Userform>

    </div>
  );
}

export default App;
