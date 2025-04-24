import { useState } from "react";

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
    <div className="flex aspect-square w-2xl flex-col gap-2 bg-teal-950 p-2">
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
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");
  const [activeCount, setActiveCount] = useState(0);

  function handleClick(emoji) {
    setActiveCount((c) => c + 1);
    if (!active1) return setActive1(emoji);
    if (active1) return setActive2(emoji);
    setActiveCount(0);
    setActive1("");
    setActive2("");
  }

  return (
    <section className="grid flex-1 grid-cols-4 bg-white/20">
      {arr.map((emoji, i) => (
        <EmojiTile
          emoji={emoji}
          onClick={handleClick}
          activeCount={activeCount}
          key={i}
        />
      ))}
    </section>
  );
}

function EmojiTile({ emoji, onClick, activeCount }) {
  return (
    <article className="flex cursor-pointer items-center justify-center border text-4xl">
      {emoji}
    </article>
  );
}
