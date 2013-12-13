/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTextFormat class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbrush.jsx";
import "qt/qcolor.jsx";
import "qt/qpen.jsx";
import "qt/qt.jsx";
import "qt/qtextblockformat.jsx";
import "qt/qtextcharformat.jsx";
import "qt/qtextframeformat.jsx";
import "qt/qtextimageformat.jsx";
import "qt/qtextlength.jsx";
import "qt/qtextlistformat.jsx";
import "qt/qtexttablecellformat.jsx";
import "qt/qtexttableformat.jsx";

final native class Qt_QTextFormat_Property {}

final native class Qt_QTextFormat_PageBreakFlag {}

final native class Qt_QTextFormat_PageBreakFlags {}

final native class Qt_QTextFormat_ObjectTypes {}

final native class Qt_QTextFormat_FormatType {}

native class QTextFormat
{
    function constructor ();
    function constructor (rhs : QTextFormat);
    function constructor (type : int);

    static const ObjectIndex : Qt_QTextFormat_Property;
    static const CssFloat : Qt_QTextFormat_Property;
    static const LayoutDirection : Qt_QTextFormat_Property;
    static const OutlinePen : Qt_QTextFormat_Property;
    static const BackgroundBrush : Qt_QTextFormat_Property;
    static const ForegroundBrush : Qt_QTextFormat_Property;
    static const BackgroundImageUrl : Qt_QTextFormat_Property;
    static const BlockAlignment : Qt_QTextFormat_Property;
    static const BlockTopMargin : Qt_QTextFormat_Property;
    static const BlockBottomMargin : Qt_QTextFormat_Property;
    static const BlockLeftMargin : Qt_QTextFormat_Property;
    static const BlockRightMargin : Qt_QTextFormat_Property;
    static const TextIndent : Qt_QTextFormat_Property;
    static const TabPositions : Qt_QTextFormat_Property;
    static const BlockIndent : Qt_QTextFormat_Property;
    static const LineHeight : Qt_QTextFormat_Property;
    static const LineHeightType : Qt_QTextFormat_Property;
    static const BlockNonBreakableLines : Qt_QTextFormat_Property;
    static const BlockTrailingHorizontalRulerWidth : Qt_QTextFormat_Property;
    static const FirstFontProperty : Qt_QTextFormat_Property;
    static const FontLetterSpacing : Qt_QTextFormat_Property;
    static const FontWordSpacing : Qt_QTextFormat_Property;
    static const FontStyleHint : Qt_QTextFormat_Property;
    static const FontStyleStrategy : Qt_QTextFormat_Property;
    static const FontKerning : Qt_QTextFormat_Property;
    static const FontHintingPreference : Qt_QTextFormat_Property;
    static const FontFamily : Qt_QTextFormat_Property;
    static const FontPointSize : Qt_QTextFormat_Property;
    static const FontSizeAdjustment : Qt_QTextFormat_Property;
    static const FontWeight : Qt_QTextFormat_Property;
    static const FontItalic : Qt_QTextFormat_Property;
    static const FontUnderline : Qt_QTextFormat_Property;
    static const FontOverline : Qt_QTextFormat_Property;
    static const FontStrikeOut : Qt_QTextFormat_Property;
    static const FontFixedPitch : Qt_QTextFormat_Property;
    static const FontPixelSize : Qt_QTextFormat_Property;
    static const TextUnderlineColor : Qt_QTextFormat_Property;
    static const TextVerticalAlignment : Qt_QTextFormat_Property;
    static const TextOutline : Qt_QTextFormat_Property;
    static const TextUnderlineStyle : Qt_QTextFormat_Property;
    static const TextToolTip : Qt_QTextFormat_Property;
    static const IsAnchor : Qt_QTextFormat_Property;
    static const AnchorHref : Qt_QTextFormat_Property;
    static const AnchorName : Qt_QTextFormat_Property;
    static const FontLetterSpacingType : Qt_QTextFormat_Property;
    static const FontStretch : Qt_QTextFormat_Property;
    static const ObjectType : Qt_QTextFormat_Property;
    static const ListStyle : Qt_QTextFormat_Property;
    static const ListIndent : Qt_QTextFormat_Property;
    static const ListNumberPrefix : Qt_QTextFormat_Property;
    static const ListNumberSuffix : Qt_QTextFormat_Property;
    static const FrameBorder : Qt_QTextFormat_Property;
    static const FrameMargin : Qt_QTextFormat_Property;
    static const FramePadding : Qt_QTextFormat_Property;
    static const FrameWidth : Qt_QTextFormat_Property;
    static const FrameHeight : Qt_QTextFormat_Property;
    static const FrameTopMargin : Qt_QTextFormat_Property;
    static const FrameBottomMargin : Qt_QTextFormat_Property;
    static const FrameLeftMargin : Qt_QTextFormat_Property;
    static const FrameRightMargin : Qt_QTextFormat_Property;
    static const FrameBorderBrush : Qt_QTextFormat_Property;
    static const FrameBorderStyle : Qt_QTextFormat_Property;
    static const TableColumns : Qt_QTextFormat_Property;
    static const TableColumnWidthConstraints : Qt_QTextFormat_Property;
    static const TableCellSpacing : Qt_QTextFormat_Property;
    static const TableCellPadding : Qt_QTextFormat_Property;
    static const TableHeaderRowCount : Qt_QTextFormat_Property;
    static const TableCellRowSpan : Qt_QTextFormat_Property;
    static const TableCellColumnSpan : Qt_QTextFormat_Property;
    static const TableCellTopPadding : Qt_QTextFormat_Property;
    static const TableCellBottomPadding : Qt_QTextFormat_Property;
    static const TableCellLeftPadding : Qt_QTextFormat_Property;
    static const TableCellRightPadding : Qt_QTextFormat_Property;
    static const ImageName : Qt_QTextFormat_Property;
    static const ImageWidth : Qt_QTextFormat_Property;
    static const ImageHeight : Qt_QTextFormat_Property;
    static const FullWidthSelection : Qt_QTextFormat_Property;
    static const PageBreakPolicy : Qt_QTextFormat_Property;
    static const UserProperty : Qt_QTextFormat_Property;
    static function Property(value : Qt_QTextFormat_Property) : Qt_QTextFormat_Property;

    static const PageBreak_Auto : Qt_QTextFormat_PageBreakFlag;
    static const PageBreak_AlwaysBefore : Qt_QTextFormat_PageBreakFlag;
    static const PageBreak_AlwaysAfter : Qt_QTextFormat_PageBreakFlag;
    static function PageBreakFlag(value : Qt_QTextFormat_PageBreakFlag) : Qt_QTextFormat_PageBreakFlag;
    static function PageBreakFlags(...value : Qt_QTextFormat_PageBreakFlag) : Qt_QTextFormat_PageBreakFlags;

    static const NoObject : Qt_QTextFormat_ObjectTypes;
    static const ImageObject : Qt_QTextFormat_ObjectTypes;
    static const TableObject : Qt_QTextFormat_ObjectTypes;
    static const TableCellObject : Qt_QTextFormat_ObjectTypes;
    static const UserObject : Qt_QTextFormat_ObjectTypes;
    static function ObjectTypes(value : Qt_QTextFormat_ObjectTypes) : Qt_QTextFormat_ObjectTypes;

    static const InvalidFormat : Qt_QTextFormat_FormatType;
    static const BlockFormat : Qt_QTextFormat_FormatType;
    static const CharFormat : Qt_QTextFormat_FormatType;
    static const ListFormat : Qt_QTextFormat_FormatType;
    static const TableFormat : Qt_QTextFormat_FormatType;
    static const FrameFormat : Qt_QTextFormat_FormatType;
    static const UserFormat : Qt_QTextFormat_FormatType;
    static function FormatType(value : Qt_QTextFormat_FormatType) : Qt_QTextFormat_FormatType;

    // Methods
    function background () : QBrush;
    function boolProperty (propertyId : int) : boolean;
    function brushProperty (propertyId : int) : QBrush;
    function clearBackground () : void;
    function clearForeground () : void;
    function clearProperty (propertyId : int) : void;
    function colorProperty (propertyId : int) : QColor;
    function doubleProperty (propertyId : int) : number;
    function foreground () : QBrush;
    function hasProperty (propertyId : int) : boolean;
    function intProperty (propertyId : int) : int;
    function isBlockFormat () : boolean;
    function isCharFormat () : boolean;
    function isFrameFormat () : boolean;
    function isImageFormat () : boolean;
    function isListFormat () : boolean;
    function isTableCellFormat () : boolean;
    function isTableFormat () : boolean;
    function isValid () : boolean;
    function layoutDirection () : Qt_LayoutDirection;
    function lengthProperty (propertyId : int) : QTextLength;
    function lengthVectorProperty (propertyId : int) : QTextLength[];
    function merge (other : QTextFormat) : void;
    function objectIndex () : int;
    function objectType () : int;
    function operator_equal (rhs : QTextFormat) : boolean;
    function penProperty (propertyId : int) : QPen;
    function property (propertyId : int) : variant;
    function propertyCount () : int;
    function setBackground (brush : QBrush) : void;
    function setForeground (brush : QBrush) : void;
    function setLayoutDirection (direction : Qt_LayoutDirection) : void;
    function setLengthVectorProperty (propertyId : int, lengths : QTextLength[]) : void;
    function setObjectIndex (object : int) : void;
    function setObjectType (type : int) : void;
    function setProperty (propertyId : int, value : variant) : void;
    function stringProperty (propertyId : int) : string;
    function swap (other : QTextFormat) : void;
    function toBlockFormat () : QTextBlockFormat;
    function toCharFormat () : QTextCharFormat;
    function toFrameFormat () : QTextFrameFormat;
    function toImageFormat () : QTextImageFormat;
    function toListFormat () : QTextListFormat;
    function toTableCellFormat () : QTextTableCellFormat;
    function toTableFormat () : QTextTableFormat;
    function type () : int;
}
