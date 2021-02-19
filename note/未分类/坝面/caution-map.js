var height, width;
var ctx, rscd, btm, etm, pegcode;
var TopD = 60;
var LeftD = 40;
var isDrawMud = true;//是否绘制淤泥（死水位与基岩之间）

var ddz, damel, z, kr, fz, ckflz, dsflz, xxsw, ttcp; //死水位，坝顶高程，当前水位,当前库容,防渗墙水位高度
var TotalL = 0, TotalH, CenterL, topWidth; //坝长（默认百分比1），坝轴线，坝(顶)宽
var ldata = new Array(), cdata = new Array(), rdata = new Array(); //迎风坡、坝顶、背风坡各阶段的数据
var peg = new Array(); //测压管数据
var label = new Array(); //标注范围数据
var lstone = 0, rstone = 0; //堆石棱体是否绘制
var lstonedata, rstonedata; //堆石棱体数据
var pzCount = 0; //是否有管内水位
var stcd;

$(document).ready(function() {
    stcd = window.parent.stcd;
    btm = GetTime(1);
    etm = GetTime();
    //获取数据
    $.ajax({
        type: "GET",
        url: "../../../MonitorManage/AjaxHandler/MonitorHandler.ashx",
        data: {
            Optype: "GetDamData_B",
            btime: btm,
            etime: etm,
            rscd: stcd
        },
        dataType: "json",
        success: function(data) {
            var data = eval(data);
            Calculation(data); //绘制数据计算
            //showTable(); //断面测压管管内水位信息展示
            resizeCanvas(); //绘制

        },
        error: function() {
            $("#title").text("数据加载失败");
        }
    });
});

//绑定window变化事件,浏览器窗口调整时重绘
$(window).resize(function() {
    label.splice(0, label.length);
    var element = document.getElementById("canvasset");
    if (element) {
        element.parentNode.removeChild(element);
    }

    resizeCanvas();
});

//计算大坝绘制参数
function Calculation(data) {
    var dam;
    var reservoir = data[0].Reservoir;
    //var pegcode = data[0].PegCode[0].Peg;
    //var pegcode = [];
   // var pegp = []; // data[0].PegCode[0].Data;
    var llength = 0, clength = 0, rlength = 0;

    if ((reservoir != null) && (reservoir != "")) {
        damel = parseFloat(reservoir[0][0].DamTop).toFixed(2);
        ddz = parseFloat(reservoir[0][0].DDZ).toFixed(2);
        z = parseFloat(reservoir[0][0].RZ).toFixed(2);
        kr = parseFloat(reservoir[0][0].KR).toFixed(3);
        fz = parseFloat(reservoir[0][0].Flch).toFixed(2);
        ckflz = parseFloat(reservoir[0][0].CKFLZ).toFixed(2);
        dsflz = parseFloat(reservoir[0][0].DSFLZ).toFixed(2);
        topWidth = reservoir[0][0].DamTopWidth;
        xxsw = parseFloat(reservoir[0][0].XXSW).toFixed(2);
        ttcp = parseFloat(reservoir[0][0].TTCP).toFixed(3);
    }

    if (data[0].Dam[0] != null && data[0].Dam[0].length != 0) {
        //if (data[0].Dam[0] == null || data[0].Dam[0].length == 0) {
        dam = data[0].Dam;
        $.each(dam[0], function(index, item) {
            switch (item.TYPEVALUE) {
                case "1":
                    llength += parseFloat(item.LENGTH);
                    ldata.push(item.LENGTH + "|" + item.HEIGHT);
                    break;
                case "0":
                    clength += parseFloat(item.LENGTH);
                    cdata.push(item.LENGTH + "|" + item.HEIGHT);
                    break;
                case "2":
                    rlength += parseFloat(item.LENGTH);
                    rdata.push(item.LENGTH + "|" + item.HEIGHT);
                    break;
                case "3":
                    lstone = 1;
                    lstonedata = item.LENGTH + "|" + item.HEIGHT;
                    break;
                case "4":
                    rstone = 1;
                    rstonedata = item.LENGTH + "|" + item.HEIGHT;
                    break;
                default:
                    ;
            }
        });
    }
    //大坝绘制参数
    if (llength != 0 && clength != 0 && rlength != 0) {
        TotalL = llength + clength + rlength;
        CenterL = llength + clength / 2;

        //计算迎风坡x轴长度
        for (var i = 1; i < ldata.length; i++) ldata[i] = (parseFloat(ldata[i - 1].split('|')[0]) + parseFloat(ldata[i].split('|')[0])) + "|" + ldata[i].split('|')[1];

        //计算坝顶长度
        for (var i = 0; i < cdata.length; i++) {
            if (i == 0) cdata[i] = (parseFloat(cdata[i].split('|')[0]) + llength) + "|" + cdata[i].split('|')[1];
            else cdata[i] = (parseFloat(cdata[i - 1].split('|')[0]) + parseFloat(cdata[i].split('|')[0])) + "|" + cdata[i].split('|')[1];
        }

        //计算背风坡x轴长度
        for (var i = 0; i < rdata.length; i++) {
            if (i == 0)
                rdata[i] = (parseFloat(rdata[i].split('|')[0]) + llength + clength) + "|" + rdata[i].split('|')[1];
            else rdata[i] = (parseFloat(rdata[i - 1].split('|')[0]) + parseFloat(rdata[i].split('|')[0])) + "|" + rdata[i].split('|')[1];
        }

        TotalH = (cdata[0].split('|')[1] - ldata[0].split('|')[1]) * 1.2;
    }
    //无大坝绘制参数(默认)
    else {
        //坝（顶）宽
        if (topWidth == null || topWidth == "" || topWidth.length == 0) {
            /*if ((pegcode[0] != null) && (pegcode[0] != "")) {
                var min = 6;
                for (var i = 0; i < pegcode[0].length; i++) {
                    if (Math.abs(pegcode[0][i].OFAX) < min) {
                        min = Math.abs(pegcode[0][i].OFAX);
                    }
                }
                topWidth = (min - 1) * 2;
            } else */
	   topWidth = 10;
        }
        //坝长
        TotalL = topWidth / 0.05;

        if ((damel != null) && (damel != "")) {
            //坝轮廓基本数据
            cdata.push((0.48 * TotalL) + "|" + parseFloat(damel));
            cdata.push((0.48 * TotalL + topWidth) + "|" + parseFloat(damel));
            ldata.push("0|" + (parseFloat(ddz) - 2));
            ldata.push((0.48 * TotalL) + "|" + parseFloat(damel));
            rdata.push((0.48 * TotalL + topWidth) + "|" + parseFloat(damel));
            rdata.push(TotalL + "|" + (parseFloat(ddz) - 2));

            CenterL = 0.48 * TotalL + parseFloat(topWidth) / 2;

            /*if ((pegcode[0] != null) && (pegcode[0] != "")) {
                if (pegcode[0][pegcode[0].length - 1].OFAX + CenterL > TotalL * 5 / 6) {
                    TotalL = pegcode[0][pegcode[0].length - 1].OFAX + CenterL + TotalL / 5;
                    rdata[rdata.length - 1] = TotalL + "|" + (parseFloat(ddz) - 2);
                }
            } */
            TotalH = (cdata[0].split('|')[1] - ldata[0].split('|')[1]) * 1.2;
        }

    }
    //测压管信息【x轴|管顶高程|管底高程|MPCD|管号】
//    $.each(pegcode[0], function(index, item) {
//        if (item.PRTBLG != null && item.PRTBLG != "")
//            peg.push((parseFloat(item.OFAX) + CenterL) + "|" + (parseFloat(item.TBTPEL) + parseFloat(item.PRTBLG)) + "|" + (parseFloat(item.TBBTEL) + parseFloat(item.PRTBLG)) + "|" + item.MPCD + "|" + item.PipeCode);
//        else
//            peg.push((parseFloat(item.OFAX) + CenterL) + "|" + parseFloat(item.TBTPEL) + "|" + parseFloat(item.TBBTEL) + "|" + item.MPCD + "|" + item.PipeCode);
//    });

    //测压管信息【x轴|管顶高程|管底高程|MPCD|管号|管内水位】
//    $.each(pegp[0], function(index, item) {
//        for (var j = 0; j < peg.length; j++) {
//            if (item.MPCD == peg[j].split('|')[3]) peg[j] += "|" + item.P;
//            if (item.P != null && item.P != "")
//                pzCount++;
//        }
//    });

}



