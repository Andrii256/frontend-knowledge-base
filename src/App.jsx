import { Container } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router';
import { Homepage } from './pages/Homepage';
import { ItemPage } from './pages/ItemPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      App

      <Switch>
        <Route path="/item/:shortname" component={ItemPage} />

        <Route path="/" exact component={Homepage} />

        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
