/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QGLColormap class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qcolor.jsx";

native class QGLColormap
{
    function constructor ();
    function constructor (arg__1 : QGLColormap);

    // Methods
    function entryColor (idx : int) : QColor;
    function entryRgb (idx : int) : int;
    function find (color : int) : int;
    function findNearest (color : int) : int;
    function isEmpty () : boolean;
    function setEntries (count : int, colors : int, base : int) : void;
    function setEntry (idx : int, color : QColor) : void;
    function setEntry (idx : int, color : int) : void;
    function size () : int;
}