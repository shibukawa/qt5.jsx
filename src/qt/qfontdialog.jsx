/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QFontDialog class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qdialog.jsx";
import "qt/qfont.jsx";
import "qt/qobject.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QFontDialog_FontDialogOption {}

final native class Qt_QFontDialog_FontDialogOptions {}

native class QFontDialog extends QDialog
{
    function constructor (parent : QWidget);
    function constructor (initial : QFont, parent : QWidget);

    // Static Members
    static function getFont (parent : QWidget) : QFont;

    static const NoButtons : Qt_QFontDialog_FontDialogOption;
    static const DontUseNativeDialog : Qt_QFontDialog_FontDialogOption;
    static const ScalableFonts : Qt_QFontDialog_FontDialogOption;
    static const NonScalableFonts : Qt_QFontDialog_FontDialogOption;
    static const MonospacedFonts : Qt_QFontDialog_FontDialogOption;
    static const ProportionalFonts : Qt_QFontDialog_FontDialogOption;
    static function FontDialogOption(value : Qt_QFontDialog_FontDialogOption) : Qt_QFontDialog_FontDialogOption;
    static function FontDialogOptions(...value : Qt_QFontDialog_FontDialogOption) : Qt_QFontDialog_FontDialogOptions;

    // Methods
    function open (receiver : QObject, member : string) : void;
    function selectedFont () : QFont;
    function setOption (option : Qt_QFontDialog_FontDialogOption, on : boolean) : void;
    function testOption (option : Qt_QFontDialog_FontDialogOption) : boolean;

    // Signals
    var currentFontChanged : QtJSXQFontSignal;
    var fontSelected : QtJSXQFontSignal;

    // Instance Properties
    var currentFont : QFont;
    var options : Qt_QFontDialog_FontDialogOptions;
}