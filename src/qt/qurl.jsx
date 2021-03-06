/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QUrl class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";

final native class Qt_QUrl_ParsingMode {}

native class QUrl
{
    function constructor ();
    function constructor (url : string, mode : Qt_QUrl_ParsingMode);
    function constructor (copy : QUrl);

    // Static Members
    static function fromAce (arg__1 : QByteArray) : string;
    static function fromEncoded (url : QByteArray, mode : Qt_QUrl_ParsingMode) : QUrl;
    static function fromLocalFile (localfile : string) : QUrl;
    static function fromPercentEncoding (arg__1 : QByteArray) : string;
    static function fromStringList (uris : string[], mode : Qt_QUrl_ParsingMode) : QUrl[];
    static function fromUserInput (userInput : string) : QUrl;
    static function idnWhitelist () : string[];
    static function setIdnWhitelist (arg__1 : string[]) : void;
    static function toAce (arg__1 : string) : QByteArray;
    static function toPercentEncoding (arg__1 : string, exclude : QByteArray, include : QByteArray) : QByteArray;

    static const TolerantMode : Qt_QUrl_ParsingMode;
    static const StrictMode : Qt_QUrl_ParsingMode;
    static const DecodedMode : Qt_QUrl_ParsingMode;
    static function ParsingMode(value : Qt_QUrl_ParsingMode) : Qt_QUrl_ParsingMode;

    // Methods
    function clear () : void;
    function errorString () : string;
    function hasFragment () : boolean;
    function hasQuery () : boolean;
    function isEmpty () : boolean;
    function isLocalFile () : boolean;
    function isParentOf (url : QUrl) : boolean;
    function isRelative () : boolean;
    function isValid () : boolean;
    function operator_equal (url : QUrl) : boolean;
    function operator_less (url : QUrl) : boolean;
    function port (defaultPort : int) : int;
    function resolved (relative : QUrl) : QUrl;
    function scheme () : string;
    function setAuthority (authority : string, mode : Qt_QUrl_ParsingMode) : void;
    function setFragment (fragment : string, mode : Qt_QUrl_ParsingMode) : void;
    function setHost (host : string, mode : Qt_QUrl_ParsingMode) : void;
    function setPassword (password : string, mode : Qt_QUrl_ParsingMode) : void;
    function setPath (path : string, mode : Qt_QUrl_ParsingMode) : void;
    function setPort (port : int) : void;
    function setQuery (query : string, mode : Qt_QUrl_ParsingMode) : void;
    function setScheme (scheme : string) : void;
    function setUrl (url : string, mode : Qt_QUrl_ParsingMode) : void;
    function setUserInfo (userInfo : string, mode : Qt_QUrl_ParsingMode) : void;
    function setUserName (userName : string, mode : Qt_QUrl_ParsingMode) : void;
    function swap (other : QUrl) : void;
    function toLocalFile () : string;
}
