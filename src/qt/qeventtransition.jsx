/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QEventTransition class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstracttransition.jsx";
import "qt/qevent.jsx";
import "qt/qobject.jsx";
import "qt/qstate.jsx";

native class QEventTransition extends QAbstractTransition
{
    function constructor (object : QObject, type : Qt_QEvent_Type, sourceState : QState);
    function constructor (sourceState : QState);

    // Instance Properties
    var eventSource : QObject;
    var eventType : Qt_QEvent_Type;
}