/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsPathItem class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractgraphicsshapeitem.jsx";
import "qt/qgraphicsitem.jsx";
import "qt/qpainterpath.jsx";

native class QGraphicsPathItem extends QAbstractGraphicsShapeItem
{
    function constructor (parent : QGraphicsItem);
    function constructor (path : QPainterPath, parent : QGraphicsItem);

    // Methods
    function path () : QPainterPath;
    function setPath (path : QPainterPath) : void;
}