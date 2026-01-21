import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherData, onCardClick, clothingItems }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard
        weatherData={weatherData}
        isCelsius={currentTemperatureUnit === "C"}
      />
      <section className="main__clothes">
        <p className="main__description">
          Today is {weatherData.temp[currentTemperatureUnit]}˚
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="main__items">
          {clothingItems
            .filter((card) => card.weather === weatherData.type)
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                item={filteredCard}
                onCardClick={onCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
