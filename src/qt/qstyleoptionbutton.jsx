/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QStyleOptionButton class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qstyleoption.jsx";

final native class Qt_QStyleOptionButton_StyleOptionVersion {}

final native class Qt_QStyleOptionButton_ButtonFeature {}

final native class Qt_QStyleOptionButton_ButtonFeatures {}

final native class Qt_QStyleOptionButton_StyleOptionType {}

native class QStyleOptionButton extends QStyleOption
{
    function constructor ();
    function constructor (other : QStyleOptionButton);

    static const Version : Qt_QStyleOptionButton_StyleOptionVersion;
    static function StyleOptionVersion(value : Qt_QStyleOptionButton_StyleOptionVersion) : Qt_QStyleOptionButton_StyleOptionVersion;

    static const None : Qt_QStyleOptionButton_ButtonFeature;
    static const Flat : Qt_QStyleOptionButton_ButtonFeature;
    static const HasMenu : Qt_QStyleOptionButton_ButtonFeature;
    static const DefaultButton : Qt_QStyleOptionButton_ButtonFeature;
    static const AutoDefaultButton : Qt_QStyleOptionButton_ButtonFeature;
    static const CommandLinkButton : Qt_QStyleOptionButton_ButtonFeature;
    static function ButtonFeature(value : Qt_QStyleOptionButton_ButtonFeature) : Qt_QStyleOptionButton_ButtonFeature;
    static function ButtonFeatures(...value : Qt_QStyleOptionButton_ButtonFeature) : Qt_QStyleOptionButton_ButtonFeatures;

    static const Type : Qt_QStyleOptionButton_StyleOptionType;
    static function StyleOptionType(value : Qt_QStyleOptionButton_StyleOptionType) : Qt_QStyleOptionButton_StyleOptionType;
}
