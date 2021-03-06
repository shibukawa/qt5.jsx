/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QDockWidget class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qaction.jsx";
import "qt/qstyleoptiondockwidget.jsx";
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QDockWidget_DockWidgetFeature {}

final native class Qt_QDockWidget_DockWidgetFeatures {}

native class QDockWidget extends QWidget
{
    function constructor (parent : QWidget, flags : Qt_WindowFlags);
    function constructor (title : string, parent : QWidget, flags : Qt_WindowFlags);

    static const NoDockWidgetFeatures : Qt_QDockWidget_DockWidgetFeature;
    static const DockWidgetClosable : Qt_QDockWidget_DockWidgetFeature;
    static const DockWidgetMovable : Qt_QDockWidget_DockWidgetFeature;
    static const DockWidgetFloatable : Qt_QDockWidget_DockWidgetFeature;
    static const AllDockWidgetFeatures : Qt_QDockWidget_DockWidgetFeature;
    static const DockWidgetVerticalTitleBar : Qt_QDockWidget_DockWidgetFeature;
    static const DockWidgetFeatureMask : Qt_QDockWidget_DockWidgetFeature;
    static const Reserved : Qt_QDockWidget_DockWidgetFeature;
    static function DockWidgetFeature(value : Qt_QDockWidget_DockWidgetFeature) : Qt_QDockWidget_DockWidgetFeature;
    static function DockWidgetFeatures(...value : Qt_QDockWidget_DockWidgetFeature) : Qt_QDockWidget_DockWidgetFeatures;

    // Methods
    function initStyleOption (option : QStyleOptionDockWidget) : void;
    function isAreaAllowed (area : Qt_DockWidgetArea) : boolean;
    function setTitleBarWidget (widget : QWidget) : void;
    function setWidget (widget : QWidget) : void;
    function titleBarWidget () : QWidget;
    function toggleViewAction () : QAction;
    function widget () : QWidget;

    // Signals
    var allowedAreasChanged : QtJSXQt_DockWidgetAreasSignal;
    var dockLocationChanged : QtJSXQt_DockWidgetAreaSignal;
    var featuresChanged : QtJSXQt_QDockWidget_DockWidgetFeaturesSignal;
    var topLevelChanged : QtJSXboolSignal;
    var visibilityChanged : QtJSXboolSignal;

    // Instance Properties
    var floating : boolean;
    var features : Qt_QDockWidget_DockWidgetFeatures;
    var allowedAreas : Qt_DockWidgetAreas;
}
