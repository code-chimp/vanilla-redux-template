/* istanbul ignore file */
/* complete demo code - replace with something real then write the tests */
import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import FourOhFour from './pages/FourOhFour';
import AppRoutes from './@enums/AppRoutes';
import Counter from './pages/Counter';
import Users from './pages/Users';

const App: FC = () => {
  return (
    <div className="container-fluid">
      <header className="row">
        <div className="col-12 d-flex">
          <nav className="navbar navbar-expand bg-light">
            <Link className="navbar-brand" to={AppRoutes.Home}>
              <h4>
                <FontAwesomeIcon icon={faBootstrap} />+
                <FontAwesomeIcon icon={faFontAwesome} />
                Bootstrap and FontAwesome!
              </h4>
            </Link>
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item me-2">
                  <Link to={AppRoutes.Home}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={AppRoutes.Users}>Users</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="row">
        <Routes>
          <Route path={AppRoutes.Users} element={<Users />} />
          <Route path={AppRoutes.Home} element={<Counter />} errorElement={<FourOhFour />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
