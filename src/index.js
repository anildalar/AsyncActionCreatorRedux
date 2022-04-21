import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

let initialState = {
    fullname:'Anil DOLLOR'
}
let rootReducer = (prevState,action)=>{
  var newState = prevState;
  switch(action.type){
    case 'CHANGE_TO_RITIK':
      return {
        ...newState,
        fullname: 'RITIK PATIDAR'
      }
    case 'CHANGE_TO_ABHISHEK':
      return {
        ...newState,
        fullname: 'ABHISHEK SUTHAR'
      }
    default:
      return {
        ...newState,
        //fullname: 'ABHISHEK SUTHAR'
      }
  }
  
}

export const ChangeNameActionCreator = ()=>{ //Action Creator
  return {
    type:'CHANGE_TO_RITIK'
  }
}

export const changeNameAsyncActionCreator = ()=>{ // Async Action Creatore
  return function(dispatch){
      //API CALLINg
      //OR

      //

      setTimeout(function(){
        dispatch(ChangeNameActionCreator());
      },5000);
        
  }
}
let store = createStore(rootReducer,initialState,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
