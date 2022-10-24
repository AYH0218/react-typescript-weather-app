type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = ({ results }: ResultsPropsType) => {
  const { country, cityName, temperature, conditionText, icon } = results;
  const temp = Number(temperature);
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      {country && <div className="results-country">{country}</div>}
      {cityName && <div className="results-city">{cityName}</div>}

      {temperature && (
        <div className="results-temp">
          {Math.round(temp)}
          <span>°C</span>
        </div>
      )}
      {conditionText && (
        <div className="results-condition">
          <img src={iconUrl} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </div>
  );
};

export default Results;
