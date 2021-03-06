/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QItemEditorFactory class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";
import "qt/qitemeditorcreatorbase.jsx";
import "qt/qwidget.jsx";

native class QItemEditorFactory
{
    function constructor ();

    // Static Members
    static function defaultFactory () : QItemEditorFactory;
    static function setDefaultFactory (factory : QItemEditorFactory) : void;

    // Methods
    function createEditor (userType : int, parent : QWidget) : QWidget;
    function registerEditor (userType : int, creator : QItemEditorCreatorBase) : void;
    function valuePropertyName (userType : int) : QByteArray;
}
