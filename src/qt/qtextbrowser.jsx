/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTextBrowser class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qtextedit.jsx";
import "qt/qurl.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

native class QTextBrowser extends QTextEdit
{
    function constructor (parent : QWidget);

    // Methods
    function backwardHistoryCount () : int;
    function clearHistory () : void;
    function forwardHistoryCount () : int;
    function historyTitle (arg__1 : int) : string;
    function historyUrl (arg__1 : int) : QUrl;
    function isBackwardAvailable () : boolean;
    function isForwardAvailable () : boolean;

    // Slots
    function backward () : void;
    function forward () : void;
    function home () : void;
    function reload () : void;

    // Signals
    var anchorClicked : QtJSXQUrlSignal;
    var backwardAvailable : QtJSXboolSignal;
    var forwardAvailable : QtJSXboolSignal;
    var highlighted : QtJSXQUrlSignal;
    var historyChanged : QtJSXSignal;
    var sourceChanged : QtJSXQUrlSignal;

    // Instance Properties
    var source : QUrl;
    var searchPaths : string[];
    var openExternalLinks : boolean;
    var openLinks : boolean;
} = '''QTextBrowser;
QTextBrowser.prototype.highlighted = QTextBrowser.prototype['highlighted(QUrl)'];
''';