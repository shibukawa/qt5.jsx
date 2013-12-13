/*
 * JSX wrapper code generated by JSXgenerator.
 *
 * QWizardPage class
 *
 * Note: DO NOT EDIT THIS FILE
 */
import "qt/qpixmap.jsx";
import "qt/qwidget.jsx";
import "qt/qwizard.jsx";
import "qt/_signals.jsx";

native class QWizardPage extends QWidget
{
    function constructor (parent : QWidget);

    // Methods
    function buttonText (which : Qt_QWizard_WizardButton) : string;
    function cleanupPage () : void;
    function field (name : string) : variant;
    function initializePage () : void;
    function isCommitPage () : boolean;
    function isComplete () : boolean;
    function isFinalPage () : boolean;
    function nextId () : int;
    function pixmap (which : Qt_QWizard_WizardPixmap) : QPixmap;
    function registerField (name : string, widget : QWidget, property : string, changedSignal : string) : void;
    function setButtonText (which : Qt_QWizard_WizardButton, text : string) : void;
    function setCommitPage (commitPage : boolean) : void;
    function setField (name : string, value : variant) : void;
    function setFinalPage (finalPage : boolean) : void;
    function setPixmap (which : Qt_QWizard_WizardPixmap, pixmap : QPixmap) : void;
    function validatePage () : boolean;
    function wizard () : QWizard;

    // Signals
    var completeChanged : QtJSXSignal;

    // Instance Properties
    var title : string;
    var subTitle : string;
}