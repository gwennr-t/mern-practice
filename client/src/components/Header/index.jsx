import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Riff Relm™
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <p className="mb-lg-0 mx-3" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                  Your go-to Harmony Hub™ to meet people with similar genre tastes!
                </p>
              </li>
              <li className="nav-item">
                {Auth.loggedIn() ? (
                  <>
                    <Link className="btn btn-primary mx-1 my-2 my-lg-0" to="/me">
                      View My Profile
                    </Link>
                    <button className="btn btn-outline-light mx-1 my-2 my-lg-0" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-primary mx-1 my-2 my-lg-0" to="/login">
                      Login
                    </Link>
                    <Link className="btn btn-outline-light mx-1 my-2 my-lg-0" to="/signup">
                      Signup
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
