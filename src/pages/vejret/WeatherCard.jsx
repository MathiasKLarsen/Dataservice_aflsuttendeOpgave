import React from "react";

const WeatherCard = ({ data, f }) => {
  return (
    <div className="p-5 text-white border-2 bg-gray-950">
      <div className="flex items-center justify-between">
        <img
          src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
          alt={f.weather[0].description}
          className="w-16 h-16"
        />
        <p>Tidspunkt: {new Date(f.dt * 1000).toLocaleString()}</p>
      </div>
      <p>Vejret: {f.weather[0].description}</p>
      <p>Temperatur: {Math.round(f.main.temp)}&deg;c </p>
      <p>Luftfugtighed: {f.main.humidity} %</p>
      <p>Lufttryk: {f.main.pressure} psi</p>
      <p>Sol op: {new Date(data.city.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sol ned: {new Date(data.city.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
};

export default WeatherCard;