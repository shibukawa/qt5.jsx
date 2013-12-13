/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QFutureVoid class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qfuture.jsx";

native class QFutureVoid
{
    function constructor ();
    function constructor (other : QFuture);

    // Methods
    function cancel () : void;
    function isCanceled () : boolean;
    function isFinished () : boolean;
    function isPaused () : boolean;
    function isRunning () : boolean;
    function isStarted () : boolean;
    function operator_equal (other : QFuture) : boolean;
    function pause () : void;
    function progressMaximum () : int;
    function progressMinimum () : int;
    function progressText () : string;
    function progressValue () : int;
    function resume () : void;
    function setPaused (paused : boolean) : void;
    function togglePaused () : void;
    function waitForFinished () : void;
}