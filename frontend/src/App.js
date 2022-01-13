import './asset/css/style.css'
import Home from "./pages/Home";
import OptionalLogin from './pages/Optional_Login';
import Signup from './pages/Signup';
import {Switch, Route} from 'react-router-dom'
import Chat from './pages/Chat';
// import ForgetPassword from './Pages/ForgetPassword';
// import FabricView from './Pages/FabricView';

function App() {
  return (
    <div className="App">

      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/optional-login/role=1" component={OptionalLogin}/>
      <Route path="/optional-login/role=2" component={OptionalLogin}/>
      <Route path="/optional-login/role=3" component={OptionalLogin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/chat" component={Chat}/> 
    </Switch>
    </div>
  );
}

export default App;
