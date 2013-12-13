/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QMessageBox class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractbutton.jsx";
import "qt/qcheckbox.jsx";
import "qt/qdialog.jsx";
import "qt/qobject.jsx";
import "qt/qpixmap.jsx";
import "qt/qpushbutton.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QMessageBox_StandardButton {}

final native class Qt_QMessageBox_StandardButtons {}

final native class Qt_QMessageBox_Icon {}

final native class Qt_QMessageBox_ButtonRole {}

native class QMessageBox extends QDialog
{
    function constructor (icon : Qt_QMessageBox_Icon, title : string, text : string, buttons : Qt_QMessageBox_StandardButtons, parent : QWidget, flags : Qt_WindowFlags);
    function constructor (parent : QWidget);

    // Static Members
    static function about (parent : QWidget, title : string, text : string) : void;
    static function aboutQt (parent : QWidget, title : string) : void;
    static function critical (parent : QWidget, title : string, text : string, buttons : Qt_QMessageBox_StandardButtons, defaultButton : Qt_QMessageBox_StandardButton) : Qt_QMessageBox_StandardButton;
    static function information (parent : QWidget, title : string, text : string, buttons : Qt_QMessageBox_StandardButtons, defaultButton : Qt_QMessageBox_StandardButton) : Qt_QMessageBox_StandardButton;
    static function question (parent : QWidget, title : string, text : string, buttons : Qt_QMessageBox_StandardButtons, defaultButton : Qt_QMessageBox_StandardButton) : Qt_QMessageBox_StandardButton;
    static function warning (parent : QWidget, title : string, text : string, buttons : Qt_QMessageBox_StandardButtons, defaultButton : Qt_QMessageBox_StandardButton) : Qt_QMessageBox_StandardButton;

    static const NoButton : Qt_QMessageBox_StandardButton;
    static const Default : Qt_QMessageBox_StandardButton;
    static const Escape : Qt_QMessageBox_StandardButton;
    static const FlagMask : Qt_QMessageBox_StandardButton;
    static const ButtonMask : Qt_QMessageBox_StandardButton;
    static const Ok : Qt_QMessageBox_StandardButton;
    static const Save : Qt_QMessageBox_StandardButton;
    static const SaveAll : Qt_QMessageBox_StandardButton;
    static const Open : Qt_QMessageBox_StandardButton;
    static const Yes : Qt_QMessageBox_StandardButton;
    static const YesToAll : Qt_QMessageBox_StandardButton;
    static const No : Qt_QMessageBox_StandardButton;
    static const NoToAll : Qt_QMessageBox_StandardButton;
    static const Abort : Qt_QMessageBox_StandardButton;
    static const Retry : Qt_QMessageBox_StandardButton;
    static const Ignore : Qt_QMessageBox_StandardButton;
    static const Close : Qt_QMessageBox_StandardButton;
    static const Cancel : Qt_QMessageBox_StandardButton;
    static const Discard : Qt_QMessageBox_StandardButton;
    static const Help : Qt_QMessageBox_StandardButton;
    static const Apply : Qt_QMessageBox_StandardButton;
    static const Reset : Qt_QMessageBox_StandardButton;
    static const RestoreDefaults : Qt_QMessageBox_StandardButton;
    static function StandardButton(value : Qt_QMessageBox_StandardButton) : Qt_QMessageBox_StandardButton;
    static function StandardButtons(...value : Qt_QMessageBox_StandardButton) : Qt_QMessageBox_StandardButtons;

    static const NoIcon : Qt_QMessageBox_Icon;
    static const Information : Qt_QMessageBox_Icon;
    static const Warning : Qt_QMessageBox_Icon;
    static const Critical : Qt_QMessageBox_Icon;
    static const Question : Qt_QMessageBox_Icon;
    static function Icon(value : Qt_QMessageBox_Icon) : Qt_QMessageBox_Icon;

    static const InvalidRole : Qt_QMessageBox_ButtonRole;
    static const AcceptRole : Qt_QMessageBox_ButtonRole;
    static const RejectRole : Qt_QMessageBox_ButtonRole;
    static const DestructiveRole : Qt_QMessageBox_ButtonRole;
    static const ActionRole : Qt_QMessageBox_ButtonRole;
    static const HelpRole : Qt_QMessageBox_ButtonRole;
    static const YesRole : Qt_QMessageBox_ButtonRole;
    static const NoRole : Qt_QMessageBox_ButtonRole;
    static const ResetRole : Qt_QMessageBox_ButtonRole;
    static const ApplyRole : Qt_QMessageBox_ButtonRole;
    static const NRoles : Qt_QMessageBox_ButtonRole;
    static function ButtonRole(value : Qt_QMessageBox_ButtonRole) : Qt_QMessageBox_ButtonRole;

    // Methods
    function addButton (button : QAbstractButton, role : Qt_QMessageBox_ButtonRole) : void;
    function addButton (button : Qt_QMessageBox_StandardButton) : QPushButton;
    function addButton (text : string, role : Qt_QMessageBox_ButtonRole) : QPushButton;
    function button (which : Qt_QMessageBox_StandardButton) : QAbstractButton;
    function buttonRole (button : QAbstractButton) : Qt_QMessageBox_ButtonRole;
    function buttons () : QAbstractButton[];
    function checkBox () : QCheckBox;
    function clickedButton () : QAbstractButton;
    function defaultButton () : QPushButton;
    function escapeButton () : QAbstractButton;
    function open (receiver : QObject, member : string) : void;
    function removeButton (button : QAbstractButton) : void;
    function setCheckBox (cb : QCheckBox) : void;
    function setDefaultButton (button : Qt_QMessageBox_StandardButton) : void;
    function setDefaultButton (button : QPushButton) : void;
    function setEscapeButton (button : QAbstractButton) : void;
    function setEscapeButton (button : Qt_QMessageBox_StandardButton) : void;
    function standardButton (button : QAbstractButton) : Qt_QMessageBox_StandardButton;

    // Signals
    var buttonClicked : QtJSXQAbstractButtonSignal;

    // Instance Properties
    var text : string;
    var icon : Qt_QMessageBox_Icon;
    var iconPixmap : QPixmap;
    var textFormat : Qt_TextFormat;
    var standardButtons : Qt_QMessageBox_StandardButtons;
    var detailedText : string;
    var informativeText : string;
    var textInteractionFlags : Qt_TextInteractionFlags;
}
