import data from "./data.json";
import { v4 as uuid } from "uuid";

export default function Education() {
  return (
    <div className="bg-viva-magenta/[0.3] backdrop-blur-xs max-w-lg lg:ml-dvw-1/2 lg:mt-20 max-lg:self-center space-y-5 mx-4 p-4 rounded-3xl">
      <h1 className="uppercase text-4xl mb-10 text-center">Education</h1>
      {Object.values(data).map((val) => (
        <div key={uuid()} className="text-xl space-y-2">
          <div className="flex justify-between">
            <h2 className="text-2xl">{val.degree}</h2>
            <p className="text-gray-500">{val.timeline}</p>
          </div>
          <p className="text-gray-500">{val.college}</p>
          <p className="text-gray-500 text-end">{val.marks}</p>
        </div>
      ))}
    </div>
  );
}
