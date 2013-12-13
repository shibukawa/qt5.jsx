/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QCalendarWidget class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qdate.jsx";
import "qt/qpainter.jsx";
import "qt/qrect.jsx";
import "qt/qt.jsx";
import "qt/qtextcharformat.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QCalendarWidget_HorizontalHeaderFormat {}

final native class Qt_QCalendarWidget_VerticalHeaderFormat {}

final native class Qt_QCalendarWidget_SelectionMode {}

native class QCalendarWidget extends QWidget
{
    function constructor (parent : QWidget);

    static const NoHorizontalHeader : Qt_QCalendarWidget_HorizontalHeaderFormat;
    static const SingleLetterDayNames : Qt_QCalendarWidget_HorizontalHeaderFormat;
    static const ShortDayNames : Qt_QCalendarWidget_HorizontalHeaderFormat;
    static const LongDayNames : Qt_QCalendarWidget_HorizontalHeaderFormat;
    static function HorizontalHeaderFormat(value : Qt_QCalendarWidget_HorizontalHeaderFormat) : Qt_QCalendarWidget_HorizontalHeaderFormat;

    static const NoVerticalHeader : Qt_QCalendarWidget_VerticalHeaderFormat;
    static const ISOWeekNumbers : Qt_QCalendarWidget_VerticalHeaderFormat;
    static function VerticalHeaderFormat(value : Qt_QCalendarWidget_VerticalHeaderFormat) : Qt_QCalendarWidget_VerticalHeaderFormat;

    static const NoSelection : Qt_QCalendarWidget_SelectionMode;
    static const SingleSelection : Qt_QCalendarWidget_SelectionMode;
    static function SelectionMode(value : Qt_QCalendarWidget_SelectionMode) : Qt_QCalendarWidget_SelectionMode;

    // Methods
    function dateTextFormat (date : QDate) : QTextCharFormat;
    function headerTextFormat () : QTextCharFormat;
    function monthShown () : int;
    function paintCell (painter : QPainter, rect : QRect, date : QDate) : void;
    function setDateTextFormat (date : QDate, format : QTextCharFormat) : void;
    function setHeaderTextFormat (format : QTextCharFormat) : void;
    function setWeekdayTextFormat (dayOfWeek : Qt_DayOfWeek, format : QTextCharFormat) : void;
    function updateCell (date : QDate) : void;
    function updateCells () : void;
    function weekdayTextFormat (dayOfWeek : Qt_DayOfWeek) : QTextCharFormat;
    function yearShown () : int;

    // Slots
    function setCurrentPage (year : int, month : int) : void;
    function setDateRange (min : QDate, max : QDate) : void;
    function showNextMonth () : void;
    function showNextYear () : void;
    function showPreviousMonth () : void;
    function showPreviousYear () : void;
    function showSelectedDate () : void;
    function showToday () : void;

    // Signals
    var activated : QtJSXQDateSignal;
    var clicked : QtJSXQDateSignal;
    var currentPageChanged : QtJSXintintSignal;
    var selectionChanged : QtJSXSignal;

    // Instance Properties
    var selectedDate : QDate;
    var minimumDate : QDate;
    var maximumDate : QDate;
    var firstDayOfWeek : Qt_DayOfWeek;
    var gridVisible : boolean;
    var selectionMode : Qt_QCalendarWidget_SelectionMode;
    var horizontalHeaderFormat : Qt_QCalendarWidget_HorizontalHeaderFormat;
    var verticalHeaderFormat : Qt_QCalendarWidget_VerticalHeaderFormat;
    var navigationBarVisible : boolean;
    var dateEditEnabled : boolean;
    var dateEditAcceptDelay : int;
}
