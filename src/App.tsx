// Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Routes
import LandingPage from './routes';
import AboutPage from './routes/about';
import HomePage from './routes/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={<LandingPage />}
        >
          <Route
            path="*"
            element={<HomePage />}
          />
          <Route
            path="about"
            element={<AboutPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
