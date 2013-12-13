/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QLayout class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qevent.jsx";
import "qt/qlayoutitem.jsx";
import "qt/qmargins.jsx";
import "qt/qobject.jsx";
import "qt/qrect.jsx";
import "qt/qsize.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";

final native class Qt_QLayout_SizeConstraint {}

native class QLayout extends QObject
{
    function constructor ();
    function constructor (parent : QWidget);

    // Static Members
    static function closestAcceptableSize (w : QWidget, s : QSize) : QSize;

    static const SetDefaultConstraint : Qt_QLayout_SizeConstraint;
    static const SetNoConstraint : Qt_QLayout_SizeConstraint;
    static const SetMinimumSize : Qt_QLayout_SizeConstraint;
    static const SetFixedSize : Qt_QLayout_SizeConstraint;
    static const SetMaximumSize : Qt_QLayout_SizeConstraint;
    static const SetMinAndMaxSize : Qt_QLayout_SizeConstraint;
    static function SizeConstraint(value : Qt_QLayout_SizeConstraint) : Qt_QLayout_SizeConstraint;

    // Methods
    function activate () : boolean;
    function addChildLayout (l : QLayout) : void;
    function addChildWidget (w : QWidget) : void;
    function addItem (arg__1 : QLayoutItem) : void;
    function addWidget (w : QWidget) : void;
    function adoptLayout (layout : QLayout) : boolean;
    function alignmentRect (arg__1 : QRect) : QRect;
    function contentsMargins () : QMargins;
    function contentsRect () : QRect;
    function count () : int;
    function getContentsMargins (left : int, top : int, right : int, bottom : int) : void;
    function indexOf (arg__1 : QWidget) : int;
    function isEnabled () : boolean;
    function itemAt (index : int) : QLayoutItem;
    function menuBar () : QWidget;
    function parentWidget () : QWidget;
    function removeItem (arg__1 : QLayoutItem) : void;
    function removeWidget (w : QWidget) : void;
    function setAlignment (l : QLayout, alignment : Qt_Alignment) : boolean;
    function setAlignment (w : QWidget, alignment : Qt_Alignment) : boolean;
    function setContentsMargins (margins : QMargins) : void;
    function setContentsMargins (left : int, top : int, right : int, bottom : int) : void;
    function setEnabled (arg__1 : boolean) : void;
    function setMenuBar (w : QWidget) : void;
    function takeAt (index : int) : QLayoutItem;
    function totalHeightForWidth (w : int) : int;
    function totalMaximumSize () : QSize;
    function totalMinimumSize () : QSize;
    function totalSizeHint () : QSize;
    function update () : void;
    function widgetEvent (arg__1 : QEvent) : void;

    // Instance Properties
    var margin : int;
    var spacing : int;
    var sizeConstraint : Qt_QLayout_SizeConstraint;
}