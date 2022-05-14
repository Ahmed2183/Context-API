import React from 'react';
import {CommonContext} from './CommonContext'; //-->The Component that we created with React.createContext import like this


class Main extends React.Component {
  
  render() { 
    return ( /*-->We dont pass value in Consumer,In Consumer we have Call back Function and Consumer is for get value*/
      <CommonContext.Consumer>   
       {({color}) => (  //color is our state name in App.js
        <h1 style={{backgroundColor:color}}>Hello Main</h1>
       )}
      </CommonContext.Consumer>
    );
  }
}
 
export default Main;