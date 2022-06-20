import {Routes, Route} from 'react-router-dom';
import React from 'react';

//PAGES
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import Home from './pages/home/home.component';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }


  render() {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<SignInAndSignUpPage/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </div>
    );
  }
}

export default App;


/*
function App() {
  return (
    <div className="App">
      <header>
        <Route  exact path='/' component={SignInAndSignUpPage} />
          <Route path='/home' component={Home} />
      </header>
    </div>
  );
}

export default App;
*/