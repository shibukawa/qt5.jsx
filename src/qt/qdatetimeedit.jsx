/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QDateTimeEdit class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qabstractspinbox.jsx";
import "qt/qcalendarwidget.jsx";
import "qt/qdate.jsx";
import "qt/qstyleoptionspinbox.jsx";
import "qt/qt.jsx";
import "qt/qtime.jsx";
import "qt/qwidget.jsx";
import "qt/_signals.jsx";

final native class Qt_QDateTimeEdit_Section {}

final native class Qt_QDateTimeEdit_Sections {}

native class QDateTimeEdit extends QAbstractSpinBox
{
    function constructor (parent : QWidget);
    function constructor (d : QDate, parent : QWidget);
    function constructor (dt : Date, parent : QWidget);
    function constructor (t : QTime, parent : QWidget);

    static const NoSection : Qt_QDateTimeEdit_Section;
    static const AmPmSection : Qt_QDateTimeEdit_Section;
    static const MSecSection : Qt_QDateTimeEdit_Section;
    static const SecondSection : Qt_QDateTimeEdit_Section;
    static const MinuteSection : Qt_QDateTimeEdit_Section;
    static const HourSection : Qt_QDateTimeEdit_Section;
    static const TimeSections_Mask : Qt_QDateTimeEdit_Section;
    static const DaySection : Qt_QDateTimeEdit_Section;
    static const MonthSection : Qt_QDateTimeEdit_Section;
    static const YearSection : Qt_QDateTimeEdit_Section;
    static const DateSections_Mask : Qt_QDateTimeEdit_Section;
    static function Section(value : Qt_QDateTimeEdit_Section) : Qt_QDateTimeEdit_Section;
    static function Sections(...value : Qt_QDateTimeEdit_Section) : Qt_QDateTimeEdit_Sections;

    // Methods
    function calendarWidget () : QCalendarWidget;
    function clearMaximumDate () : void;
    function clearMaximumDateTime () : void;
    function clearMaximumTime () : void;
    function clearMinimumDate () : void;
    function clearMinimumDateTime () : void;
    function clearMinimumTime () : void;
    function dateTimeFromText (text : string) : Date;
    function initDateTimeEditStyleOption (option : QStyleOptionSpinBox) : void;
    function sectionAt (index : int) : Qt_QDateTimeEdit_Section;
    function sectionText (section : Qt_QDateTimeEdit_Section) : string;
    function setCalendarWidget (calendarWidget : QCalendarWidget) : void;
    function setDateRange (min : QDate, max : QDate) : void;
    function setDateTimeRange (min : Date, max : Date) : void;
    function setSelectedSection (section : Qt_QDateTimeEdit_Section) : void;
    function setTimeRange (min : QTime, max : QTime) : void;
    function textFromDateTime (dt : Date) : string;

    // Signals
    var dateChanged : QtJSXQDateSignal;
    var dateTimeChanged : QtJSXQDateTimeSignal;
    var timeChanged : QtJSXQTimeSignal;

    // Instance Properties
    var dateTime : Date;
    var date : QDate;
    var time : QTime;
    var maximumDateTime : Date;
    var minimumDateTime : Date;
    var maximumDate : QDate;
    var minimumDate : QDate;
    var maximumTime : QTime;
    var minimumTime : QTime;
    var currentSection : Qt_QDateTimeEdit_Section;
    var displayedSections : Qt_QDateTimeEdit_Sections;
    var displayFormat : string;
    var calendarPopup : boolean;
    var currentSectionIndex : int;
    var sectionCount : int;
    var timeSpec : Qt_TimeSpec;
}
