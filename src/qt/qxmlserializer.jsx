/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QXmlSerializer class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractxmlreceiver.jsx";
import "qt/qiodevice.jsx";
import "qt/qtextcodec.jsx";
import "qt/qxmlquery.jsx";

native class QXmlSerializer extends QAbstractXmlReceiver
{
    function constructor (query : QXmlQuery, outputDevice : QIODevice);

    // Methods
    function codec () : QTextCodec;
    function outputDevice () : QIODevice;
    function setCodec (codec : QTextCodec) : void;
}
