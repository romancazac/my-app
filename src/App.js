
import './App.css';
import Aside from './components/nav/aside';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Messages from './components/messages/messages';
import News from './components/news/news';
import { BrowserRouter, Route} from "react-router-dom";
import Music from './components/music/music';
import Setings from './components/settings/settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
          <Header/>
          <div className="wrapper__content">
            <Aside/>
            <div className="wrapper__page">
              <Route path='/profile' component={Profile}/>
              <Route path='/messages' component={Messages}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Setings}/>
            </div>
          </div> 
      </div>
    </BrowserRouter>
  );
}




export default App;
