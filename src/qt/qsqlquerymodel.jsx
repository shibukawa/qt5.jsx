/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSqlQueryModel class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstracttablemodel.jsx";
import "qt/qmodelindex.jsx";
import "qt/qobject.jsx";
import "qt/qsqldatabase.jsx";
import "qt/qsqlerror.jsx";
import "qt/qsqlquery.jsx";
import "qt/qsqlrecord.jsx";

native class QSqlQueryModel extends QAbstractTableModel
{
    function constructor (parent : QObject);

    // Methods
    function clear () : void;
    function indexInQuery (item : QModelIndex) : QModelIndex;
    function lastError () : QSqlError;
    function query () : QSqlQuery;
    function queryChange () : void;
    function record () : QSqlRecord;
    function record (row : int) : QSqlRecord;
    function setLastError (error : QSqlError) : void;
    function setQuery (query : QSqlQuery) : void;
    function setQuery (query : string, db : QSqlDatabase) : void;
}
