/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QStackedLayout class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qlayout.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QStackedLayout_StackingMode {}

native class QStackedLayout extends QLayout
{
    function constructor ();
    function constructor (parentLayout : QLayout);
    function constructor (parent : QWidget);

    static const StackOne : Qt_QStackedLayout_StackingMode;
    static const StackAll : Qt_QStackedLayout_StackingMode;
    static function StackingMode(value : Qt_QStackedLayout_StackingMode) : Qt_QStackedLayout_StackingMode;

    // Methods
    function addStackedWidget (w : QWidget) : int;
    function currentWidget () : QWidget;
    function insertWidget (index : int, w : QWidget) : int;
    function widget (arg__1 : int) : QWidget;

    // Slots
    function setCurrentWidget (w : QWidget) : void;

    // Signals
    var currentChanged : QtJSXintSignal;
    var widgetRemoved : QtJSXintSignal;

    // Instance Properties
    var currentIndex : int;
    var stackingMode : Qt_QStackedLayout_StackingMode;
}