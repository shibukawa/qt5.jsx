/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSignalTransition class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstracttransition.jsx";
import "qt/qbytearray.jsx";
import "qt/qobject.jsx";
import "qt/qstate.jsx";

native class QSignalTransition extends QAbstractTransition
{
    function constructor (sourceState : QState);
    function constructor (sender : QObject, signal : string, sourceState : QState);

    // Instance Properties
    var senderObject : QObject;
    var signal : QByteArray;
}