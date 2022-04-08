// --------------------------------------------Day-1 Assignment----------------------------------------------------------------//

import './App.css';
import ContactUs from './day1/buttons/ContactUs';
import Download from './day1/buttons/Download';
import Help from './day1/buttons/Help';
import Home from './day1/buttons/Home';
import JoinUs from './day1/buttons/JoinUs';
import Login from './day1/buttons/Login';
import Search from './day1/buttons/Search';
import Settings from './day1/buttons/Settings';
import Mobile from './day1/Mobile';
import Tv from './day1/Tv';

function App() {
  return (
    <div>
      <div className="App">
        <Mobile/>
        <Tv/>
      </div>
      <div>
          <div className="BtnColourDimention">
            <JoinUs />
            <Settings />
          </div>
          <div className="BtnColourDimention">
            <Login />
            <ContactUs />
          </div>
          <div className="BtnColourDimention">
            <Search />
            <Help />
          </div>
          <div className="BtnColourDimention">
            <Home />
            <Download />
          </div>
      </div>
    </div>
  );
}

export default App;


//------------------------------------------- Day-2 Lecture Part-------------------------------------------------------------------//

// import './App.css';

// import Button from './day2/Button';
// import Employ from './day2/Employ';

// function App() {
//   return (
//     <div className="App">
//       <Button/>
//       <Employ/>
//     </div>
//   );
// }

// export default App;
