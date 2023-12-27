import Header from "./Header";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-background main-container">
      <Header />
      {children}
    </main>
  );
};

export default ProductLayout;
