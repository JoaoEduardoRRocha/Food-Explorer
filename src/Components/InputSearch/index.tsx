import "./index.scss";

interface InputSearch {
  placeholder: string
  value: string
  type: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch = ({placeholder, value, type, onChange} : {placeholder: string, value: string, type: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void} ) => {
  return (
    <input
    className='navbar-container__input-search__input-bg'
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
  );
};

export default InputSearch;

