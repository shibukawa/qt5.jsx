/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QStyleOptionToolBar class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qstyleoption.jsx";

final native class Qt_QStyleOptionToolBar_ToolBarFeature {}

final native class Qt_QStyleOptionToolBar_ToolBarFeatures {}

final native class Qt_QStyleOptionToolBar_StyleOptionVersion {}

final native class Qt_QStyleOptionToolBar_ToolBarPosition {}

final native class Qt_QStyleOptionToolBar_StyleOptionType {}

native class QStyleOptionToolBar extends QStyleOption
{
    function constructor ();
    function constructor (other : QStyleOptionToolBar);

    static const None : Qt_QStyleOptionToolBar_ToolBarFeature;
    static const Movable : Qt_QStyleOptionToolBar_ToolBarFeature;
    static function ToolBarFeature(value : Qt_QStyleOptionToolBar_ToolBarFeature) : Qt_QStyleOptionToolBar_ToolBarFeature;
    static function ToolBarFeatures(...value : Qt_QStyleOptionToolBar_ToolBarFeature) : Qt_QStyleOptionToolBar_ToolBarFeatures;

    static const Version : Qt_QStyleOptionToolBar_StyleOptionVersion;
    static function StyleOptionVersion(value : Qt_QStyleOptionToolBar_StyleOptionVersion) : Qt_QStyleOptionToolBar_StyleOptionVersion;

    static const Beginning : Qt_QStyleOptionToolBar_ToolBarPosition;
    static const Middle : Qt_QStyleOptionToolBar_ToolBarPosition;
    static const End : Qt_QStyleOptionToolBar_ToolBarPosition;
    static const OnlyOne : Qt_QStyleOptionToolBar_ToolBarPosition;
    static function ToolBarPosition(value : Qt_QStyleOptionToolBar_ToolBarPosition) : Qt_QStyleOptionToolBar_ToolBarPosition;

    static const Type : Qt_QStyleOptionToolBar_StyleOptionType;
    static function StyleOptionType(value : Qt_QStyleOptionToolBar_StyleOptionType) : Qt_QStyleOptionToolBar_StyleOptionType;
}
