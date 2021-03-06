/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSessionManager class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";

final native class Qt_QSessionManager_RestartHint {}

native class QSessionManager extends QObject
{

    static const RestartIfRunning : Qt_QSessionManager_RestartHint;
    static const RestartAnyway : Qt_QSessionManager_RestartHint;
    static const RestartImmediately : Qt_QSessionManager_RestartHint;
    static const RestartNever : Qt_QSessionManager_RestartHint;
    static function RestartHint(value : Qt_QSessionManager_RestartHint) : Qt_QSessionManager_RestartHint;

    // Methods
    function allowsErrorInteraction () : boolean;
    function allowsInteraction () : boolean;
    function cancel () : void;
    function discardCommand () : string[];
    function isPhase2 () : boolean;
    function release () : void;
    function requestPhase2 () : void;
    function restartCommand () : string[];
    function restartHint () : Qt_QSessionManager_RestartHint;
    function sessionId () : string;
    function sessionKey () : string;
    function setDiscardCommand (arg__1 : string[]) : void;
    function setManagerProperty (name : string, value : string) : void;
    function setManagerProperty (name : string, value : string[]) : void;
    function setRestartCommand (arg__1 : string[]) : void;
    function setRestartHint (arg__1 : Qt_QSessionManager_RestartHint) : void;
}
