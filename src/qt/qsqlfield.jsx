/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QSqlField class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qvariant.jsx";

final native class Qt_QSqlField_RequiredStatus {}

native class QSqlField
{
    function constructor (other : QSqlField);
    function constructor (fieldName : string, type : Qt_QVariant_Type);

    static const Unknown : Qt_QSqlField_RequiredStatus;
    static const Optional : Qt_QSqlField_RequiredStatus;
    static const Required : Qt_QSqlField_RequiredStatus;
    static function RequiredStatus(value : Qt_QSqlField_RequiredStatus) : Qt_QSqlField_RequiredStatus;

    // Methods
    function clear () : void;
    function defaultValue () : variant;
    function isAutoValue () : boolean;
    function isGenerated () : boolean;
    function isNull () : boolean;
    function isReadOnly () : boolean;
    function isValid () : boolean;
    function length () : int;
    function name () : string;
    function operator_equal (other : QSqlField) : boolean;
    function precision () : int;
    function requiredStatus () : Qt_QSqlField_RequiredStatus;
    function setAutoValue (autoVal : boolean) : void;
    function setDefaultValue (value : variant) : void;
    function setGenerated (gen : boolean) : void;
    function setLength (fieldLength : int) : void;
    function setName (name : string) : void;
    function setPrecision (precision : int) : void;
    function setReadOnly (readOnly : boolean) : void;
    function setRequired (required : boolean) : void;
    function setRequiredStatus (status : Qt_QSqlField_RequiredStatus) : void;
    function setSqlType (type : int) : void;
    function setType (type : Qt_QVariant_Type) : void;
    function setValue (value : variant) : void;
    function type () : Qt_QVariant_Type;
    function typeID () : int;
    function value () : variant;
}
