import cloudy from "../icons/cloudy.png";
import partlycloudy from "../icons/partly-cloudy.png";
import rain from "../icons/rain.png";
import sunny from "../icons/sunny.png";
import thunderstorm from "../icons/thunderstorm.png";
import snow from "../icons/snow.png";

export const iconPicker = (weather) => {
  if (weather.search("clouds") >= 0) {
    if (weather.search("broken") >= 0) {
      return partlycloudy;
    }
    return cloudy;
  }
  if (weather.search("mist") >= 0) {
    return cloudy;
  }
  if (weather.search("rain") >= 0) {
    return rain;
  }
  if (weather.search("clear") >= 0) {
    return sunny;
  }
  if (weather.search("storm") >= 0) {
    return thunderstorm;
  }
  if (weather.search("snow") >= 0) {
    return snow;
  }
};

export const getFormattedDate = (time) => {
  const intTime = parseInt(time);
  const adjTime = intTime * 1000;
  const formatDate = new Date(adjTime).toLocaleDateString("en-US", {
    weekday: "long",
  });
  return formatDate;
};
