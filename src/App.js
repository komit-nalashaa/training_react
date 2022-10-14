import './App.css';
import HomePage from './Pages/home_class';
import {HomeFunctionalComponent} from './Pages/home_function';
import {AdditionPage} from './Pages/addition';

function App() {
  return (
    <div className="App">
      {/* <HomePage/>
      <HomeFunctionalComponent/> */}
      <AdditionPage/>
    </div>
  );
}

export default App;
