/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QItemSelectionModel class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractitemmodel.jsx";
import "qt/qitemselection.jsx";
import "qt/qmodelindex.jsx";
import "qt/qobject.jsx";
import "qt/_signals.jsx";

final native class Qt_QItemSelectionModel_SelectionFlag {}

final native class Qt_QItemSelectionModel_SelectionFlags {}

native class QItemSelectionModel extends QObject
{
    function constructor (model : QAbstractItemModel);
    function constructor (model : QAbstractItemModel, parent : QObject);

    static const NoUpdate : Qt_QItemSelectionModel_SelectionFlag;
    static const Clear : Qt_QItemSelectionModel_SelectionFlag;
    static const Select : Qt_QItemSelectionModel_SelectionFlag;
    static const ClearAndSelect : Qt_QItemSelectionModel_SelectionFlag;
    static const Deselect : Qt_QItemSelectionModel_SelectionFlag;
    static const Toggle : Qt_QItemSelectionModel_SelectionFlag;
    static const Current : Qt_QItemSelectionModel_SelectionFlag;
    static const SelectCurrent : Qt_QItemSelectionModel_SelectionFlag;
    static const ToggleCurrent : Qt_QItemSelectionModel_SelectionFlag;
    static const Rows : Qt_QItemSelectionModel_SelectionFlag;
    static const Columns : Qt_QItemSelectionModel_SelectionFlag;
    static function SelectionFlag(value : Qt_QItemSelectionModel_SelectionFlag) : Qt_QItemSelectionModel_SelectionFlag;
    static function SelectionFlags(...value : Qt_QItemSelectionModel_SelectionFlag) : Qt_QItemSelectionModel_SelectionFlags;

    // Methods
    function columnIntersectsSelection (column : int, parent : QModelIndex) : boolean;
    function currentIndex () : QModelIndex;
    function emitSelectionChanged (newSelection : QItemSelection, oldSelection : QItemSelection) : void;
    function hasSelection () : boolean;
    function isColumnSelected (column : int, parent : QModelIndex) : boolean;
    function isRowSelected (row : int, parent : QModelIndex) : boolean;
    function isSelected (index : QModelIndex) : boolean;
    function model () : QAbstractItemModel;
    function rowIntersectsSelection (row : int, parent : QModelIndex) : boolean;
    function selectedColumns (row : int) : QModelIndex[];
    function selectedIndexes () : QModelIndex[];
    function selectedRows (column : int) : QModelIndex[];
    function selection () : QItemSelection;

    // Slots
    function clear () : void;
    function clearCurrentIndex () : void;
    function clearSelection () : void;
    function reset () : void;
    function select (selection : QItemSelection, command : Qt_QItemSelectionModel_SelectionFlags) : void;
    function select (index : QModelIndex, command : Qt_QItemSelectionModel_SelectionFlags) : void;
    function setCurrentIndex (index : QModelIndex, command : Qt_QItemSelectionModel_SelectionFlags) : void;

    // Signals
    var currentChanged : QtJSXQModelIndexQModelIndexSignal;
    var currentColumnChanged : QtJSXQModelIndexQModelIndexSignal;
    var currentRowChanged : QtJSXQModelIndexQModelIndexSignal;
    var selectionChanged : QtJSXQItemSelectionQItemSelectionSignal;
}
