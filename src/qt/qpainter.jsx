/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPainter class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbrush.jsx";
import "qt/qcolor.jsx";
import "qt/qfont.jsx";
import "qt/qimage.jsx";
import "qt/qline.jsx";
import "qt/qlinef.jsx";
import "qt/qmatrix.jsx";
import "qt/qpaintdevice.jsx";
import "qt/qpaintengine.jsx";
import "qt/qpainterpath.jsx";
import "qt/qpen.jsx";
import "qt/qpicture.jsx";
import "qt/qpixmap.jsx";
import "qt/qpoint.jsx";
import "qt/qpointf.jsx";
import "qt/qpolygon.jsx";
import "qt/qpolygonf.jsx";
import "qt/qrect.jsx";
import "qt/qrectf.jsx";
import "qt/qregion.jsx";
import "qt/qt.jsx";
import "qt/qtextitem.jsx";
import "qt/qtransform.jsx";
import "qt/qwidget.jsx";

final native class Qt_QPainter_CompositionMode {}

final native class Qt_QPainter_PixmapFragmentHint {}

final native class Qt_QPainter_RenderHint {}

final native class Qt_QPainter_RenderHints {}

native class QPainter
{
    function constructor ();

    // Static Members
    static function redirected (device : QPaintDevice, offset : QPoint) : QPaintDevice;
    static function restoreRedirected (device : QPaintDevice) : void;
    static function setRedirected (device : QPaintDevice, replacement : QPaintDevice, offset : QPoint) : void;

    static const CompositionMode_SourceOver : Qt_QPainter_CompositionMode;
    static const CompositionMode_DestinationOver : Qt_QPainter_CompositionMode;
    static const CompositionMode_Clear : Qt_QPainter_CompositionMode;
    static const CompositionMode_Source : Qt_QPainter_CompositionMode;
    static const CompositionMode_Destination : Qt_QPainter_CompositionMode;
    static const CompositionMode_SourceIn : Qt_QPainter_CompositionMode;
    static const CompositionMode_DestinationIn : Qt_QPainter_CompositionMode;
    static const CompositionMode_SourceOut : Qt_QPainter_CompositionMode;
    static const CompositionMode_DestinationOut : Qt_QPainter_CompositionMode;
    static const CompositionMode_SourceAtop : Qt_QPainter_CompositionMode;
    static const CompositionMode_DestinationAtop : Qt_QPainter_CompositionMode;
    static const CompositionMode_Xor : Qt_QPainter_CompositionMode;
    static const CompositionMode_Plus : Qt_QPainter_CompositionMode;
    static const CompositionMode_Multiply : Qt_QPainter_CompositionMode;
    static const CompositionMode_Screen : Qt_QPainter_CompositionMode;
    static const CompositionMode_Overlay : Qt_QPainter_CompositionMode;
    static const CompositionMode_Darken : Qt_QPainter_CompositionMode;
    static const CompositionMode_Lighten : Qt_QPainter_CompositionMode;
    static const CompositionMode_ColorDodge : Qt_QPainter_CompositionMode;
    static const CompositionMode_ColorBurn : Qt_QPainter_CompositionMode;
    static const CompositionMode_HardLight : Qt_QPainter_CompositionMode;
    static const CompositionMode_SoftLight : Qt_QPainter_CompositionMode;
    static const CompositionMode_Difference : Qt_QPainter_CompositionMode;
    static const CompositionMode_Exclusion : Qt_QPainter_CompositionMode;
    static const RasterOp_SourceOrDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_SourceAndDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_SourceXorDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_NotSourceAndNotDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_NotSourceOrNotDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_NotSourceXorDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_NotSource : Qt_QPainter_CompositionMode;
    static const RasterOp_NotSourceAndDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_SourceAndNotDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_NotSourceOrDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_SourceOrNotDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_ClearDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_SetDestination : Qt_QPainter_CompositionMode;
    static const RasterOp_NotDestination : Qt_QPainter_CompositionMode;
    static function CompositionMode(value : Qt_QPainter_CompositionMode) : Qt_QPainter_CompositionMode;

    static const OpaqueHint : Qt_QPainter_PixmapFragmentHint;
    static function PixmapFragmentHint(value : Qt_QPainter_PixmapFragmentHint) : Qt_QPainter_PixmapFragmentHint;

    static const Antialiasing : Qt_QPainter_RenderHint;
    static const TextAntialiasing : Qt_QPainter_RenderHint;
    static const SmoothPixmapTransform : Qt_QPainter_RenderHint;
    static const HighQualityAntialiasing : Qt_QPainter_RenderHint;
    static const NonCosmeticDefaultPen : Qt_QPainter_RenderHint;
    static const Qt4CompatiblePainting : Qt_QPainter_RenderHint;
    static function RenderHint(value : Qt_QPainter_RenderHint) : Qt_QPainter_RenderHint;
    static function RenderHints(...value : Qt_QPainter_RenderHint) : Qt_QPainter_RenderHints;

    // Methods
    function background () : QBrush;
    function backgroundMode () : Qt_BGMode;
    function begin (arg__1 : QPaintDevice) : boolean;
    function beginNativePainting () : void;
    function boundingRect (rect : QRect, flags : int, text : string) : QRect;
    function boundingRect (rect : QRectF, flags : int, text : string) : QRectF;
    function boundingRect (x : int, y : int, w : int, h : int, flags : int, text : string) : QRect;
    function brush () : QBrush;
    function brushOrigin () : QPoint;
    function clipBoundingRect () : QRectF;
    function clipPath () : QPainterPath;
    function clipRegion () : QRegion;
    function combinedMatrix () : QMatrix;
    function combinedTransform () : QTransform;
    function compositionMode () : Qt_QPainter_CompositionMode;
    function device () : QPaintDevice;
    function deviceMatrix () : QMatrix;
    function deviceTransform () : QTransform;
    function drawArc (arg__1 : QRect, a : int, alen : int) : void;
    function drawArc (rect : QRectF, a : int, alen : int) : void;
    function drawArc (x : int, y : int, w : int, h : int, a : int, alen : int) : void;
    function drawChord (arg__1 : QRect, a : int, alen : int) : void;
    function drawChord (rect : QRectF, a : int, alen : int) : void;
    function drawChord (x : int, y : int, w : int, h : int, a : int, alen : int) : void;
    function drawConvexPolygon (polygon : QPolygon) : void;
    function drawConvexPolygon (polygon : QPolygonF) : void;
    function drawEllipse (center : QPoint, rx : int, ry : int) : void;
    function drawEllipse (center : QPointF, rx : number, ry : number) : void;
    function drawEllipse (r : QRect) : void;
    function drawEllipse (r : QRectF) : void;
    function drawEllipse (x : int, y : int, w : int, h : int) : void;
    function drawImage (p : QPoint, image : QImage) : void;
    function drawImage (p : QPoint, image : QImage, sr : QRect, flags : Qt_ImageConversionFlags) : void;
    function drawImage (p : QPointF, image : QImage) : void;
    function drawImage (p : QPointF, image : QImage, sr : QRectF, flags : Qt_ImageConversionFlags) : void;
    function drawImage (r : QRect, image : QImage) : void;
    function drawImage (targetRect : QRect, image : QImage, sourceRect : QRect, flags : Qt_ImageConversionFlags) : void;
    function drawImage (r : QRectF, image : QImage) : void;
    function drawImage (targetRect : QRectF, image : QImage, sourceRect : QRectF, flags : Qt_ImageConversionFlags) : void;
    function drawImage (x : int, y : int, image : QImage, sx : int, sy : int, sw : int, sh : int, flags : Qt_ImageConversionFlags) : void;
    function drawLine (line : QLine) : void;
    function drawLine (line : QLineF) : void;
    function drawLine (p1 : QPoint, p2 : QPoint) : void;
    function drawLine (p1 : QPointF, p2 : QPointF) : void;
    function drawLine (x1 : int, y1 : int, x2 : int, y2 : int) : void;
    function drawLines (lines : QLine[]) : void;
    function drawLinesF (lines : QLineF[]) : void;
    function drawLinesFromPoints (pointPairs : QPoint[]) : void;
    function drawLinesFromPointsF (pointPairs : QPointF[]) : void;
    function drawPath (path : QPainterPath) : void;
    function drawPicture (p : QPoint, picture : QPicture) : void;
    function drawPicture (p : QPointF, picture : QPicture) : void;
    function drawPicture (x : int, y : int, picture : QPicture) : void;
    function drawPie (arg__1 : QRect, a : int, alen : int) : void;
    function drawPie (rect : QRectF, a : int, alen : int) : void;
    function drawPie (x : int, y : int, w : int, h : int, a : int, alen : int) : void;
    function drawPixmap (p : QPoint, pm : QPixmap) : void;
    function drawPixmap (p : QPoint, pm : QPixmap, sr : QRect) : void;
    function drawPixmap (p : QPointF, pm : QPixmap) : void;
    function drawPixmap (p : QPointF, pm : QPixmap, sr : QRectF) : void;
    function drawPixmap (r : QRect, pm : QPixmap) : void;
    function drawPixmap (targetRect : QRect, pixmap : QPixmap, sourceRect : QRect) : void;
    function drawPixmap (targetRect : QRectF, pixmap : QPixmap, sourceRect : QRectF) : void;
    function drawPixmap (x : int, y : int, pm : QPixmap) : void;
    function drawPixmap (x : int, y : int, pm : QPixmap, sx : int, sy : int, sw : int, sh : int) : void;
    function drawPixmap (x : int, y : int, w : int, h : int, pm : QPixmap) : void;
    function drawPixmap (x : int, y : int, w : int, h : int, pm : QPixmap, sx : int, sy : int, sw : int, sh : int) : void;
    function drawPoint (p : QPoint) : void;
    function drawPoint (pt : QPointF) : void;
    function drawPoint (x : int, y : int) : void;
    function drawPoints (points : QPolygon) : void;
    function drawPoints (points : QPolygonF) : void;
    function drawPolygon (polygon : QPolygon, fillRule : Qt_FillRule) : void;
    function drawPolygon (polygon : QPolygonF, fillRule : Qt_FillRule) : void;
    function drawPolyline (polygon : QPolygon) : void;
    function drawPolyline (polyline : QPolygonF) : void;
    function drawRect (rect : QRect) : void;
    function drawRect (rect : QRectF) : void;
    function drawRect (x1 : int, y1 : int, w : int, h : int) : void;
    function drawRects (rectangles : QRect[]) : void;
    function drawRectsF (rectangles : QRectF[]) : void;
    function drawRoundRect (r : QRect, xround : int, yround : int) : void;
    function drawRoundRect (r : QRectF, xround : int, yround : int) : void;
    function drawRoundRect (x : int, y : int, w : int, h : int, arg__5 : int, arg__6 : int) : void;
    function drawRoundedRect (rect : QRect, xRadius : number, yRadius : number, mode : Qt_SizeMode) : void;
    function drawRoundedRect (rect : QRectF, xRadius : number, yRadius : number, mode : Qt_SizeMode) : void;
    function drawRoundedRect (x : int, y : int, w : int, h : int, xRadius : number, yRadius : number, mode : Qt_SizeMode) : void;
    function drawText (p : QPoint, s : string) : void;
    function drawText (p : QPointF, s : string) : void;
    function drawText (r : QRect, flags : int, text : string, br : QRect) : void;
    function drawText (r : QRectF, flags : int, text : string, br : QRectF) : void;
    function drawText (x : int, y : int, s : string) : void;
    function drawText (x : int, y : int, w : int, h : int, flags : int, text : string, br : QRect) : void;
    function drawTextItem (p : QPoint, ti : QTextItem) : void;
    function drawTextItem (p : QPointF, ti : QTextItem) : void;
    function drawTextItem (x : int, y : int, ti : QTextItem) : void;
    function drawTiledPixmap (arg__1 : QRect, arg__2 : QPixmap, arg__3 : QPoint) : void;
    function drawTiledPixmap (rect : QRectF, pm : QPixmap, offset : QPointF) : void;
    function drawTiledPixmap (x : int, y : int, w : int, h : int, arg__5 : QPixmap, sx : int, sy : int) : void;
    function end () : boolean;
    function endNativePainting () : void;
    function eraseRect (arg__1 : QRect) : void;
    function eraseRect (arg__1 : QRectF) : void;
    function eraseRect (x : int, y : int, w : int, h : int) : void;
    function fillPath (path : QPainterPath, brush : QBrush) : void;
    function fillRect (arg__1 : QRect, arg__2 : QBrush) : void;
    function fillRect (arg__1 : QRect, color : QColor) : void;
    function fillRect (r : QRect, style : Qt_BrushStyle) : void;
    function fillRect (r : QRect, c : Qt_GlobalColor) : void;
    function fillRect (arg__1 : QRectF, arg__2 : QBrush) : void;
    function fillRect (arg__1 : QRectF, color : QColor) : void;
    function fillRect (r : QRectF, style : Qt_BrushStyle) : void;
    function fillRect (r : QRectF, c : Qt_GlobalColor) : void;
    function fillRect (x : int, y : int, w : int, h : int, style : Qt_BrushStyle) : void;
    function fillRect (x : int, y : int, w : int, h : int, c : Qt_GlobalColor) : void;
    function fillRect (x : int, y : int, w : int, h : int, arg__5 : QBrush) : void;
    function fillRect (x : int, y : int, w : int, h : int, color : QColor) : void;
    function font () : QFont;
    function hasClipping () : boolean;
    function initFrom (device : QPaintDevice) : void;
    function isActive () : boolean;
    function layoutDirection () : Qt_LayoutDirection;
    function opacity () : number;
    function paintEngine () : QPaintEngine;
    function pen () : QPen;
    function renderHints () : Qt_QPainter_RenderHints;
    function resetMatrix () : void;
    function resetTransform () : void;
    function restore () : void;
    function rotate (a : number) : void;
    function save () : void;
    function scale (sx : number, sy : number) : void;
    function setBackground (bg : QBrush) : void;
    function setBackgroundMode (mode : Qt_BGMode) : void;
    function setBrush (style : Qt_BrushStyle) : void;
    function setBrush (brush : QBrush) : void;
    function setBrushOrigin (arg__1 : QPoint) : void;
    function setBrushOrigin (arg__1 : QPointF) : void;
    function setBrushOrigin (x : int, y : int) : void;
    function setClipPath (path : QPainterPath, op : Qt_ClipOperation) : void;
    function setClipRect (arg__1 : QRect, op : Qt_ClipOperation) : void;
    function setClipRect (arg__1 : QRectF, op : Qt_ClipOperation) : void;
    function setClipRect (x : int, y : int, w : int, h : int, op : Qt_ClipOperation) : void;
    function setClipRegion (arg__1 : QRegion, op : Qt_ClipOperation) : void;
    function setClipping (enable : boolean) : void;
    function setCompositionMode (mode : Qt_QPainter_CompositionMode) : void;
    function setFont (f : QFont) : void;
    function setLayoutDirection (direction : Qt_LayoutDirection) : void;
    function setOpacity (opacity : number) : void;
    function setPen (style : Qt_PenStyle) : void;
    function setPen (color : QColor) : void;
    function setPen (pen : QPen) : void;
    function setRenderHint (hint : Qt_QPainter_RenderHint, on : boolean) : void;
    function setRenderHints (hints : Qt_QPainter_RenderHints, on : boolean) : void;
    function setTransform (transform : QTransform, combine : boolean) : void;
    function setViewTransformEnabled (enable : boolean) : void;
    function setViewport (viewport : QRect) : void;
    function setViewport (x : int, y : int, w : int, h : int) : void;
    function setWindow (window : QRect) : void;
    function setWindow (x : int, y : int, w : int, h : int) : void;
    function setWorldMatrix (matrix : QMatrix, combine : boolean) : void;
    function setWorldMatrixEnabled (enabled : boolean) : void;
    function setWorldTransform (matrix : QTransform, combine : boolean) : void;
    function shear (sh : number, sv : number) : void;
    function strokePath (path : QPainterPath, pen : QPen) : void;
    function testRenderHint (hint : Qt_QPainter_RenderHint) : boolean;
    function transform () : QTransform;
    function translate (offset : QPoint) : void;
    function translate (offset : QPointF) : void;
    function translate (dx : number, dy : number) : void;
    function viewTransformEnabled () : boolean;
    function viewport () : QRect;
    function window () : QRect;
    function worldMatrix () : QMatrix;
    function worldMatrixEnabled () : boolean;
    function worldTransform () : QTransform;
    function begin (arg__1 : QWidget) : boolean;
}
