/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object
const updatedRow: RowElement = { ...row, age: 23 };

// Update and delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
