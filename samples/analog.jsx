/****************************************************************************
**
** Copyright (C) 2013 Yoshiki Shibukawa.
**
** Orignal Copyright (C) 2013 Digia Plc and/or its subsidiary(-ies).
** (original file is part of the Qt Script Generator project on Qt Labs)
**
** $QT_BEGIN_LICENSE:LGPL$
** Commercial License Usage
** Licensees holding valid commercial Qt licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and Digia.  For licensing terms and
** conditions see http://qt.digia.com/licensing.  For further information
** use the contact form at http://qt.digia.com/contact-us.
**
** GNU Lesser General Public License Usage
** Alternatively, this file may be used under the terms of the GNU Lesser
** General Public License version 2.1 as published by the Free Software
** Foundation and appearing in the file LICENSE.LGPL included in the
** packaging of this file.  Please review the following information to
** ensure the GNU Lesser General Public License version 2.1 requirements
** will be met: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.
**
** In addition, as a special exception, Digia gives you certain additional
** rights.  These rights are described in the Digia Qt LGPL Exception
** version 1.1, included in the file LGPL_EXCEPTION.txt in this package.
**
** GNU General Public License Usage
** Alternatively, this file may be used under the terms of the GNU
** General Public License version 3.0 as published by the Free Software
** Foundation and appearing in the file LICENSE.GPL included in the
** packaging of this file.  Please review the following information to
** ensure the GNU General Public License version 3.0 requirements will be
** met: http://www.gnu.org/copyleft/gpl.html.
**
**
** $QT_END_LICENSE$
**
****************************************************************************/

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
