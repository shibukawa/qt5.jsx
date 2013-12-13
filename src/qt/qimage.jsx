/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QImage class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";
import "qt/qcolor.jsx";
import "qt/qiodevice.jsx";
import "qt/qmatrix.jsx";
import "qt/qpaintdevice.jsx";
import "qt/qpoint.jsx";
import "qt/qrect.jsx";
import "qt/qsize.jsx";
import "qt/qt.jsx";
import "qt/qtransform.jsx";

final native class Qt_QImage_InvertMode {}

final native class Qt_QImage_Format {}

native class QImage extends QPaintDevice
{
    function constructor ();
    function constructor (arg__1 : QImage);
    function constructor (size : QSize, format : Qt_QImage_Format);
    function constructor (fileName : string, format : string);
    function constructor (width : int, height : int, format : Qt_QImage_Format);

    // Static Members
    static function fromData (data : QByteArray, format : string) : QImage;
    static function trueMatrix (arg__1 : QMatrix, w : int, h : int) : QMatrix;

    static const InvertRgb : Qt_QImage_InvertMode;
    static const InvertRgba : Qt_QImage_InvertMode;
    static function InvertMode(value : Qt_QImage_InvertMode) : Qt_QImage_InvertMode;

    static const Format_Invalid : Qt_QImage_Format;
    static const Format_Mono : Qt_QImage_Format;
    static const Format_MonoLSB : Qt_QImage_Format;
    static const Format_Indexed8 : Qt_QImage_Format;
    static const Format_RGB32 : Qt_QImage_Format;
    static const Format_ARGB32 : Qt_QImage_Format;
    static const Format_ARGB32_Premultiplied : Qt_QImage_Format;
    static const Format_RGB16 : Qt_QImage_Format;
    static const Format_ARGB8565_Premultiplied : Qt_QImage_Format;
    static const Format_RGB666 : Qt_QImage_Format;
    static const Format_ARGB6666_Premultiplied : Qt_QImage_Format;
    static const Format_RGB555 : Qt_QImage_Format;
    static const Format_ARGB8555_Premultiplied : Qt_QImage_Format;
    static const Format_RGB888 : Qt_QImage_Format;
    static const Format_RGB444 : Qt_QImage_Format;
    static const Format_ARGB4444_Premultiplied : Qt_QImage_Format;
    static const Format_RGBX8888 : Qt_QImage_Format;
    static const Format_RGBA8888 : Qt_QImage_Format;
    static const Format_RGBA8888_Premultiplied : Qt_QImage_Format;
    static const NImageFormats : Qt_QImage_Format;
    static function Format(value : Qt_QImage_Format) : Qt_QImage_Format;

    // Methods
    function allGray () : boolean;
    function alphaChannel () : QImage;
    function bitPlaneCount () : int;
    function byteCount () : int;
    function bytesPerLine () : int;
    function cacheKey () : number;
    function color (i : int) : int;
    function colorTable () : int[];
    function constBits () : string;
    function constScanLine (arg__1 : int) : string;
    function convertToFormat (f : Qt_QImage_Format, flags : Qt_ImageConversionFlags) : QImage;
    function convertToFormat (f : Qt_QImage_Format, colorTable : int[], flags : Qt_ImageConversionFlags) : QImage;
    function copy (rect : QRect) : QImage;
    function copy (x : int, y : int, w : int, h : int) : QImage;
    function createAlphaMask (flags : Qt_ImageConversionFlags) : QImage;
    function createHeuristicMask (clipTight : boolean) : QImage;
    function createMaskFromColor (color : int, mode : Qt_MaskMode) : QImage;
    function dotsPerMeterX () : int;
    function dotsPerMeterY () : int;
    function fill (color : Qt_GlobalColor) : void;
    function fill (color : QColor) : void;
    function fill (pixel : int) : void;
    function format () : Qt_QImage_Format;
    function hasAlphaChannel () : boolean;
    function invertPixels (arg__1 : Qt_QImage_InvertMode) : void;
    function isGrayscale () : boolean;
    function isNull () : boolean;
    function load (device : QIODevice, format : string) : boolean;
    function load (fileName : string, format : string) : boolean;
    function loadFromData (data : QByteArray, aformat : string) : boolean;
    function mirrored (horizontally : boolean, vertically : boolean) : QImage;
    function offset () : QPoint;
    function operator_equal (arg__1 : QImage) : boolean;
    function pixel (pt : QPoint) : int;
    function pixel (x : int, y : int) : int;
    function pixelIndex (pt : QPoint) : int;
    function pixelIndex (x : int, y : int) : int;
    function rect () : QRect;
    function rgbSwapped () : QImage;
    function save (device : QIODevice, format : string, quality : int) : boolean;
    function save (fileName : string, format : string, quality : int) : boolean;
    function scaled (s : QSize, aspectMode : Qt_AspectRatioMode, mode : Qt_TransformationMode) : QImage;
    function scaled (w : int, h : int, aspectMode : Qt_AspectRatioMode, mode : Qt_TransformationMode) : QImage;
    function scaledToHeight (h : int, mode : Qt_TransformationMode) : QImage;
    function scaledToWidth (w : int, mode : Qt_TransformationMode) : QImage;
    function setAlphaChannel (alphaChannel : QImage) : void;
    function setColor (i : int, c : int) : void;
    function setColorCount (arg__1 : int) : void;
    function setDevicePixelRatio (scaleFactor : number) : void;
    function setDotsPerMeterX (arg__1 : int) : void;
    function setDotsPerMeterY (arg__1 : int) : void;
    function setOffset (arg__1 : QPoint) : void;
    function setPixel (pt : QPoint, index_or_rgb : int) : void;
    function setPixel (x : int, y : int, index_or_rgb : int) : void;
    function setText (key : string, value : string) : void;
    function size () : QSize;
    function swap (other : QImage) : void;
    function text (key : string) : string;
    function textKeys () : string[];
    function transformed (matrix : QMatrix, mode : Qt_TransformationMode) : QImage;
    function transformed (matrix : QTransform, mode : Qt_TransformationMode) : QImage;
    function valid (pt : QPoint) : boolean;
    function valid (x : int, y : int) : boolean;
}
