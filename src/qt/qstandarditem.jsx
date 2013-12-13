/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QStandardItem class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbrush.jsx";
import "qt/qfont.jsx";
import "qt/qicon.jsx";
import "qt/qmodelindex.jsx";
import "qt/qsize.jsx";
import "qt/qstandarditemmodel.jsx";
import "qt/qt.jsx";

final native class Qt_QStandardItem_ItemType {}

native class QStandardItem
{
    function constructor ();
    function constructor (icon : QIcon, text : string);
    function constructor (text : string);
    function constructor (rows : int, columns : int);

    static const Type : Qt_QStandardItem_ItemType;
    static const UserType : Qt_QStandardItem_ItemType;
    static function ItemType(value : Qt_QStandardItem_ItemType) : Qt_QStandardItem_ItemType;

    // Methods
    function accessibleDescription () : string;
    function accessibleText () : string;
    function appendColumn (items : QStandardItem[]) : void;
    function appendRow (item : QStandardItem) : void;
    function appendRow (items : QStandardItem[]) : void;
    function appendRows (items : QStandardItem[]) : void;
    function background () : QBrush;
    function checkState () : Qt_CheckState;
    function child (row : int, column : int) : QStandardItem;
    function clone () : QStandardItem;
    function column () : int;
    function columnCount () : int;
    function data (role : int) : variant;
    function emitDataChanged () : void;
    function flags () : Qt_ItemFlags;
    function font () : QFont;
    function foreground () : QBrush;
    function hasChildren () : boolean;
    function icon () : QIcon;
    function index () : QModelIndex;
    function insertColumn (column : int, items : QStandardItem[]) : void;
    function insertColumns (column : int, count : int) : void;
    function insertRow (row : int, item : QStandardItem) : void;
    function insertRow (row : int, items : QStandardItem[]) : void;
    function insertRows (row : int, items : QStandardItem[]) : void;
    function insertRows (row : int, count : int) : void;
    function isCheckable () : boolean;
    function isDragEnabled () : boolean;
    function isDropEnabled () : boolean;
    function isEditable () : boolean;
    function isEnabled () : boolean;
    function isSelectable () : boolean;
    function isTristate () : boolean;
    function model () : QStandardItemModel;
    function parent () : QStandardItem;
    function removeColumn (column : int) : void;
    function removeColumns (column : int, count : int) : void;
    function removeRow (row : int) : void;
    function removeRows (row : int, count : int) : void;
    function row () : int;
    function rowCount () : int;
    function setAccessibleDescription (accessibleDescription : string) : void;
    function setAccessibleText (accessibleText : string) : void;
    function setBackground (brush : QBrush) : void;
    function setCheckState (checkState : Qt_CheckState) : void;
    function setCheckable (checkable : boolean) : void;
    function setChild (row : int, item : QStandardItem) : void;
    function setChild (row : int, column : int, item : QStandardItem) : void;
    function setColumnCount (columns : int) : void;
    function setData (value : variant, role : int) : void;
    function setDragEnabled (dragEnabled : boolean) : void;
    function setDropEnabled (dropEnabled : boolean) : void;
    function setEditable (editable : boolean) : void;
    function setEnabled (enabled : boolean) : void;
    function setFlags (flags : Qt_ItemFlags) : void;
    function setFont (font : QFont) : void;
    function setForeground (brush : QBrush) : void;
    function setIcon (icon : QIcon) : void;
    function setRowCount (rows : int) : void;
    function setSelectable (selectable : boolean) : void;
    function setSizeHint (sizeHint : QSize) : void;
    function setStatusTip (statusTip : string) : void;
    function setText (text : string) : void;
    function setTextAlignment (textAlignment : Qt_Alignment) : void;
    function setToolTip (toolTip : string) : void;
    function setTristate (tristate : boolean) : void;
    function setWhatsThis (whatsThis : string) : void;
    function sortChildren (column : int, order : Qt_SortOrder) : void;
    function statusTip () : string;
    function takeChild (row : int, column : int) : QStandardItem;
    function takeColumn (column : int) : QStandardItem[];
    function takeRow (row : int) : QStandardItem[];
    function text () : string;
    function textAlignment () : Qt_Alignment;
    function toolTip () : string;
    function type () : int;
    function whatsThis () : string;
}