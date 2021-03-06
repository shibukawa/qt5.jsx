/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QRectF class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpointf.jsx";
import "qt/qrect.jsx";
import "qt/qsizef.jsx";

native class QRectF
{
    function constructor ();
    function constructor (topleft : QPointF, bottomRight : QPointF);
    function constructor (topleft : QPointF, size : QSizeF);
    function constructor (rect : QRect);
    function constructor (left : number, top : number, width : number, height : number);

    // Methods
    function adjust (x1 : number, y1 : number, x2 : number, y2 : number) : void;
    function adjusted (x1 : number, y1 : number, x2 : number, y2 : number) : QRectF;
    function bottom () : number;
    function bottomLeft () : QPointF;
    function bottomRight () : QPointF;
    function center () : QPointF;
    function contains (p : QPointF) : boolean;
    function contains (r : QRectF) : boolean;
    function contains (x : number, y : number) : boolean;
    function height () : number;
    function intersected (other : QRectF) : QRectF;
    function intersects (r : QRectF) : boolean;
    function isEmpty () : boolean;
    function isNull () : boolean;
    function isValid () : boolean;
    function left () : number;
    function moveBottom (pos : number) : void;
    function moveBottomLeft (p : QPointF) : void;
    function moveBottomRight (p : QPointF) : void;
    function moveCenter (p : QPointF) : void;
    function moveLeft (pos : number) : void;
    function moveRight (pos : number) : void;
    function moveTo (p : QPointF) : void;
    function moveTo (x : number, t : number) : void;
    function moveTop (pos : number) : void;
    function moveTopLeft (p : QPointF) : void;
    function moveTopRight (p : QPointF) : void;
    function normalized () : QRectF;
    function operator_equal (arg__2 : QRectF) : boolean;
    function right () : number;
    function setBottom (pos : number) : void;
    function setBottomLeft (p : QPointF) : void;
    function setBottomRight (p : QPointF) : void;
    function setCoords (x1 : number, y1 : number, x2 : number, y2 : number) : void;
    function setHeight (h : number) : void;
    function setLeft (pos : number) : void;
    function setRect (x : number, y : number, w : number, h : number) : void;
    function setRight (pos : number) : void;
    function setSize (s : QSizeF) : void;
    function setTop (pos : number) : void;
    function setTopLeft (p : QPointF) : void;
    function setTopRight (p : QPointF) : void;
    function setWidth (w : number) : void;
    function setX (pos : number) : void;
    function setY (pos : number) : void;
    function size () : QSizeF;
    function toAlignedRect () : QRect;
    function toRect () : QRect;
    function top () : number;
    function topLeft () : QPointF;
    function topRight () : QPointF;
    function translate (p : QPointF) : void;
    function translate (dx : number, dy : number) : void;
    function translated (p : QPointF) : QRectF;
    function translated (dx : number, dy : number) : QRectF;
    function united (other : QRectF) : QRectF;
    function width () : number;
    function x () : number;
    function y () : number;
}
