type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  nameError: string;
  setNameError: React.Dispatch<React.SetStateAction<string>>;
};

const Form = ({ city, setCity, getWeather, setLoading, nameError, setNameError }: FormPropsType) => {
  const handleBlur = (e: any) => {
    const name: string = e.target.value;
    if (!name) {
      setNameError('Please enter City Name');
      // 英字判定
      // } else if (name.match(/[^A-Za-z0-9]+/)) {
      //   setNameError('英字で入力してください');
    } else {
      setNameError('');
    }
  };
  const handleFocus = (e: any) => {
    setNameError('');
    setLoading(false);
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