//绘制
function resizeCanvas() {
    $("#bg").css("height", $(window).get(0).innerHeight);
    var drawWidth = $(window).get(0).innerWidth * 0.98;
    var bottomspace = ($(window).get(0).innerHeight ) * 0.03;
    if (bottomspace > 18)
        bottomspace = 18;
    var drawHeight = $(window).get(0).innerHeight - bottomspace;
    //建立div空间放canvas
    var canvasdiv = document.createElement("div");
    canvasdiv.setAttribute("id", "canvasset");
    canvasdiv.setAttribute("width", drawWidth);
    canvasdiv.setAttribute("height", drawHeight);
    document.getElementById("bg").appendChild(canvasdiv);
    $("#canvasset").css("margin-left", $(window).get(0).innerWidth * 0.01);

    if (TotalH != null) {
        $("#canvasset").append("<canvas id=\"canvas_bottom\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 10;\"></canvas>"); //最底层-用于画大坝轮廓和测压管
        $("#canvasset").append("<canvas id=\"canvas_middle\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 5;\"></canvas>"); //中间层-画浸润线
        $("#canvasset").append("<canvas id=\"canvas_top\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 15;\"></canvas>"); //顶层-标注

        var img = new Image();
        img.src = "Image/dam.png";
        //图片预先加载完毕再绘制，防止出现图片覆盖
        img.onload = function() {
            ctx = document.getElementById("canvas_bottom").getContext("2d");
            var pat = ctx.createPattern(img, "repeat");
            drawDam(pat); //第三层  画大坝及测压管
            drawBatholith(); //第一层 画岩基 及标注
            if (z != null && z != "" && !isNaN(z) ) drawWater(); //第二层 画水位线
            else if ((z == null || z == "") || (pzCount == 0)) {
                //$("#canvasset").append("<p id=\"Zshortage\" style=\"z-index:1000;float:right;color:rgb(30, 144, 255);font-size:13px;padding:2px 5px;\">注：该时间段缺少水位数据，浸润线未绘</p>");
            }
        }
    }
    else {
        $("#canvasset").html("<h1 style=\"text-align:center;margin-top:15%;\">该断面缺少基本数据，无法绘制</h1>");
    }
}

