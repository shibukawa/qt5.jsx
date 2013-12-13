/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPainterPath class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qfont.jsx";
import "qt/qmatrix.jsx";
import "qt/qpointf.jsx";
import "qt/qpolygonf.jsx";
import "qt/qrectf.jsx";
import "qt/qregion.jsx";
import "qt/qt.jsx";
import "qt/qtransform.jsx";

final native class Qt_QPainterPath_ElementType {}

native class QPainterPath
{
    function constructor ();
    function constructor (other : QPainterPath);
    function constructor (startPoint : QPointF);

    static const MoveToElement : Qt_QPainterPath_ElementType;
    static const LineToElement : Qt_QPainterPath_ElementType;
    static const CurveToElement : Qt_QPainterPath_ElementType;
    static const CurveToDataElement : Qt_QPainterPath_ElementType;
    static function ElementType(value : Qt_QPainterPath_ElementType) : Qt_QPainterPath_ElementType;

    // Methods
    function addEllipse (center : QPointF, rx : number, ry : number) : void;
    function addEllipse (rect : QRectF) : void;
    function addEllipse (x : number, y : number, w : number, h : number) : void;
    function addPath (path : QPainterPath) : void;
    function addPolygon (polygon : QPolygonF) : void;
    function addRect (rect : QRectF) : void;
    function addRect (x : number, y : number, w : number, h : number) : void;
    function addRegion (region : QRegion) : void;
    function addRoundRect (rect : QRectF, roundness : int) : void;
    function addRoundRect (rect : QRectF, xRnd : int, yRnd : int) : void;
    function addRoundRect (x : number, y : number, w : number, h : number, roundness : int) : void;
    function addRoundRect (x : number, y : number, w : number, h : number, xRnd : int, yRnd : int) : void;
    function addRoundedRect (rect : QRectF, xRadius : number, yRadius : number, mode : Qt_SizeMode) : void;
    function addRoundedRect (x : number, y : number, w : number, h : number, xRadius : number, yRadius : number, mode : Qt_SizeMode) : void;
    function addText (point : QPointF, f : QFont, text : string) : void;
    function addText (x : number, y : number, f : QFont, text : string) : void;
    function angleAtPercent (t : number) : number;
    function arcMoveTo (rect : QRectF, angle : number) : void;
    function arcMoveTo (x : number, y : number, w : number, h : number, angle : number) : void;
    function arcTo (rect : QRectF, startAngle : number, arcLength : number) : void;
    function arcTo (x : number, y : number, w : number, h : number, startAngle : number, arcLength : number) : void;
    function boundingRect () : QRectF;
    function closeSubpath () : void;
    function connectPath (path : QPainterPath) : void;
    function contains (p : QPainterPath) : boolean;
    function contains (pt : QPointF) : boolean;
    function contains (rect : QRectF) : boolean;
    function controlPointRect () : QRectF;
    function cubicTo (ctrlPt1 : QPointF, ctrlPt2 : QPointF, endPt : QPointF) : void;
    function cubicTo (ctrlPt1x : number, ctrlPt1y : number, ctrlPt2x : number, ctrlPt2y : number, endPtx : number, endPty : number) : void;
    function currentPosition () : QPointF;
    function elementCount () : int;
    function fillRule () : Qt_FillRule;
    function intersected (r : QPainterPath) : QPainterPath;
    function intersects (p : QPainterPath) : boolean;
    function intersects (rect : QRectF) : boolean;
    function isEmpty () : boolean;
    function length () : number;
    function lineTo (p : QPointF) : void;
    function lineTo (x : number, y : number) : void;
    function moveTo (p : QPointF) : void;
    function moveTo (x : number, y : number) : void;
    function operator_add (other : QPainterPath) : QPainterPath;
    function operator_add_assign (other : QPainterPath) : QPainterPath;
    function operator_and (other : QPainterPath) : QPainterPath;
    function operator_and_assign (other : QPainterPath) : QPainterPath;
    function operator_equal (other : QPainterPath) : boolean;
    function operator_or (other : QPainterPath) : QPainterPath;
    function operator_or_assign (other : QPainterPath) : QPainterPath;
    function operator_subtract (other : QPainterPath) : QPainterPath;
    function operator_subtract_assign (other : QPainterPath) : QPainterPath;
    function percentAtLength (t : number) : number;
    function pointAtPercent (t : number) : QPointF;
    function quadTo (ctrlPt : QPointF, endPt : QPointF) : void;
    function quadTo (ctrlPtx : number, ctrlPty : number, endPtx : number, endPty : number) : void;
    function setElementPositionAt (i : int, x : number, y : number) : void;
    function setFillRule (fillRule : Qt_FillRule) : void;
    function simplified () : QPainterPath;
    function slopeAtPercent (t : number) : number;
    function subtracted (r : QPainterPath) : QPainterPath;
    function subtractedInverted (r : QPainterPath) : QPainterPath;
    function swap (other : QPainterPath) : void;
    function toFillPolygon (matrix : QMatrix) : QPolygonF;
    function toFillPolygon (matrix : QTransform) : QPolygonF;
    function toFillPolygons (matrix : QMatrix) : QPolygonF[];
    function toFillPolygons (matrix : QTransform) : QPolygonF[];
    function toReversed () : QPainterPath;
    function toSubpathPolygons (matrix : QMatrix) : QPolygonF[];
    function toSubpathPolygons (matrix : QTransform) : QPolygonF[];
    function translate (offset : QPointF) : void;
    function translate (dx : number, dy : number) : void;
    function translated (offset : QPointF) : QPainterPath;
    function translated (dx : number, dy : number) : QPainterPath;
    function united (r : QPainterPath) : QPainterPath;
}
