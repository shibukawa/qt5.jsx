/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QAbstractItemView class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractitemdelegate.jsx";
import "qt/qabstractitemmodel.jsx";
import "qt/qabstractscrollarea.jsx";
import "qt/qevent.jsx";
import "qt/qitemselection.jsx";
import "qt/qitemselectionmodel.jsx";
import "qt/qmodelindex.jsx";
import "qt/qobject.jsx";
import "qt/qpoint.jsx";
import "qt/qrect.jsx";
import "qt/qregion.jsx";
import "qt/qsize.jsx";
import "qt/qstyleoptionviewitem.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QAbstractItemView_ScrollHint {}

final native class Qt_QAbstractItemView_ScrollMode {}

final native class Qt_QAbstractItemView_SelectionMode {}

final native class Qt_QAbstractItemView_EditTrigger {}

final native class Qt_QAbstractItemView_EditTriggers {}

final native class Qt_QAbstractItemView_SelectionBehavior {}

final native class Qt_QAbstractItemView_DragDropMode {}

native class QAbstractItemView extends QAbstractScrollArea
{
    function constructor (parent : QWidget);

    static const EnsureVisible : Qt_QAbstractItemView_ScrollHint;
    static const PositionAtTop : Qt_QAbstractItemView_ScrollHint;
    static const PositionAtBottom : Qt_QAbstractItemView_ScrollHint;
    static const PositionAtCenter : Qt_QAbstractItemView_ScrollHint;
    static function ScrollHint(value : Qt_QAbstractItemView_ScrollHint) : Qt_QAbstractItemView_ScrollHint;

    static const ScrollPerItem : Qt_QAbstractItemView_ScrollMode;
    static const ScrollPerPixel : Qt_QAbstractItemView_ScrollMode;
    static function ScrollMode(value : Qt_QAbstractItemView_ScrollMode) : Qt_QAbstractItemView_ScrollMode;

    static const NoSelection : Qt_QAbstractItemView_SelectionMode;
    static const SingleSelection : Qt_QAbstractItemView_SelectionMode;
    static const MultiSelection : Qt_QAbstractItemView_SelectionMode;
    static const ExtendedSelection : Qt_QAbstractItemView_SelectionMode;
    static const ContiguousSelection : Qt_QAbstractItemView_SelectionMode;
    static function SelectionMode(value : Qt_QAbstractItemView_SelectionMode) : Qt_QAbstractItemView_SelectionMode;

    static const NoEditTriggers : Qt_QAbstractItemView_EditTrigger;
    static const CurrentChanged : Qt_QAbstractItemView_EditTrigger;
    static const DoubleClicked : Qt_QAbstractItemView_EditTrigger;
    static const SelectedClicked : Qt_QAbstractItemView_EditTrigger;
    static const EditKeyPressed : Qt_QAbstractItemView_EditTrigger;
    static const AnyKeyPressed : Qt_QAbstractItemView_EditTrigger;
    static const AllEditTriggers : Qt_QAbstractItemView_EditTrigger;
    static function EditTrigger(value : Qt_QAbstractItemView_EditTrigger) : Qt_QAbstractItemView_EditTrigger;
    static function EditTriggers(...value : Qt_QAbstractItemView_EditTrigger) : Qt_QAbstractItemView_EditTriggers;

    static const SelectItems : Qt_QAbstractItemView_SelectionBehavior;
    static const SelectRows : Qt_QAbstractItemView_SelectionBehavior;
    static const SelectColumns : Qt_QAbstractItemView_SelectionBehavior;
    static function SelectionBehavior(value : Qt_QAbstractItemView_SelectionBehavior) : Qt_QAbstractItemView_SelectionBehavior;

    static const NoDragDrop : Qt_QAbstractItemView_DragDropMode;
    static const DragOnly : Qt_QAbstractItemView_DragDropMode;
    static const DropOnly : Qt_QAbstractItemView_DragDropMode;
    static const DragDrop : Qt_QAbstractItemView_DragDropMode;
    static const InternalMove : Qt_QAbstractItemView_DragDropMode;
    static function DragDropMode(value : Qt_QAbstractItemView_DragDropMode) : Qt_QAbstractItemView_DragDropMode;

    // Methods
    function closePersistentEditor (index : QModelIndex) : void;
    function currentIndex () : QModelIndex;
    function dirtyRegionOffset () : QPoint;
    function doAutoScroll () : void;
    function edit (index : QModelIndex, trigger : Qt_QAbstractItemView_EditTrigger, event : QEvent) : boolean;
    function executeDelayedItemsLayout () : void;
    function horizontalOffset () : int;
    function indexAt (point : QPoint) : QModelIndex;
    function indexWidget (index : QModelIndex) : QWidget;
    function isIndexHidden (index : QModelIndex) : boolean;
    function itemDelegate () : QAbstractItemDelegate;
    function itemDelegate (index : QModelIndex) : QAbstractItemDelegate;
    function itemDelegateForColumn (column : int) : QAbstractItemDelegate;
    function itemDelegateForRow (row : int) : QAbstractItemDelegate;
    function keyboardSearch (search : string) : void;
    function model () : QAbstractItemModel;
    function openPersistentEditor (index : QModelIndex) : void;
    function rootIndex () : QModelIndex;
    function scheduleDelayedItemsLayout () : void;
    function scrollDirtyRegion (dx : int, dy : int) : void;
    function scrollTo (index : QModelIndex, hint : Qt_QAbstractItemView_ScrollHint) : void;
    function selectedIndexes () : QModelIndex[];
    function selectionCommand (index : QModelIndex, event : QEvent) : Qt_QItemSelectionModel_SelectionFlags;
    function selectionModel () : QItemSelectionModel;
    function setDirtyRegion (region : QRegion) : void;
    function setIndexWidget (index : QModelIndex, widget : QWidget) : void;
    function setItemDelegate (delegate : QAbstractItemDelegate) : void;
    function setItemDelegateForColumn (column : int, delegate : QAbstractItemDelegate) : void;
    function setItemDelegateForRow (row : int, delegate : QAbstractItemDelegate) : void;
    function setModel (model : QAbstractItemModel) : void;
    function setSelection (rect : QRect, command : Qt_QItemSelectionModel_SelectionFlags) : void;
    function setSelectionModel (selectionModel : QItemSelectionModel) : void;
    function sizeHintForColumn (column : int) : int;
    function sizeHintForIndex (index : QModelIndex) : QSize;
    function sizeHintForRow (row : int) : int;
    function startAutoScroll () : void;
    function startDrag (supportedActions : Qt_DropActions) : void;
    function stopAutoScroll () : void;
    function verticalOffset () : int;
    function viewOptions () : QStyleOptionViewItem;
    function visualRect (index : QModelIndex) : QRect;
    function visualRegionForSelection (selection : QItemSelection) : QRegion;

    // Slots
    function clearSelection () : void;
    function closeEditor (editor : QWidget, hint : Qt_QAbstractItemDelegate_EndEditHint) : void;
    function commitData (editor : QWidget) : void;
    function currentChanged (current : QModelIndex, previous : QModelIndex) : void;
    function dataChanged (topLeft : QModelIndex, bottomRight : QModelIndex, roles : int[]) : void;
    function doItemsLayout () : void;
    function edit (index : QModelIndex) : void;
    function editorDestroyed (editor : QObject) : void;
    function horizontalScrollbarAction (action : int) : void;
    function horizontalScrollbarValueChanged (value : int) : void;
    function reset () : void;
    function rowsAboutToBeRemoved (parent : QModelIndex, start : int, end : int) : void;
    function rowsInserted (parent : QModelIndex, start : int, end : int) : void;
    function scrollToBottom () : void;
    function scrollToTop () : void;
    function selectAll () : void;
    function selectionChanged (selected : QItemSelection, deselected : QItemSelection) : void;
    function setCurrentIndex (index : QModelIndex) : void;
    function setRootIndex (index : QModelIndex) : void;
    function update (index : QModelIndex) : void;
    function updateEditorData () : void;
    function updateEditorGeometries () : void;
    function updateGeometries () : void;
    function verticalScrollbarAction (action : int) : void;
    function verticalScrollbarValueChanged (value : int) : void;

    // Signals
    var activated : QtJSXQModelIndexSignal;
    var clicked : QtJSXQModelIndexSignal;
    var doubleClicked : QtJSXQModelIndexSignal;
    var entered : QtJSXQModelIndexSignal;
    var pressed : QtJSXQModelIndexSignal;
    var viewportEntered : QtJSXSignal;

    // Instance Properties
    var autoScroll : boolean;
    var autoScrollMargin : int;
    var editTriggers : Qt_QAbstractItemView_EditTriggers;
    var tabKeyNavigation : boolean;
    var showDropIndicator : boolean;
    var dragEnabled : boolean;
    var dragDropOverwriteMode : boolean;
    var dragDropMode : Qt_QAbstractItemView_DragDropMode;
    var defaultDropAction : Qt_DropAction;
    var alternatingRowColors : boolean;
    var selectionMode : Qt_QAbstractItemView_SelectionMode;
    var selectionBehavior : Qt_QAbstractItemView_SelectionBehavior;
    var iconSize : QSize;
    var textElideMode : Qt_TextElideMode;
    var verticalScrollMode : Qt_QAbstractItemView_ScrollMode;
    var horizontalScrollMode : Qt_QAbstractItemView_ScrollMode;
}