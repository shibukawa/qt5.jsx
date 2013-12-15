qt5.jsx
===========================================

Synopsis
---------------

Qt API wrapper for JSX.

This is a experimental version.

Motivation
---------------

It provides feature to create GUI in JSX.

Code Example
---------------

```js
import "qt/qt.jsx";
import "qt/qwidget.jsx";
import "qt/qdialog.jsx";
import "qt/qvboxlayout.jsx";
import "qt/qpaintdevice.jsx";
import "qt/qcolor.jsx";
import "qt/qpolygon.jsx";
import "qt/qpainter.jsx";
import "qt/qpaintevent.jsx";
import "qt/qtimerevent.jsx";
import "qt/qpoint.jsx";
import "qt/qpen.jsx";
import "qt/qbrush.jsx";
import "qt/qtimer.jsx";
import "qt/qcoreapplication.jsx";


class AnalogClock extends QWidget
{
    var hourColor : QColor;
    var minuteColor : QColor;
    var hourHand : QPolygon;
    var minuteHand : QPolygon;

    function constructor()
    {
        super(null, Qt.WindowFlags(Qt.Widget));
        this.hourColor = new QColor(127, 0, 127, 255);

        this.minuteColor = new QColor(0, 127, 127, 191);

        this.hourHand = new QPolygon([new QPoint(7, 8),
                                      new QPoint(-7, 8),
                                      new QPoint(0, -40)]);
        this.minuteHand = new QPolygon([new QPoint(7, 8),
                                        new QPoint(-7, 8),
                                        new QPoint(0, -70)]);
        this.startTimer(1000, Qt.CoarseTimer);

        this.windowTitle = "Analog Clock";
        this.resize(200, 200);
    }

    override function timerEvent (event : QTimerEvent) : void
    {
        this.update();
    }

    override function paintEvent (event : QPaintEvent) : void
    {
        var side = Math.min(this.width, this.height);
        var time = new Date();

        var painter = new QPainter();
        painter.begin(this);
        painter.setRenderHint(QPainter.Antialiasing, true);
        painter.translate(this.width / 2, this.height / 2);
        painter.scale(side / 200.0, side / 200.0);

        painter.setPen(new QPen(Qt.NoPen));
        painter.setBrush(new QBrush(this.hourColor, Qt.SolidPattern));

        painter.save();
        painter.rotate(30.0 * ((time.getHours() + time.getMinutes() / 60.0)));
        painter.drawConvexPolygon(this.hourHand);
        painter.drawLine(0, 0, 100, 100);
        painter.restore();

        painter.setPen(this.hourColor);

        for (var i = 0; i < 12; ++i) {
            painter.drawLine(88, 0, 96, 0);
            painter.rotate(30.0);
        }

        painter.setPen(new QPen(Qt.NoPen));
        painter.setBrush(new QBrush(this.minuteColor, Qt.SolidPattern));

        painter.save();
        painter.rotate(6.0 * (time.getMinutes() + time.getSeconds() / 60.0));
        painter.drawConvexPolygon(this.minuteHand);
        painter.restore();

        painter.setPen(this.minuteColor);

        for (var j = 0; j < 60; ++j) {
            if ((j % 5) != 0)
	    painter.drawLine(92, 0, 96, 0);
            painter.rotate(6.0);
        }
        painter.end();
    }
}

class _Main {
    static function main (argv : string[]) : void
    {
        var clock = new AnalogClock();
        var dialog = new QDialog(null, null);
        var mainLayout = new QVBoxLayout();
        mainLayout.addWidget(clock, 1, null);
        dialog.setLayout(mainLayout);
        dialog.resize(200, 200);
        dialog.exec();
    }
}
```

Installation
---------------

### Setup Manually

* Install Qt 5.2
* Prepare prebuild interpreter.

  * See: https://github.com/shibukawa/qtwidget.js

* Install JSX

Compile your code and copy it as qtwidget.app/Content/Resources/js_src/main.js,
`qtwidgetjs.app` launches your script when booting.

### Recommended Process

It recommends create application via `jsx-init`

```sh
$ npm install -g jsx-init
$ jsx-init
```

It provides template to initialize application of qt.jsx.

After creating template, type the following command. It install all tools to build JSX:

```sh
$ npm install
```

Download runtime binary or build QtWidget runner and put it at the same folder. The following command creates .app file.

```
$ grunt build
```

API Reference
------------------

See doc folder and Qt 5.2 document.

Development
-------------

## Repository

* Runtime: https://github.com/shibukawa/qtwidget.js
* QT Binding Generator: https://github.com/shibukawa/qtscriptgenerator
* Repository: https://github.com/shibukawa/qt5.js
* Issues: https://github.com/shibukawa/qt5.jsx/issues

Checkout qtwidget.js repository and run `makebinding.sh` or `makebinding.bat` then you will get JS to Qt binding and JSX to JS binding and document.

To add more class support, you should modify `qtwidget/third_party/qtscriptgenerator/generator/typesytem_*`.

If you want to add more modules, you should add type system XML files and project files at `qtwidget/third_party/qtscriptgenerator/qtbindings`.

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.
