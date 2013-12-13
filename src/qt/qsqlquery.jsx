/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSqlQuery class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qsql.jsx";
import "qt/qsqldatabase.jsx";
import "qt/qsqldriver.jsx";
import "qt/qsqlerror.jsx";
import "qt/qsqlrecord.jsx";
import "qt/qsqlresult.jsx";

final native class Qt_QSqlQuery_BatchExecutionMode {}

native class QSqlQuery
{
    function constructor (db : QSqlDatabase);
    function constructor (r : QSqlResult);
    function constructor (other : QSqlQuery);
    function constructor (query : string, db : QSqlDatabase);

    static const ValuesAsRows : Qt_QSqlQuery_BatchExecutionMode;
    static const ValuesAsColumns : Qt_QSqlQuery_BatchExecutionMode;
    static function BatchExecutionMode(value : Qt_QSqlQuery_BatchExecutionMode) : Qt_QSqlQuery_BatchExecutionMode;

    // Methods
    function addBindValue (val : variant, type : Qt_QSql_ParamType) : void;
    function at () : int;
    function bindValue (placeholder : string, val : variant, type : Qt_QSql_ParamType) : void;
    function bindValue (pos : int, val : variant, type : Qt_QSql_ParamType) : void;
    function boundValue (placeholder : string) : variant;
    function boundValue (pos : int) : variant;
    function clear () : void;
    function driver () : QSqlDriver;
    function exec () : boolean;
    function exec (query : string) : boolean;
    function execBatch (mode : Qt_QSqlQuery_BatchExecutionMode) : boolean;
    function executedQuery () : string;
    function finish () : void;
    function first () : boolean;
    function isActive () : boolean;
    function isForwardOnly () : boolean;
    function isNull (field : int) : boolean;
    function isSelect () : boolean;
    function isValid () : boolean;
    function last () : boolean;
    function lastError () : QSqlError;
    function lastInsertId () : variant;
    function lastQuery () : string;
    function next () : boolean;
    function nextResult () : boolean;
    function numRowsAffected () : int;
    function numericalPrecisionPolicy () : Qt_QSql_NumericalPrecisionPolicy;
    function prepare (query : string) : boolean;
    function previous () : boolean;
    function record () : QSqlRecord;
    function result () : QSqlResult;
    function seek (i : int, relative : boolean) : boolean;
    function setForwardOnly (forward : boolean) : void;
    function setNumericalPrecisionPolicy (precisionPolicy : Qt_QSql_NumericalPrecisionPolicy) : void;
    function size () : int;
    function value (name : string) : variant;
    function value (i : int) : variant;
}