export default function App() {
  return (
    <div className="flex h-full max-w-full items-center justify-center">
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="flex aspect-square w-2xl flex-col bg-amber-950 p-2">
      <Header message={"hello 👋"} />
      <PlayArea />
    </div>
  );
}

function Header({ message }) {
  return (
    <h1 className="bg-white/10 py-2 text-center text-xl font-medium text-white">
      {message}
    </h1>
  );
}

function PlayArea() {
  return <div className="bg-white/20 flex-1"></div>;
}
