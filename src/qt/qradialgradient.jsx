/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QRadialGradient class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qgradient.jsx";
import "qt/qpointf.jsx";

native class QRadialGradient extends QGradient
{
    function constructor ();
    function constructor (center : QPointF, centerRadius : number, focalPoint : QPointF, focalRadius : number);
    function constructor (center : QPointF, radius : number);
    function constructor (center : QPointF, radius : number, focalPoint : QPointF);
    function constructor (cx : number, cy : number, centerRadius : number, fx : number, fy : number, focalRadius : number);
    function constructor (cx : number, cy : number, radius : number);
    function constructor (cx : number, cy : number, radius : number, fx : number, fy : number);

    // Methods
    function center () : QPointF;
    function centerRadius () : number;
    function focalPoint () : QPointF;
    function focalRadius () : number;
    function radius () : number;
    function setCenter (center : QPointF) : void;
    function setCenter (x : number, y : number) : void;
    function setCenterRadius (radius : number) : void;
    function setFocalPoint (focalPoint : QPointF) : void;
    function setFocalPoint (x : number, y : number) : void;
    function setFocalRadius (radius : number) : void;
    function setRadius (radius : number) : void;
}