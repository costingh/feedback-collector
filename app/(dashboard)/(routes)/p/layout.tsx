const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen bg-cover bg-center">
      <div className="h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
