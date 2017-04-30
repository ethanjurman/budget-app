import React from 'react';

import InputRow from './InputRow';
import { genNextColor } from '../ColorSelector/colors';
import * as Store from '../../store/store';

const INPUT_ROWS = 'INPUT_ROWS';

function newInputRow(rows) {
  return {
    InputRowId: `inputRow${rows.length}`,
    color: genNextColor.next().value,
    name: '',
    value: 0,
  };
}

function addInputRow() {
  const store = new Store.Store();
  const rows = store.getStoreValue(INPUT_ROWS, []);
  rows.push(newInputRow(rows));
  store.setStoreValue(INPUT_ROWS, rows);
}

function shouldAddRow(rowId) {
  const store = new Store.Store();
  const rows = store.getStoreValue(INPUT_ROWS, []);
  const lastRow = rows[rows.length - 1];
  if (lastRow && rowId === lastRow.InputRowId) {
    return addInputRow();
  }
  return null;
}

function rowsToMap(rowMap, row) {
  const newRowMap = rowMap;
  newRowMap[row.InputRowId] = row;
  return rowMap;
}

function onUpdate({ rowId, value, key }) {
  const store = new Store.Store();
  const rows = store.getStoreValue(INPUT_ROWS, []);
  rows.reduce(rowsToMap, {})[rowId][key] = value;
  store.setStoreValue(INPUT_ROWS, rows);
  shouldAddRow(rowId);
}

function onUpdateName(values) {
  onUpdate({ key: 'name', ...values });
}

function onUpdateValue(values) {
  onUpdate({ key: 'value', ...values });
}

function onUpdateColor(values) {
  onUpdate({ key: 'color', ...values });
}

function renderInputRow(inputRow) {
  return (
    <InputRow
      key={inputRow.InputRowId}
      inputRowKey={inputRow.InputRowId}
      initialColor={inputRow.color}
      onUpdateName={onUpdateName}
      onUpdateValue={onUpdateValue}
      onUpdateColor={onUpdateColor}
    />
  );
}

const InputRowGroup = (props) => {
  const rows = props.store.getStoreValue(INPUT_ROWS, []);
  if (rows.length === 0) {
    addInputRow();
  }
  return (
    <div className="InputRowGroup">
      {rows.map(renderInputRow)}
    </div>
  );
};

export default Store.connect(InputRowGroup);
