/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTextCursor class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qimage.jsx";
import "qt/qtextblock.jsx";
import "qt/qtextblockformat.jsx";
import "qt/qtextcharformat.jsx";
import "qt/qtextdocument.jsx";
import "qt/qtextdocumentfragment.jsx";
import "qt/qtextframe.jsx";
import "qt/qtextframeformat.jsx";
import "qt/qtextimageformat.jsx";
import "qt/qtextlist.jsx";
import "qt/qtextlistformat.jsx";
import "qt/qtexttable.jsx";
import "qt/qtexttableformat.jsx";

final native class Qt_QTextCursor_MoveMode {}

final native class Qt_QTextCursor_MoveOperation {}

final native class Qt_QTextCursor_SelectionType {}

native class QTextCursor
{
    function constructor ();
    function constructor (document : QTextDocument);
    function constructor (frame : QTextFrame);
    function constructor (block : QTextBlock);
    function constructor (cursor : QTextCursor);

    static const MoveAnchor : Qt_QTextCursor_MoveMode;
    static const KeepAnchor : Qt_QTextCursor_MoveMode;
    static function MoveMode(value : Qt_QTextCursor_MoveMode) : Qt_QTextCursor_MoveMode;

    static const NoMove : Qt_QTextCursor_MoveOperation;
    static const Start : Qt_QTextCursor_MoveOperation;
    static const Up : Qt_QTextCursor_MoveOperation;
    static const StartOfLine : Qt_QTextCursor_MoveOperation;
    static const StartOfBlock : Qt_QTextCursor_MoveOperation;
    static const StartOfWord : Qt_QTextCursor_MoveOperation;
    static const PreviousBlock : Qt_QTextCursor_MoveOperation;
    static const PreviousCharacter : Qt_QTextCursor_MoveOperation;
    static const PreviousWord : Qt_QTextCursor_MoveOperation;
    static const Left : Qt_QTextCursor_MoveOperation;
    static const WordLeft : Qt_QTextCursor_MoveOperation;
    static const End : Qt_QTextCursor_MoveOperation;
    static const Down : Qt_QTextCursor_MoveOperation;
    static const EndOfLine : Qt_QTextCursor_MoveOperation;
    static const EndOfWord : Qt_QTextCursor_MoveOperation;
    static const EndOfBlock : Qt_QTextCursor_MoveOperation;
    static const NextBlock : Qt_QTextCursor_MoveOperation;
    static const NextCharacter : Qt_QTextCursor_MoveOperation;
    static const NextWord : Qt_QTextCursor_MoveOperation;
    static const Right : Qt_QTextCursor_MoveOperation;
    static const WordRight : Qt_QTextCursor_MoveOperation;
    static const NextCell : Qt_QTextCursor_MoveOperation;
    static const PreviousCell : Qt_QTextCursor_MoveOperation;
    static const NextRow : Qt_QTextCursor_MoveOperation;
    static const PreviousRow : Qt_QTextCursor_MoveOperation;
    static function MoveOperation(value : Qt_QTextCursor_MoveOperation) : Qt_QTextCursor_MoveOperation;

    static const WordUnderCursor : Qt_QTextCursor_SelectionType;
    static const LineUnderCursor : Qt_QTextCursor_SelectionType;
    static const BlockUnderCursor : Qt_QTextCursor_SelectionType;
    static const Document : Qt_QTextCursor_SelectionType;
    static function SelectionType(value : Qt_QTextCursor_SelectionType) : Qt_QTextCursor_SelectionType;

    // Methods
    function anchor () : int;
    function atBlockEnd () : boolean;
    function atBlockStart () : boolean;
    function atEnd () : boolean;
    function atStart () : boolean;
    function beginEditBlock () : void;
    function block () : QTextBlock;
    function blockCharFormat () : QTextCharFormat;
    function blockFormat () : QTextBlockFormat;
    function blockNumber () : int;
    function charFormat () : QTextCharFormat;
    function clearSelection () : void;
    function columnNumber () : int;
    function createList (style : Qt_QTextListFormat_Style) : QTextList;
    function createList (format : QTextListFormat) : QTextList;
    function currentFrame () : QTextFrame;
    function currentList () : QTextList;
    function currentTable () : QTextTable;
    function deleteChar () : void;
    function deletePreviousChar () : void;
    function document () : QTextDocument;
    function endEditBlock () : void;
    function hasComplexSelection () : boolean;
    function hasSelection () : boolean;
    function insertBlock () : void;
    function insertBlock (format : QTextBlockFormat) : void;
    function insertBlock (format : QTextBlockFormat, charFormat : QTextCharFormat) : void;
    function insertFragment (fragment : QTextDocumentFragment) : void;
    function insertFrame (format : QTextFrameFormat) : QTextFrame;
    function insertHtml (html : string) : void;
    function insertImage (image : QImage, name : string) : void;
    function insertImage (name : string) : void;
    function insertImage (format : QTextImageFormat) : void;
    function insertImage (format : QTextImageFormat, alignment : Qt_QTextFrameFormat_Position) : void;
    function insertList (style : Qt_QTextListFormat_Style) : QTextList;
    function insertList (format : QTextListFormat) : QTextList;
    function insertTable (rows : int, cols : int) : QTextTable;
    function insertTable (rows : int, cols : int, format : QTextTableFormat) : QTextTable;
    function insertText (text : string) : void;
    function insertText (text : string, format : QTextCharFormat) : void;
    function isCopyOf (other : QTextCursor) : boolean;
    function isNull () : boolean;
    function joinPreviousEditBlock () : void;
    function keepPositionOnInsert () : boolean;
    function mergeBlockCharFormat (modifier : QTextCharFormat) : void;
    function mergeBlockFormat (modifier : QTextBlockFormat) : void;
    function mergeCharFormat (modifier : QTextCharFormat) : void;
    function movePosition (op : Qt_QTextCursor_MoveOperation, arg__2 : Qt_QTextCursor_MoveMode, n : int) : boolean;
    function operator_equal (rhs : QTextCursor) : boolean;
    function operator_less (rhs : QTextCursor) : boolean;
    function position () : int;
    function positionInBlock () : int;
    function removeSelectedText () : void;
    function select (selection : Qt_QTextCursor_SelectionType) : void;
    function selectedTableCells (firstRow : int, numRows : int, firstColumn : int, numColumns : int) : void;
    function selectedText () : string;
    function selection () : QTextDocumentFragment;
    function selectionEnd () : int;
    function selectionStart () : int;
    function setBlockCharFormat (format : QTextCharFormat) : void;
    function setBlockFormat (format : QTextBlockFormat) : void;
    function setCharFormat (format : QTextCharFormat) : void;
    function setKeepPositionOnInsert (b : boolean) : void;
    function setPosition (pos : int, mode : Qt_QTextCursor_MoveMode) : void;
    function setVerticalMovementX (x : int) : void;
    function setVisualNavigation (b : boolean) : void;
    function swap (other : QTextCursor) : void;
    function verticalMovementX () : int;
    function visualNavigation () : boolean;
}
