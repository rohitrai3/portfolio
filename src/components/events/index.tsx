import { getFormattedText } from "../common/utils";
import data from "./data.json";

export default function Events() {
  return (
    <div className="max-w-lg lg:ml-dvw-1/2 max-lg:self-center mt-20 mx-10 space-y-10">
      <h1 className="uppercase text-4xl text-center">Events</h1>
      {Object.values(data).map((val) => (
        <div className="space-y-2">
          <img width={val.width} src={val.logo} alt={val.name} />
          <h2 className="text-2xl">{val.name}</h2>
          <p className="text-gray-500 text-xl text-end">{val.timeline}</p>
          <ul className="list-disc ml-5">
            {val.details.map((detail) => (
              <li className="text-gray-500">{getFormattedText(detail)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
