export default function Layout({ children }) {
  return (
    <div className="app h-screen w-screen flex bg-green-400 text-white">
      <div className="relative mx-auto px-5 md:px-12 h-full w-11/12 md:w-3/4 bg-green-500 flex flex-wrap justify-center content-between py-10">
        {children}
      </div>
    </div>
  );
}
