import { RowID, RowElement } from "./interface.ts";

declare type InsertRow = (row: RowElement) => RowID;
declare type UpdateRow = (id: RowID, row: RowElement) => void;
declare type DeleteRow = (id: RowID) => void;

declare module CRUD {
    export const insertRow: InsertRow;
    export const updateRow: UpdateRow;
    export const deleteRow: DeleteRow;
}