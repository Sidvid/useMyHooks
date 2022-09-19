import logo from './logo.svg';
import './App.css';
import UseWindowSize from './HookBody/useWindow/UseWindowSize';
import UseFetchIndex from './HookBody/useFetch/UseFetchIndex';
import MyIndex from './HookBody/useOnMyScreen/MyIndex';
import UseOutsideClickIndex from './HookBody/useOutsideClick/UseOutsideClickIndex';

function App() {
  return (
    <div className="App">
      {/* <UseWindowSize/> */}
      {/* <UseFetchIndex /> */}
      {/* <MyIndex /> */}
      <UseOutsideClickIndex/>
      
  
    </div>
  );
}

export default App;
