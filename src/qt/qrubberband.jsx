/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QRubberBand class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpoint.jsx";
import "qt/qrect.jsx";
import "qt/qsize.jsx";
import "qt/qstyleoptionrubberband.jsx";
import "qt/qwidget.jsx";

final native class Qt_QRubberBand_Shape {}

native class QRubberBand extends QWidget
{
    function constructor (arg__1 : Qt_QRubberBand_Shape, arg__2 : QWidget);

    static const Line : Qt_QRubberBand_Shape;
    static const Rectangle : Qt_QRubberBand_Shape;
    static function Shape(value : Qt_QRubberBand_Shape) : Qt_QRubberBand_Shape;

    // Methods
    function initStyleOption (option : QStyleOptionRubberBand) : void;
    function moveRubberBand (p : QPoint) : void;
    function moveRubberBand (x : int, y : int) : void;
    function resizeRubberBand (s : QSize) : void;
    function resizeRubberBand (w : int, h : int) : void;
    function setRubberBandGeometry (r : QRect) : void;
    function setRubberBandGeometry (x : int, y : int, w : int, h : int) : void;
    function shape () : Qt_QRubberBand_Shape;
}
