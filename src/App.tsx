// Libraries
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Routes
import LandingPage from './routes';
import AboutPage from './routes/about';
import HomePage from './routes/home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
