/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QErrorMessage class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qdialog.jsx";
import "qt/qwidget.jsx";

native class QErrorMessage extends QDialog
{
    function constructor (parent : QWidget);

    // Static Members
    static function qtHandler () : QErrorMessage;

    // Slots
    function showMessage (message : string) : void;
    function showMessage (message : string, type : string) : void;
}