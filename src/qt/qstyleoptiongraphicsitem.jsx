/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QStyleOptionGraphicsItem class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qstyleoption.jsx";
import "qt/qtransform.jsx";

final native class Qt_QStyleOptionGraphicsItem_StyleOptionVersion {}

final native class Qt_QStyleOptionGraphicsItem_StyleOptionType {}

native class QStyleOptionGraphicsItem extends QStyleOption
{
    function constructor ();
    function constructor (other : QStyleOptionGraphicsItem);

    // Static Members
    static function levelOfDetailFromTransform (worldTransform : QTransform) : number;

    static const Version : Qt_QStyleOptionGraphicsItem_StyleOptionVersion;
    static function StyleOptionVersion(value : Qt_QStyleOptionGraphicsItem_StyleOptionVersion) : Qt_QStyleOptionGraphicsItem_StyleOptionVersion;

    static const Type : Qt_QStyleOptionGraphicsItem_StyleOptionType;
    static function StyleOptionType(value : Qt_QStyleOptionGraphicsItem_StyleOptionType) : Qt_QStyleOptionGraphicsItem_StyleOptionType;
}
