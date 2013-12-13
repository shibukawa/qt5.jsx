/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTemporaryFile class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qfile.jsx";
import "qt/qobject.jsx";

native class QTemporaryFile extends QFile
{
    function constructor ();
    function constructor (parent : QObject);
    function constructor (templateName : string);
    function constructor (templateName : string, parent : QObject);

    // Static Members
    static function createLocalFile (file : QFile) : QTemporaryFile;
    static function createNativeFile (file : QFile) : QTemporaryFile;

    // Methods
    function autoRemove () : boolean;
    function fileTemplate () : string;
    function open () : boolean;
    function setAutoRemove (b : boolean) : void;
    function setFileTemplate (name : string) : void;
    function uniqueFilename () : string;
}
