import React from 'react';
import {CommonContext} from './components/CommonContext'; //-->The Context Component that we created with React.createContext import like this
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';

class App extends React.Component {
  
constructor()
{
  super();

  //Function in constructor() 
  this.updateColor=(color)=>{ //color get from UpdateButton.js
    this.setState({
      // color:"red"
      color:color //color get from UpdateButton.js
    })
  }

  this.state={
    color:"green",
    updateColor : this.updateColor
  }
}

  render() { 
    return (
      <CommonContext.Provider value={this.state}>  {/*-->We pass value in Provider where Provider is take values*/}
        <Header/>
        <CommonContext.Consumer>   
       {({color}) => (  //color is our state name in App.js
        <h1 style={{backgroundColor:color}}>Context API Example</h1>
       )}
      </CommonContext.Consumer>
        <Main/>
        <UpdateButton/>
        <Footer/>
      </CommonContext.Provider>
    );
  }
}
 
export default App;