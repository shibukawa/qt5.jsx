/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QFileSystemWatcher class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qobject.jsx";

native class QFileSystemWatcher extends QObject
{
    function constructor (parent : QObject);
    function constructor (paths : string[], parent : QObject);

    // Methods
    function addPath (file : string) : boolean;
    function addPaths (files : string[]) : string[];
    function directories () : string[];
    function files () : string[];
    function removePath (file : string) : boolean;
    function removePaths (files : string[]) : string[];
}
