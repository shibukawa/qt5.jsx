/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsScene class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbrush.jsx";
import "qt/qevent.jsx";
import "qt/qfocusevent.jsx";
import "qt/qfont.jsx";
import "qt/qgraphicsellipseitem.jsx";
import "qt/qgraphicsitem.jsx";
import "qt/qgraphicsitemgroup.jsx";
import "qt/qgraphicslineitem.jsx";
import "qt/qgraphicspathitem.jsx";
import "qt/qgraphicspixmapitem.jsx";
import "qt/qgraphicspolygonitem.jsx";
import "qt/qgraphicsproxywidget.jsx";
import "qt/qgraphicsrectitem.jsx";
import "qt/qgraphicsscenecontextmenuevent.jsx";
import "qt/qgraphicsscenedragdropevent.jsx";
import "qt/qgraphicsscenehelpevent.jsx";
import "qt/qgraphicsscenemouseevent.jsx";
import "qt/qgraphicsscenewheelevent.jsx";
import "qt/qgraphicssimpletextitem.jsx";
import "qt/qgraphicstextitem.jsx";
import "qt/qgraphicsview.jsx";
import "qt/qgraphicswidget.jsx";
import "qt/qkeyevent.jsx";
import "qt/qlinef.jsx";
import "qt/qobject.jsx";
import "qt/qpainter.jsx";
import "qt/qpainterpath.jsx";
import "qt/qpalette.jsx";
import "qt/qpen.jsx";
import "qt/qpixmap.jsx";
import "qt/qpointf.jsx";
import "qt/qpolygonf.jsx";
import "qt/qrectf.jsx";
import "qt/qstyle.jsx";
import "qt/qstyleoptiongraphicsitem.jsx";
import "qt/qt.jsx";
import "qt/qtransform.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QGraphicsScene_ItemIndexMethod {}

final native class Qt_QGraphicsScene_SceneLayer {}

final native class Qt_QGraphicsScene_SceneLayers {}

