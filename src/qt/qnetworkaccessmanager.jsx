/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QNetworkAccessManager class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractnetworkcache.jsx";
import "qt/qauthenticator.jsx";
import "qt/qbytearray.jsx";
import "qt/qiodevice.jsx";
import "qt/qnetworkcookiejar.jsx";
import "qt/qnetworkproxy.jsx";
import "qt/qnetworkproxyfactory.jsx";
import "qt/qnetworkreply.jsx";
import "qt/qnetworkrequest.jsx";
import "qt/qobject.jsx";
import "qt/qsslconfiguration.jsx";
import "qt/qsslerror.jsx";
import "qt/_signals.jsx";

final native class Qt_QNetworkAccessManager_Operation {}

final native class Qt_QNetworkAccessManager_NetworkAccessibility {}

native class QNetworkAccessManager extends QObject
{
    function constructor (parent : QObject);

    static const UnknownOperation : Qt_QNetworkAccessManager_Operation;
    static const HeadOperation : Qt_QNetworkAccessManager_Operation;
    static const GetOperation : Qt_QNetworkAccessManager_Operation;
    static const PutOperation : Qt_QNetworkAccessManager_Operation;
    static const PostOperation : Qt_QNetworkAccessManager_Operation;
    static const DeleteOperation : Qt_QNetworkAccessManager_Operation;
    static const CustomOperation : Qt_QNetworkAccessManager_Operation;
    static function Operation(value : Qt_QNetworkAccessManager_Operation) : Qt_QNetworkAccessManager_Operation;

    static const UnknownAccessibility : Qt_QNetworkAccessManager_NetworkAccessibility;
    static const NotAccessible : Qt_QNetworkAccessManager_NetworkAccessibility;
    static const Accessible : Qt_QNetworkAccessManager_NetworkAccessibility;
    static function NetworkAccessibility(value : Qt_QNetworkAccessManager_NetworkAccessibility) : Qt_QNetworkAccessManager_NetworkAccessibility;

    // Methods
    function cache () : QAbstractNetworkCache;
    function clearAccessCache () : void;
    function connectToHost (hostName : string, port : int) : void;
    function connectToHostEncrypted (hostName : string, port : int, sslConfiguration : QSslConfiguration) : void;
    function cookieJar () : QNetworkCookieJar;
    function createRequest (op : Qt_QNetworkAccessManager_Operation, request : QNetworkRequest, outgoingData : QIODevice) : QNetworkReply;
    function deleteResource (request : QNetworkRequest) : QNetworkReply;
    function get (request : QNetworkRequest) : QNetworkReply;
    function head (request : QNetworkRequest) : QNetworkReply;
    function post (request : QNetworkRequest, data : QIODevice) : QNetworkReply;
    function post (request : QNetworkRequest, data : QByteArray) : QNetworkReply;
    function proxy () : QNetworkProxy;
    function proxyFactory () : QNetworkProxyFactory;
    function put (request : QNetworkRequest, data : QIODevice) : QNetworkReply;
    function put (request : QNetworkRequest, data : QByteArray) : QNetworkReply;
    function sendCustomRequest (request : QNetworkRequest, verb : QByteArray, data : QIODevice) : QNetworkReply;
    function setCache (cache : QAbstractNetworkCache) : void;
    function setCookieJar (cookieJar : QNetworkCookieJar) : void;
    function setProxy (proxy : QNetworkProxy) : void;
    function setProxyFactory (factory : QNetworkProxyFactory) : void;
    function supportedSchemes () : string[];

    // Slots
    function supportedSchemesImplementation () : string[];

    // Signals
    var authenticationRequired : QtJSXQNetworkReplyQAuthenticatorSignal;
    var encrypted : QtJSXQNetworkReplySignal;
    var finished : QtJSXQNetworkReplySignal;
    var networkAccessibleChanged : QtJSXQt_QNetworkAccessManager_NetworkAccessibilitySignal;
    var networkSessionConnected : QtJSXSignal;
    var proxyAuthenticationRequired : QtJSXQNetworkProxyQAuthenticatorSignal;
    var sslErrors : QtJSXQNetworkReplyQSslErrorListSignal;

    // Instance Properties
    var networkAccessible : Qt_QNetworkAccessManager_NetworkAccessibility;
}
