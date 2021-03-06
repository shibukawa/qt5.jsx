/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QUuid class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";

final native class Qt_QUuid_Variant {}

final native class Qt_QUuid_Version {}

native class QUuid
{
    function constructor ();
    function constructor (arg__1 : QByteArray);
    function constructor (arg__1 : string);
    function constructor (l : int, w1 : int, w2 : int, b1 : int, b2 : int, b3 : int, b4 : int, b5 : int, b6 : int, b7 : int, b8 : int);

    // Static Members
    static function createUuid () : QUuid;
    static function createUuidV3 (ns : QUuid, baseData : QByteArray) : QUuid;
    static function createUuidV5 (ns : QUuid, baseData : QByteArray) : QUuid;
    static function fromRfc4122 (arg__1 : QByteArray) : QUuid;

    static const VarUnknown : Qt_QUuid_Variant;
    static const NCS : Qt_QUuid_Variant;
    static const DCE : Qt_QUuid_Variant;
    static const Microsoft : Qt_QUuid_Variant;
    static const Reserved : Qt_QUuid_Variant;
    static function Variant(value : Qt_QUuid_Variant) : Qt_QUuid_Variant;

    static const VerUnknown : Qt_QUuid_Version;
    static const Time : Qt_QUuid_Version;
    static const EmbeddedPOSIX : Qt_QUuid_Version;
    static const Md5 : Qt_QUuid_Version;
    static const Random : Qt_QUuid_Version;
    static const Sha1 : Qt_QUuid_Version;
    static function Version(value : Qt_QUuid_Version) : Qt_QUuid_Version;

    // Methods
    function isNull () : boolean;
    function operator_equal (orig : QUuid) : boolean;
    function operator_less (other : QUuid) : boolean;
    function toByteArray () : QByteArray;
    function toRfc4122 () : QByteArray;
    function variant () : Qt_QUuid_Variant;
    function version () : Qt_QUuid_Version;
}
