/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QAction class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qactiongroup.jsx";
import "qt/qfont.jsx";
import "qt/qgraphicswidget.jsx";
import "qt/qicon.jsx";
import "qt/qkeysequence.jsx";
import "qt/qmenu.jsx";
import "qt/qobject.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QAction_ActionEvent {}

final native class Qt_QAction_Priority {}

final native class Qt_QAction_MenuRole {}

native class QAction extends QObject
{
    function constructor (parent : QObject);
    function constructor (icon : QIcon, text : string, parent : QObject);
    function constructor (text : string, parent : QObject);

    static const Trigger : Qt_QAction_ActionEvent;
    static const Hover : Qt_QAction_ActionEvent;
    static function ActionEvent(value : Qt_QAction_ActionEvent) : Qt_QAction_ActionEvent;

    static const LowPriority : Qt_QAction_Priority;
    static const NormalPriority : Qt_QAction_Priority;
    static const HighPriority : Qt_QAction_Priority;
    static function Priority(value : Qt_QAction_Priority) : Qt_QAction_Priority;

    static const NoRole : Qt_QAction_MenuRole;
    static const TextHeuristicRole : Qt_QAction_MenuRole;
    static const ApplicationSpecificRole : Qt_QAction_MenuRole;
    static const AboutQtRole : Qt_QAction_MenuRole;
    static const AboutRole : Qt_QAction_MenuRole;
    static const PreferencesRole : Qt_QAction_MenuRole;
    static const QuitRole : Qt_QAction_MenuRole;
    static function MenuRole(value : Qt_QAction_MenuRole) : Qt_QAction_MenuRole;

    // Methods
    function actionGroup () : QActionGroup;
    function activate (event : Qt_QAction_ActionEvent) : void;
    function associatedGraphicsWidgets () : QGraphicsWidget[];
    function associatedWidgets () : QWidget[];
    function data () : variant;
    function isSeparator () : boolean;
    function menu () : QMenu;
    function parentWidget () : QWidget;
    function setActionGroup (group : QActionGroup) : void;
    function setData (var_ : variant) : void;
    function setMenu (menu : QMenu) : void;
    function setSeparator (b : boolean) : void;
    function setShortcuts (arg__1 : Qt_QKeySequence_StandardKey) : void;
    function setShortcuts (shortcuts : QKeySequence[]) : void;
    function shortcuts () : QKeySequence[];
    function showStatusText (widget : QWidget) : boolean;

    // Slots
    function hover () : void;
    function setDisabled (b : boolean) : void;
    function toggle () : void;
    function trigger () : void;

    // Signals
    var changed : QtJSXSignal;
    var hovered : QtJSXSignal;
    var toggled : QtJSXboolSignal;
    var triggered : QtJSXboolSignal;

    // Instance Properties
    var checkable : boolean;
    var checked : boolean;
    var enabled : boolean;
    var icon : QIcon;
    var text : string;
    var iconText : string;
    var toolTip : string;
    var statusTip : string;
    var whatsThis : string;
    var font : QFont;
    var shortcut : QKeySequence;
    var shortcutContext : Qt_ShortcutContext;
    var autoRepeat : boolean;
    var visible : boolean;
    var menuRole : Qt_QAction_MenuRole;
    var iconVisibleInMenu : boolean;
    var priority : Qt_QAction_Priority;
}