function drawDam(pat) {
    var c = document.getElementById("canvas_bottom");
    ctx = c.getContext("2d");


    height = c.offsetHeight - TopD;
    width = c.offsetWidth - LeftD;

    //大坝
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = pat;
    ctx.lineWidth = 1;
    //左侧（迎风坡）
    for (var i = 0; i < ldata.length; i++) {
        if (i == 0) ctx.moveTo(LeftD + ldata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[i].split('|')[1]) / TotalH * height);
        else ctx.lineTo(LeftD + ldata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[i].split('|')[1]) / TotalH * height);
    }
    //坝顶
    for (var i = 0; i < cdata.length; i++) {
        if (i == 1 && cdata.length == 2) {
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width - 6, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height);
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width - 6, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height - 6);
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height - 6);
        }
        ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height);
        if (i == 0 && cdata.length == 2) {
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height - 12);
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width + 6, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height - 12);
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width + 6, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height - 6);
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width + 12, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height - 6);
            ctx.lineTo(LeftD + cdata[i].split('|')[0] / TotalL * width + 12, TopD + (cdata[0].split('|')[1] - cdata[i].split('|')[1]) / TotalH * height);
        }
    }
    //右侧（背风坡）
    for (var i = 0; i < rdata.length; i++)
        ctx.lineTo(LeftD + rdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - rdata[i].split('|')[1]) / TotalH * height);

    ctx.lineTo(LeftD + width, TopD + height);
    ctx.lineTo(LeftD, TopD + height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


    //防渗墙
    ctx.fillStyle = "rgb(230,230,230)";
    ctx.strokeStyle = "rgb(230,230,230)";
    ctx.beginPath();
    ctx.moveTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 12, TopD);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 12, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.15 * height);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.15 * height);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "rgb(100,100,100)";
    ctx.moveTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + height * 0.08 / 1.2);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 8, TopD);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 8, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + height * 0.08 / 1.2);
    ctx.stroke();

    for (var i = 0; i < ((cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + height * 0.08 / 1.2) / 8; i++) {
        ctx.moveTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + i * 8);
        ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 8, TopD + (i + 1) * 8);
        ctx.stroke();
        ctx.moveTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 8, TopD + i * 8);
        ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (i + 1) * 8);
        ctx.stroke();
    }
    TextVertical("防渗墙", LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + 30, "canvas_middle", "rgb(120,120,120)"); //防渗墙标注在第二层

    var c = document.getElementById("canvas_bottom");
    ctx = c.getContext("2d"); //回到最底层画布

    //基岩是否存在影响淤泥绘制
    if (!isNaN(ddz) && parseFloat(ldata[0].split('|')[1]) < ddz) {
        //存在基岩
        var x = 0,
    x1 = 0;
        if (x < ddz) x = TextRightX(ddz);
        for (var i = 0; i < rdata.length - 1; i++) {
            if (ddz <= rdata[i].split('|')[1] && ddz >= rdata[i + 1].split('|')[1]) {
                if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) x1 = rdata[i].split('|')[0];
                else x1 = (rdata[i].split('|')[1] - ddz) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')[0] - rdata[i].split('|')

[0]) + parseFloat(rdata[i].split('|')[0]);
                x1 = x1 / TotalL * width;
                break;
            }
        }
        ctx.moveTo(LeftD + x, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
        ctx.moveTo(LeftD + x, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
        ctx.lineTo(cdata[0].split('|')[0] > 0.08 * TotalL ? LeftD + (cdata[0].split('|')[0] - 0.08 * TotalL) / TotalL * width : LeftD + x, TopD + (cdata[0].split('|')

[1] - parseFloat(ddz)) / TotalH * height);
        ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * 

width : LeftD + x1, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * 

width : LeftD + x1, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
        ctx.lineTo(LeftD + x1, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
        ctx.stroke();
    }
    else {
        //不存在
        var x = 0, y = ldata[0].split('|')[1],
    x1 = 0;
        if (y < ddz) {
            x = TextRightX(ddz);
            y = ddz;
        }
        for (var i = 0; i < rdata.length - 1; i++) {
            if (y <= rdata[i].split('|')[1] && y >= rdata[i + 1].split('|')[1]) {
                if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) x1 = rdata[i].split('|')[0];
                else x1 = (rdata[i].split('|')[1] - y) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]) 

+ parseFloat(rdata[i].split('|')[0]);
                x1 = x1 / TotalL * width;
                break;
            }
            else if (i == rdata.length - 2 && y < rdata[rdata.length - 1].split('|')[1]) {
                x1 = width;
                break;
            }
        }
        ctx.moveTo(LeftD + x, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
        //ctx.moveTo(LeftD + x, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
        ctx.lineTo(cdata[0].split('|')[0] > 0.08 * TotalL ? LeftD + (cdata[0].split('|')[0] - 0.08 * TotalL) / TotalL * width : LeftD + x, TopD + (cdata[0].split('|')

[1] - y) / TotalH * height * 6 / 7);
        ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * 

width : LeftD + x1, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * 

width : LeftD + x1, TopD + (cdata[0].split('|')[1] - y) / TotalH * height * 6 / 7);
        ctx.lineTo(LeftD + x1, TopD + (cdata[0].split('|')[1] - y) / TotalH * height);
        ctx.stroke();

        for (var i = 0; i < parseInt(width / 30); i++) {
            ctx.moveTo(LeftD + i * 30, TopD + height * 11 / 12);
            ctx.lineTo(LeftD + i * 30 + 20, TopD + height * 11 / 12);
            ctx.stroke();
        }
    }

    ctx.strokeStyle = "rgb(200,200,200)";
    ctx.moveTo(LeftD + cdata[0].split('|')[0] / TotalL / 2 * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.15 * height);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD);
    ctx.stroke();
    ctx.strokeStyle = "rgb(200,200,200)";
    ctx.moveTo(LeftD + (cdata[0].split('|')[0] / TotalL + 1) / 2 * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.15 * height);
    ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width + 12, TopD);
    ctx.stroke();

    //测压管
    ctx.strokeStyle = "rgb(150,150,150)";
    ctx.lineWidth = 2;
    ctx.fillStyle = "rgb(255,255,255)";
    for (var i = 0; i < peg.length; i++) {
        ctx.beginPath();

        ctx.moveTo(LeftD + peg[i].split('|')[0] / TotalL * width - 2, TopD + (cdata[0].split('|')[1] - peg[i].split('|')[1]) / TotalH * height - 2);
        ctx.lineTo(LeftD + peg[i].split('|')[0] / TotalL * width + 2, TopD + (cdata[0].split('|')[1] - peg[i].split('|')[1]) / TotalH * height - 2);
        ctx.lineTo(LeftD + peg[i].split('|')[0] / TotalL * width + 2, TopD + (cdata[0].split('|')[1] - peg[i].split('|')[2]) / TotalH * height - 2);
        ctx.lineTo(LeftD + peg[i].split('|')[0] / TotalL * width - 2, TopD + (cdata[0].split('|')[1] - peg[i].split('|')[2]) / TotalH * height - 2);

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    //坝轴线
    ctx.fillStyle = "rgb(200,200,200)";
    ctx.lineWidth = 1;
    for (var i = 0; i < ((cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + height * 0.08 / 1.2) / 20; i++) {
        ctx.moveTo(LeftD + CenterL / TotalL * width, TopD + i * 20);
        ctx.lineTo(LeftD + CenterL / TotalL * width, TopD + i * 20 + 15);
        ctx.stroke();
    }
    TextVertical("坝轴线", LeftD + CenterL / TotalL * width + 1, TopD + 30, "canvas_middle", "rgb(180,180,180)"); //坝轴线标注在第二层

    var c = document.getElementById("canvas_bottom");
    ctx = c.getContext("2d"); //回到最底层画布
    //设置字体样式
    ctx.font = "12px 宋体";
    //设置字体颜色
    ctx.strokeStyle = "black";

    //画刻度
    if (!isNaN(ldata[0].split('|')[1]) && !isNaN(damel)) {
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.clearRect(0, 0, LeftD, height);
        var s = parseInt(ldata[0].split('|')[1]);
        //刻度中轴
        ctx.strokeStyle = "#000";
        ctx.moveTo(30, TopD + (cdata[0].split('|')[1] - s) / TotalH * height);
        ctx.lineTo(30, TopD + (cdata[0].split('|')[1] - parseInt(cdata[0].split('|')[1]) - 1) / TotalH * height);
        ctx.stroke();

        for (var j = s; j <= parseInt(damel) + 1; j++) {
            if (j % 5 == 0) {
                ctx.beginPath();
                ctx.moveTo(25, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.lineTo(35, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.stroke();
                //刻度标注
                ctx.strokeText(j, (TextLength("", j.toString()) > 10) ? 0 : 5, TopD + (cdata[0].split('|')[1] - j) / TotalH * height + 5);
            }
            else if (j == s || j == parseInt(damel) + 1) {
                ctx.beginPath();
                ctx.moveTo(27, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.lineTo(33, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.stroke();
                //刻度标注
                ctx.strokeText(j, (TextLength("", j.toString()) > 10) ? 0 : 5, TopD + (cdata[0].split('|')[1] - j) / TotalH * height + 5);
            }
            else if (j % 1 == 0) {
                ctx.beginPath();
                ctx.moveTo(27, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.lineTo(33, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.stroke();
            }
        }
        ctx.strokeText("单位（m）", 37, TopD + (cdata[0].split('|')[1] - parseInt(damel) - 1) / TotalH * height);
    }

    //堆石棱体
    if (lstone == 1)
        drawStone("left");
    if (rstone == 1)
        drawStone("right");
}

function drawBatholith() {
    var c = document.getElementById("canvas_top");
    ctx = c.getContext("2d");

    //死水位在坝上则绘制基岩，在坝下则不绘制
    if (!isNaN(ddz) && parseFloat(ldata[0].split('|')[1]) < ddz) {
        //粘土 或者 岩基
        var img = new Image();
        img.src = "Image/clay.png";
        img.onload = function() {
            var c = document.getElementById("canvas_top");
            ctx = c.getContext("2d");
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;
            ctx.strokeStyle = "gray";
            ctx.beginPath();
            ctx.moveTo(LeftD, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
            ctx.lineTo(cdata[0].split('|')[0] > 0.08 * TotalL ? LeftD + (cdata[0].split('|')[0] - 0.08 * TotalL) / TotalL * width : LeftD, TopD + (cdata[0].split('|')

[1] - ldata[0].split('|')[1]) / TotalH * height);
            ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
            ctx.lineTo(cdata[0].split('|')[0] < 0.96 * TotalL ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width : LeftD + width, TopD + 

(cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
            ctx.lineTo(cdata[0].split('|')[0] < 0.91 * TotalL ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width : LeftD + width, TopD + 

(cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);

            if (ldata[0].split('|')[1] > rdata[rdata.length - 1].split('|')[1]) {
                var X0;
                var i = 0;
                for (; i < rdata.length - 1; i++) {
                    if (ldata[0].split('|')[1] <= rdata[i].split('|')[1] && ldata[0].split('|')[1] >= rdata[i + 1].split('|')[1]) {
                        if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) X0 = rdata[i].split('|')[0];
                        else X0 = (rdata[i].split('|')[1] - ldata[0].split('|')[1]) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')

[0] - rdata[i].split('|')[0]) + parseFloat(rdata[i].split('|')[0]);
                        ctx.lineTo(LeftD + X0 / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
                    } else if (ldata[0].split('|')[1] > rdata[i].split('|')[1]) {
                        ctx.lineTo(LeftD + rdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - rdata[i].split('|')[1]) / TotalH * height);
                    }
                    if (i == rdata.length - 2) {
                        ctx.lineTo(LeftD + rdata[rdata.length - 1].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - rdata[rdata.length - 1].split('|')

[1]) / TotalH * height);
                    }
                }
            } else ctx.lineTo(LeftD + width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);

            ctx.lineTo(LeftD + width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.2 * height);
            ctx.lineTo(LeftD, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.2 * height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        //是否绘制淤泥
        if (isDrawMud) {
          var X0 = 0;
          ctx.beginPath();
          ctx.moveTo(LeftD , TopD + (cdata[0].split('|')[1] - ddz) / TotalH * height);
          for (var i = 0; i < ldata.length - 1; i++) {
            if (ddz >= ldata[i].split('|')[1] && ddz <= ldata[i + 1].split('|')[1]) {
                var X0 = 0;
                if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) X0 = ldata[i].split('|')[0];
                else X0 = (ddz - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) * (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]) + 
    
    parseFloat(ldata[i].split('|')[0]);
                ctx.lineTo(LeftD + ldata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[i].split('|')[1]) / TotalH * height);
                ctx.lineTo(LeftD + X0 / TotalL * width, TopD + (cdata[0].split('|')[1] - ddz) / TotalH * height);
                break;
            }
            else if (ddz >= ldata[i].split('|')[1])
              ctx.lineTo(LeftD + ldata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[i].split('|')[1]) / TotalH * height);
          }
          ctx.lineTo(LeftD , TopD + (cdata[0].split('|')[1] - ddz) / TotalH * height);
          ctx.closePath();
          ctx.fillStyle = '#BA9449';//'#8c4800'
          ctx.fill();
        }
    }

    var c = document.getElementById("canvas_top");
    ctx = c.getContext("2d");

    //坝顶高程-标注
    if (!isNaN(damel)) {
      //var w = LeftD + cdata[0].split('|')[0] / TotalL * width + 12;
      //DrawText(w + 5, TopD, "坝顶高程：", damel);
      DrawText(LeftD + CenterL / TotalL * width - TextLength("坝顶高程：", damel) / 2, TopD - 10 - 3 - 6, "坝顶高程：", damel);
  }

    //当前水位（实时水位）-标注
    if (!isNaN(z)) DrawText(LeftD, null, "当前水位：", z);

    //当前库容（当前库容）-标注
    if (!isNaN(kr)) DrawText(LeftD + width - 150, TopD + (cdata[0].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) / TotalH * height - 22, "当前库容：", kr);
    //总库容 -标注
    if (!isNaN(ttcp)) DrawText(LeftD + width - 138, TopD + (cdata[0].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) / TotalH * height - 5, "总库容：", ttcp);

    //汛限水位-标注
    if (!isNaN(xxsw)) DrawText(LeftD + TextRightX(xxsw) - 15 - TextLength("汛限水位：", xxsw), null, "正常蓄水位：", xxsw);
    //死水位-标注
    if (!isNaN(ddz)) DrawText(LeftD, null, "死水位：", ddz);

    var start = null;
    //校核、设计洪水位比较取得起始位置
    if (!isNaN(ckflz) && !isNaN(dsflz)) {
      //        start = TextRightX(ckflz) + 25 - TextLength("校核洪水位：", ckflz) + LeftD;
      //        var d = TextRightX(dsflz) + 25 - TextLength("设计洪水位：", dsflz) + LeftD;
      //        if (start > d)
      //            start = d;
      //        if (start < LeftD)
      //            start = LeftD;

      start = TextLeftX(ckflz) + LeftD;
      var d = TextLeftX(dsflz) + LeftD;
      if (start < d)
          start = d;
    }

    //校核洪水位
    //if (!isNaN(ckflz)) DrawText(start ? start : (TextRightX(ckflz) + 25 - TextLength("校核洪水位：", ckflz)), null, "校核洪水位：", ckflz);
    if (!isNaN(ckflz)) DrawText(start ? start : TextLeftX(ckflz) + LeftD, null, "校核洪水位：", ckflz);
    //设计洪水位
    //if (!isNaN(dsflz)) DrawText(start ? start : (TextRightX(dsflz) + 25 - TextLength("设计洪水位：", dsflz)), null, "设计洪水位：", dsflz);
    if (!isNaN(dsflz)) DrawText(start ? start : TextLeftX(dsflz) + LeftD, null, "设计洪水位：", dsflz);

    //测压管管内水位
    if (peg.length > 0)
      for (var i = 0; i < peg.length; i++)
      DrawText(LeftD + peg[i].split('|')[0] / TotalL * width, null, "[" + peg[i].split('|')[4] + "]", parseFloat(peg[i].split('|')[5]).toFixed(3));

}

//水位线
function drawWater() {
    var c = document.getElementById("canvas_middle");
    ctx = c.getContext("2d");

    var linear = ctx.createLinearGradient(0, 0, 0, height);
    var l = 0.4, l2 = 0.3;
    linear.addColorStop(0, "rgba(135, 206, 255,0.7)");
    linear.addColorStop(l, "rgba(135, 206, 255,0.7)");
    linear.addColorStop(l + l2, "rgba(99, 184, 255,0.7)");
    linear.addColorStop(1, "rgba(30, 144, 255,0.7)");
    ctx.fillStyle = linear;
    var X0 = 0, scale = 0, xy = new Array();
    //当前水位
    ctx.beginPath();
    ctx.moveTo(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height);
    for (var i = 0; i < ldata.length - 1; i++) {
        if (z >= ldata[i].split('|')[1] && z <= ldata[i + 1].split('|')[1]) {
            if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) X0 = ldata[i].split('|')[0];
            else X0 = (z - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) * (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]) + 

parseFloat(ldata[i].split('|')[0]);
            break;
        }
    }
    ctx.lineTo(LeftD + X0 / TotalL * width, TopD + (cdata[0].split('|')[1] - z) / TotalH * height);
    xy.push(X0 + "|" + z);

    //管内水位
    for (var i = 0; i < peg.length; i++) {
        if (peg[i].split('|')[0] > parseFloat(cdata[0].split('|')[0]) && ((i > 0 && peg[i - 1].split('|')[0] < parseFloat(cdata[0].split('|')[0])) || (i == 0))) {
            var y0 = fz;
            //            if (isNaN(y0)) {
            //                y0 = ddz - (ddz - ldata[0].split('|')[1]) / 2;
            //                if (peg[i].split('|')[5] < y0 || peg[i - 1].split('|')[5] < y0) {
            //                    var min = peg[i].split('|')[5];
            //                    if (min > peg[i - 1].split('|')[5])
            //                        min = peg[i - 1].split('|')[5];
            //                    y0 = min - 2;
            //                }
            //            }
            if (!isNaN(y0))
                xy.push((parseFloat(cdata[0].split('|')[0]) + 6 / width * TotalL) + "|" + y0);
        }
        xy.push(peg[i].split('|')[0] + "|" + peg[i].split('|')[5]);
    }

    var x = 1, y = 0, x1 = 1, y1 = 0;
    for (var i = 1; i < xy.length; i++) {
        x1 = parseFloat(xy[i].split('|')[0]);
        y1 = parseFloat(xy[i].split('|')[1]);
        if (xy[i - 1].split('|')[1] > y1) {
            if ((i - 1 == 0) || (i - 1 > 0 && xy[i - 2].split('|')[1] < xy[i - 1].split('|')[1])) {
                x = (x1 - xy[i - 1].split('|')[0]) / 3 * 2 + parseFloat(xy[i - 1].split('|')[0]);
                y = xy[i - 1].split('|')[1];
            }
            else {
                x = (parseFloat(xy[i - 1].split('|')[0]) + x1) / 2;
                y = parseFloat(xy[i - 1].split('|')[1]) + (x - xy[i - 1].split('|')[0]) * scale;
                if (y < y1) {
                    y = parseFloat(xy[i - 1].split('|')[1]) - (parseFloat(xy[i - 1].split('|')[1]) - y1) / 3;
                    x = parseFloat(xy[i - 1].split('|')[0]) + (y - xy[i - 1].split('|')[1]) / scale;
                }
            }
        }
        else {
            if ((i - 1 == 0) || (i - 1 > 0 && xy[i - 2].split('|')[1] > xy[i - 1].split('|')[1])) {
                x = (x1 - xy[i - 1].split('|')[0]) / 5 + parseFloat(xy[i - 1].split('|')[0]);
                y = (y1 - xy[i - 1].split('|')[1]) / 5 * 4 + parseFloat(xy[i - 1].split('|')[1]);
                if (i == 1 && peg[0].split('|')[0] < CenterL) {
                    //防止水位线超出大坝（溢出）
                    for (var j = 0; j < ldata.length - 1; j++)
                        if ((ldata[j].split('|')[0] <= x) && (ldata[j + 1].split('|')[0] >= x)) {
                        if (ldata[j].split('|')[0] == ldata[j + 1].split('|')[0] && y > ldata[j].split('|')[1])
                            y = ldata[j].split('|')[1];
                        else {
                            var scale = (ldata[j + 1].split('|')[1] - ldata[j].split('|')[1]) / (ldata[j + 1].split('|')[0] - ldata[j].split('|')[0]);
                            var yy = parseFloat(ldata[j].split('|')[1]) + (x - ldata[j].split('|')[0]) * scale;
                            if (yy < y)
                                y = yy;
                        }
                    }
                }
            }
            else {
                y = y1 - (y1 - parseFloat(xy[i - 1].split('|')[1])) / 3;
                x = parseFloat(xy[i - 1].split('|')[0]) + (y - xy[i - 1].split('|')[1]) / scale;
                if (x > x1) {
                    x = (parseFloat(xy[i - 1].split('|')[0]) + x1) / 2;
                    y = parseFloat(xy[i - 1].split('|')[1]) + (x - xy[i - 1].split('|')[0]) * scale;
                }
            }
        }
        scale = (y1 - y) / (x1 - x);
        ctx.quadraticCurveTo(LeftD + x / TotalL * width, TopD + (cdata[0].split('|')[1] - y) / TotalH * height, LeftD + x1 / TotalL * width, TopD + (cdata[0].split

('|')[1] - y1) / TotalH * height);
    }

    //水位线最后一段
    x = parseFloat(xy[xy.length - 1].split('|')[0]) + (TotalL - xy[xy.length - 1].split('|')[0]) / 3 * 2;
    y = xy[xy.length - 1].split('|')[1];
    x1 = TotalL;
    y1 = rdata[rdata.length - 1].split('|')[1];
    if (scale < 0 && xy[xy.length - 2].split('|')[1] > xy[xy.length - 1].split('|')[1]) {
        y = xy[xy.length - 1].split('|')[1] - Math.abs(xy[xy.length - 1].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) / 3;
        x = parseFloat(xy[xy.length - 1].split('|')[0]) + (y - xy[xy.length - 1].split('|')[1]) / scale;
        if (x > TotalL) {
            x = parseFloat(xy[xy.length - 1].split('|')[0]) + (TotalL - xy[xy.length - 1].split('|')[0]) / 3;
            y = parseFloat(xy[xy.length - 1].split('|')[1]) + (x - xy[xy.length - 1].split('|')[0]) * scale;
        }
    }
    for (var i = 0; i < rdata.length - 1; i++)
        if ((rdata[i].split('|')[0] <= x) && (rdata[i + 1].split('|')[0] >= x)) {
        if (rdata[i].split('|')[0] == rdata[i + 1].split('|')[0] && y > rdata[i].split('|')[1])
            y = rdata[i].split('|')[1];
        else {
            var scale = (rdata[i + 1].split('|')[1] - rdata[i].split('|')[1]) / (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]);
            var yy = parseFloat(rdata[i].split('|')[1]) + (x - rdata[i].split('|')[0]) * scale;
            if (yy < y)
                y = yy;
        }
    }
    ctx.quadraticCurveTo(LeftD + x / TotalL * width, TopD + (cdata[0].split('|')[1] - y) / TotalH * height, LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] 

- y1) / TotalH * height);

    ctx.lineTo(LeftD + width, TopD + height);
    ctx.lineTo(LeftD, TopD + height);
    ctx.closePath();
    ctx.fill();
}

//水位文本绘制
function DrawText(LineLX, LineLY, Text, value) {
    var h = -5;
    if (Text != "当前库容：" && Text != "总库容：") {
        ctx.beginPath();
        if (LineLY == null) LineLY = TopD + (cdata[0].split('|')[1] - value) / TotalH * height;
        if (LineLX != null) {
            if (label.length > 0) for (var i = 0; i < label.length; i++) {
                if ((LineLX >= label[i].split('|')[0]) && (LineLX <= label[i].split('|')[1]) && (LineLY >= label[i].split('|')[2]) && (LineLY <= label[i].split('|')[3])) LineLX = parseFloat(label[i].split('|')[1]) + 1;
            }
            ctx.moveTo(LineLX, LineLY);
            if (LineLX == LeftD + TextRightX(value)) LineLX = LeftD + TextRightX(parseFloat(value) + 17 / height * TotalH);
            if (Text[0] == "[") LineLX = LineLX + 3;
            var xx = 0;
            for (var i = 0; i < label.length; i++) {
                if ((LineLX >= label[i].split('|')[0]) && (LineLX <= label[i].split('|')[1]) && (((LineLY >= label[i].split('|')[3]) && (LineLY <= parseFloat(label[i].split('|')[3]) + 17) && (h < 0)) || ((LineLY >= parseFloat(label[i].split('|')[2]) - 17) && (LineLY <= parseFloat(label[i].split('|')[2])) && (h > 0)))) {
                    if (h < 0) {
                        xx = parseFloat(label[i].split('|')[1]);
                        h = 15;
                    } else {
                        if (xx < label[i].split('|')[1]) h = -5;
                        else xx = parseFloat(label[i].split('|')[1]);
                        LineLX = xx;
                    }
                }
            }
            LineRX = LineLX + TextLength(Text, value.toString()) + 15;
            if (Text != "当前水位：" && Text != "坝顶高程：") ctx.lineTo(LineRX, LineLY);
            ctx.stroke();

            ctx.beginPath();
            if (Text == "坝顶高程：") {
                ctx.moveTo(LineLX + (TextLength(Text, value) - 10) / 2, LineLY + 3);
                ctx.lineTo(LineLX + (TextLength(Text, value) - 10) / 2 + 10, LineLY + 3);
                ctx.lineTo(LineLX + (TextLength(Text, value) - 10) / 2 + 5, LineLY + 13);
            }
            else {
                ctx.moveTo(LineLX, LineLY - 5 + h);
                ctx.lineTo(LineLX + 10, LineLY - 5 + h);
                ctx.lineTo(LineLX + 5, LineLY);
            }
            ctx.closePath();
            ctx.stroke();
        }
    }
    if (Text === "坝顶高程：")
    //ctx.strokeText(Text + value + "", LineLX, LineLY - 15);
        ctx.strokeText(Text + value + "", LineLX, LineLY);
    else if (Text === "当前库容：" || Text === "总库容：")
        ctx.strokeText(Text + value + "(万m³)", LineLX, LineLY);
    else {
        ctx.strokeText(Text + value + "", LineLX + 15, LineLY + h);
    }

    //记录文本所占位置【左X|右X|下Y|上Y】，后续文本避开这些空间
    if (h < 0) label.push(LineLX + "|" + LineRX + "|" + (LineLY - 17) + "|" + LineLY);
    else label.push(LineLX + "|" + LineRX + "|" + LineLY + "|" + (LineLY + 17));

}
//文本竖向展示
function TextVertical(str, x, y, canvasDiv, color) {
    var c = document.getElementById(canvasDiv);
    ctx = c.getContext("2d");
    ctx.strokeStyle = color;
    for (var i = 0; i < str.length; i++) {
        ctx.strokeText(str[i], x, y + i * 17);
    }
}

//文本长度计算
function TextLength(str1, str2) {
    if (str1[str1.length - 1] == "：") return str1.length * 15 + str2.length * 5;
    else return (str1.length + str2.length) * 6 + 5;
}

//迎风坡上水位的X轴
function TextRightX(Y) {
    for (var i = 0; i < ldata.length - 1; i++) {
        if (ldata[i].split('|')[1] <= Y && ldata[i + 1].split('|')[1] >= Y) {
            if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) return ldata[i].split('|')[0];
            else return ((Y - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) * (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]) + 

parseFloat(ldata[i].split('|')[0])) / TotalL * width;
        }
    }
}
//背水坡上水位的X轴
function TextLeftX(Y) {
  for (var i = 0; i < rdata.length - 1; i++) {
      if (rdata[i].split('|')[1] >= Y && rdata[i + 1].split('|')[1] <= Y) {
          if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) return rdata[i].split('|')[0];
          else return ((rdata[i].split('|')[1] - Y) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]) + parseFloat(rdata[i].split('|')[0])) / TotalL * width;
      }
  }
}

