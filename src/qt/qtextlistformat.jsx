/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTextListFormat class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qtextformat.jsx";

final native class Qt_QTextListFormat_Style {}

native class QTextListFormat extends QTextFormat
{
    function constructor ();

    static const ListUpperRoman : Qt_QTextListFormat_Style;
    static const ListLowerRoman : Qt_QTextListFormat_Style;
    static const ListUpperAlpha : Qt_QTextListFormat_Style;
    static const ListLowerAlpha : Qt_QTextListFormat_Style;
    static const ListDecimal : Qt_QTextListFormat_Style;
    static const ListSquare : Qt_QTextListFormat_Style;
    static const ListCircle : Qt_QTextListFormat_Style;
    static const ListDisc : Qt_QTextListFormat_Style;
    static const ListStyleUndefined : Qt_QTextListFormat_Style;
    static function Style(value : Qt_QTextListFormat_Style) : Qt_QTextListFormat_Style;

    // Methods
    function indent () : int;
    function numberPrefix () : string;
    function numberSuffix () : string;
    function setIndent (indent : int) : void;
    function setNumberPrefix (numberPrefix : string) : void;
    function setNumberSuffix (numberSuffix : string) : void;
    function setStyle (style : Qt_QTextListFormat_Style) : void;
    function style () : Qt_QTextListFormat_Style;
}
