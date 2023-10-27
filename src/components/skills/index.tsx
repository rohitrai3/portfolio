import data from "./data.json";

export default function Skills() {
  return (
    <div className="max-w-lg lg:ml-dvw-1/2 max-lg:self-center mt-20 mx-10 space-y-10">
      <h1 className="uppercase text-4xl text-center">Skills</h1>
      <div className="grid grid-cols-3 gap-x-10 gap-y-4">
        {Object.values(data).map((val) => (
          <div className="grid gap-1">
            <img
              className="h-24 justify-self-center"
              src={val.logo}
              alt={val.name}
            />
            <p className="text-gray-500 text-center">{val.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
