import './App.css';
import { Userform } from "./components/userform/userform";
function App() {
  return (  //JSX
    <div className="App">
      <Userform label='First Name'></Userform>
      <Userform label='Last Name'></Userform>
      <Userform label='age'></Userform>

    </div>
  );
}

export default App;
