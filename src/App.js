import React from 'react'
import { Col, Row, Container, Nav} from 'reactstrap'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//My components
import AgregarCita from './Pages/AgregarCita';
import Configuracion from './Pages/Configuracion';
import ConsultarCitas from './Pages/ConsultarCitas';
import HistorialClinico from './Pages/HistorialClinico';
import HistorialPagos from './Pages/HistorialClinico';
import Home from './Pages/Home';

//Data



const App = () => {

  return(
    <Router>
    <Container>
      <Row>
        <Col sm="4">
          
          <div>
            <p>Plover</p>
            <Nav vertical>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/agregarCita">Agregar cita</Link>
              </li>
              <li>
                <Link to="/consultarCitas">Consultar citas</Link>
              </li>
              <li>
                <Link to="/historialClinico">Historial clínico</Link>
              </li>
              <li>
                <Link to="/historialPagos">Historial de pagos</Link>
              </li>
              <li>
                <Link to="/configuracion">Configuración</Link>
              </li>
            </Nav>
          </div>
        
        </Col>
        <Col sm="8">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/agregarCita">
              <AgregarCita />
            </Route>
            <Route path="/consultarCitas">
              <ConsultarCitas />
            </Route>
            <Route path="/historialClinico">
              <HistorialClinico />
            </Route>
            <Route path="/historialPagos">
              <HistorialPagos />
            </Route>
            <Route path="/configuracion">
              <Configuracion />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
    </Router>
  )
  
}

export default App;
