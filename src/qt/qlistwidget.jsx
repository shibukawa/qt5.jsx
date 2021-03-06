/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QListWidget class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractitemview.jsx";
import "qt/qitemselectionmodel.jsx";
import "qt/qlistview.jsx";
import "qt/qlistwidgetitem.jsx";
import "qt/qmimedata.jsx";
import "qt/qmodelindex.jsx";
import "qt/qpoint.jsx";
import "qt/qrect.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QListWidget extends QListView
{
    function constructor (parent : QWidget);

    // Methods
    function addItem (item : QListWidgetItem) : void;
    function addItem (label : string) : void;
    function addItems (labels : string[]) : void;
    function closePersistentEditor (item : QListWidgetItem) : void;
    function currentItem () : QListWidgetItem;
    function dropMimeData (index : int, data : QMimeData, action : Qt_DropAction) : boolean;
    function editItem (item : QListWidgetItem) : void;
    function findItems (text : string, flags : Qt_MatchFlags) : QListWidgetItem[];
    function indexFromItem (item : QListWidgetItem) : QModelIndex;
    function insertItem (row : int, item : QListWidgetItem) : void;
    function insertItem (row : int, label : string) : void;
    function insertItems (row : int, labels : string[]) : void;
    function item (row : int) : QListWidgetItem;
    function itemAt (p : QPoint) : QListWidgetItem;
    function itemAt (x : int, y : int) : QListWidgetItem;
    function itemFromIndex (index : QModelIndex) : QListWidgetItem;
    function itemWidget (item : QListWidgetItem) : QWidget;
    function items (data : QMimeData) : QListWidgetItem[];
    function mimeTypes () : string[];
    function openPersistentEditor (item : QListWidgetItem) : void;
    function removeItemWidget (item : QListWidgetItem) : void;
    function row (item : QListWidgetItem) : int;
    function selectedItems () : QListWidgetItem[];
    function setCurrentItem (item : QListWidgetItem) : void;
    function setCurrentItem (item : QListWidgetItem, command : Qt_QItemSelectionModel_SelectionFlags) : void;
    function setItemWidget (item : QListWidgetItem, widget : QWidget) : void;
    function sortItems (order : Qt_SortOrder) : void;
    function supportedDropActions () : Qt_DropActions;
    function takeItem (row : int) : QListWidgetItem;
    function visualItemRect (item : QListWidgetItem) : QRect;

    // Slots
    function clear () : void;
    function scrollToItem (item : QListWidgetItem, hint : Qt_QAbstractItemView_ScrollHint) : void;

    // Signals
    var currentItemChanged : QtJSXQListWidgetItemQListWidgetItemSignal;
    var currentRowChanged : QtJSXintSignal;
    var currentTextChanged : QtJSXQStringSignal;
    var itemActivated : QtJSXQListWidgetItemSignal;
    var itemChanged : QtJSXQListWidgetItemSignal;
    var itemClicked : QtJSXQListWidgetItemSignal;
    var itemDoubleClicked : QtJSXQListWidgetItemSignal;
    var itemEntered : QtJSXQListWidgetItemSignal;
    var itemPressed : QtJSXQListWidgetItemSignal;
    var itemSelectionChanged : QtJSXSignal;

    // Instance Properties
    var count : int;
    var currentRow : int;
    var sortingEnabled : boolean;
}
