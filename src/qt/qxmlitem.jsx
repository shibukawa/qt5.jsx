/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QXmlItem class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qxmlnodemodelindex.jsx";

native class QXmlItem
{
    function constructor ();
    function constructor (atomicValue : variant);
    function constructor (other : QXmlItem);
    function constructor (node : QXmlNodeModelIndex);

    // Methods
    function isAtomicValue () : boolean;
    function isNode () : boolean;
    function isNull () : boolean;
    function toAtomicValue () : variant;
    function toNodeModelIndex () : QXmlNodeModelIndex;
}