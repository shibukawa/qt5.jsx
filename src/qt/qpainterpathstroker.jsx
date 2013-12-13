/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPainterPathStroker class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpainterpath.jsx";
import "qt/qt.jsx";

native class QPainterPathStroker
{
    function constructor ();

    // Methods
    function capStyle () : Qt_PenCapStyle;
    function createStroke (path : QPainterPath) : QPainterPath;
    function curveThreshold () : number;
    function dashOffset () : number;
    function dashPattern () : number[];
    function joinStyle () : Qt_PenJoinStyle;
    function miterLimit () : number;
    function setCapStyle (style : Qt_PenCapStyle) : void;
    function setCurveThreshold (threshold : number) : void;
    function setDashOffset (offset : number) : void;
    function setDashPattern (arg__1 : Qt_PenStyle) : void;
    function setDashPattern (dashPattern : number[]) : void;
    function setJoinStyle (style : Qt_PenJoinStyle) : void;
    function setMiterLimit (length : number) : void;
    function setWidth (width : number) : void;
    function width () : number;
}
