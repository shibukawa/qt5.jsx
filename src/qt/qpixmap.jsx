/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPixmap class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbitmap.jsx";
import "qt/qbytearray.jsx";
import "qt/qcolor.jsx";
import "qt/qimage.jsx";
import "qt/qimagereader.jsx";
import "qt/qiodevice.jsx";
import "qt/qmatrix.jsx";
import "qt/qobject.jsx";
import "qt/qpaintdevice.jsx";
import "qt/qpoint.jsx";
import "qt/qrect.jsx";
import "qt/qregion.jsx";
import "qt/qsize.jsx";
import "qt/qt.jsx";
import "qt/qtransform.jsx";

native class QPixmap extends QPaintDevice
{
    function constructor ();
    function constructor (arg__1 : QPixmap);
    function constructor (arg__1 : QSize);
    function constructor (fileName : string, format : string, flags : Qt_ImageConversionFlags);
    function constructor (xpm : string);
    function constructor (w : int, h : int);

    // Static Members
    static function defaultDepth () : int;
    static function fromImage (image : QImage, flags : Qt_ImageConversionFlags) : QPixmap;
    static function fromImageReader (imageReader : QImageReader, flags : Qt_ImageConversionFlags) : QPixmap;
    static function grabWidget (widget : QObject, rect : QRect) : QPixmap;
    static function trueMatrix (m : QMatrix, w : int, h : int) : QMatrix;

    // Methods
    function cacheKey () : number;
    function convertFromImage (img : QImage, flags : Qt_ImageConversionFlags) : boolean;
    function copy (rect : QRect) : QPixmap;
    function copy (x : int, y : int, width : int, height : int) : QPixmap;
    function createHeuristicMask (clipTight : boolean) : QBitmap;
    function createMaskFromColor (maskColor : QColor, mode : Qt_MaskMode) : QBitmap;
    function fill (fillColor : QColor) : void;
    function fill (device : QPaintDevice, ofs : QPoint) : void;
    function fill (device : QPaintDevice, xofs : int, yofs : int) : void;
    function hasAlpha () : boolean;
    function hasAlphaChannel () : boolean;
    function isNull () : boolean;
    function isQBitmap () : boolean;
    function load (fileName : string, format : string, flags : Qt_ImageConversionFlags) : boolean;
    function loadFromData (data : QByteArray, format : string, flags : Qt_ImageConversionFlags) : boolean;
    function mask () : QBitmap;
    function rect () : QRect;
    function save (device : QIODevice, format : string, quality : int) : boolean;
    function save (fileName : string, format : string, quality : int) : boolean;
    function scaled (s : QSize, aspectMode : Qt_AspectRatioMode, mode : Qt_TransformationMode) : QPixmap;
    function scaled (w : int, h : int, aspectMode : Qt_AspectRatioMode, mode : Qt_TransformationMode) : QPixmap;
    function scaledToHeight (h : int, mode : Qt_TransformationMode) : QPixmap;
    function scaledToWidth (w : int, mode : Qt_TransformationMode) : QPixmap;
    function scroll (dx : int, dy : int, rect : QRect, exposed : QRegion) : void;
    function scroll (dx : int, dy : int, x : int, y : int, width : int, height : int, exposed : QRegion) : void;
    function setDevicePixelRatio (scaleFactor : number) : void;
    function setMask (arg__1 : QBitmap) : void;
    function size () : QSize;
    function swap (other : QPixmap) : void;
    function toImage () : QImage;
    function transformed (arg__1 : QMatrix, mode : Qt_TransformationMode) : QPixmap;
    function transformed (arg__1 : QTransform, mode : Qt_TransformationMode) : QPixmap;
}