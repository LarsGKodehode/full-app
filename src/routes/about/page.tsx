function AboutPage() {
  return (
    <div className="min-h-screen">
      <Section>
        <h1>About</h1>
        <p>
          This is just a sample page at the momement. More information will be
          comming soon TM.
        </p>
      </Section>
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <div className="px-6 py-2 mx-4 mt-4 text-slate-300 rounded-xl bg-slate-600/50">
      {children}
    </div>
  );
}

export default AboutPage;
