/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTreeWidget class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractitemview.jsx";
import "qt/qitemselectionmodel.jsx";
import "qt/qmimedata.jsx";
import "qt/qmodelindex.jsx";
import "qt/qpoint.jsx";
import "qt/qrect.jsx";
import "qt/qt.jsx";
import "qt/qtreeview.jsx";
import "qt/qtreewidgetitem.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QTreeWidget extends QTreeView
{
    function constructor (parent : QWidget);

    // Methods
    function addTopLevelItem (item : QTreeWidgetItem) : void;
    function addTopLevelItems (items : QTreeWidgetItem[]) : void;
    function closePersistentEditor (item : QTreeWidgetItem, column : int) : void;
    function currentColumn () : int;
    function currentItem () : QTreeWidgetItem;
    function dropMimeData (parent : QTreeWidgetItem, index : int, data : QMimeData, action : Qt_DropAction) : boolean;
    function editItem (item : QTreeWidgetItem, column : int) : void;
    function findItems (text : string, flags : Qt_MatchFlags, column : int) : QTreeWidgetItem[];
    function headerItem () : QTreeWidgetItem;
    function indexFromItem (item : QTreeWidgetItem, column : int) : QModelIndex;
    function indexOfTopLevelItem (item : QTreeWidgetItem) : int;
    function insertTopLevelItem (index : int, item : QTreeWidgetItem) : void;
    function insertTopLevelItems (index : int, items : QTreeWidgetItem[]) : void;
    function invisibleRootItem () : QTreeWidgetItem;
    function isFirstItemColumnSpanned (item : QTreeWidgetItem) : boolean;
    function itemAbove (item : QTreeWidgetItem) : QTreeWidgetItem;
    function itemAt (p : QPoint) : QTreeWidgetItem;
    function itemAt (x : int, y : int) : QTreeWidgetItem;
    function itemBelow (item : QTreeWidgetItem) : QTreeWidgetItem;
    function itemFromIndex (index : QModelIndex) : QTreeWidgetItem;
    function itemWidget (item : QTreeWidgetItem, column : int) : QWidget;
    function mimeTypes () : string[];
    function openPersistentEditor (item : QTreeWidgetItem, column : int) : void;
    function removeItemWidget (item : QTreeWidgetItem, column : int) : void;
    function selectedItems () : QTreeWidgetItem[];
    function setCurrentItem (item : QTreeWidgetItem) : void;
    function setCurrentItem (item : QTreeWidgetItem, column : int) : void;
    function setCurrentItem (item : QTreeWidgetItem, column : int, command : Qt_QItemSelectionModel_SelectionFlags) : void;
    function setFirstItemColumnSpanned (item : QTreeWidgetItem, span : boolean) : void;
    function setHeaderItem (item : QTreeWidgetItem) : void;
    function setHeaderLabel (label : string) : void;
    function setHeaderLabels (labels : string[]) : void;
    function setItemWidget (item : QTreeWidgetItem, column : int, widget : QWidget) : void;
    function sortColumn () : int;
    function sortItems (column : int, order : Qt_SortOrder) : void;
    function supportedDropActions () : Qt_DropActions;
    function takeTopLevelItem (index : int) : QTreeWidgetItem;
    function topLevelItem (index : int) : QTreeWidgetItem;
    function visualItemRect (item : QTreeWidgetItem) : QRect;

    // Slots
    function clear () : void;
    function collapseItem (item : QTreeWidgetItem) : void;
    function expandItem (item : QTreeWidgetItem) : void;
    function scrollToItem (item : QTreeWidgetItem, hint : Qt_QAbstractItemView_ScrollHint) : void;

    // Signals
    var currentItemChanged : QtJSXQTreeWidgetItemQTreeWidgetItemSignal;
    var itemActivated : QtJSXQTreeWidgetItemintSignal;
    var itemChanged : QtJSXQTreeWidgetItemintSignal;
    var itemClicked : QtJSXQTreeWidgetItemintSignal;
    var itemCollapsed : QtJSXQTreeWidgetItemSignal;
    var itemDoubleClicked : QtJSXQTreeWidgetItemintSignal;
    var itemEntered : QtJSXQTreeWidgetItemintSignal;
    var itemExpanded : QtJSXQTreeWidgetItemSignal;
    var itemPressed : QtJSXQTreeWidgetItemintSignal;
    var itemSelectionChanged : QtJSXSignal;

    // Instance Properties
    var columnCount : int;
    var topLevelItemCount : int;
}