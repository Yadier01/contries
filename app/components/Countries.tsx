import Link from "next/link"

import countries from "../data.json";
export const Countries = ({findCountry}:any) => {

    const data = countries.filter(findCountry);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8 ">
        {data.map((item) => (
        <Link key={item.name} href={`/country/${item.name}`} className="flex rounded-lg overflow-hidden
         bg-[#2B3945] my-4 text-white flex-col items-cener justify-center ">
          <img src={item.flags.png} alt={item.name} className="h-full" />
          <div className="p-8 ">
            <h1 className="text-lg font-bold py-4 truncate">{item.name}</h1>
            <p>
              <span className="font-bold">Population: </span>{item.population}
            </p>
            <p>
              <span className="font-bold">Region: </span>{item.region}
            </p>
            <p>
              <span className="font-bold">Capital: </span>{item.capital}
            </p>
          </div>
        </Link>
      ))}
</div>

  )
}
