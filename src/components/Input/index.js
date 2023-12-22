import "./style.css";

const Input = ({ placeholder, label, eventoTeclado, name, obj, type, maxLength }) => {
  return (
    <>
      <div className="form__group field">
        <input
          onChange={eventoTeclado}
          name={name}
          type={type}
          className="form__field"
          placeholder={placeholder}
          required=""
          value={obj}
          maxLength={maxLength} 
        />
        <label htmlFor="name" className="form__label ">
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
