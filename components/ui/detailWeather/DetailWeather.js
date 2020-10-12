import React from "react";
import { Button } from "../button/Button";
import DailyWeatherCard from "../dayliWeatherCard/DailyWeatherCard";
import HightLigthsCard from "../HightLightsCard/HightLightsCard";
import { Container, DetailWeatherContainer } from "./DetailWeatherStyles";

const DetailWeather = ({ hightLights, forecastsWeather, unitOption, setUnitOption }) => {
  return (
    <DetailWeatherContainer>
      <Container>
        <div className="temperature-units-options">
          <Button
            type="button"
            className={`rounded text-bold ${unitOption === "C" ? "active" : ""} margin-right`}
            onClick={() => setUnitOption("C")}
          >
            °C
          </Button>
          <Button
            type="button"
            className={`rounded text-bold ${unitOption === "F" ? "active" : ""}`}
            onClick={() => setUnitOption("F")}
          >
            °F
          </Button>
        </div>
        <div className="daily-weather-container">
          {forecastsWeather.map((forecast, index) => (
            <DailyWeatherCard
              key={index}
              forecast={forecast}
              unitOption={unitOption}
            />
          ))}
          <div className="fake-card"></div>
        </div>
        <div>
          <h1 className="today-hightlights-title">Today's Hightlights</h1>
          <div className="today-hightlights-container">
            {hightLights.map((hightLight) => (
              <HightLigthsCard hightLight={hightLight} key={hightLight.id} />
            ))}
          </div>
        </div>
      </Container>
    </DetailWeatherContainer>
  );
};

export default DetailWeather;
