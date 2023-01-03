// Libraries
import { NavLink, Outlet } from 'react-router-dom';

// Components
import Backdrop from '../components/backdrop';

function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen place-items-center bg-slate-300/10">
      <Backdrop>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80"
          alt="Space vista"
        />
      </Backdrop>

      <div className="flex flex-row-reverse w-full bg-slate-400">
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

      <main className="w-full flex-gro">
        <Outlet />
      </main>
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
