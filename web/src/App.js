import {BrowserRouter,Routes, Route} from 'react-router-dom';
import React from 'react';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import SignUp from './components/sign-up/sign-up.component';



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
          <Route path='/' element={<SignInAndSignUpPage />} />
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