const arr = [
  "😀",
  "🎉",
  "🚀",
  "🌟",
  "🐱",
  "🍕",
  "🎩",
  "⚽",
  "😀",
  "🎉",
  "🚀",
  "🌟",
  "🐱",
  "🍕",
  "🎩",
  "⚽",
];

export default function App() {
  return (
    <div className="flex h-full max-w-full items-center justify-center">
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="flex aspect-square w-2xl flex-col gap-2 bg-amber-950 p-2">
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
  return (
    <section className="grid flex-1 grid-cols-4 bg-white/20">
      {arr.map((emoji) => (
        <EmojiTile emoji={emoji} />
      ))}
    </section>
  );
}

function EmojiTile({ emoji }) {
  return <article className="border-2 flex justify-center items-center">{emoji}</article>;
}
