// Libraries
import { Outlet } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <nav></nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LandingPage;
