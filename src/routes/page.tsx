// Libraries
import { NavLink, Outlet } from 'react-router-dom';

// Assets
import BackgroundVideo from '../assets/movies/PlanetSpin.mp4';
// Components
import Backdrop from '../components/backdrop';

function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen place-items-cente">
      <Backdrop>
        <video
          src={BackgroundVideo}
          loop
          muted
          autoPlay
          className="object-cover w-full h-full"
        ></video>
      </Backdrop>

      <div className="flex flex-row-reverse w-full p-2 text-white bg-slate-700/50 fixed">
        <nav className="">
          <ul className="flex">
            <li className="m-2">
              <NavMenuLink to="/">Home</NavMenuLink>
            </li>
            <li className="m-2">
              <NavMenuLink to="/about">About</NavMenuLink>
            </li>
          </ul>
        </nav>
      </div>

      <main className="flex-grow w-full mt-16">
        <Outlet />
      </main>

      <footer className="justify-end w-full p-2 text-white bg-slate-700/50">
        <h3>Footer down here!</h3>
      </footer>
    </div>
  );
}

interface NavMenuLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavMenuLink({ to, children }: NavMenuLinkProps): JSX.Element {
  return <NavLink to={to}>{children}</NavLink>;
}

export default LandingPage;
