/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSourceLocation class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qurl.jsx";

native class QSourceLocation
{
    function constructor ();
    function constructor (other : QSourceLocation);
    function constructor (uri : QUrl, line : int, column : int);

    // Methods
    function column () : number;
    function isNull () : boolean;
    function line () : number;
    function operator_equal (other : QSourceLocation) : boolean;
    function setColumn (newColumn : number) : void;
    function setLine (newLine : number) : void;
    function setUri (newUri : QUrl) : void;
    function uri () : QUrl;
}
