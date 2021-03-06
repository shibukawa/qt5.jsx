/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QDir class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qfileinfo.jsx";

final native class Qt_QDir_Filter {}

final native class Qt_QDir_Filters {}

final native class Qt_QDir_SortFlag {}

final native class Qt_QDir_SortFlags {}

native class QDir
{
    function constructor (arg__1 : QDir);
    function constructor (path : string);
    function constructor (path : string, nameFilter : string, sort : Qt_QDir_SortFlags, filter : Qt_QDir_Filters);

    // Static Members
    static function addSearchPath (prefix : string, path : string) : void;
    static function cleanPath (path : string) : string;
    static function current () : QDir;
    static function currentPath () : string;
    static function drives () : QFileInfo[];
    static function fromNativeSeparators (pathName : string) : string;
    static function home () : QDir;
    static function homePath () : string;
    static function isAbsolutePath (path : string) : boolean;
    static function isRelativePath (path : string) : boolean;
    static function match (filter : string, fileName : string) : boolean;
    static function nameFiltersFromString (nameFilter : string) : string[];
    static function root () : QDir;
    static function rootPath () : string;
    static function searchPaths (prefix : string) : string[];
    static function separator () : string;
    static function setCurrent (path : string) : boolean;
    static function setSearchPaths (prefix : string, searchPaths : string[]) : void;
    static function temp () : QDir;
    static function tempPath () : string;
    static function toNativeSeparators (pathName : string) : string;

    static const NoFilter : Qt_QDir_Filter;
    static const Dirs : Qt_QDir_Filter;
    static const Files : Qt_QDir_Filter;
    static const Drives : Qt_QDir_Filter;
    static const AllEntries : Qt_QDir_Filter;
    static const NoSymLinks : Qt_QDir_Filter;
    static const TypeMask : Qt_QDir_Filter;
    static const Readable : Qt_QDir_Filter;
    static const Writable : Qt_QDir_Filter;
    static const Executable : Qt_QDir_Filter;
    static const PermissionMask : Qt_QDir_Filter;
    static const Modified : Qt_QDir_Filter;
    static const Hidden : Qt_QDir_Filter;
    static const System : Qt_QDir_Filter;
    static const AccessMask : Qt_QDir_Filter;
    static const AllDirs : Qt_QDir_Filter;
    static const CaseSensitive : Qt_QDir_Filter;
    static const NoDot : Qt_QDir_Filter;
    static const NoDotDot : Qt_QDir_Filter;
    static const NoDotAndDotDot : Qt_QDir_Filter;
    static function Filter(value : Qt_QDir_Filter) : Qt_QDir_Filter;
    static function Filters(...value : Qt_QDir_Filter) : Qt_QDir_Filters;

    static const NoSort : Qt_QDir_SortFlag;
    static const Name : Qt_QDir_SortFlag;
    static const Time : Qt_QDir_SortFlag;
    static const Size : Qt_QDir_SortFlag;
    static const Unsorted : Qt_QDir_SortFlag;
    static const DirsFirst : Qt_QDir_SortFlag;
    static const Reversed : Qt_QDir_SortFlag;
    static const IgnoreCase : Qt_QDir_SortFlag;
    static const DirsLast : Qt_QDir_SortFlag;
    static const LocaleAware : Qt_QDir_SortFlag;
    static const Type : Qt_QDir_SortFlag;
    static function SortFlag(value : Qt_QDir_SortFlag) : Qt_QDir_SortFlag;
    static function SortFlags(...value : Qt_QDir_SortFlag) : Qt_QDir_SortFlags;

    // Methods
    function absoluteFilePath (fileName : string) : string;
    function absolutePath () : string;
    function canonicalPath () : string;
    function cd (dirName : string) : boolean;
    function cdUp () : boolean;
    function count () : int;
    function dirName () : string;
    function entryInfoList (filters : Qt_QDir_Filters, sort : Qt_QDir_SortFlags) : QFileInfo[];
    function entryInfoList (nameFilters : string[], filters : Qt_QDir_Filters, sort : Qt_QDir_SortFlags) : QFileInfo[];
    function entryList (filters : Qt_QDir_Filters, sort : Qt_QDir_SortFlags) : string[];
    function entryList (nameFilters : string[], filters : Qt_QDir_Filters, sort : Qt_QDir_SortFlags) : string[];
    function exists () : boolean;
    function exists (name : string) : boolean;
    function filePath (fileName : string) : string;
    function filter () : Qt_QDir_Filters;
    function isAbsolute () : boolean;
    function isReadable () : boolean;
    function isRelative () : boolean;
    function isRoot () : boolean;
    function makeAbsolute () : boolean;
    function mkdir (dirName : string) : boolean;
    function mkpath (dirPath : string) : boolean;
    function nameFilters () : string[];
    function operator_equal (dir : QDir) : boolean;
    function operator_subscript (arg__1 : int) : string;
    function path () : string;
    function refresh () : void;
    function relativeFilePath (fileName : string) : string;
    function remove (fileName : string) : boolean;
    function removeRecursively () : boolean;
    function rename (oldName : string, newName : string) : boolean;
    function rmdir (dirName : string) : boolean;
    function rmpath (dirPath : string) : boolean;
    function setFilter (filter : Qt_QDir_Filters) : void;
    function setNameFilters (nameFilters : string[]) : void;
    function setPath (path : string) : void;
    function setSorting (sort : Qt_QDir_SortFlags) : void;
    function sorting () : Qt_QDir_SortFlags;
    function swap (other : QDir) : void;
}
