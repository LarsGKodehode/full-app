// Libraries
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Routes
import LandingPage from './routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        ></Route>

        <Route
          path="*"
          element={<h1>404 Not Found</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
