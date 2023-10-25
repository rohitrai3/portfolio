import Profile from "../../assets/images/rohitrai.png";
import { v4 as uuid } from "uuid";

export default function Intro() {
  const spreadLetters = (word: string): JSX.Element => {
    const letters: Array<string> = [];
    for (let i = 0; i < word.length; i++) {
      letters.push(word[i]);
    }
    return (
      <p className="flex justify-between">
        {letters.map((letter) => (
          <span key={uuid()}>{letter}</span>
        ))}
      </p>
    );
  };

  return (
    <div className="h-dvh lg:w-1/2 lg:fixed lg:top-0 flex justify-center items-center">
      <div className="uppercase text-4xl text-center">
        <img width={200} src={Profile} alt="Profile" />
        <div className="font-pressStart2P">
          {spreadLetters("Rohit")}
          {spreadLetters("Rai")}
        </div>
        <div className="text-gray-500">
          {spreadLetters("Software")}
          {spreadLetters("Engineer")}
        </div>
      </div>
    </div>
  );
}
