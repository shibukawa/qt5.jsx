/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSqlTableModel class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qmodelindex.jsx";
import "qt/qobject.jsx";
import "qt/qsqldatabase.jsx";
import "qt/qsqlindex.jsx";
import "qt/qsqlquerymodel.jsx";
import "qt/qsqlrecord.jsx";
import "qt/qt.jsx";
import "qt/_signals.jsx";

final native class Qt_QSqlTableModel_EditStrategy {}

native class QSqlTableModel extends QSqlQueryModel
{
    function constructor (parent : QObject, db : QSqlDatabase);

    static const OnFieldChange : Qt_QSqlTableModel_EditStrategy;
    static const OnRowChange : Qt_QSqlTableModel_EditStrategy;
    static const OnManualSubmit : Qt_QSqlTableModel_EditStrategy;
    static function EditStrategy(value : Qt_QSqlTableModel_EditStrategy) : Qt_QSqlTableModel_EditStrategy;

    // Methods
    function database () : QSqlDatabase;
    function deleteRowFromTable (row : int) : boolean;
    function editStrategy () : Qt_QSqlTableModel_EditStrategy;
    function fieldIndex (fieldName : string) : int;
    function filter () : string;
    function insertRecord (row : int, record : QSqlRecord) : boolean;
    function insertRowIntoTable (values : QSqlRecord) : boolean;
    function isDirty () : boolean;
    function isDirty (index : QModelIndex) : boolean;
    function orderByClause () : string;
    function primaryKey () : QSqlIndex;
    function primaryValues (row : int) : QSqlRecord;
    function revertRow (row : int) : void;
    function selectStatement () : string;
    function setEditStrategy (strategy : Qt_QSqlTableModel_EditStrategy) : void;
    function setFilter (filter : string) : void;
    function setPrimaryKey (key : QSqlIndex) : void;
    function setRecord (row : int, record : QSqlRecord) : boolean;
    function setSort (column : int, order : Qt_SortOrder) : void;
    function setTable (tableName : string) : void;
    function tableName () : string;
    function updateRowInTable (row : int, values : QSqlRecord) : boolean;

    // Slots
    function revertAll () : void;
    function select () : boolean;
    function selectRow (row : int) : boolean;
    function submitAll () : boolean;

    // Signals
    var beforeDelete : QtJSXintSignal;
    var beforeInsert : QtJSXQSqlRecordSignal;
    var beforeUpdate : QtJSXintQSqlRecordSignal;
    var primeInsert : QtJSXintQSqlRecordSignal;
}