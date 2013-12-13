/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QEasingCurve class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpointf.jsx";

final native class Qt_QEasingCurve_Type {}

native class QEasingCurve
{
    function constructor (type : Qt_QEasingCurve_Type);

    static const Linear : Qt_QEasingCurve_Type;
    static const InQuad : Qt_QEasingCurve_Type;
    static const OutQuad : Qt_QEasingCurve_Type;
    static const InOutQuad : Qt_QEasingCurve_Type;
    static const OutInQuad : Qt_QEasingCurve_Type;
    static const InCubic : Qt_QEasingCurve_Type;
    static const OutCubic : Qt_QEasingCurve_Type;
    static const InOutCubic : Qt_QEasingCurve_Type;
    static const OutInCubic : Qt_QEasingCurve_Type;
    static const InQuart : Qt_QEasingCurve_Type;
    static const OutQuart : Qt_QEasingCurve_Type;
    static const InOutQuart : Qt_QEasingCurve_Type;
    static const OutInQuart : Qt_QEasingCurve_Type;
    static const InQuint : Qt_QEasingCurve_Type;
    static const OutQuint : Qt_QEasingCurve_Type;
    static const InOutQuint : Qt_QEasingCurve_Type;
    static const OutInQuint : Qt_QEasingCurve_Type;
    static const InSine : Qt_QEasingCurve_Type;
    static const OutSine : Qt_QEasingCurve_Type;
    static const InOutSine : Qt_QEasingCurve_Type;
    static const OutInSine : Qt_QEasingCurve_Type;
    static const InExpo : Qt_QEasingCurve_Type;
    static const OutExpo : Qt_QEasingCurve_Type;
    static const InOutExpo : Qt_QEasingCurve_Type;
    static const OutInExpo : Qt_QEasingCurve_Type;
    static const InCirc : Qt_QEasingCurve_Type;
    static const OutCirc : Qt_QEasingCurve_Type;
    static const InOutCirc : Qt_QEasingCurve_Type;
    static const OutInCirc : Qt_QEasingCurve_Type;
    static const InElastic : Qt_QEasingCurve_Type;
    static const OutElastic : Qt_QEasingCurve_Type;
    static const InOutElastic : Qt_QEasingCurve_Type;
    static const OutInElastic : Qt_QEasingCurve_Type;
    static const InBack : Qt_QEasingCurve_Type;
    static const OutBack : Qt_QEasingCurve_Type;
    static const InOutBack : Qt_QEasingCurve_Type;
    static const OutInBack : Qt_QEasingCurve_Type;
    static const InBounce : Qt_QEasingCurve_Type;
    static const OutBounce : Qt_QEasingCurve_Type;
    static const InOutBounce : Qt_QEasingCurve_Type;
    static const OutInBounce : Qt_QEasingCurve_Type;
    static const InCurve : Qt_QEasingCurve_Type;
    static const OutCurve : Qt_QEasingCurve_Type;
    static const SineCurve : Qt_QEasingCurve_Type;
    static const CosineCurve : Qt_QEasingCurve_Type;
    static const BezierSpline : Qt_QEasingCurve_Type;
    static const TCBSpline : Qt_QEasingCurve_Type;
    static const Custom : Qt_QEasingCurve_Type;
    static const NCurveTypes : Qt_QEasingCurve_Type;
    static function Type(value : Qt_QEasingCurve_Type) : Qt_QEasingCurve_Type;

    // Methods
    function addCubicBezierSegment (c1 : QPointF, c2 : QPointF, endPoint : QPointF) : void;
    function addTCBSegment (nextPoint : QPointF, t : number, c : number, b : number) : void;
    function amplitude () : number;
    function overshoot () : number;
    function period () : number;
    function setAmplitude (amplitude : number) : void;
    function setOvershoot (overshoot : number) : void;
    function setPeriod (period : number) : void;
    function setType (type : Qt_QEasingCurve_Type) : void;
    function swap (other : QEasingCurve) : void;
    function toCubicSpline () : QPointF[];
    function type () : Qt_QEasingCurve_Type;
    function valueForProgress (progress : number) : number;
}
