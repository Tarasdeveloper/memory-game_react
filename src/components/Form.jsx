import RegularButton from "./RegularButton";
import Select from "./Select";

export default function Form({ handleSubmit, handleChange }) {
  return (
    <div className="form-container">
      <p className="p--regular">
        Customize the game by selecting an emoji category and a number of memory
        cards.
      </p>
      <form className="wrapper">
        <Select handleChange={handleChange} />
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
