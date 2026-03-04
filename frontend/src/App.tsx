import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SalesPage from './pages/Sales/SalesPage';
import InventoryPage from './pages/Inventory/InventoryPage';
import { PageType } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sales" component={SalesPage} />
            <Route path="/inventory" component={InventoryPage} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
