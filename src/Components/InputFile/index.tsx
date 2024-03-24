import "./index.scss";

interface InputFileProps {
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputFile: React.FC<InputFileProps> = ({onChange}) => {
  return (
    <input
      className='add-plate-container__content__upload-file'
      id="upload-file"
      type='file'
      name='image'
      onChange={(e) => onChange(e)}
    />
  );
};

export default InputFile;
