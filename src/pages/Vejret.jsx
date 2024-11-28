import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import postnumreJSON from "./vejret/postnumre.json";

import useRequestData from "../Hooks/useRequestData";
import WeatherCard from "./vejret/WeatherCard";

const Verjet = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [zip, setZip] = useState("7000");

  useEffect(() => {
    let pattern = /[0-9]{4}/; // accepterer tegn fra 0 til 9 og der SKAL være 4 af dem

    if (pattern.test(zip)) {
      makeRequest(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},dk&lang=da&units=metric&appid=51136b3770f3c055a0ac00b5dd91f2e7`)}
  }, [zip]);

  return (
    <section>
      {isLoading && <Loader />}

      {error && <Error />}

      <form className="mt-10">
        <div className="flex flex-col items-start gap-4">
          <label className="text-sm font-bold">Vælg landekode:</label>

          <input
            list="postnrlist"
            onChange={(e) => setZip(e.target.value)}
            type="text"
            placeholder="Indtast et valid postnummer"
            className="px-4 py-2 mb-5 bg-white border border-gray-400 rounded shadow hover:border-gray-500"
          />
          <datalist id="postnrlist">
            {postnumreJSON.map((p) => (
              <option value={p.postnr} key={p.postnr}>
                {p.postnr} {p.by}
              </option>
            ))}
          </datalist>
        </div>
      </form>

      {data && (
        <>
          <h2 className="my-5 font-bold">Vejret for {data.city.name}</h2>
          <div className="grid grid-cols-4 gap-1">
            {data.list.map((f) => (

             <WeatherCard key={f._id} data={data}  f={f}/>

            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Verjet;