/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QTextEncoder class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qbytearray.jsx";
import "qt/qtextcodec.jsx";

native class QTextEncoder
{
    function constructor (codec : QTextCodec);
    function constructor (codec : QTextCodec, flags : Qt_QTextCodec_ConversionFlags);

    // Methods
    function fromUnicode (str : string) : QByteArray;
    function hasFailure () : boolean;
}
