import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"



import {Provider} from 'react-redux';
import generateStore from './redux/store';
import SwitchApp from './components/SwitchApp';


function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="flex bg-dark w-full min-h-screen p-5 ">
        <div className="w-layout bg-white rounded-large-24  ml-auto mr-auto mt-auto mb-auto shadow-xl">
            <Router>
              <Switch>
                <Route path="*">
                    <SwitchApp />
                </Route>
              </Switch>
            </Router>
        </div>
      </div>
      
    </Provider>
    );
  }
  
  export default App;
  