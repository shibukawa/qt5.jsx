/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QValidator class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qlocale.jsx";
import "qt/qobject.jsx";
import "qt/_signals.jsx";

final native class Qt_QValidator_State {}

native class QValidator extends QObject
{
    function constructor (parent : QObject);

    static const Invalid : Qt_QValidator_State;
    static const Intermediate : Qt_QValidator_State;
    static const Acceptable : Qt_QValidator_State;
    static function State(value : Qt_QValidator_State) : Qt_QValidator_State;

    // Methods
    function fixup (arg__1 : string) : void;
    function locale () : QLocale;
    function setLocale (locale : QLocale) : void;
    function validate (arg__1 : string, arg__2 : int) : Qt_QValidator_State;

    // Signals
    var changed : QtJSXSignal;
}
