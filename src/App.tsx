import React, { useState } from 'react';
import UseState from './components/UseState';
import UseStateTwo from './components/UseStateTwo';
import UseStateThree from './components/UseStateThree';
import UseStateFour from './components/UseStateFour';
import UseEffectOne from './components/UseEffectOne';
import UseEffectTwoExtend from './components/UseEffectTwoExtend';
import UseEffectThree from './components/UseEffectThree';
import UseContextComponentA from './components/UseContextComponentA';
import UseReducer from './components/UseReducer';
import UseReducerTwo from './components/UseReducerTwo';
import UseReducerContext from './components/UseReducerContext';
import UseCallbackParent from './components/UseCallbackParent';
import './App.css';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseCustomHookOne from './components/UseCustomHookOne';

export const userName = React.createContext('')
export const userCompany = React.createContext('')


function App() {
  const [numbers, setNumber] = useState<any>([]);
  return (
    <div>
      <h1>hello</h1>
      <br />
      <h3>UseState</h3>
      <br />
      <UseState/>
      <br />
      <UseStateTwo />
      <br />
      <UseStateThree/>
      <br />
      {/* <UseStateFour data={numbers} setData={setNumber}/>
      <br /> */}
      <h3>UseEffect</h3>
      <br />
      <UseEffectOne/>
      <br />
      <UseEffectTwoExtend/>
      <br />
      <UseEffectThree/>
      <br />
      <h3>UseContext</h3>
      <br />
      <userName.Provider value='Niloy'>
        <userCompany.Provider value='EastWest'>
          <UseContextComponentA/>
        </userCompany.Provider>
      </userName.Provider>
      <br />
      <h3>UseReducer</h3>
      <br />
      <UseReducer/>
      <br />
      <UseReducerTwo/>
      <br />
      <UseReducerContext/>
      <br />
      <h3>UseCallback</h3>
      <br />
      <UseCallbackParent/>
      <br />
      <h3>UseMemo</h3>
      <UseMemo/>
      <br />
      <h3>UseRef</h3>
      <UseRef/>
      <br />
      <UseCustomHookOne/> 
    </div>
    
  );
}

export default App;
