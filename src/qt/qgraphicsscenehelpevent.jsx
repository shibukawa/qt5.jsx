/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsSceneHelpEvent class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qevent.jsx";
import "qt/qgraphicssceneevent.jsx";
import "qt/qpoint.jsx";
import "qt/qpointf.jsx";

native class QGraphicsSceneHelpEvent extends QGraphicsSceneEvent
{
    function constructor (type : Qt_QEvent_Type);

    // Methods
    function scenePos () : QPointF;
    function screenPos () : QPoint;
    function setScenePos (pos : QPointF) : void;
    function setScreenPos (pos : QPoint) : void;
}