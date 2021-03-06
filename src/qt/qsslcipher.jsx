/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSslCipher class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qssl.jsx";

native class QSslCipher
{
    function constructor ();
    function constructor (other : QSslCipher);
    function constructor (name : string, protocol : Qt_QSsl_SslProtocol);

    // Methods
    function authenticationMethod () : string;
    function encryptionMethod () : string;
    function isNull () : boolean;
    function keyExchangeMethod () : string;
    function name () : string;
    function operator_assign (other : QSslCipher) : QSslCipher;
    function operator_equal (other : QSslCipher) : boolean;
    function protocol () : Qt_QSsl_SslProtocol;
    function protocolString () : string;
    function supportedBits () : int;
    function swap (other : QSslCipher) : void;
    function usedBits () : int;
}
