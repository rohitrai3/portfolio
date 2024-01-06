import data from "./data.json";

export default function Socials() {
  return (
    <div className="bg-greenery/[0.3] backdrop-blur-xs max-w-lg lg:ml-dvw-1/2 max-lg:self-center my-20 mx-4 space-y-10 p-4 rounded-3xl">
      <h1 className="uppercase text-4xl text-center">Socials</h1>
      <div className="flex justify-between">
        {Object.values(data).map((val) => (
          <a href={val.link}>
            <div className="grid hover:scale-105 hover:bg-gray-900 p-5 hover:border-0 hover:rounded-xl">
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
