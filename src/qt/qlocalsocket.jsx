/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QLocalSocket class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qiodevice.jsx";
import "qt/qobject.jsx";
import "qt/_signals.jsx";

final native class Qt_QLocalSocket_LocalSocketState {}

final native class Qt_QLocalSocket_LocalSocketError {}

native class QLocalSocket extends QIODevice
{
    function constructor (parent : QObject);

    static const UnconnectedState : Qt_QLocalSocket_LocalSocketState;
    static const ConnectingState : Qt_QLocalSocket_LocalSocketState;
    static const ConnectedState : Qt_QLocalSocket_LocalSocketState;
    static const ClosingState : Qt_QLocalSocket_LocalSocketState;
    static function LocalSocketState(value : Qt_QLocalSocket_LocalSocketState) : Qt_QLocalSocket_LocalSocketState;

    static const UnknownSocketError : Qt_QLocalSocket_LocalSocketError;
    static const ConnectionRefusedError : Qt_QLocalSocket_LocalSocketError;
    static const PeerClosedError : Qt_QLocalSocket_LocalSocketError;
    static const ServerNotFoundError : Qt_QLocalSocket_LocalSocketError;
    static const SocketAccessError : Qt_QLocalSocket_LocalSocketError;
    static const SocketResourceError : Qt_QLocalSocket_LocalSocketError;
    static const SocketTimeoutError : Qt_QLocalSocket_LocalSocketError;
    static const DatagramTooLargeError : Qt_QLocalSocket_LocalSocketError;
    static const ConnectionError : Qt_QLocalSocket_LocalSocketError;
    static const UnsupportedSocketOperationError : Qt_QLocalSocket_LocalSocketError;
    static const OperationError : Qt_QLocalSocket_LocalSocketError;
    static function LocalSocketError(value : Qt_QLocalSocket_LocalSocketError) : Qt_QLocalSocket_LocalSocketError;

    // Methods
    function abort () : void;
    function connectToServer (openMode : Qt_QIODevice_OpenMode) : void;
    function connectToServer (name : string, openMode : Qt_QIODevice_OpenMode) : void;
    function disconnectFromServer () : void;
    function flush () : boolean;
    function fullServerName () : string;
    function isValid () : boolean;
    function readBufferSize () : number;
    function serverName () : string;
    function setReadBufferSize (size : number) : void;
    function setServerName (name : string) : void;
    function state () : Qt_QLocalSocket_LocalSocketState;
    function waitForConnected (msecs : int) : boolean;
    function waitForDisconnected (msecs : int) : boolean;

    // Signals
    var connected : QtJSXSignal;
    var disconnected : QtJSXSignal;
    var error : QtJSXQt_QLocalSocket_LocalSocketErrorSignal;
    var stateChanged : QtJSXQt_QLocalSocket_LocalSocketStateSignal;
}
