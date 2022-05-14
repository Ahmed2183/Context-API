import React from 'react';
import {CommonContext} from './CommonContext'; //-->The Component that we created with React.createContext import like this


class Footer extends React.Component {
  
  render() { 
    return ( /*-->We dont pass value in Consumer,In Consumer we have Call back Function and Consumer is for get value*/
      <CommonContext.Consumer>   
       {({color}) => (  //color is our state name in App.js
        <h1 style={{backgroundColor:color}} className="footer">Footer Page</h1> //className is in index.css
       )}
      </CommonContext.Consumer>
    );
  }
}
 
export default Footer;