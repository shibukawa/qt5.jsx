/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPicture class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qiodevice.jsx";
import "qt/qpaintdevice.jsx";
import "qt/qpainter.jsx";
import "qt/qrect.jsx";

native class QPicture extends QPaintDevice
{
    function constructor (arg__1 : QPicture);
    function constructor (formatVersion : int);

    // Methods
    function boundingRect () : QRect;
    function data () : string;
    function isNull () : boolean;
    function load (dev : QIODevice, format : string) : boolean;
    function load (fileName : string, format : string) : boolean;
    function play (p : QPainter) : boolean;
    function save (dev : QIODevice, format : string) : boolean;
    function save (fileName : string, format : string) : boolean;
    function setBoundingRect (r : QRect) : void;
    function size () : int;
    function swap (other : QPicture) : void;
}