/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTextLayout class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qfont.jsx";
import "qt/qpaintdevice.jsx";
import "qt/qpainter.jsx";
import "qt/qpointf.jsx";
import "qt/qrectf.jsx";
import "qt/qt.jsx";
import "qt/qtextblock.jsx";
import "qt/qtextline.jsx";

final native class Qt_QTextLayout_CursorMode {}

native class QTextLayout
{
    function constructor ();
    function constructor (text : string);
    function constructor (text : string, font : QFont, paintdevice : QPaintDevice);
    function constructor (b : QTextBlock);

    static const SkipCharacters : Qt_QTextLayout_CursorMode;
    static const SkipWords : Qt_QTextLayout_CursorMode;
    static function CursorMode(value : Qt_QTextLayout_CursorMode) : Qt_QTextLayout_CursorMode;

    // Methods
    function beginLayout () : void;
    function boundingRect () : QRectF;
    function cacheEnabled () : boolean;
    function clearAdditionalFormats () : void;
    function clearLayout () : void;
    function createLine () : QTextLine;
    function cursorMoveStyle () : Qt_CursorMoveStyle;
    function drawCursor (p : QPainter, pos : QPointF, cursorPosition : int) : void;
    function drawCursor (p : QPainter, pos : QPointF, cursorPosition : int, width : int) : void;
    function endLayout () : void;
    function font () : QFont;
    function isValidCursorPosition (pos : int) : boolean;
    function leftCursorPosition (oldPos : int) : int;
    function lineAt (i : int) : QTextLine;
    function lineCount () : int;
    function lineForTextPosition (pos : int) : QTextLine;
    function maximumWidth () : number;
    function minimumWidth () : number;
    function nextCursorPosition (oldPos : int, mode : Qt_QTextLayout_CursorMode) : int;
    function position () : QPointF;
    function preeditAreaPosition () : int;
    function preeditAreaText () : string;
    function previousCursorPosition (oldPos : int, mode : Qt_QTextLayout_CursorMode) : int;
    function rightCursorPosition (oldPos : int) : int;
    function setCacheEnabled (enable : boolean) : void;
    function setCursorMoveStyle (style : Qt_CursorMoveStyle) : void;
    function setFlags (flags : int) : void;
    function setFont (f : QFont) : void;
    function setPosition (p : QPointF) : void;
    function setPreeditArea (position : int, text : string) : void;
    function setText (string : string) : void;
    function text () : string;
}
