/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QWaitCondition class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qmutex.jsx";
import "qt/qreadwritelock.jsx";

native class QWaitCondition
{
    function constructor ();

    // Methods
    function wait (lockedMutex : QMutex, time : int) : boolean;
    function wait (lockedReadWriteLock : QReadWriteLock, time : int) : boolean;
    function wakeAll () : void;
    function wakeOne () : void;
}