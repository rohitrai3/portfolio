import data from "./data.json";

export default function Education() {
  return (
    <div className="lg:w-1/2 lg:ml-dvw-1/2 lg:pr-20 lg:mt-20 space-y-5 mx-10">
      <h1 className="uppercase text-4xl mb-10 text-center">Education</h1>
      {Object.values(data).map((val) => (
        <div className="text-xl space-y-2">
          <div className="flex justify-between">
            <p className="text-2xl">{val.degree}</p>
            <p className="opacity-50">{val.timeline}</p>
          </div>
          <p className="opacity-50">{val.college}</p>
          <p className="opacity-50 text-end">{val.marks}</p>
        </div>
      ))}
    </div>
  );
}
