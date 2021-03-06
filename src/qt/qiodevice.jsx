/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QIODevice class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";
import "qt/qobject.jsx";
import "qt/_signals.jsx";

final native class Qt_QIODevice_OpenModeFlag {}

final native class Qt_QIODevice_OpenMode {}

native class QIODevice extends QObject
{
    function constructor ();
    function constructor (parent : QObject);

    static const NotOpen : Qt_QIODevice_OpenModeFlag;
    static const ReadOnly : Qt_QIODevice_OpenModeFlag;
    static const WriteOnly : Qt_QIODevice_OpenModeFlag;
    static const ReadWrite : Qt_QIODevice_OpenModeFlag;
    static const Append : Qt_QIODevice_OpenModeFlag;
    static const Truncate : Qt_QIODevice_OpenModeFlag;
    static const Text : Qt_QIODevice_OpenModeFlag;
    static const Unbuffered : Qt_QIODevice_OpenModeFlag;
    static function OpenModeFlag(value : Qt_QIODevice_OpenModeFlag) : Qt_QIODevice_OpenModeFlag;
    static function OpenMode(...value : Qt_QIODevice_OpenModeFlag) : Qt_QIODevice_OpenMode;

    // Methods
    function atEnd () : boolean;
    function bytesAvailable () : number;
    function bytesToWrite () : number;
    function canReadLine () : boolean;
    function close () : void;
    function errorString () : string;
    function getChar (c : string) : boolean;
    function isOpen () : boolean;
    function isReadable () : boolean;
    function isSequential () : boolean;
    function isTextModeEnabled () : boolean;
    function isWritable () : boolean;
    function open (mode : Qt_QIODevice_OpenMode) : boolean;
    function openMode () : Qt_QIODevice_OpenMode;
    function peek (maxlen : number) : QByteArray;
    function pos () : number;
    function putChar (c : string) : boolean;
    function read (maxlen : number) : QByteArray;
    function readAll () : QByteArray;
    function readData (data : string, maxlen : number) : number;
    function readLine (maxlen : number) : QByteArray;
    function readLineData (data : string, maxlen : number) : number;
    function reset () : boolean;
    function seek (pos : number) : boolean;
    function setErrorString (errorString : string) : void;
    function setOpenMode (openMode : Qt_QIODevice_OpenMode) : void;
    function setTextModeEnabled (enabled : boolean) : void;
    function size () : number;
    function ungetChar (c : string) : void;
    function waitForBytesWritten (msecs : int) : boolean;
    function waitForReadyRead (msecs : int) : boolean;
    function write (data : QByteArray) : number;
    function write (data : string) : number;
    function writeData (data : string, len : number) : number;

    // Signals
    var aboutToClose : QtJSXSignal;
    var bytesWritten : QtJSXqint64Signal;
    var readChannelFinished : QtJSXSignal;
    var readyRead : QtJSXSignal;
}
