"use client";
import { useState } from "react";

interface Props {
  text: string;
  max: number;
}

const TruncatedText = ({ text = "", max }: Props) => {
  const [showAll, setShowAll] = useState(text.length < max);

  if (showAll) return <p className="text-sm leading-6 text-medium">{text}</p>;

  return (
    <p>
      {text.slice(0, 190).trim()}...
      <button
        className="text-primary font-bold ml-1"
        onClick={() => setShowAll(true)}
      >
        Read Mode
      </button>
    </p>
  );
};

export default TruncatedText;
