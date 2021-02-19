function weir(param) {
    var thisObj = this;

    this.weirMeter = {//量水堰计信息
        TBTPEL: 264, //管口高程
        TBBTEL: 242, //管底高程
        PRTBLG: 15, //透水管长度
        BASEDATA: 245, //基值
        OFAX: 10, //坝轴距
        P: 249, //水位
        Q: 233//流量
    }
    this.drawWidth = $(window).get(0).innerWidth;
    this.drawHeight = $(window).get(0).innerHeight;

    this.options = {//空间长度（边角料）
        otherTop: this.drawHeight * 0.1, //管口高程以上空间
        otherBottom: this.drawHeight * 0.08, //底部混凝土(即管底高程)空间
        otherLeft: this.drawWidth * 0.06, //左侧混凝土空间
        otherRight: this.drawWidth * 0.06, //右侧混凝土空间
        scale: (this.weirMeter.TBTPEL - this.weirMeter.TBBTEL) / (this.drawHeight * 0.85), //实际量水堰管与画布绘制之比
        meterWidth: (this.weirMeter.TBTPEL - this.weirMeter.TBBTEL) * 0.3 //量水堰宽度
    }

    this.canvasObj = [{//画布集合
        id: 'canvas_concrete', //用于绘制混凝土及水流
        zIndex: 10, //图层堆叠顺序(值愈大愈上层)
        func: null   //绘制方法函数
    }, {
        id: 'canvas_meter', //用于绘制量水堰计
        zIndex: 20,
        func: null
    }, {
        id: 'canvas_label', //用于绘制标注
        zIndex: 30,
        func: null
    }, {
        id: 'canvas_wave', //用于绘制动态波浪
        zIndex: 0,
        func: null
}]

this.resize = function resize() {//画布重绘
    //清除画布
    var element = document.getElementById("canvasset");
    if (element) {
        element.parentNode.removeChild(element);
    }
    if (this.weirMeter.TBTPEL != null && this.weirMeter.TBBTEL != null) {
        thisObj.getOptions();

        //添加画布
        thisObj.addCanvas();
    }

    else {
        $("#bg").html("<h1 style=\"text-align:center;line-height:" + $("#bg").height() + "px\">该缺少基本数据，无法绘制</h1>");
    }
}

        this.Init = function Init(param, width, height) {//初始化基本信息
            jQuery.extend(true, this.weirMeter, param);
            this.adjustWidthAndHeight(width, height);
        }

        this.adjustWidthAndHeight = function adjustWidthAndHeight(width, height) {//调整画布高度宽度
            if (width && !isNaN(width))
                this.drawWidth = width;
            if (height && !isNaN(height))
                this.drawHeight = height;
            this.resize();
        }

        this.addCanvas = function addCanvas() {//添加画布
            //$("#bg").css("height", $(window).get(0).innerHeight - $("table").height());
            //$("#bg").css("height", $(window).get(0).innerHeight);
            //var drawWidth = $(window).get(0).innerWidth * 0.98;
            //var bottomspace = ($(window).get(0).innerHeight - $("table").height()) * 0.03;
            var bottomspace = ($(window).get(0).innerHeight) * 0.03;
            if (bottomspace > 18)
                bottomspace = 18;
            var drawHeight = $(window).get(0).innerHeight - bottomspace - $("table").height();
            //建立div空间放canvas画布
            $("#bg").html("");
            var canvasdiv = document.createElement("div");
            canvasdiv.setAttribute("id", "canvasset");
            canvasdiv.setAttribute("width", this.drawWidth);
            canvasdiv.setAttribute("height", this.drawHeight);
            document.getElementById("bg").appendChild(canvasdiv);
            //$("#canvasset").css("margin-left", $(window).get(0).innerWidth * 0.01);

            //this.getOptions();
            //放置画布
            this.canvasObj.forEach(function(obj) {
                $("#canvasset").append("<canvas id=\"" + obj.id + "\" width=\"" + thisObj.drawWidth + "\" height=\"" + thisObj.drawHeight + "\" style=\"z-index: " + obj.zIndex + "\"></canvas>");
                if (obj.func)
                    obj.func()
            });


            this.drawConcrete()
            this.drawMeter()
            this.drawLabel()
        }

        this.getOptions = function getOptions() {//重新计算或获取空间长度值
            var opt = {
                otherTop: this.drawHeight * 0.1,
                otherBottom: this.drawHeight * 0.08,
                otherLeft: this.drawWidth * 0.06,
                otherRight: this.drawWidth * 0.06,
                scale: (this.weirMeter.TBTPEL - this.weirMeter.TBBTEL) / (this.drawHeight * 0.85),
                meterWidth: (this.weirMeter.TBTPEL - this.weirMeter.TBBTEL) * 0.3
            }
            jQuery.extend(true, this.options, opt);
            this.options.scale = (this.weirMeter.TBTPEL - this.weirMeter.TBBTEL) / (this.drawHeight - this.options.otherTop - this.options.otherBottom);
        }

        this.drawConcrete = function drawConcrete() {//绘制混凝土及水流
            var ctx = document.getElementById("canvas_concrete").getContext("2d");

            //混凝土区域(图片填充)
            var img = new Image();
            img.src = "Image/concrete.png";
            img.onload = function() {
                var pat = ctx.createPattern(img, "repeat");
                ctx.fillStyle = pat;
                ctx.beginPath();
                ctx.moveTo(0, thisObj.options.otherTop);
                ctx.lineTo(thisObj.options.otherLeft, thisObj.options.otherTop);
                ctx.lineTo(thisObj.options.otherLeft, thisObj.drawHeight - thisObj.options.otherBottom);
                ctx.lineTo(thisObj.drawWidth - thisObj.options.otherRight, thisObj.drawHeight - thisObj.options.otherBottom);
                ctx.lineTo(thisObj.drawWidth - thisObj.options.otherRight, thisObj.options.otherTop);
                ctx.lineTo(thisObj.drawWidth, thisObj.options.otherTop);
                ctx.lineTo(thisObj.drawWidth, thisObj.drawHeight);
                ctx.lineTo(0, thisObj.drawHeight);
                ctx.closePath();
                ctx.fill();
            }

            //水流(渐变色)
            var scale = this.options.scale,
            h = (this.weirMeter.P - this.weirMeter.TBBTEL) / scale;
            var linear = ctx.createLinearGradient(0, 0, 0, h);
            var l = 0.4, l2 = 0.3;
            var a = 0.2;
            linear.addColorStop(0, "rgba(135, 206, 255,0.7)");
            linear.addColorStop(l, "rgba(135, 206, 255,0.7)");
            linear.addColorStop(l + l2, "rgba(99, 184, 255,0.7)");
            linear.addColorStop(1, "rgba(30, 144, 255,0.7)");
            ctx.fillStyle = linear;
            ctx.beginPath();
            //fillRect(x,y,width,height)
            ctx.fillRect(this.options.otherLeft, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / scale, this.drawWidth - (this.options.otherLeft + this.options.otherRight), h);

        }

        this.drawMeter = function drawMeter() {//绘制量水堰计
            var ctx = document.getElementById("canvas_meter").getContext("2d");
            ctx.strokeStyle = 'rgb(180,180,180)';
            ctx.lineWidth = 1;
            ctx.strokeRect(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale, this.options.otherTop, this.options.meterWidth / this.options.scale, this.drawHeight - this.options.otherTop - this.options.otherBottom);

            //防污管以外部分（放射状渐变）
            //var radial = ctx.createRadialGradient(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 5), this.options.otherTop, 5, this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale, this.options.otherBottom, this.options.meterWidth / this.options.scale * (3 / 10));
            //radial.addColorStop(0, '#BDBDBD');
            //radial.addColorStop(1, '#F5F5F5');
            //ctx.fillStyle = radial;

            //ctx.fillStyle = 'rgba(204, 204, 204,0.8)';
            //ctx.fillRect(thisObj.drawWidth - thisObj.options.otherRight - thisObj.options.meterWidth / thisObj.options.scale, thisObj.options.otherTop, thisObj.options.meterWidth / thisObj.options.scale * (3 / 10), (thisObj.drawHeight - thisObj.options.otherTop - thisObj.options.otherBottom));
            //ctx.fillRect(thisObj.drawWidth - thisObj.options.otherRight - thisObj.options.meterWidth / thisObj.options.scale * (1 / 2 - 1 / 5), thisObj.options.otherTop, thisObj.options.meterWidth / thisObj.options.scale * (3 / 10), (thisObj.drawHeight - thisObj.options.otherTop - thisObj.options.otherBottom));

            //防污管 2/5
            ctx.strokeStyle = 'rgb(150,150,150)';
            ctx.lineWidth = 1;
            ctx.strokeRect(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 5), this.options.otherTop - this.options.otherTop / 10, this.options.meterWidth / this.options.scale * 2 / 5, this.drawHeight - this.options.otherTop - this.options.otherBottom + this.options.otherTop / 10 + this.options.otherBottom / 2);

            //上端盖以上部分
            ctx.fillStyle = 'rgb(150,150,150)';
            ctx.fillRect(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 15), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30, this.options.meterWidth / this.options.scale * 2 / 15, this.options.otherTop / 30);
            //磁致伸缩液位计
            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) - (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20);
            ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) - (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 40, this.options.otherTop / 40, 1.5 * Math.PI, 2.5 * Math.PI); //arc(x, y, radius, startRad, endRad, anticlockwise)
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30);
            ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 40, this.options.otherTop / 40, 0.5 * Math.PI, 1.5 * Math.PI);
            ctx.stroke();

            ctx.strokeRect(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2, this.options.meterWidth / this.options.scale * 1 / 5 - (this.options.otherTop / 20), this.options.otherTop / 2);

            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) - (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40);
            ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) - (this.options.otherTop / 80), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 80, this.options.otherTop / 80, 1.5 * Math.PI, 2.5 * Math.PI); //arc(x, y, radius, startRad, endRad, anticlockwise)
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2);
            ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10) + (this.options.otherTop / 80), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 80, this.options.otherTop / 80, 0.5 * Math.PI, 1.5 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 20), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 20), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20);
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 20), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 20), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20);
            ctx.closePath();
            ctx.stroke();

            ctx.strokeRect(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20, this.options.meterWidth / this.options.scale / 20, this.options.otherTop / 20);

            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20 - this.options.otherTop / 20);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20 - this.options.otherTop / 20);
            ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20 - this.options.otherTop / 40, this.options.otherTop / 40, 1.5 * Math.PI, 2.5 * Math.PI); //arc(x, y, radius, startRad, endRad, anticlockwise)
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20 - this.options.otherTop / 20);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20 - this.options.otherTop / 20);
            ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 40), this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20 - this.options.otherTop / 40, this.options.otherTop / 40, 1.5 * Math.PI, 0.5 * Math.PI, true); //arc(x, y, radius, startRad, endRad, anticlockwise)
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop - this.options.otherTop / 10 - this.options.otherTop / 30 - this.options.otherTop / 20 - this.options.otherTop / 2 - this.options.otherTop / 40 - this.options.otherTop / 20);
            ctx.closePath();
            ctx.stroke();

            //浮球
            if (this.weirMeter.P) {
                ctx.strokeStyle = 'rgb(150,150,150)';
                ctx.fillStyle = 'rgba(200,200,200,0.6)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale, this.options.meterWidth / this.options.scale * (1 / 10 * 4 / 5), 0, Math.PI * 2);
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 50), this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - this.options.meterWidth / this.options.scale * (1 / 10 * 4 / 5));
                ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 50), this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - this.options.meterWidth / this.options.scale * (1 / 6));
                ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - this.options.meterWidth / this.options.scale * (1 / 6 + 1 / 50), this.options.meterWidth / this.options.scale / 50, Math.PI, Math.PI * 2);
                ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 50), this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - this.options.meterWidth / this.options.scale * (1 / 10 * 4 / 5));
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 50), this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale + this.options.meterWidth / this.options.scale * (1 / 10 * 4 / 5));
                ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 50), this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale + this.options.meterWidth / this.options.scale * (1 / 12));
                ctx.arc(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale + this.options.meterWidth / this.options.scale * (1 / 12 + 1 / 50), this.options.meterWidth / this.options.scale / 50, Math.PI, 0, true);
                ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 50), this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale + this.options.meterWidth / this.options.scale * (1 / 10 * 4 / 5));
                ctx.stroke();
                ctx.fill();
            }

            //堰板
            ctx.strokeStyle = 'rgb(120,120,120)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.options.otherLeft, this.options.otherTop + (this.weirMeter.TBTPEL - (this.weirMeter.TBBTEL + this.weirMeter.PRTBLG)) / this.options.scale);
            ctx.lineTo(this.options.otherLeft + this.drawWidth / 10, this.options.otherTop + (this.weirMeter.TBTPEL - (this.weirMeter.TBBTEL + this.weirMeter.PRTBLG)) / this.options.scale);
            ctx.lineTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale - this.drawWidth / 10, this.options.otherTop + (this.weirMeter.TBTPEL - (this.weirMeter.TBBTEL + this.weirMeter.PRTBLG)) / this.options.scale);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale, this.options.otherTop + (this.weirMeter.TBTPEL - (this.weirMeter.TBBTEL + this.weirMeter.PRTBLG)) / this.options.scale);
            ctx.stroke();

            var span = 10, h = this.options.otherTop + (this.weirMeter.TBTPEL - (this.weirMeter.TBBTEL + this.weirMeter.PRTBLG)) / this.options.scale,
            slope = ((this.weirMeter.PRTBLG + this.weirMeter.TBBTEL - this.weirMeter.BASEDATA) / this.options.scale) / ((this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 - this.drawWidth / 10);
            if (this.drawWidth / 20 < span)
                span = this.drawWidth;
            if ((this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale / 2 < span)
                span = (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale / 2;

            ctx.beginPath();

            //堰板左侧虚线
            for (var x = this.options.otherLeft + this.drawWidth / 10 - span; x <= this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2; x += 8) {
                ctx.beginPath();
                var y = h - (this.options.otherLeft + this.drawWidth / 10 - span - x) * slope;
                ctx.moveTo(x, y);
                var xEnd = x + 5;
                if (xEnd > this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2)
                    xEnd = this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2;
                var yEnd = h - (this.options.otherLeft + this.drawWidth / 10 - span - xEnd) * slope;
                ctx.lineTo(xEnd, yEnd);
                ctx.stroke();
            }
            //堰板右侧虚线
            for (var x = this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale - this.drawWidth / 10 + span; x >= this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2; x -= 8) {
                ctx.beginPath();
                var y = h + (this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale - this.drawWidth / 10 + span - x) * slope;
                ctx.moveTo(x, y);
                var xEnd = x - 5;
                if (xEnd < this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2)
                    xEnd = this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2;
                var yEnd = h + (this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale - this.drawWidth / 10 + span - xEnd) * slope;
                ctx.lineTo(xEnd, yEnd);
                ctx.stroke();
            }
        }


        this.drawLabel = function drawLabel() {//绘制标注
            var ctx = document.getElementById("canvas_label").getContext("2d");
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.strokeStyle = 'rgb(50,50,50)';
            ctx.lineWidth = 1;
            ctx.font = '12px 宋体';

            //刻度尺

            //中心轴
            ctx.beginPath();
            ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.options.otherTop / 20);
            ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale / 2, this.drawHeight - this.options.otherBottom / 20);
            ctx.stroke();

            //尺寸
            var max = Math.floor(this.weirMeter.TBTPEL), min = Math.ceil(this.weirMeter.TBBTEL);
            if (this.weirMeter.PRTBLG + this.weirMeter.TBBTEL < this.weirMeter.TBTPEL - 5)
                max = Math.ceil((this.weirMeter.TBTPEL - 5) / 5) * 5;
                //max = Math.ceil((this.weirMeter.PRTBLG + this.weirMeter.TBBTEL) / 5) * 5;
            else if (this.weirMeter.PRTBLG + this.weirMeter.TBBTEL > this.weirMeter.TBTPEL - 5)
                max = Math.ceil(this.weirMeter.PRTBLG + this.weirMeter.TBBTEL);

            //单位(m)
            ctx.fillText('单位(m)', this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) + 5, this.options.otherTop + (this.weirMeter.TBTPEL - max) / this.options.scale - 12)

            //间距
            var s1 = 1, s2 = 5
            if (max - min > 400) {
                s1 = 50
                s2 = 10
            }
            else if (max - min > 300) {
                s1 = 30
                s2 = 10
            }
            else if (max - min > 100) {
                s1 = 20
                s2 = 5
            }
            else if (max - min > 50) {
                s1 = 10
                s2 = 2
            }
            else {
                s1 = 5
                s2 = 1
            }
            for (var i = max; i >= min; i--) {
                if (i % s1 == 0) {
                    ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10), this.options.otherTop + (this.weirMeter.TBTPEL - i) / this.options.scale);
                    ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10), this.options.otherTop + (this.weirMeter.TBTPEL - i) / this.options.scale);
                    ctx.stroke();
                }
                else if (i % s2 == 0){
                    ctx.moveTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 + 1 / 10 * 3 / 5), this.options.otherTop + (this.weirMeter.TBTPEL - i) / this.options.scale);
                    ctx.lineTo(this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10 * 3 / 5), this.options.otherTop + (this.weirMeter.TBTPEL - i) / this.options.scale);
                    ctx.stroke();
                }
            }

            //刻度标注
            for (var i = max; i >= min; i--) {
                if ((i % s1 == 0 || i % s2 == 0)&&this.options.scale<0.01)
                    ctx.fillText(i, this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) + 5, this.options.otherTop + (this.weirMeter.TBTPEL - i) / this.options.scale + 4);
                if (i % s1 == 0 )
                    ctx.fillText(i, this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale * (1 / 2 - 1 / 10) + 5, this.options.otherTop + (this.weirMeter.TBTPEL - i) / this.options.scale + 4);
            }

            ctx.strokeStyle = 'rgb(100,100,100)';
            //堰上水头、流量、管内水位（水位高于基值展示堰上水头和流量，反之展示管内水位）
            if (this.weirMeter.P && this.weirMeter.BASEDATA && this.weirMeter.P > this.weirMeter.BASEDATA) {
                var zLength = this.textLength('堰上水头：', this.weirMeter.P.toFixed(3) + 'm'),
                qLength = this.textLength('    流量：', this.weirMeter.T ? (this.weirMeter.T.toFixed(3) + 'm³/s') : ''),
                length = zLength > qLength ? zLength : qLength;
                ctx.beginPath();
                ctx.moveTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale);
                ctx.lineTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 - 5, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 10);
                ctx.lineTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 + 5, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 10);
                ctx.closePath();
                ctx.stroke();
                ctx.moveTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 - length / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 12);
                ctx.lineTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 + length / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 12);
                ctx.stroke();
                if (this.weirMeter.T) {
                    ctx.fillText('    流量：' + (this.weirMeter.T).toFixed(3) + 'm³/s', this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 - length / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 16);
                    ctx.fillText('堰上水头：' + this.weirMeter.P.toFixed(3) + 'm', this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 - length / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 33);
                }
                else
                    ctx.fillText('堰上水头：' + this.weirMeter.P.toFixed(3) + 'm', this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2 - length / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 16);
            }
            else if (this.weirMeter.P) {
                ctx.beginPath();
                ctx.moveTo(this.options.otherLeft + 10, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale);
                ctx.lineTo(this.options.otherLeft + 5, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 10);
                ctx.lineTo(this.options.otherLeft + 15, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 10);
                ctx.closePath();
                ctx.stroke();
                ctx.fillText('管内水位：' + (this.weirMeter.P).toFixed(3) + 'm', this.options.otherLeft + 20, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale - 4);
            }

            ctx.beginPath();
            ctx.moveTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale);
            var length = this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale - this.drawWidth / 10;
            if (this.drawWidth / 10 < this.textLength('基准值：', (this.weirMeter.BASEDATA ? this.weirMeter.BASEDATA.toFixed(3) + 'm' : ''))) {
                length = this.drawWidth - this.options.otherRight - this.options.meterWidth / this.options.scale - this.textLength('基准值：', (this.weirMeter.BASEDATA ? this.weirMeter.BASEDATA.toFixed(3) + 'm' : ''));
            }
            ctx.lineTo(length + 100, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale);
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(length, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale);
            ctx.lineTo(length - 5, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale - 10);
            ctx.lineTo(length + 5, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale - 10);
            ctx.closePath();
            ctx.stroke();

            ctx.fillText('基准值：' + (this.weirMeter.BASEDATA ? this.weirMeter.BASEDATA.toFixed(3) + 'm' : ''), length + 10, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale - 5);

            if (this.weirMeter.P) {
                ctx.beginPath();
                ctx.moveTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.P) / this.options.scale);
                ctx.lineTo(this.options.otherLeft + (this.drawWidth - this.options.otherRight - this.options.otherLeft - this.options.meterWidth / this.options.scale) / 2, this.options.otherTop + (this.weirMeter.TBTPEL - this.weirMeter.BASEDATA) / this.options.scale);
                ctx.stroke();
            }

        }


        this.textLength = function textLength(str1, str2) {//文本长度计算
            if (str1[str1.length - 1] == "：") return str1.length * 15 + str2.length * 5;
            else return (str1.length + str2.length) * 6 + 5;
        }
    }
