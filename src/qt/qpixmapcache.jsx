/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QPixmapCache class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpixmap.jsx";
import "qt/qpixmapcache_key.jsx";

native class QPixmapCache
{
    function constructor ();

    // Static Members
    static function cacheLimit () : int;
    static function clear () : void;
    static function find (key : QPixmapCache_Key, pixmap : QPixmap) : boolean;
    static function insert (pixmap : QPixmap) : QPixmapCache_Key;
    static function remove (key : QPixmapCache_Key) : void;
    static function replace (key : QPixmapCache_Key, pixmap : QPixmap) : boolean;
    static function setCacheLimit (arg__1 : int) : void;
}
