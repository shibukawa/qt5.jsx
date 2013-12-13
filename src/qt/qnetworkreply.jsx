/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QNetworkReply class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";
import "qt/qiodevice.jsx";
import "qt/qnetworkaccessmanager.jsx";
import "qt/qnetworkrequest.jsx";
import "qt/qsslconfiguration.jsx";
import "qt/qsslerror.jsx";
import "qt/qurl.jsx";
import "qt/_signals.jsx";

final native class Qt_QNetworkReply_NetworkError {}

native class QNetworkReply extends QIODevice
{

    static const NoError : Qt_QNetworkReply_NetworkError;
    static const ConnectionRefusedError : Qt_QNetworkReply_NetworkError;
    static const RemoteHostClosedError : Qt_QNetworkReply_NetworkError;
    static const HostNotFoundError : Qt_QNetworkReply_NetworkError;
    static const TimeoutError : Qt_QNetworkReply_NetworkError;
    static const OperationCanceledError : Qt_QNetworkReply_NetworkError;
    static const SslHandshakeFailedError : Qt_QNetworkReply_NetworkError;
    static const TemporaryNetworkFailureError : Qt_QNetworkReply_NetworkError;
    static const NetworkSessionFailedError : Qt_QNetworkReply_NetworkError;
    static const BackgroundRequestNotAllowedError : Qt_QNetworkReply_NetworkError;
    static const UnknownNetworkError : Qt_QNetworkReply_NetworkError;
    static const ProxyConnectionRefusedError : Qt_QNetworkReply_NetworkError;
    static const ProxyConnectionClosedError : Qt_QNetworkReply_NetworkError;
    static const ProxyNotFoundError : Qt_QNetworkReply_NetworkError;
    static const ProxyTimeoutError : Qt_QNetworkReply_NetworkError;
    static const ProxyAuthenticationRequiredError : Qt_QNetworkReply_NetworkError;
    static const UnknownProxyError : Qt_QNetworkReply_NetworkError;
    static const ContentAccessDenied : Qt_QNetworkReply_NetworkError;
    static const ContentOperationNotPermittedError : Qt_QNetworkReply_NetworkError;
    static const ContentNotFoundError : Qt_QNetworkReply_NetworkError;
    static const AuthenticationRequiredError : Qt_QNetworkReply_NetworkError;
    static const ContentReSendError : Qt_QNetworkReply_NetworkError;
    static const UnknownContentError : Qt_QNetworkReply_NetworkError;
    static const ProtocolUnknownError : Qt_QNetworkReply_NetworkError;
    static const ProtocolInvalidOperationError : Qt_QNetworkReply_NetworkError;
    static const ProtocolFailure : Qt_QNetworkReply_NetworkError;
    static function NetworkError(value : Qt_QNetworkReply_NetworkError) : Qt_QNetworkReply_NetworkError;

    // Methods
    function attribute (code : Qt_QNetworkRequest_Attribute) : variant;
    function hasRawHeader (headerName : QByteArray) : boolean;
    function header (header : Qt_QNetworkRequest_KnownHeaders) : variant;
    function ignoreSslErrors (errors : QSslError[]) : void;
    function ignoreSslErrorsImplementation (arg__1 : QSslError[]) : void;
    function isFinished () : boolean;
    function isRunning () : boolean;
    function manager () : QNetworkAccessManager;
    function operation () : Qt_QNetworkAccessManager_Operation;
    function rawHeader (headerName : QByteArray) : QByteArray;
    function rawHeaderList () : QByteArray[];
    function readBufferSize () : number;
    function request () : QNetworkRequest;
    function setAttribute (code : Qt_QNetworkRequest_Attribute, value : variant) : void;
    function setError (errorCode : Qt_QNetworkReply_NetworkError, errorString : string) : void;
    function setFinished (arg__1 : boolean) : void;
    function setHeader (header : Qt_QNetworkRequest_KnownHeaders, value : variant) : void;
    function setOperation (operation : Qt_QNetworkAccessManager_Operation) : void;
    function setRawHeader (headerName : QByteArray, value : QByteArray) : void;
    function setReadBufferSize (size : number) : void;
    function setRequest (request : QNetworkRequest) : void;
    function setSslConfiguration (configuration : QSslConfiguration) : void;
    function setSslConfigurationImplementation (arg__1 : QSslConfiguration) : void;
    function setUrl (url : QUrl) : void;
    function sslConfiguration () : QSslConfiguration;
    function sslConfigurationImplementation (arg__1 : QSslConfiguration) : void;
    function url () : QUrl;

    // Slots
    function abort () : void;
    function ignoreSslErrors () : void;

    // Signals
    var downloadProgress : QtJSXqint64qint64Signal;
    var encrypted : QtJSXSignal;
    var error : QtJSXQt_QNetworkReply_NetworkErrorSignal;
    var finished : QtJSXSignal;
    var metaDataChanged : QtJSXSignal;
    var sslErrors : QtJSXQSslErrorListSignal;
    var uploadProgress : QtJSXqint64qint64Signal;
}
