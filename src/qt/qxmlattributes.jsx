/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QXmlAttributes class
 *
 * Note: DO NOT EDIT THIS FILE
 */

native class QXmlAttributes
{
    function constructor ();

    // Methods
    function append (qName : string, uri : string, localPart : string, value : string) : void;
    function clear () : void;
    function count () : int;
    function index (qName : string) : int;
    function index (uri : string, localPart : string) : int;
    function length () : int;
    function localName (index : int) : string;
    function qName (index : int) : string;
    function type (qName : string) : string;
    function type (uri : string, localName : string) : string;
    function type (index : int) : string;
    function uri (index : int) : string;
    function value (qName : string) : string;
    function value (uri : string, localName : string) : string;
    function value (index : int) : string;
}
