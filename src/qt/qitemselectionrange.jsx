/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QItemSelectionRange class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractitemmodel.jsx";
import "qt/qmodelindex.jsx";
import "qt/qpersistentmodelindex.jsx";

native class QItemSelectionRange
{
    function constructor ();
    function constructor (other : QItemSelectionRange);
    function constructor (index : QModelIndex);
    function constructor (topLeft : QModelIndex, bottomRight : QModelIndex);

    // Methods
    function bottom () : int;
    function bottomRight () : QPersistentModelIndex;
    function contains (index : QModelIndex) : boolean;
    function contains (row : int, column : int, parentIndex : QModelIndex) : boolean;
    function height () : int;
    function indexes () : QModelIndex[];
    function intersected (other : QItemSelectionRange) : QItemSelectionRange;
    function intersects (other : QItemSelectionRange) : boolean;
    function isEmpty () : boolean;
    function isValid () : boolean;
    function left () : int;
    function model () : QAbstractItemModel;
    function operator_equal (other : QItemSelectionRange) : boolean;
    function operator_less (other : QItemSelectionRange) : boolean;
    function parent () : QModelIndex;
    function right () : int;
    function top () : int;
    function topLeft () : QPersistentModelIndex;
    function width () : int;
}
