/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QAuthenticator class
 *
 * Note: DO NOT EDIT THIS FILE
 */

native class QAuthenticator
{
    function constructor ();
    function constructor (other : QAuthenticator);

    // Methods
    function isNull () : boolean;
    function operator_equal (other : QAuthenticator) : boolean;
    function option (opt : string) : variant;
    function password () : string;
    function realm () : string;
    function setOption (opt : string, value : variant) : void;
    function setPassword (password : string) : void;
    function setUser (user : string) : void;
    function user () : string;
}
