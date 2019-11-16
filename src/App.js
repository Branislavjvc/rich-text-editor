import React from 'react';
import './App.css';
import { Jumbotron, Button} from 'reactstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">


        <div>
      <Jumbotron className="Jumbo">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is my Rich Text Editor project built with React & react-strap. 
        Reactstrap is a library which contains React Bootstrap 4 components.</p>
        <hr className="my-2" />
        <p>Scroll down to edit some text!</p>
        <p className="lead">
        </p>
        <i class="fa fa-arrow-down"></i>
      </Jumbotron>
    </div>
      </header>
    </div>
  );
}

export default App;
