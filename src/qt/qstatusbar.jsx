/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QStatusBar class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QStatusBar extends QWidget
{
    function constructor (parent : QWidget);

    // Methods
    function addPermanentWidget (widget : QWidget, stretch : int) : void;
    function addWidget (widget : QWidget, stretch : int) : void;
    function currentMessage () : string;
    function hideOrShow () : void;
    function insertPermanentWidget (index : int, widget : QWidget, stretch : int) : int;
    function insertWidget (index : int, widget : QWidget, stretch : int) : int;
    function reformat () : void;
    function removeWidget (widget : QWidget) : void;

    // Slots
    function clearMessage () : void;
    function showMessage (text : string, timeout : int) : void;

    // Signals
    var messageChanged : QtJSXQStringSignal;

    // Instance Properties
    var sizeGripEnabled : boolean;
}
