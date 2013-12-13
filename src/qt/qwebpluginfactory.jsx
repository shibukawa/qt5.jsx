/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QWebPluginFactory class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";
import "qt/qurl.jsx";
import "qt/qwebpluginfactory_extensionoption.jsx";
import "qt/qwebpluginfactory_extensionreturn.jsx";
import "qt/qwebpluginfactory_plugin.jsx";

final native class Qt_QWebPluginFactory_Extension {}

native class QWebPluginFactory extends QObject
{
    function constructor (parent : QObject);

    static function Extension(value : Qt_QWebPluginFactory_Extension) : Qt_QWebPluginFactory_Extension;

    // Methods
    function create (mimeType : string, arg__2 : QUrl, argumentNames : string[], argumentValues : string[]) : QObject;
    function extension (extension : Qt_QWebPluginFactory_Extension, option : QWebPluginFactory_ExtensionOption, output : QWebPluginFactory_ExtensionReturn) : boolean;
    function plugins () : QWebPluginFactory_Plugin[];
    function refreshPlugins () : void;
    function supportsExtension (extension : Qt_QWebPluginFactory_Extension) : boolean;
}
