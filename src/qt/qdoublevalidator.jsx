/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QDoubleValidator class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";
import "qt/qvalidator.jsx";
import "qt/_signals.jsx";

final native class Qt_QDoubleValidator_Notation {}

native class QDoubleValidator extends QValidator
{
    function constructor (parent : QObject);
    function constructor (bottom : number, top : number, decimals : int, parent : QObject);

    static const StandardNotation : Qt_QDoubleValidator_Notation;
    static const ScientificNotation : Qt_QDoubleValidator_Notation;
    static function Notation(value : Qt_QDoubleValidator_Notation) : Qt_QDoubleValidator_Notation;

    // Methods
    function setRange (bottom : number, top : number, decimals : int) : void;

    // Signals
    var bottomChanged : QtJSXdoubleSignal;
    var decimalsChanged : QtJSXintSignal;
    var notationChanged : QtJSXQt_QDoubleValidator_NotationSignal;
    var topChanged : QtJSXdoubleSignal;

    // Instance Properties
    var bottom : number;
    var top : number;
    var decimals : int;
    var notation : Qt_QDoubleValidator_Notation;
}
