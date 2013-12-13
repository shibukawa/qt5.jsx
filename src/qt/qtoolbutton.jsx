/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QToolButton class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractbutton.jsx";
import "qt/qaction.jsx";
import "qt/qmenu.jsx";
import "qt/qstyleoptiontoolbutton.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QToolButton_ToolButtonPopupMode {}

native class QToolButton extends QAbstractButton
{
    function constructor (parent : QWidget);

    static const DelayedPopup : Qt_QToolButton_ToolButtonPopupMode;
    static const MenuButtonPopup : Qt_QToolButton_ToolButtonPopupMode;
    static const InstantPopup : Qt_QToolButton_ToolButtonPopupMode;
    static function ToolButtonPopupMode(value : Qt_QToolButton_ToolButtonPopupMode) : Qt_QToolButton_ToolButtonPopupMode;

    // Methods
    function defaultAction () : QAction;
    function initStyleOption (option : QStyleOptionToolButton) : void;
    function menu () : QMenu;
    function setMenu (menu : QMenu) : void;

    // Slots
    function setDefaultAction (arg__1 : QAction) : void;
    function showMenu () : void;

    // Signals
    var triggered : QtJSXQActionSignal;

    // Instance Properties
    var popupMode : Qt_QToolButton_ToolButtonPopupMode;
    var toolButtonStyle : Qt_ToolButtonStyle;
    var autoRaise : boolean;
    var arrowType : Qt_ArrowType;
}
