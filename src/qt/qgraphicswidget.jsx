/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsWidget class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qaction.jsx";
import "qt/qcloseevent.jsx";
import "qt/qevent.jsx";
import "qt/qfont.jsx";
import "qt/qgraphicsitem.jsx";
import "qt/qgraphicslayout.jsx";
import "qt/qgraphicsobject.jsx";
import "qt/qgraphicsscenemoveevent.jsx";
import "qt/qgraphicssceneresizeevent.jsx";
import "qt/qhideevent.jsx";
import "qt/qkeysequence.jsx";
import "qt/qpainter.jsx";
import "qt/qpalette.jsx";
import "qt/qpointf.jsx";
import "qt/qrectf.jsx";
import "qt/qshowevent.jsx";
import "qt/qsizef.jsx";
import "qt/qsizepolicy.jsx";
import "qt/qstyle.jsx";
import "qt/qstyleoption.jsx";
import "qt/qstyleoptiongraphicsitem.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QGraphicsWidget extends QGraphicsObject
{
    function constructor (parent : QGraphicsItem, wFlags : Qt_WindowFlags);

    // Static Members
    static function setTabOrder (first : QGraphicsWidget, second : QGraphicsWidget) : void;

    // Methods
    function actions () : QAction[];
    function addAction (action : QAction) : void;
    function addActions (actions : QAction[]) : void;
    function adjustSize () : void;
    function changeEvent (event : QEvent) : void;
    function closeEvent (event : QCloseEvent) : void;
    function focusNextPrevChild (next : boolean) : boolean;
    function focusWidget () : QGraphicsWidget;
    function getWindowFrameMargins (left : number, top : number, right : number, bottom : number) : void;
    function grabKeyboardEvent (event : QEvent) : void;
    function grabMouseEvent (event : QEvent) : void;
    function grabShortcut (sequence : QKeySequence, context : Qt_ShortcutContext) : int;
    function hideEvent (event : QHideEvent) : void;
    function initStyleOption (option : QStyleOption) : void;
    function insertAction (before : QAction, action : QAction) : void;
    function insertActions (before : QAction, actions : QAction[]) : void;
    function isActiveWindow () : boolean;
    function moveEvent (event : QGraphicsSceneMoveEvent) : void;
    function paintWindowFrame (painter : QPainter, option : QStyleOptionGraphicsItem, widget : QWidget) : void;
    function polishEvent () : void;
    function propertyChange (propertyName : string, value : variant) : variant;
    function rect () : QRectF;
    function releaseShortcut (id : int) : void;
    function removeAction (action : QAction) : void;
    function resize (w : number, h : number) : void;
    function resizeEvent (event : QGraphicsSceneResizeEvent) : void;
    function setAttribute (attribute : Qt_WidgetAttribute, on : boolean) : void;
    function setContentsMargins (left : number, top : number, right : number, bottom : number) : void;
    function setGeometry (x : number, y : number, w : number, h : number) : void;
    function setShortcutAutoRepeat (id : int, enabled : boolean) : void;
    function setShortcutEnabled (id : int, enabled : boolean) : void;
    function setStyle (style : QStyle) : void;
    function setWindowFrameMargins (left : number, top : number, right : number, bottom : number) : void;
    function showEvent (event : QShowEvent) : void;
    function style () : QStyle;
    function testAttribute (attribute : Qt_WidgetAttribute) : boolean;
    function ungrabKeyboardEvent (event : QEvent) : void;
    function ungrabMouseEvent (event : QEvent) : void;
    function unsetLayoutDirection () : void;
    function unsetWindowFrameMargins () : void;
    function windowFrameEvent (e : QEvent) : boolean;
    function windowFrameGeometry () : QRectF;
    function windowFrameRect () : QRectF;
    function windowFrameSectionAt (pos : QPointF) : Qt_WindowFrameSection;
    function windowType () : Qt_WindowType;

    // Slots
    function close () : boolean;

    // Signals
    var geometryChanged : QtJSXSignal;
    var layoutChanged : QtJSXSignal;

    // Instance Properties
    var palette : QPalette;
    var font : QFont;
    var layoutDirection : Qt_LayoutDirection;
    var size : QSizeF;
    var minimumSize : QSizeF;
    var preferredSize : QSizeF;
    var maximumSize : QSizeF;
    var sizePolicy : QSizePolicy;
    var focusPolicy : Qt_FocusPolicy;
    var windowFlags : Qt_WindowFlags;
    var windowTitle : string;
    var geometry : QRectF;
    var autoFillBackground : boolean;
    var layout : QGraphicsLayout;
}
