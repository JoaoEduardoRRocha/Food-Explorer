import React from 'react'
import "./index.scss";

interface LabelFormProps {
  labelText: string;
}

const LabelForm: React.FC<LabelFormProps> = ({ labelText}) => {

  return (
    <div>
      <label 
        className='label-content'
      >
        {labelText}
      </label>
    </div>
  );
};

export default LabelForm;


