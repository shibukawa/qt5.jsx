/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QFormLayout class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qlayout.jsx";
import "qt/qlayoutitem.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";

final native class Qt_QFormLayout_ItemRole {}

final native class Qt_QFormLayout_FieldGrowthPolicy {}

final native class Qt_QFormLayout_RowWrapPolicy {}

native class QFormLayout extends QLayout
{
    function constructor (parent : QWidget);

    static const LabelRole : Qt_QFormLayout_ItemRole;
    static const FieldRole : Qt_QFormLayout_ItemRole;
    static const SpanningRole : Qt_QFormLayout_ItemRole;
    static function ItemRole(value : Qt_QFormLayout_ItemRole) : Qt_QFormLayout_ItemRole;

    static const FieldsStayAtSizeHint : Qt_QFormLayout_FieldGrowthPolicy;
    static const ExpandingFieldsGrow : Qt_QFormLayout_FieldGrowthPolicy;
    static const AllNonFixedFieldsGrow : Qt_QFormLayout_FieldGrowthPolicy;
    static function FieldGrowthPolicy(value : Qt_QFormLayout_FieldGrowthPolicy) : Qt_QFormLayout_FieldGrowthPolicy;

    static const DontWrapRows : Qt_QFormLayout_RowWrapPolicy;
    static const WrapLongRows : Qt_QFormLayout_RowWrapPolicy;
    static const WrapAllRows : Qt_QFormLayout_RowWrapPolicy;
    static function RowWrapPolicy(value : Qt_QFormLayout_RowWrapPolicy) : Qt_QFormLayout_RowWrapPolicy;

    // Methods
    function addRow (layout : QLayout) : void;
    function addRow (label : QWidget, field : QLayout) : void;
    function addRow (label : QWidget, field : QWidget) : void;
    function addRow (widget : QWidget) : void;
    function addRow (labelText : string, field : QLayout) : void;
    function addRow (labelText : string, field : QWidget) : void;
    function getItemPosition (index : int, rowPtr : int, rolePtr : Qt_QFormLayout_ItemRole) : void;
    function getLayoutPosition (layout : QLayout, rowPtr : int, rolePtr : Qt_QFormLayout_ItemRole) : void;
    function getWidgetPosition (widget : QWidget, rowPtr : int, rolePtr : Qt_QFormLayout_ItemRole) : void;
    function insertRow (row : int, layout : QLayout) : void;
    function insertRow (row : int, label : QWidget, field : QLayout) : void;
    function insertRow (row : int, label : QWidget, field : QWidget) : void;
    function insertRow (row : int, widget : QWidget) : void;
    function insertRow (row : int, labelText : string, field : QLayout) : void;
    function insertRow (row : int, labelText : string, field : QWidget) : void;
    function itemAt (row : int, role : Qt_QFormLayout_ItemRole) : QLayoutItem;
    function labelForField (field : QLayout) : QWidget;
    function labelForField (field : QWidget) : QWidget;
    function rowCount () : int;
    function setItem_private (row : int, role : Qt_QFormLayout_ItemRole, item : QLayoutItem) : void;
    function setLayout (row : int, role : Qt_QFormLayout_ItemRole, layout : QLayout) : void;
    function setSpacing (arg__1 : int) : void;
    function setWidget (row : int, role : Qt_QFormLayout_ItemRole, widget : QWidget) : void;

    // Instance Properties
    var fieldGrowthPolicy : Qt_QFormLayout_FieldGrowthPolicy;
    var rowWrapPolicy : Qt_QFormLayout_RowWrapPolicy;
    var labelAlignment : Qt_Alignment;
    var formAlignment : Qt_Alignment;
    var horizontalSpacing : int;
    var verticalSpacing : int;
}