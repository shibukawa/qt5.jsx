/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QProgressDialog class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qdialog.jsx";
import "qt/qlabel.jsx";
import "qt/qobject.jsx";
import "qt/qprogressbar.jsx";
import "qt/qpushbutton.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QProgressDialog extends QDialog
{
    function constructor (parent : QWidget, flags : Qt_WindowFlags);
    function constructor (labelText : string, cancelButtonText : string, minimum : int, maximum : int, parent : QWidget, flags : Qt_WindowFlags);

    // Methods
    function open (receiver : QObject, member : string) : void;
    function setBar (bar : QProgressBar) : void;
    function setCancelButton (button : QPushButton) : void;
    function setLabel (label : QLabel) : void;

    // Slots
    function cancel () : void;
    function forceShow () : void;
    function reset () : void;
    function setCancelButtonText (text : string) : void;
    function setRange (minimum : int, maximum : int) : void;

    // Signals
    var canceled : QtJSXSignal;

    // Instance Properties
    var wasCanceled : boolean;
    var minimum : int;
    var maximum : int;
    var value : int;
    var autoReset : boolean;
    var autoClose : boolean;
    var minimumDuration : int;
    var labelText : string;
}