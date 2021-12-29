import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddLabels from './components/AddLabels'



const Routes = () => {
  return (
    <>
      <Router>

          <Switch>

            <Route path='/labels' exact component={AddLabels} />


          </Switch>

      </Router>
    </>
  );
};

export default Routes;
