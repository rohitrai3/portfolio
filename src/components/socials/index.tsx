import data from "./data.json";

export default function Socials() {
  return (
    <div className="max-w-lg lg:ml-dvw-1/2 max-lg:self-center my-20 mx-10 space-y-10">
      <h1 className="uppercase text-4xl text-center">Socials</h1>
      <div className="grid grid-cols-3 gap-x-10">
        {Object.values(data).map((val) => (
          <a href={val.link}>
            <div className="grid gap-1">
              <img
                className="h-24 justify-self-center"
                src={val.logo}
                alt={val.name}
              />
              <p className="text-gray-500 text-xl text-center">
                {val.username}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
