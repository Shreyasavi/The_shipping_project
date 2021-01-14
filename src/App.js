import './App.css';
import NavBar from './components/NavBar'
import ShippingForm from './view/ShippingForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListShippings from './view/ShippingList'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <ShippingForm />
          </Route>
          <Route path="/view-orders">
            <NavBar />
            <ListShippings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
