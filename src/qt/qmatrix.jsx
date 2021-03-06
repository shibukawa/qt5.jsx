/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QMatrix class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qline.jsx";
import "qt/qlinef.jsx";
import "qt/qpainterpath.jsx";
import "qt/qpoint.jsx";
import "qt/qpointf.jsx";
import "qt/qpolygon.jsx";
import "qt/qpolygonf.jsx";
import "qt/qrect.jsx";
import "qt/qrectf.jsx";
import "qt/qregion.jsx";

native class QMatrix
{
    function constructor ();
    function constructor (matrix : QMatrix);
    function constructor (m11 : number, m12 : number, m21 : number, m22 : number, dx : number, dy : number);

    // Methods
    function determinant () : number;
    function dx () : number;
    function dy () : number;
    function inverted () : QMatrix;
    function isIdentity () : boolean;
    function isInvertible () : boolean;
    function m11 () : number;
    function m12 () : number;
    function m21 () : number;
    function m22 () : number;
    function map (l : QLine) : QLine;
    function map (l : QLineF) : QLineF;
    function map (p : QPainterPath) : QPainterPath;
    function map (p : QPoint) : QPoint;
    function map (p : QPointF) : QPointF;
    function map (a : QPolygon) : QPolygon;
    function map (a : QPolygonF) : QPolygonF;
    function map (r : QRegion) : QRegion;
    function mapRect (arg__1 : QRect) : QRect;
    function mapRect (arg__1 : QRectF) : QRectF;
    function mapToPolygon (r : QRect) : QPolygon;
    function operator_equal (arg__1 : QMatrix) : boolean;
    function operator_multiply (o : QMatrix) : QMatrix;
    function operator_multiply_assign (arg__1 : QMatrix) : QMatrix;
    function reset () : void;
    function rotate_private (a : number) : QMatrix;
    function scale_private (sx : number, sy : number) : QMatrix;
    function setMatrix (m11 : number, m12 : number, m21 : number, m22 : number, dx : number, dy : number) : void;
    function shear_private (sh : number, sv : number) : QMatrix;
    function translate_private (dx : number, dy : number) : QMatrix;
}
