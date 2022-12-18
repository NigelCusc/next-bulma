import Navbar from "../navbar/navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
