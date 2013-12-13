/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QCheckBox class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractbutton.jsx";
import "qt/qstyleoptionbutton.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QCheckBox extends QAbstractButton
{
    function constructor (parent : QWidget);
    function constructor (text : string, parent : QWidget);

    // Methods
    function checkState () : Qt_CheckState;
    function initStyleOption (option : QStyleOptionButton) : void;
    function setCheckState (state : Qt_CheckState) : void;

    // Signals
    var stateChanged : QtJSXintSignal;

    // Instance Properties
    var tristate : boolean;
}