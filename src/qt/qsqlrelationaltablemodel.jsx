/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSqlRelationalTableModel class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";
import "qt/qsqldatabase.jsx";
import "qt/qsqlrelation.jsx";
import "qt/qsqltablemodel.jsx";

native class QSqlRelationalTableModel extends QSqlTableModel
{
    function constructor (parent : QObject, db : QSqlDatabase);

    // Methods
    function relation (column : int) : QSqlRelation;
    function relationModel (column : int) : QSqlTableModel;
    function setRelation (column : int, relation : QSqlRelation) : void;
}
