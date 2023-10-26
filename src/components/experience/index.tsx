import { getFormattedText } from "../common/utils";
import data from "./data.json";
import { v4 as uuid } from "uuid";

export default function Experience() {
  return (
    <div className="max-w-lg lg:ml-dvw-1/2 max-lg:self-center mx-10 mt-20 space-y-10">
      <h1 className="uppercase text-4xl text-center">Experience</h1>
      {Object.values(data).map((val) => (
        <div key={uuid()} className="text-xl space-y-2">
          <div className="flex justify-center">
            <img width={val.width} src={val.logo} alt={val.organization} />
          </div>
          <h2 className="text-2xl">{val.role}</h2>
          <p className="text-gray-500">{val.organization}</p>
          {val.timelines.map((timeline) => (
            <p className="text-gray-500 text-end">{timeline}</p>
          ))}
          <ul className="list-disc text-base text-gray-500 ml-5">
            {val.details.map((detail) => (
              <li key={uuid()}>{getFormattedText(detail)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
