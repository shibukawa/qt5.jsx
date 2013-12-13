/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QAbstractButton class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbuttongroup.jsx";
import "qt/qicon.jsx";
import "qt/qkeysequence.jsx";
import "qt/qpoint.jsx";
import "qt/qsize.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QAbstractButton extends QWidget
{
    function constructor (parent : QWidget);

    // Methods
    function checkStateSet () : void;
    function group () : QButtonGroup;
    function hitButton (pos : QPoint) : boolean;
    function nextCheckState () : void;

    // Slots
    function animateClick (msec : int) : void;
    function click () : void;
    function toggle () : void;

    // Signals
    var clicked : QtJSXboolSignal;
    var pressed : QtJSXSignal;
    var released : QtJSXSignal;
    var toggled : QtJSXboolSignal;

    // Instance Properties
    var text : string;
    var icon : QIcon;
    var iconSize : QSize;
    var shortcut : QKeySequence;
    var checkable : boolean;
    var checked : boolean;
    var autoRepeat : boolean;
    var autoExclusive : boolean;
    var autoRepeatDelay : int;
    var autoRepeatInterval : int;
    var down : boolean;
}