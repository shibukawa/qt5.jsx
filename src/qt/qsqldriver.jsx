/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSqlDriver class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";
import "qt/qsql.jsx";
import "qt/qsqlerror.jsx";
import "qt/qsqlfield.jsx";
import "qt/qsqlindex.jsx";
import "qt/qsqlrecord.jsx";
import "qt/qsqlresult.jsx";
import "qt/_signals.jsx";

final native class Qt_QSqlDriver_IdentifierType {}

final native class Qt_QSqlDriver_DriverFeature {}

final native class Qt_QSqlDriver_StatementType {}

native class QSqlDriver extends QObject
{
    function constructor (parent : QObject);

    static const FieldName : Qt_QSqlDriver_IdentifierType;
    static const TableName : Qt_QSqlDriver_IdentifierType;
    static function IdentifierType(value : Qt_QSqlDriver_IdentifierType) : Qt_QSqlDriver_IdentifierType;

    static const Transactions : Qt_QSqlDriver_DriverFeature;
    static const QuerySize : Qt_QSqlDriver_DriverFeature;
    static const BLOB : Qt_QSqlDriver_DriverFeature;
    static const Unicode : Qt_QSqlDriver_DriverFeature;
    static const PreparedQueries : Qt_QSqlDriver_DriverFeature;
    static const NamedPlaceholders : Qt_QSqlDriver_DriverFeature;
    static const PositionalPlaceholders : Qt_QSqlDriver_DriverFeature;
    static const LastInsertId : Qt_QSqlDriver_DriverFeature;
    static const BatchOperations : Qt_QSqlDriver_DriverFeature;
    static const SimpleLocking : Qt_QSqlDriver_DriverFeature;
    static const LowPrecisionNumbers : Qt_QSqlDriver_DriverFeature;
    static const EventNotifications : Qt_QSqlDriver_DriverFeature;
    static const FinishQuery : Qt_QSqlDriver_DriverFeature;
    static const MultipleResultSets : Qt_QSqlDriver_DriverFeature;
    static const CancelQuery : Qt_QSqlDriver_DriverFeature;
    static function DriverFeature(value : Qt_QSqlDriver_DriverFeature) : Qt_QSqlDriver_DriverFeature;

    static const WhereStatement : Qt_QSqlDriver_StatementType;
    static const SelectStatement : Qt_QSqlDriver_StatementType;
    static const UpdateStatement : Qt_QSqlDriver_StatementType;
    static const InsertStatement : Qt_QSqlDriver_StatementType;
    static const DeleteStatement : Qt_QSqlDriver_StatementType;
    static function StatementType(value : Qt_QSqlDriver_StatementType) : Qt_QSqlDriver_StatementType;

    // Methods
    function beginTransaction () : boolean;
    function close () : void;
    function commitTransaction () : boolean;
    function createResult () : QSqlResult;
    function escapeIdentifier (identifier : string, type : Qt_QSqlDriver_IdentifierType) : string;
    function formatValue (field : QSqlField, trimStrings : boolean) : string;
    function handle () : variant;
    function hasFeature (f : Qt_QSqlDriver_DriverFeature) : boolean;
    function isIdentifierEscaped (identifier : string, type : Qt_QSqlDriver_IdentifierType) : boolean;
    function isOpen () : boolean;
    function isOpenError () : boolean;
    function lastError () : QSqlError;
    function numericalPrecisionPolicy () : Qt_QSql_NumericalPrecisionPolicy;
    function open (db : string, user : string, password : string, host : string, port : int, connOpts : string) : boolean;
    function primaryIndex (tableName : string) : QSqlIndex;
    function record (tableName : string) : QSqlRecord;
    function rollbackTransaction () : boolean;
    function setLastError (e : QSqlError) : void;
    function setNumericalPrecisionPolicy (precisionPolicy : Qt_QSql_NumericalPrecisionPolicy) : void;
    function setOpen (o : boolean) : void;
    function setOpenError (e : boolean) : void;
    function sqlStatement (type : Qt_QSqlDriver_StatementType, tableName : string, rec : QSqlRecord, preparedStatement : boolean) : string;
    function stripDelimiters (identifier : string, type : Qt_QSqlDriver_IdentifierType) : string;
    function subscribeToNotification (name : string) : boolean;
    function subscribedToNotifications () : string[];
    function tables (tableType : Qt_QSql_TableType) : string[];
    function unsubscribeFromNotification (name : string) : boolean;

    // Slots
    function cancelQuery () : boolean;

    // Signals
    var notification : QtJSXQStringSignal;
}
