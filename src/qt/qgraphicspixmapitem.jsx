/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsPixmapItem class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qgraphicsitem.jsx";
import "qt/qpixmap.jsx";
import "qt/qpointf.jsx";
import "qt/qt.jsx";

final native class Qt_QGraphicsPixmapItem_ShapeMode {}

native class QGraphicsPixmapItem extends QGraphicsItem
{
    function constructor (parent : QGraphicsItem);
    function constructor (pixmap : QPixmap, parent : QGraphicsItem);

    static const MaskShape : Qt_QGraphicsPixmapItem_ShapeMode;
    static const BoundingRectShape : Qt_QGraphicsPixmapItem_ShapeMode;
    static const HeuristicMaskShape : Qt_QGraphicsPixmapItem_ShapeMode;
    static function ShapeMode(value : Qt_QGraphicsPixmapItem_ShapeMode) : Qt_QGraphicsPixmapItem_ShapeMode;

    // Methods
    function offset () : QPointF;
    function pixmap () : QPixmap;
    function setOffset (offset : QPointF) : void;
    function setOffset (x : number, y : number) : void;
    function setPixmap (pixmap : QPixmap) : void;
    function setShapeMode (mode : Qt_QGraphicsPixmapItem_ShapeMode) : void;
    function setTransformationMode (mode : Qt_TransformationMode) : void;
    function shapeMode () : Qt_QGraphicsPixmapItem_ShapeMode;
    function transformationMode () : Qt_TransformationMode;
}