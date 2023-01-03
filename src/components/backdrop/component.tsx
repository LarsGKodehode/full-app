interface Props {
  children: React.ReactNode;
}

function Backdrop({ children }: Props): JSX.Element {
  return (
    <div className="fixed w-screen h-screen overflow-hidden -z-10">
      {children}
    </div>
  );
}

export default Backdrop;
