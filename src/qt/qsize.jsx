/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSize class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qt.jsx";

native class QSize
{
    function constructor ();
    function constructor (w : int, h : int);

    // Methods
    function boundedTo (arg__1 : QSize) : QSize;
    function expandedTo (arg__1 : QSize) : QSize;
    function height () : int;
    function isEmpty () : boolean;
    function isNull () : boolean;
    function isValid () : boolean;
    function operator_add_assign (arg__1 : QSize) : QSize;
    function operator_divide_assign (c : number) : QSize;
    function operator_equal (s2 : QSize) : boolean;
    function operator_multiply_assign (c : number) : QSize;
    function operator_subtract_assign (arg__1 : QSize) : QSize;
    function scale (s : QSize, mode : Qt_AspectRatioMode) : void;
    function scale (w : int, h : int, mode : Qt_AspectRatioMode) : void;
    function scaled (s : QSize, mode : Qt_AspectRatioMode) : QSize;
    function scaled (w : int, h : int, mode : Qt_AspectRatioMode) : QSize;
    function setHeight (h : int) : void;
    function setWidth (w : int) : void;
    function transpose () : void;
    function transposed () : QSize;
    function width () : int;
}
