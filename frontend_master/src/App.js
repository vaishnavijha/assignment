import React from 'react';
import ContactsList from './components/ContactsList'
import AddLabels from './components/AddLabels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
   <ContactsList/>
   <Route path='/label' component={AddLabels} />
   </Router>
  );
};

export default App;
