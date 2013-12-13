/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsRectItem class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractgraphicsshapeitem.jsx";
import "qt/qgraphicsitem.jsx";
import "qt/qrectf.jsx";

native class QGraphicsRectItem extends QAbstractGraphicsShapeItem
{
    function constructor (parent : QGraphicsItem);
    function constructor (rect : QRectF, parent : QGraphicsItem);
    function constructor (x : number, y : number, w : number, h : number, parent : QGraphicsItem);

    // Methods
    function rect () : QRectF;
    function setRect (rect : QRectF) : void;
    function setRect (x : number, y : number, w : number, h : number) : void;
}