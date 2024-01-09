import Link from "next/link";
import data from "../../data.json";

export default function page({ params }: any) {
  const country = data.find((item) => item.name === params.name);
  return (
    <main className="bg-[#202C37]  flex text-gray-200 flex-col lg:px-20 lg:py-14 p-6 min-h-screen  ">
      <Link
        href={"/"}
        className="px-8 py-1 shadow-lg rounded-sm w-min  bg-[#2B3945] "
      >
        Back
      </Link>
      <section className="xl:flex h-full    lg:gap-20">
        <img
          src={country?.flags.png}
          alt=""
          className="w-full my-10   lg:max-w-xl lg:w-full lg:h-full  "
        />
        <div className="flex flex-col gap-4 mt-20 ">
          <h1 className="font-bold text-3xl">{country?.name}</h1>
          <div className="flex flex-col lg:flex-row justify-between " >
            <section>
              <p>
                <span className="font-semibold">Native Name: </span>
                {country?.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country?.population}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country?.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country?.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country?.capital}
              </p>
            </section>
            <section>
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {country?.topLevelDomain}
              </p>

              <p>
                <span className="font-semibold">Currencies: </span>
                {country?.currencies?.map((item) => item.name)}
              </p>

              <p>
                <span className="font-semibold">Languages: </span>
                {country?.languages?.map((item) => item.name)}
              </p>
            </section>
          </div>
          <div className="flex flex-col self-end lg:flex-row w-full gap-3">
            <h3 className="font-semibold">Border Countries: </h3>
            <ul className="grid grid-cols-3 lg:flex flex-wrap  gap-3 ">
              {country?.borders?.map((item) => (
                <li className=" p-1 text-center shadow-md lg:w-20 bg-white text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
