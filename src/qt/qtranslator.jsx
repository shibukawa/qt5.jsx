/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTranslator class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qlocale.jsx";
import "qt/qobject.jsx";

native class QTranslator extends QObject
{
    function constructor (parent : QObject);

    // Methods
    function isEmpty () : boolean;
    function load (locale : QLocale, filename : string, prefix : string, directory : string, suffix : string) : boolean;
    function load (filename : string, directory : string, search_delimiters : string, suffix : string) : boolean;
    function load (data : string, len : int, directory : string) : boolean;
}
