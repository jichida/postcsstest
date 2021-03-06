import store from './store';
import { goBack  } from 'connected-react-router';//https://github.com/reactjs/react-router-redux

let handlerbackfn;
export const setbackhandler=(fn)=>{
  let oldhandlerbackfn = handlerbackfn;
  handlerbackfn = fn;
  return oldhandlerbackfn;
}

export const removebackhandler=()=>{
  handlerbackfn = undefined;
}


export const exitAndroidApp=()=>{
  alert('exit app');
  console.log(`exit app`);
}

export const registerandroid=()=>{
  window.webBack=()=>{
    if(!!handlerbackfn){
      handlerbackfn();
    }
    else{
      store.dispatch(goBack());
    }
  };
}
