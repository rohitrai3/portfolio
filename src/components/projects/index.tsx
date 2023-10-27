import { getFormattedText } from "../common/utils";
import data from "./data.json";

export default function Projects() {
  return (
    <div className="max-w-lg lg:ml-dvw-1/2 max-lg:self-center mt-20 mx-10 space-y-10">
      <h1 className="uppercase text-4xl text-center">Projects</h1>
      {Object.values(data).map((val) => (
        <a className="block" href={val.link}>
          <div className="space-y-2">
            <img width={val.width} src={val.logo} alt={val.name} />
            <h2 className="text-2xl">{val.name}</h2>
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
