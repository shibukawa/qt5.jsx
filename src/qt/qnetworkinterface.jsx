/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QNetworkInterface class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qhostaddress.jsx";
import "qt/qnetworkaddressentry.jsx";

final native class Qt_QNetworkInterface_InterfaceFlag {}

final native class Qt_QNetworkInterface_InterfaceFlags {}

native class QNetworkInterface
{
    function constructor ();
    function constructor (other : QNetworkInterface);

    // Static Members
    static function allAddresses () : QHostAddress[];
    static function allInterfaces () : QNetworkInterface[];
    static function interfaceFromIndex (index : int) : QNetworkInterface;
    static function interfaceFromName (name : string) : QNetworkInterface;

    static const IsUp : Qt_QNetworkInterface_InterfaceFlag;
    static const IsRunning : Qt_QNetworkInterface_InterfaceFlag;
    static const CanBroadcast : Qt_QNetworkInterface_InterfaceFlag;
    static const IsLoopBack : Qt_QNetworkInterface_InterfaceFlag;
    static const IsPointToPoint : Qt_QNetworkInterface_InterfaceFlag;
    static const CanMulticast : Qt_QNetworkInterface_InterfaceFlag;
    static function InterfaceFlag(value : Qt_QNetworkInterface_InterfaceFlag) : Qt_QNetworkInterface_InterfaceFlag;
    static function InterfaceFlags(...value : Qt_QNetworkInterface_InterfaceFlag) : Qt_QNetworkInterface_InterfaceFlags;

    // Methods
    function addressEntries () : QNetworkAddressEntry[];
    function flags () : Qt_QNetworkInterface_InterfaceFlags;
    function hardwareAddress () : string;
    function humanReadableName () : string;
    function index () : int;
    function isValid () : boolean;
    function name () : string;
    function swap (other : QNetworkInterface) : void;
}
