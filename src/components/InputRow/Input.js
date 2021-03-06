import React from 'react';
import PropTypes from 'prop-types';
import * as Store from '../../store/store';
import './inputRow.css';

const Input = (props) => {
  const textValue = props.store.getStoreValue(props.inputKey, '');
  const onUpdateText = ({ target: { value } }) => {
    props.store.setStoreValue(props.inputKey, value);
    props.onUpdate({ rowId: props.inputKey, value });
  };
  return (
    <div className="Input">
      <input
        type="text"
        onKeyUp={onUpdateText}
        style={{
          color: props.color,
          borderBottomColor: props.color,
          width: `${(textValue.length + 1) * 16}px`,
          minWidth: '160px',
          maxWidth: '400px',
        }}
      />
    </div>
  );
};

Input.propTypes = {
  inputKey: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  store: PropTypes.instanceOf(Store.Store).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Store.connect(Input);
