/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QXmlStreamWriter class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";
import "qt/qiodevice.jsx";
import "qt/qtextcodec.jsx";
import "qt/qxmlstreamattribute.jsx";
import "qt/qxmlstreamattributes.jsx";
import "qt/qxmlstreamreader.jsx";

native class QXmlStreamWriter
{
    function constructor ();
    function constructor (array : QByteArray);
    function constructor (device : QIODevice);

    // Methods
    function autoFormatting () : boolean;
    function autoFormattingIndent () : int;
    function codec () : QTextCodec;
    function device () : QIODevice;
    function hasError () : boolean;
    function setAutoFormatting (arg__1 : boolean) : void;
    function setAutoFormattingIndent (spacesOrTabs : int) : void;
    function setCodec (codec : QTextCodec) : void;
    function setCodec (codecName : string) : void;
    function setDevice (device : QIODevice) : void;
    function writeAttribute (namespaceUri : string, name : string, value : string) : void;
    function writeAttribute (qualifiedName : string, value : string) : void;
    function writeAttribute (attribute : QXmlStreamAttribute) : void;
    function writeAttributes (attributes : QXmlStreamAttributes) : void;
    function writeCDATA (text : string) : void;
    function writeCharacters (text : string) : void;
    function writeComment (text : string) : void;
    function writeCurrentToken (reader : QXmlStreamReader) : void;
    function writeDTD (dtd : string) : void;
    function writeDefaultNamespace (namespaceUri : string) : void;
    function writeEmptyElement (namespaceUri : string, name : string) : void;
    function writeEmptyElement (qualifiedName : string) : void;
    function writeEndDocument () : void;
    function writeEndElement () : void;
    function writeEntityReference (name : string) : void;
    function writeNamespace (namespaceUri : string, prefix : string) : void;
    function writeProcessingInstruction (target : string, data : string) : void;
    function writeStartDocument () : void;
    function writeStartDocument (version : string) : void;
    function writeStartDocument (version : string, standalone : boolean) : void;
    function writeStartElement (namespaceUri : string, name : string) : void;
    function writeStartElement (qualifiedName : string) : void;
    function writeTextElement (namespaceUri : string, name : string, text : string) : void;
    function writeTextElement (qualifiedName : string, text : string) : void;
}
