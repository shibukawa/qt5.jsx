/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QIntValidator class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";
import "qt/qvalidator.jsx";
import "qt/_signals.jsx";

native class QIntValidator extends QValidator
{
    function constructor (parent : QObject);
    function constructor (bottom : int, top : int, parent : QObject);

    // Methods
    function setRange (bottom : int, top : int) : void;

    // Signals
    var bottomChanged : QtJSXintSignal;
    var topChanged : QtJSXintSignal;

    // Instance Properties
    var bottom : int;
    var top : int;
}