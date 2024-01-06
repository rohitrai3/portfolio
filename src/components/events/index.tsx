import { getFormattedText } from "../common/utils";
import data from "./data.json";

export default function Events() {
  return (
    <div className="bg-classic-blue/[0.3] backdrop-blur-xs max-w-lg lg:ml-dvw-1/2 max-lg:self-center mt-20 mx-4 p-4 rounded-3xl">
      <h1 className="uppercase text-4xl text-center mb-10">Events</h1>
      {Object.values(data).map((val) => (
        <a className="block" href={val.link}>
          <div className="space-y-2 hover:scale-105 hover:bg-gray-900 p-5 hover:border-0 hover:rounded-xl">
            <img width={val.width} src={val.logo} alt={val.name} />
            <h2 className="text-2xl">{val.name}</h2>
            <p className="text-gray-500 text-xl text-end">{val.timeline}</p>
            <ul className="list-disc ml-5">
              {val.details.map((detail) => (
                <li className="text-gray-500">{getFormattedText(detail)}</li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
}
