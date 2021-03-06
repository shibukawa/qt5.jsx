/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGraphicsGridLayout class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qgraphicslayout.jsx";
import "qt/qgraphicslayoutitem.jsx";
import "qt/qt.jsx";

native class QGraphicsGridLayout extends QGraphicsLayout
{
    function constructor (parent : QGraphicsLayoutItem);

    // Methods
    function addItem (item : QGraphicsLayoutItem, row : int, column : int, alignment : Qt_Alignment) : void;
    function addItem (item : QGraphicsLayoutItem, row : int, column : int, rowSpan : int, columnSpan : int, alignment : Qt_Alignment) : void;
    function alignment (item : QGraphicsLayoutItem) : Qt_Alignment;
    function columnAlignment (column : int) : Qt_Alignment;
    function columnCount () : int;
    function columnMaximumWidth (column : int) : number;
    function columnMinimumWidth (column : int) : number;
    function columnPreferredWidth (column : int) : number;
    function columnSpacing (column : int) : number;
    function columnStretchFactor (column : int) : int;
    function horizontalSpacing () : number;
    function itemAt (row : int, column : int) : QGraphicsLayoutItem;
    function removeItem (item : QGraphicsLayoutItem) : void;
    function rowAlignment (row : int) : Qt_Alignment;
    function rowCount () : int;
    function rowMaximumHeight (row : int) : number;
    function rowMinimumHeight (row : int) : number;
    function rowPreferredHeight (row : int) : number;
    function rowSpacing (row : int) : number;
    function rowStretchFactor (row : int) : int;
    function setAlignment (item : QGraphicsLayoutItem, alignment : Qt_Alignment) : void;
    function setColumnAlignment (column : int, alignment : Qt_Alignment) : void;
    function setColumnFixedWidth (column : int, width : number) : void;
    function setColumnMaximumWidth (column : int, width : number) : void;
    function setColumnMinimumWidth (column : int, width : number) : void;
    function setColumnPreferredWidth (column : int, width : number) : void;
    function setColumnSpacing (column : int, spacing : number) : void;
    function setColumnStretchFactor (column : int, stretch : int) : void;
    function setHorizontalSpacing (spacing : number) : void;
    function setRowAlignment (row : int, alignment : Qt_Alignment) : void;
    function setRowFixedHeight (row : int, height : number) : void;
    function setRowMaximumHeight (row : int, height : number) : void;
    function setRowMinimumHeight (row : int, height : number) : void;
    function setRowPreferredHeight (row : int, height : number) : void;
    function setRowSpacing (row : int, spacing : number) : void;
    function setRowStretchFactor (row : int, stretch : int) : void;
    function setSpacing (spacing : number) : void;
    function setVerticalSpacing (spacing : number) : void;
    function verticalSpacing () : number;
}
