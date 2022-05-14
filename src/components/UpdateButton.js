import React from 'react';
import {CommonContext} from './CommonContext'; //-->The Component that we created with React.createContext import like this


function UpdateButton() {
  
    return ( /*-->We dont pass value in Consumer,In Consumer we have Call back Function and Consumer is for get value*/
      <CommonContext.Consumer>   
       {({updateColor}) => (  //updateColor is our function name in App.js
       <div>
        <button
        onClick={()=>updateColor("yellow")}  //yellow color Call in App.js updateColor Function
        >Update Yellow Color</button>
        <button
        onClick={()=>updateColor("blue")}  //blue color Call in App.js updateColor Function
        >Update Blue Color</button>
        <button
        onClick={()=>updateColor("silver")}  //blue color Call in App.js updateColor Function
        >Update Silver Color</button>
        </div>
       )}
      </CommonContext.Consumer>
    );
  }
 
export default UpdateButton;