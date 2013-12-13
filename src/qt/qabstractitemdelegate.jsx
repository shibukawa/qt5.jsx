/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QAbstractItemDelegate class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractitemmodel.jsx";
import "qt/qabstractitemview.jsx";
import "qt/qevent.jsx";
import "qt/qhelpevent.jsx";
import "qt/qmodelindex.jsx";
import "qt/qobject.jsx";
import "qt/qpainter.jsx";
import "qt/qstyleoptionviewitem.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QAbstractItemDelegate_EndEditHint {}

native class QAbstractItemDelegate extends QObject
{
    function constructor (parent : QObject);

    static const NoHint : Qt_QAbstractItemDelegate_EndEditHint;
    static const EditNextItem : Qt_QAbstractItemDelegate_EndEditHint;
    static const EditPreviousItem : Qt_QAbstractItemDelegate_EndEditHint;
    static const SubmitModelCache : Qt_QAbstractItemDelegate_EndEditHint;
    static const RevertModelCache : Qt_QAbstractItemDelegate_EndEditHint;
    static function EndEditHint(value : Qt_QAbstractItemDelegate_EndEditHint) : Qt_QAbstractItemDelegate_EndEditHint;

    // Methods
    function createEditor (parent : QWidget, option : QStyleOptionViewItem, index : QModelIndex) : QWidget;
    function destroyEditor (editor : QWidget, index : QModelIndex) : void;
    function editorEvent (event : QEvent, model : QAbstractItemModel, option : QStyleOptionViewItem, index : QModelIndex) : boolean;
    function helpEvent (event : QHelpEvent, view : QAbstractItemView, option : QStyleOptionViewItem, index : QModelIndex) : boolean;
    function paint (painter : QPainter, option : QStyleOptionViewItem, index : QModelIndex) : void;
    function paintingRoles () : int[];
    function setEditorData (editor : QWidget, index : QModelIndex) : void;
    function setModelData (editor : QWidget, model : QAbstractItemModel, index : QModelIndex) : void;
    function updateEditorGeometry (editor : QWidget, option : QStyleOptionViewItem, index : QModelIndex) : void;

    // Signals
    var closeEditor : QtJSXQWidgetQt_QAbstractItemDelegate_EndEditHintSignal;
    var commitData : QtJSXQWidgetSignal;
    var sizeHintChanged : QtJSXQModelIndexSignal;
}