//绘制堆石棱体
function drawStone(stone) {
    var st = [];
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.fillStyle = "rgb(200,200,200)";
    if (stone == "right") {
        //默认长度参数
        var l = 0.25 * TotalL;
        var xx = 0.85 * TotalL, yy = rdata[rdata.length - 1].split('|')[1];
        if ( peg.length>0 && xx - l * 2 / 5 < peg[peg.length - 1].split('|')[0]) {
            l = TotalL - peg[peg.length - 1].split('|')[0];
            xx = TotalL - l * 3 / 5;
        }
        for (var i = 0; i < rdata.length - 1; i++)
            if ((rdata[i].split('|')[0] <= xx) && (rdata[i + 1].split('|')[0] >= xx)) {
            if (rdata[i].split('|')[0] == rdata[i + 1].split('|')[0]) yy = rdata[i].split('|')[1];
            else {
                var scale = (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) / (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]);
                yy = rdata[i].split('|')[1] - (xx - rdata[i].split('|')[0]) * scale;
            }
        }
        //堆石棱体有长度参数
        if (rstonedata.split('|')[0] != null && rstonedata.split('|')[0] != "")
            l = parseFloat(rstonedata.split('|')[0]);
        //堆石棱体有高度参数
        if (rstonedata.split('|')[1] != null && rstonedata.split('|')[1] != "") {
            yy = rstonedata.split('|')[1];
            for (var i = 0; i < rdata.length - 1; i++)
                if ((rdata[i].split('|')[1] >= yy) && (rdata[i + 1].split('|')[1] <= yy)) {
                if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) xx = rdata[i + 1].split('|')[0];
                else {
                    var scale = (rdata[i + 1].split('|')[1] - rdata[i].split('|')[1]) / (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]);
                    xx = parseFloat(rdata[i].split('|')[0]) + (yy - rdata[i].split('|')[1]) * scale;
                }
            }
        }
        st.push(xx + "|" + yy);
        st.push((xx + l / 7) + "|" + yy);
        st.push(TotalL + "|" + rdata[rdata.length - 1].split('|')[1]);
        st.push((TotalL - l) + "|" + rdata[rdata.length - 1].split('|')[1]);
        ctx.clearRect(LeftD + xx / TotalL * width, TopD + (cdata[0].split('|')[1] - yy) / TotalH * height, (TotalL - xx) / TotalL * width, (yy - rdata[rdata.length - 

1].split('|')[1]) / TotalH * height);
    }
    else {
        var l = 0.15 * TotalL;
        var xx = 0.1 * TotalL, yy = ldata[0].split('|')[1];
        if ( peg.length>0 && xx + l / 3 > peg[0].split('|')[0]) {
            l = peg[0].split('|')[0];
            xx = l * 2 / 3;
        }
        if (xx + l / 3 > cdata[0].split('|')[0] - 0.08 * TotalL) {
            l = (cdata[0].split('|')[0] - 0.08 * TotalL > 0) ? (cdata[0].split('|')[0] - 0.08 * TotalL) : 0;
            xx = l * 2 / 3;
        }
        for (var i = 0; i < ldata.length - 1; i++)
            if ((ldata[i].split('|')[0] <= xx) && (ldata[i + 1].split('|')[0] >= xx)) {
            if (ldata[i].split('|')[0] == ldata[i + 1].split('|')[0])
                yy = ldata[i].split('|')[1];
            else {
                var scale = (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]);
                yy = parseFloat(ldata[i].split('|')[1]) + (xx - ldata[i].split('|')[0]) * scale;
            }
        }
        //堆石棱体有长度参数
        if (lstonedata.split('|')[0] != null && lstonedata.split('|')[0] != "")
            l = parseFloat(lstonedata.split('|')[0]);
        //堆石棱体有高度参数
        if (lstonedata.split('|')[1] != null && lstonedata.split('|')[1] != "") {
            yy = lstonedata.split('|')[1];
            for (var i = 0; i < ldata.length - 1; i++)
                if ((ldata[i].split('|')[1] <= yy) && (ldata[i + 1].split('|')[1] >= yy)) {
                if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) xx = rdata[i].split('|')[0];
                else {
                    var scale = (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]);
                    xx = parseFloat(ldata[i].split('|')[0]) + (yy - ldata[i].split('|')[1]) * scale;
                }
            }
        }
        st.push((xx - l / 7) + "|" + yy);
        st.push(xx + "|" + yy);
        st.push(l + "|" + ldata[0].split('|')[1]);
        st.push("0|" + ldata[0].split('|')[1]);
        ctx.clearRect(LeftD, TopD + (cdata[0].split('|')[1] - yy) / TotalH * height, l - xx, (yy - ldata[0].split('|')[1]) / TotalH * height);
    }
    ctx.beginPath();
    ctx.moveTo(LeftD + st[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - st[0].split('|')[1]) / TotalH * height);
    for (var i = 1; i < st.length; i++)
        ctx.lineTo(LeftD + st[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - st[i].split('|')[1]) / TotalH * height);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "rgb(250,250,250)";
    if ((st[0].split('|')[1] - st[st.length - 1].split('|')[1]) / TotalH * height > 10 && (st[1].split('|')[0] - st[0].split('|')[0]) / TotalL * width > 10) {
        ctx.beginPath();
        ctx.moveTo(LeftD + st[0].split('|')[0] / TotalL * width + 5, TopD + (cdata[0].split('|')[1] - st[0].split('|')[1]) / TotalH * height + 5);
        ctx.lineTo(LeftD + st[1].split('|')[0] / TotalL * width - 5, TopD + (cdata[0].split('|')[1] - st[0].split('|')[1]) / TotalH * height + 5);
        var scale1 = (st[1].split('|')[1] - st[2].split('|')[1]) / (st[2].split('|')[0] - st[1].split('|')[0]);
        var scale2 = (st[0].split('|')[1] - st[3].split('|')[1]) / (st[0].split('|')[0] - st[3].split('|')[0]);
        if (scale1 <= 1) {
            ctx.lineTo(LeftD + st[1].split('|')[0] / TotalL * width - 5 + (st[1].split('|')[1] - st[2].split('|')[1] - 10 / height * TotalH) / scale1 / TotalL * width, 

TopD + (cdata[0].split('|')[1] - st[2].split('|')[1]) / TotalH * height - 5);
        } else {
            ctx.lineTo(LeftD + st[2].split('|')[0] / TotalL * width - 5, TopD + (cdata[0].split('|')[1] - st[2].split('|')[1]) / TotalH * height - 5);
        }
        if (scale2 <= 1) {
            ctx.lineTo(LeftD + st[0].split('|')[0] / TotalL * width + 5 - (st[0].split('|')[1] - st[3].split('|')[1] - 10 / height * TotalH) / scale2 / TotalL * width, 

TopD + (cdata[0].split('|')[1] - st[3].split('|')[1]) / TotalH * height - 5);
        } else {
            ctx.lineTo(LeftD + st[3].split('|')[0] / TotalL * width + 5, TopD + (cdata[0].split('|')[1] - st[3].split('|')[1]) / TotalH * height - 5);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = "rgb(150,150,150)";
        ctx.strokeText("堆石棱体", LeftD + (parseFloat(st[0].split('|')[0]) + parseFloat(st[1].split('|')[0])) / 2 / TotalL * width - 2 * 11, TopD + (cdata[0].split

('|')[1] - (parseFloat(st[0].split('|')[1]) + parseFloat(st[3].split('|')[1])) / 2) / TotalH * height + 2);

    }
}
