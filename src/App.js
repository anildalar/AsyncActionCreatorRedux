import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameAsyncActionCreator } from '.';

function App() {
  //1. State/Hook
  let state = useSelector(store => store); // getState()

  let dispatch = useDispatch();   //dispatch()

  //2. Function defination


  //3. Return Statement
  return (
    <div className="App">
        {console.log(state.fullname)}
        <h1>{state.fullname}</h1>
        <button onClick={(e)=>{ dispatch(changeNameAsyncActionCreator()) }}>Change My Name</button>
    </div>
  );
}

export default App;
