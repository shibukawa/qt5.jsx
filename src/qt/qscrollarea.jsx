/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QScrollArea class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractscrollarea.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";

native class QScrollArea extends QAbstractScrollArea
{
    function constructor (parent : QWidget);

    // Methods
    function ensureVisible (x : int, y : int, xmargin : int, ymargin : int) : void;
    function ensureWidgetVisible (childWidget : QWidget, xmargin : int, ymargin : int) : void;
    function setWidget (widget : QWidget) : void;
    function takeWidget () : QWidget;
    function widget () : QWidget;

    // Instance Properties
    var widgetResizable : boolean;
    var alignment : Qt_Alignment;
}