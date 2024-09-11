const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" bg-[#111827] overflow-auto">
      {/* <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div> */}
      {children}
    </main>
  );
};

export default LandingLayout;
