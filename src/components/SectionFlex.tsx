const SectionFlex = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex  justify-center mx-auto py-[100px] w-[800px] gap-2">
      {children}
    </div>
  );
};

export default SectionFlex;
