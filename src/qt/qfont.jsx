/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QFont class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpaintdevice.jsx";

final native class Qt_QFont_Capitalization {}

final native class Qt_QFont_StyleStrategy {}

final native class Qt_QFont_Style {}

final native class Qt_QFont_Weight {}

final native class Qt_QFont_SpacingType {}

final native class Qt_QFont_Stretch {}

final native class Qt_QFont_StyleHint {}

native class QFont
{
    function constructor ();
    function constructor (arg__1 : QFont);
    function constructor (arg__1 : QFont, pd : QPaintDevice);
    function constructor (family : string, pointSize : int, weight : int, italic : boolean);

    // Static Members
    static function cacheStatistics () : void;
    static function cleanup () : void;
    static function initialize () : void;
    static function insertSubstitution (arg__1 : string, arg__2 : string) : void;
    static function insertSubstitutions (arg__1 : string, arg__2 : string[]) : void;
    static function removeSubstitutions (arg__1 : string) : void;
    static function substitute (arg__1 : string) : string;
    static function substitutes (arg__1 : string) : string[];
    static function substitutions () : string[];

    static const MixedCase : Qt_QFont_Capitalization;
    static const AllUppercase : Qt_QFont_Capitalization;
    static const AllLowercase : Qt_QFont_Capitalization;
    static const SmallCaps : Qt_QFont_Capitalization;
    static const Capitalize : Qt_QFont_Capitalization;
    static function Capitalization(value : Qt_QFont_Capitalization) : Qt_QFont_Capitalization;

    static const PreferDefault : Qt_QFont_StyleStrategy;
    static const PreferBitmap : Qt_QFont_StyleStrategy;
    static const PreferDevice : Qt_QFont_StyleStrategy;
    static const PreferOutline : Qt_QFont_StyleStrategy;
    static const ForceOutline : Qt_QFont_StyleStrategy;
    static const PreferMatch : Qt_QFont_StyleStrategy;
    static const PreferQuality : Qt_QFont_StyleStrategy;
    static const PreferAntialias : Qt_QFont_StyleStrategy;
    static const NoAntialias : Qt_QFont_StyleStrategy;
    static const OpenGLCompatible : Qt_QFont_StyleStrategy;
    static const ForceIntegerMetrics : Qt_QFont_StyleStrategy;
    static const NoFontMerging : Qt_QFont_StyleStrategy;
    static function StyleStrategy(value : Qt_QFont_StyleStrategy) : Qt_QFont_StyleStrategy;

    static const StyleNormal : Qt_QFont_Style;
    static const StyleItalic : Qt_QFont_Style;
    static const StyleOblique : Qt_QFont_Style;
    static function Style(value : Qt_QFont_Style) : Qt_QFont_Style;

    static const Light : Qt_QFont_Weight;
    static const Normal : Qt_QFont_Weight;
    static const DemiBold : Qt_QFont_Weight;
    static const Bold : Qt_QFont_Weight;
    static const Black : Qt_QFont_Weight;
    static function Weight(value : Qt_QFont_Weight) : Qt_QFont_Weight;

    static const PercentageSpacing : Qt_QFont_SpacingType;
    static const AbsoluteSpacing : Qt_QFont_SpacingType;
    static function SpacingType(value : Qt_QFont_SpacingType) : Qt_QFont_SpacingType;

    static const UltraCondensed : Qt_QFont_Stretch;
    static const ExtraCondensed : Qt_QFont_Stretch;
    static const Condensed : Qt_QFont_Stretch;
    static const SemiCondensed : Qt_QFont_Stretch;
    static const Unstretched : Qt_QFont_Stretch;
    static const SemiExpanded : Qt_QFont_Stretch;
    static const Expanded : Qt_QFont_Stretch;
    static const ExtraExpanded : Qt_QFont_Stretch;
    static const UltraExpanded : Qt_QFont_Stretch;
    static function Stretch(value : Qt_QFont_Stretch) : Qt_QFont_Stretch;

    static const Helvetica : Qt_QFont_StyleHint;
    static const Times : Qt_QFont_StyleHint;
    static const Courier : Qt_QFont_StyleHint;
    static const OldEnglish : Qt_QFont_StyleHint;
    static const System : Qt_QFont_StyleHint;
    static const AnyStyle : Qt_QFont_StyleHint;
    static const Cursive : Qt_QFont_StyleHint;
    static const Monospace : Qt_QFont_StyleHint;
    static const Fantasy : Qt_QFont_StyleHint;
    static function StyleHint(value : Qt_QFont_StyleHint) : Qt_QFont_StyleHint;

    // Methods
    function bold () : boolean;
    function capitalization () : Qt_QFont_Capitalization;
    function defaultFamily () : string;
    function exactMatch () : boolean;
    function family () : string;
    function fixedPitch () : boolean;
    function fromString (arg__1 : string) : boolean;
    function isCopyOf (arg__1 : QFont) : boolean;
    function italic () : boolean;
    function kerning () : boolean;
    function key () : string;
    function lastResortFamily () : string;
    function lastResortFont () : string;
    function letterSpacing () : number;
    function letterSpacingType () : Qt_QFont_SpacingType;
    function operator_equal (arg__1 : QFont) : boolean;
    function operator_less (arg__1 : QFont) : boolean;
    function overline () : boolean;
    function pixelSize () : int;
    function pointSize () : int;
    function pointSizeF () : number;
    function rawMode () : boolean;
    function rawName () : string;
    function resolve () : int;
    function resolve (arg__1 : QFont) : QFont;
    function resolve (mask : int) : void;
    function setBold (arg__1 : boolean) : void;
    function setCapitalization (arg__1 : Qt_QFont_Capitalization) : void;
    function setFamily (arg__1 : string) : void;
    function setFixedPitch (arg__1 : boolean) : void;
    function setItalic (b : boolean) : void;
    function setKerning (arg__1 : boolean) : void;
    function setLetterSpacing (type : Qt_QFont_SpacingType, spacing : number) : void;
    function setOverline (arg__1 : boolean) : void;
    function setPixelSize (arg__1 : int) : void;
    function setPointSize (arg__1 : int) : void;
    function setPointSizeF (arg__1 : number) : void;
    function setRawMode (arg__1 : boolean) : void;
    function setRawName (arg__1 : string) : void;
    function setStretch (arg__1 : int) : void;
    function setStrikeOut (arg__1 : boolean) : void;
    function setStyle (style : Qt_QFont_Style) : void;
    function setStyleHint (arg__1 : Qt_QFont_StyleHint, arg__2 : Qt_QFont_StyleStrategy) : void;
    function setStyleName (arg__1 : string) : void;
    function setStyleStrategy (s : Qt_QFont_StyleStrategy) : void;
    function setUnderline (arg__1 : boolean) : void;
    function setWeight (arg__1 : int) : void;
    function setWordSpacing (spacing : number) : void;
    function stretch () : int;
    function strikeOut () : boolean;
    function style () : Qt_QFont_Style;
    function styleHint () : Qt_QFont_StyleHint;
    function styleName () : string;
    function styleStrategy () : Qt_QFont_StyleStrategy;
    function swap (other : QFont) : void;
    function underline () : boolean;
    function weight () : int;
    function wordSpacing () : number;
}
