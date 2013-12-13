/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSplashScreen class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qcolor.jsx";
import "qt/qpainter.jsx";
import "qt/qpixmap.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QSplashScreen extends QWidget
{
    function constructor (parent : QWidget, pixmap : QPixmap, f : Qt_WindowFlags);
    function constructor (pixmap : QPixmap, f : Qt_WindowFlags);

    // Methods
    function drawContents (painter : QPainter) : void;
    function finish (w : QWidget) : void;
    function message () : string;
    function pixmap () : QPixmap;
    function setPixmap (pixmap : QPixmap) : void;

    // Slots
    function clearMessage () : void;
    function showMessage (message : string, alignment : int, color : QColor) : void;

    // Signals
    var messageChanged : QtJSXQStringSignal;
}