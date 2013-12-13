/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPalette class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbrush.jsx";
import "qt/qcolor.jsx";
import "qt/qt.jsx";

final native class Qt_QPalette_ColorRole {}

final native class Qt_QPalette_ColorGroup {}

native class QPalette
{
    function constructor ();
    function constructor (button : Qt_GlobalColor);
    function constructor (windowText : QBrush, button : QBrush, light : QBrush, dark : QBrush, mid : QBrush, text : QBrush, bright_text : QBrush, base : QBrush, window : QBrush);
    function constructor (button : QColor);
    function constructor (button : QColor, window : QColor);
    function constructor (palette : QPalette);

    static const WindowText : Qt_QPalette_ColorRole;
    static const Button : Qt_QPalette_ColorRole;
    static const Light : Qt_QPalette_ColorRole;
    static const Midlight : Qt_QPalette_ColorRole;
    static const Dark : Qt_QPalette_ColorRole;
    static const Mid : Qt_QPalette_ColorRole;
    static const Text : Qt_QPalette_ColorRole;
    static const BrightText : Qt_QPalette_ColorRole;
    static const ButtonText : Qt_QPalette_ColorRole;
    static const Base : Qt_QPalette_ColorRole;
    static const Window : Qt_QPalette_ColorRole;
    static const Shadow : Qt_QPalette_ColorRole;
    static const Highlight : Qt_QPalette_ColorRole;
    static const HighlightedText : Qt_QPalette_ColorRole;
    static const Link : Qt_QPalette_ColorRole;
    static const LinkVisited : Qt_QPalette_ColorRole;
    static const AlternateBase : Qt_QPalette_ColorRole;
    static const NoRole : Qt_QPalette_ColorRole;
    static const ToolTipBase : Qt_QPalette_ColorRole;
    static const ToolTipText : Qt_QPalette_ColorRole;
    static const NColorRoles : Qt_QPalette_ColorRole;
    static function ColorRole(value : Qt_QPalette_ColorRole) : Qt_QPalette_ColorRole;

    static const Active : Qt_QPalette_ColorGroup;
    static const Disabled : Qt_QPalette_ColorGroup;
    static const Inactive : Qt_QPalette_ColorGroup;
    static const NColorGroups : Qt_QPalette_ColorGroup;
    static const Current : Qt_QPalette_ColorGroup;
    static const All : Qt_QPalette_ColorGroup;
    static function ColorGroup(value : Qt_QPalette_ColorGroup) : Qt_QPalette_ColorGroup;

    // Methods
    function alternateBase () : QBrush;
    function base () : QBrush;
    function brightText () : QBrush;
    function brush (cg : Qt_QPalette_ColorGroup, cr : Qt_QPalette_ColorRole) : QBrush;
    function brush (cr : Qt_QPalette_ColorRole) : QBrush;
    function button () : QBrush;
    function buttonText () : QBrush;
    function cacheKey () : number;
    function color (cg : Qt_QPalette_ColorGroup, cr : Qt_QPalette_ColorRole) : QColor;
    function color (cr : Qt_QPalette_ColorRole) : QColor;
    function currentColorGroup () : Qt_QPalette_ColorGroup;
    function dark () : QBrush;
    function highlight () : QBrush;
    function highlightedText () : QBrush;
    function isBrushSet (cg : Qt_QPalette_ColorGroup, cr : Qt_QPalette_ColorRole) : boolean;
    function isCopyOf (p : QPalette) : boolean;
    function isEqual (cr1 : Qt_QPalette_ColorGroup, cr2 : Qt_QPalette_ColorGroup) : boolean;
    function light () : QBrush;
    function link () : QBrush;
    function linkVisited () : QBrush;
    function mid () : QBrush;
    function midlight () : QBrush;
    function operator_equal (p : QPalette) : boolean;
    function resolve () : int;
    function resolve (arg__1 : QPalette) : QPalette;
    function resolve (mask : int) : void;
    function setBrush (cg : Qt_QPalette_ColorGroup, cr : Qt_QPalette_ColorRole, brush : QBrush) : void;
    function setBrush (cr : Qt_QPalette_ColorRole, brush : QBrush) : void;
    function setColor (cg : Qt_QPalette_ColorGroup, cr : Qt_QPalette_ColorRole, color : QColor) : void;
    function setColor (cr : Qt_QPalette_ColorRole, color : QColor) : void;
    function setColorGroup (cr : Qt_QPalette_ColorGroup, windowText : QBrush, button : QBrush, light : QBrush, dark : QBrush, mid : QBrush, text : QBrush, bright_text : QBrush, base : QBrush, window : QBrush) : void;
    function setCurrentColorGroup (cg : Qt_QPalette_ColorGroup) : void;
    function shadow () : QBrush;
    function swap (other : QPalette) : void;
    function text () : QBrush;
    function toolTipBase () : QBrush;
    function toolTipText () : QBrush;
    function window () : QBrush;
    function windowText () : QBrush;
}
