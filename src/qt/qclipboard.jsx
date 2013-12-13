/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QClipboard class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qimage.jsx";
import "qt/qmimedata.jsx";
import "qt/qobject.jsx";
import "qt/qpixmap.jsx";
import "qt/_signals.jsx";

final native class Qt_QClipboard_Mode {}

native class QClipboard extends QObject
{

    static const Clipboard : Qt_QClipboard_Mode;
    static const Selection : Qt_QClipboard_Mode;
    static const FindBuffer : Qt_QClipboard_Mode;
    static function Mode(value : Qt_QClipboard_Mode) : Qt_QClipboard_Mode;

    // Methods
    function clear (mode : Qt_QClipboard_Mode) : void;
    function image (mode : Qt_QClipboard_Mode) : QImage;
    function mimeData (mode : Qt_QClipboard_Mode) : QMimeData;
    function ownsClipboard () : boolean;
    function ownsFindBuffer () : boolean;
    function ownsSelection () : boolean;
    function pixmap (mode : Qt_QClipboard_Mode) : QPixmap;
    function setImage (arg__1 : QImage, mode : Qt_QClipboard_Mode) : void;
    function setMimeData (data : QMimeData, mode : Qt_QClipboard_Mode) : void;
    function setPixmap (arg__1 : QPixmap, mode : Qt_QClipboard_Mode) : void;
    function setText (arg__1 : string, mode : Qt_QClipboard_Mode) : void;
    function supportsFindBuffer () : boolean;
    function supportsSelection () : boolean;
    function text (mode : Qt_QClipboard_Mode) : string;
    function text (subtype : string, mode : Qt_QClipboard_Mode) : string;

    // Signals
    var changed : QtJSXQt_QClipboard_ModeSignal;
    var dataChanged : QtJSXSignal;
    var findBufferChanged : QtJSXSignal;
    var selectionChanged : QtJSXSignal;
}