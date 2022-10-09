import { useState } from 'react';

type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ city, setCity, getWeather }: FormPropsType) => {
  const [nameError, setNameError] = useState<string>('');
  const handleBlur = (e: any) => {
    const name = e.target.value;
    if (!name) {
      setNameError('Please enter City Name');
    } else if (name.match(/[^A-Za-z0-9]+/)) {
      setNameError('英字で入力してください');
    } else {
      setNameError('');
    }
  };
  const handleFocus = (e: any) => {
    setNameError('');
  };

  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="City Name"
        onChange={(e) => setCity(e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={city}
      />
      <button type="submit">Get Weather</button>
      {nameError && <p>{nameError}</p>}
    </form>
  );
};

export default Form;
