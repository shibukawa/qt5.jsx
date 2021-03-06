/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QEventLoop class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";

final native class Qt_QEventLoop_ProcessEventsFlag {}

final native class Qt_QEventLoop_ProcessEventsFlags {}

native class QEventLoop extends QObject
{
    function constructor (parent : QObject);

    static const AllEvents : Qt_QEventLoop_ProcessEventsFlag;
    static const ExcludeUserInputEvents : Qt_QEventLoop_ProcessEventsFlag;
    static const ExcludeSocketNotifiers : Qt_QEventLoop_ProcessEventsFlag;
    static const WaitForMoreEvents : Qt_QEventLoop_ProcessEventsFlag;
    static const X11ExcludeTimers : Qt_QEventLoop_ProcessEventsFlag;
    static const EventLoopExec : Qt_QEventLoop_ProcessEventsFlag;
    static const DialogExec : Qt_QEventLoop_ProcessEventsFlag;
    static function ProcessEventsFlag(value : Qt_QEventLoop_ProcessEventsFlag) : Qt_QEventLoop_ProcessEventsFlag;
    static function ProcessEventsFlags(...value : Qt_QEventLoop_ProcessEventsFlag) : Qt_QEventLoop_ProcessEventsFlags;

    // Methods
    function exec (flags : Qt_QEventLoop_ProcessEventsFlags) : int;
    function exit (returnCode : int) : void;
    function isRunning () : boolean;
    function processEvents (flags : Qt_QEventLoop_ProcessEventsFlags) : boolean;
    function processEvents (flags : Qt_QEventLoop_ProcessEventsFlags, maximumTime : int) : void;
    function wakeUp () : void;

    // Slots
    function quit () : void;
}
