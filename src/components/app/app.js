import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { routes } from '~/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render(){
    let routesItems = routes.map((route) => {
      return <Route key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    });
  
    return <BrowserRouter>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Switch>
              {routesItems}
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  }
}

export default App;