native class QGraphicsScene extends QObject
{
    function constructor (parent : QObject);
    function constructor (sceneRect : QRectF, parent : QObject);
    function constructor (x : number, y : number, width : number, height : number, parent : QObject);

    static const NoIndex : Qt_QGraphicsScene_ItemIndexMethod;
    static const BspTreeIndex : Qt_QGraphicsScene_ItemIndexMethod;
    static function ItemIndexMethod(value : Qt_QGraphicsScene_ItemIndexMethod) : Qt_QGraphicsScene_ItemIndexMethod;

    static const ItemLayer : Qt_QGraphicsScene_SceneLayer;
    static const BackgroundLayer : Qt_QGraphicsScene_SceneLayer;
    static const ForegroundLayer : Qt_QGraphicsScene_SceneLayer;
    static const AllLayers : Qt_QGraphicsScene_SceneLayer;
    static function SceneLayer(value : Qt_QGraphicsScene_SceneLayer) : Qt_QGraphicsScene_SceneLayer;
    static function SceneLayers(...value : Qt_QGraphicsScene_SceneLayer) : Qt_QGraphicsScene_SceneLayers;

    // Methods
    function activePanel () : QGraphicsItem;
    function activeWindow () : QGraphicsWidget;
    function addEllipse (rect : QRectF, pen : QPen, brush : QBrush) : QGraphicsEllipseItem;
    function addEllipse (x : number, y : number, w : number, h : number, pen : QPen, brush : QBrush) : QGraphicsEllipseItem;
    function addItem (item : QGraphicsItem) : void;
    function addLine (line : QLineF, pen : QPen) : QGraphicsLineItem;
    function addLine (x1 : number, y1 : number, x2 : number, y2 : number, pen : QPen) : QGraphicsLineItem;
    function addPath (path : QPainterPath, pen : QPen, brush : QBrush) : QGraphicsPathItem;
    function addPixmap (pixmap : QPixmap) : QGraphicsPixmapItem;
    function addPolygon (polygon : QPolygonF, pen : QPen, brush : QBrush) : QGraphicsPolygonItem;
    function addRect (rect : QRectF, pen : QPen, brush : QBrush) : QGraphicsRectItem;
    function addRect (x : number, y : number, w : number, h : number, pen : QPen, brush : QBrush) : QGraphicsRectItem;
    function addSimpleText (text : string, font : QFont) : QGraphicsSimpleTextItem;
    function addText (text : string, font : QFont) : QGraphicsTextItem;
    function addWidget (widget : QWidget, wFlags : Qt_WindowFlags) : QGraphicsProxyWidget;
    function clearFocus () : void;
    function collidingItems (item : QGraphicsItem, mode : Qt_ItemSelectionMode) : QGraphicsItem[];
    function contextMenuEvent (event : QGraphicsSceneContextMenuEvent) : void;
    function createItemGroup (items : QGraphicsItem[]) : QGraphicsItemGroup;
    function destroyItemGroup (group : QGraphicsItemGroup) : void;
    function dragEnterEvent (event : QGraphicsSceneDragDropEvent) : void;
    function dragLeaveEvent (event : QGraphicsSceneDragDropEvent) : void;
    function dragMoveEvent (event : QGraphicsSceneDragDropEvent) : void;
    function drawBackground (painter : QPainter, rect : QRectF) : void;
    function drawForeground (painter : QPainter, rect : QRectF) : void;
    function drawItems (painter : QPainter, numItems : int, items : QGraphicsItem[], options : QStyleOptionGraphicsItem, widget : QWidget) : void;
    function dropEvent (event : QGraphicsSceneDragDropEvent) : void;
    function focusInEvent (event : QFocusEvent) : void;
    function focusItem () : QGraphicsItem;
    function focusOutEvent (event : QFocusEvent) : void;
    function hasFocus () : boolean;
    function height () : number;
    function helpEvent (event : QGraphicsSceneHelpEvent) : void;
    function inputMethodQuery (query : Qt_InputMethodQuery) : variant;
    function invalidate (x : number, y : number, w : number, h : number, layers : Qt_QGraphicsScene_SceneLayers) : void;
    function isActive () : boolean;
    function itemAt (pos : QPointF, deviceTransform : QTransform) : QGraphicsItem;
    function itemAt (x : number, y : number, deviceTransform : QTransform) : QGraphicsItem;
    function items (order : Qt_SortOrder) : QGraphicsItem[];
    function items (path : QPainterPath, mode : Qt_ItemSelectionMode, order : Qt_SortOrder, deviceTransform : QTransform) : QGraphicsItem[];
    function items (pos : QPointF, mode : Qt_ItemSelectionMode, order : Qt_SortOrder, deviceTransform : QTransform) : QGraphicsItem[];
    function items (polygon : QPolygonF, mode : Qt_ItemSelectionMode, order : Qt_SortOrder, deviceTransform : QTransform) : QGraphicsItem[];
    function items (rect : QRectF, mode : Qt_ItemSelectionMode, order : Qt_SortOrder, deviceTransform : QTransform) : QGraphicsItem[];
    function items (x : number, y : number, w : number, h : number, mode : Qt_ItemSelectionMode, order : Qt_SortOrder, deviceTransform : QTransform) : QGraphicsItem[];
    function itemsBoundingRect () : QRectF;
    function keyPressEvent (event : QKeyEvent) : void;
    function keyReleaseEvent (event : QKeyEvent) : void;
    function mouseDoubleClickEvent (event : QGraphicsSceneMouseEvent) : void;
    function mouseGrabberItem () : QGraphicsItem;
    function mouseMoveEvent (event : QGraphicsSceneMouseEvent) : void;
    function mousePressEvent (event : QGraphicsSceneMouseEvent) : void;
    function mouseReleaseEvent (event : QGraphicsSceneMouseEvent) : void;
    function removeItem (item : QGraphicsItem) : void;
    function render (painter : QPainter, target : QRectF, source : QRectF, aspectRatioMode : Qt_AspectRatioMode) : void;
    function selectedItems () : QGraphicsItem[];
    function selectionArea () : QPainterPath;
    function sendEvent (item : QGraphicsItem, event : QEvent) : boolean;
    function setActivePanel (item : QGraphicsItem) : void;
    function setActiveWindow (widget : QGraphicsWidget) : void;
    function setFocus (focusReason : Qt_FocusReason) : void;
    function setFocusItem (item : QGraphicsItem, focusReason : Qt_FocusReason) : void;
    function setSceneRect (x : number, y : number, w : number, h : number) : void;
    function setSelectionArea (path : QPainterPath, mode : Qt_ItemSelectionMode, deviceTransform : QTransform) : void;
    function setSelectionArea (path : QPainterPath, deviceTransform : QTransform) : void;
    function setStyle (style : QStyle) : void;
    function style () : QStyle;
    function update (x : number, y : number, w : number, h : number) : void;
    function views () : QGraphicsView[];
    function wheelEvent (event : QGraphicsSceneWheelEvent) : void;
    function width () : number;

    // Slots
    function advance () : void;
    function clear () : void;
    function clearSelection () : void;
    function focusNextPrevChild (next : boolean) : boolean;
    function invalidate (rect : QRectF, layers : Qt_QGraphicsScene_SceneLayers) : void;
    function update (rect : QRectF) : void;

    // Signals
    var changed : QtJSXQRectFListSignal;
    var focusItemChanged : QtJSXQGraphicsItemQGraphicsItemQt_FocusReasonSignal;
    var sceneRectChanged : QtJSXQRectFSignal;
    var selectionChanged : QtJSXSignal;

    // Instance Properties
    var backgroundBrush : QBrush;
    var foregroundBrush : QBrush;
    var itemIndexMethod : Qt_QGraphicsScene_ItemIndexMethod;
    var sceneRect : QRectF;
    var bspTreeDepth : int;
    var palette : QPalette;
    var font : QFont;
    var sortCacheEnabled : boolean;
    var stickyFocus : boolean;
}
