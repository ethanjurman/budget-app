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

function onUpdateFunc(rowId) {
  const store = new Store.Store();
  const rows = store.getStoreValue(INPUT_ROWS, []);
  const lastRow = rows[rows.length - 1];
  if (lastRow && rowId === lastRow.InputRowId) {
    return addInputRow();
  }
}

function rowsToMap(rowMap, row) {
  const newRowMap = rowMap;
  newRowMap[row.InputRowId] = row;
  return rowMap;
}

function onUpdateName({ rowId, value }) {
  const store = new Store.Store();
  const rows = store.getStoreValue(INPUT_ROWS, []);
  rows.reduce(rowsToMap, {})[rowId].name = value;
  store.setStoreValue(INPUT_ROWS, rows);
  onUpdateFunc(rowId);
}

function onUpdateValue({ rowId, value }) {
  const store = new Store.Store();
  const rows = store.getStoreValue(INPUT_ROWS, []);
  rows.reduce(rowsToMap, {})[rowId].value = value;
  store.setStoreValue(INPUT_ROWS, rows);
  onUpdateFunc(rowId);
}

function renderInputRow(inputRow) {
  return (
    <InputRow
      key={inputRow.InputRowId}
      inputRowKey={inputRow.InputRowId}
      initialColor={inputRow.color}
      onUpdateName={onUpdateName}
      onUpdateValue={onUpdateValue}
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
