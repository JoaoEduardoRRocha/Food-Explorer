import "./index.scss"

interface SelectComponentProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectComponentProps> = ({onChange, value}) => {
  return (
    <div className="select-container">
      <select 
        className="select-content" 
        name="categoria" 
        id="1"
        onChange={() => onChange()}
        value={value}  
      >
        <option
          className="select-content__option"
          value="Refeição">
          Refeição
        </option>
        <option
          className="select-content__option"
          value="Sobremesa">
          Sobremesa
        </option>
        <option
          className="select-content__option"
          value="Bebida">
          Bebida
        </option>
      </select>
    </div>
  );
};

export default SelectComponent;


