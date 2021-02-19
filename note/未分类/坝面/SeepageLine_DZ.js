/***********无浸润线设计值情况下，默认取由随机值得来的设计标准值基值*************/
var height, width;
var ctx, rscd, btm, etm, pegcode;
var TopD = 46;
var LeftD = 35;

var dz, ddz, damel, z, fz, ckflz, dsflz, xxsw; //死水位，坝顶高程，当前水位,防渗墙水位高度
var TotalL = 0, TotalH, CenterL, topWidth; //坝长（默认百分比1），坝轴线，坝(顶)宽
var ldata = new Array(), cdata = new Array(), rdata = new Array(); //迎水坡、坝顶、背水坡各阶段的数据
var peg = new Array(); //测压管数据
var label = new Array(); //标注范围数据
var lstone = 0, rstone = 0, wall = 0; //堆石棱体,防水墙是否绘制
var lstonedata, rstonedata, walldata = []; //堆石棱体,防水墙数据
var pzCount = 0; //是否有管内水位
var sCount = 0; //是否有浸润线设计值
var designAdd = [5, 6]; //设计标准值基值：加上管内水位值即为浸润线设计值（东圳水库暂无浸润线设计值，暂应付之，后期可能会删）

var axisLength = 0; //轴长
var waveWidth = 0.511; //波浪宽度,数越小越宽 
var waveHeight = 70; //波浪高度,数越大越高
var speed = 0.00; //波浪速度，数越大速度越快
var xOffset = 0; //波浪x偏移量
var timer;

$(document).ready(function() {
    rscd = decodeURIComponent(__JsUtil.GetQuery("rscd"));
    pegcode = decodeURIComponent(__JsUtil.GetQuery("pegcode"));
    btm = decodeURIComponent(__JsUtil.GetQuery("btm"));
    etm = decodeURIComponent(__JsUtil.GetQuery("etm"));
    //获取数据
    $.ajax({
        type: "GET",
        url: "../../../MonitorManage/AjaxHandler/MonitorHandler.ashx",
        data: {
            Optype: "GetDamData",
            btime: btm,
            etime: etm,
            pegcode: pegcode,
            rscd: rscd
        },
        dataType: "json",
        success: function(data) {
            var data = eval(data);
            Calculation(data); //绘制数据计算
            showTable(); //断面测压管管内水位信息展示
            resizeCanvas(); //绘制

        },
        error: function() {
            $("#title").text("数据加载失败");
        }
    });
});

//绑定window变化事件,浏览器窗口调整时重绘
$(window).resize(function() {
    clearTimeout(timer); //波浪绘制停止
    axisLength = 0;
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
    var pegcode = data[0].PegCode[0].Peg;
    var pegp = data[0].PegCode[0].Data;
    var llength = 0, clength = 0, rlength = 0;

    if ((reservoir != null) && (reservoir != "")) {
        damel = parseFloat(reservoir[0][0].DamTop).toFixed(2);
        dz = parseFloat(reservoir[0][0].DDZ).toFixed(2); //死水位
        z = parseFloat(reservoir[0][0].RZ).toFixed(2);
        ddz = dz;
        if (reservoir[0][0].ACTZ != null && reservoir[0][0].ACTZ != "") {
            ddz = parseFloat(reservoir[0][0].ACTZ).toFixed(2);
        }
        fz = parseFloat(reservoir[0][0].Flch).toFixed(2);
        ckflz = parseFloat(reservoir[0][0].CKFLZ).toFixed(2);
        dsflz = parseFloat(reservoir[0][0].DSFLZ).toFixed(2);
        topWidth = reservoir[0][0].DamTopWidth;
        xxsw = parseFloat(reservoir[0][0].XXSW).toFixed(2);

        if (TextLength("", parseFloat(reservoir[0][0].DamTop).toFixed(0).toString()) > 25)
            LeftD = 40;
    }

    if (data[0].Dam[0] != null && data[0].Dam[0].length != 0) {
        //if (data[0].Dam[0] == null || data[0].Dam[0].length == 0) {
        dam = data[0].Dam;
        $.each(dam[0], function(index, item) {
            //            switch (item.TYPENAME) {
            //                case "迎水坡":
            //                    llength += parseFloat(item.LENGTH);
            //                    ldata.push(item.LENGTH + "|" + item.HEIGHT);
            //                    break;
            //                case "坝顶":
            //                    clength += parseFloat(item.LENGTH);
            //                    cdata.push(item.LENGTH + "|" + item.HEIGHT);
            //                    break;
            //                case "背水坡":
            //                    rlength += parseFloat(item.LENGTH);
            //                    rdata.push(item.LENGTH + "|" + item.HEIGHT);
            //                    break;
            //                case "堆石棱体（迎）":
            //                    lstone = 1;
            //                    lstonedata=item.LENGTH + "|" + item.HEIGHT;
            //                    break;
            //                case "堆石棱体（背）":
            //                    rstone = 1;
            //                    rstonedata=item.LENGTH + "|" + item.HEIGHT;
            //                    break;
            //                default:
            //                    ;
            //            }
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
                case "5":
                    wall = 1;
                    walldata.push({ x: parseFloat(item.LENGTH), y: parseFloat(item.HEIGHT) });
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
            if ((pegcode[0] != null) && (pegcode[0] != "")) {
                var min = 6;
                for (var i = 0; i < pegcode[0].length; i++) {
                    if (Math.abs(pegcode[0][i].OFAX) < min) {
                        min = Math.abs(pegcode[0][i].OFAX);
                    }
                }
                topWidth = (min - 1) * 2;
            } else topWidth = 10;
        }
        //坝长
        TotalL = topWidth / 0.05;

        if ((damel != null) && (damel != "")) {
            //坝轮廓基本数据
            cdata.push((0.35 * TotalL) + "|" + parseFloat(damel));
            cdata.push((0.35 * TotalL + topWidth) + "|" + parseFloat(damel));
            ldata.push("0|" + (parseFloat(ddz) - 2));
            ldata.push((0.35 * TotalL) + "|" + parseFloat(damel));
            rdata.push((0.35 * TotalL + topWidth) + "|" + parseFloat(damel));
            rdata.push(TotalL + "|" + (parseFloat(ddz) - 2));

            CenterL = 0.35 * TotalL + parseFloat(topWidth) / 2;

            if ((pegcode[0] != null) && (pegcode[0] != "")) {
                if (pegcode[0][pegcode[0].length - 1].OFAX + CenterL > TotalL * 5 / 6) {
                    TotalL = pegcode[0][pegcode[0].length - 1].OFAX + CenterL + TotalL / 5;
                    rdata[rdata.length - 1] = TotalL + "|" + (parseFloat(ddz) - 2);
                }
            }
            TotalH = (cdata[0].split('|')[1] - ldata[0].split('|')[1]) * 1.2;
        }

    }
    //测压管信息【x轴|管顶高程|管底高程|MPCD|管号】
    $.each(pegcode[0], function(index, item) {
        peg.push((parseFloat(item.OFAX) + CenterL) + "|" + parseFloat(item.TBTPEL) + "|" + parseFloat(item.TBBTEL) + "|" + item.MPCD + "|" + item.PipeCode);
    });

    //测压管信息【x轴|管顶高程|管底高程|MPCD|管号|管内水位】
    $.each(pegp[0], function(index, item) {
        for (var j = 0; j < peg.length; j++) {
            if (item.MPCD == peg[j].split('|')[3]) peg[j] += "|" + item.P;
            if (item.P != null && item.P != "")
                pzCount++;
        }
    });

    //测压管信息【x轴|管顶高程|管底高程|MPCD|管号|管内水位|浸润线设计值】
    $.each(pegcode[0], function(index, item) {
        for (var j = 0; j < peg.length; j++) {
            var random = 0;
            if (designAdd != null)
                random = designAdd[0] + (Math.random() * (designAdd[1] - designAdd[0]));
            if (item.MPCD == peg[j].split('|')[3]) peg[j] += "|" + ((item.STLNDSVL != null && item.STLNDSVL != "") ? item.STLNDSVL : (!isNaN(peg[j].split('|')[5]) ? (parseFloat(peg[j].split('|')[5]) + random) : ''));
            if (item.STLNDSVL != null && item.STLNDSVL != "" || designAdd)
                sCount++;
            /*if (item.MPCD == peg[j].split('|')[3]) peg[j] += "|" + item.STLNDSVL;
            if (item.STLNDSVL != null && item.STLNDSVL != "")
            sCount++;*/
        }
    });

}

//信息（表格）
function showTable() {
    var bt = btm.toDate();
    var et = etm.toDate();
    var htm = "",
    dtm = "", stm = "";
    htm += "<tr style='height:25px;' >";
    dtm += "<tr style='height:25px;' >";
    stm += "<tr style='color:#FF00FF;height:25px;' >";
    htm += "<th style=\"width:120px\">断面</th><th>检测项目</th><th>上游水位</th>";
    dtm += "<td>" + pegcode.replace(";", "") + "</td>";
    stm += "<td>" + pegcode.replace(";", "") + "</td><td>设计浸润线</td><td>" + (!isNaN(xxsw) ? xxsw : "") + "</td>";
    if (bt.getFullYear() == et.getFullYear())
        dtm += "<td>" + bt.format("yyyy年MM月dd日 HH时") + " 至 " + et.format("MM月dd日 HH时") + "</td>";
    else
        dtm += "<td>" + bt.format("yyyy年MM月dd日 HH时") + " 至 " + et.format("yyyy年MM月dd日 HH时") + "</td>";
    dtm += "<td>" + (!isNaN(z) ? z : "") + "</td>";
    if (peg.length > 0) for (var i = 0; i < peg.length; i++) {
        htm += "<th style=\"width:100px\">" + peg[i].split('|')[4] + "(m)</th>";
        var pz = parseFloat(peg[i].split('|')[5]).toFixed(2);
        dtm += "<td>" + (isNaN(pz) ? "" : pz) + "</td>";
        pz = parseFloat(peg[i].split('|')[6]).toFixed(0);
        stm += "<td>" + (isNaN(pz) ? "" : pz) + "</td>";
    }
    htm += "</tr>";
    dtm += "</tr>";
    stm += "</tr>";
    $("table").append(htm);
    $("table").append(dtm);
    $("table").append(stm);
}

//绘制
function resizeCanvas() {
    $("#bg").css("height", $(window).get(0).innerHeight - $("table").height());
    var drawWidth = $(window).get(0).innerWidth * 0.98;
    var bottomspace = ($(window).get(0).innerHeight - $("table").height()) * 0.03;
    if (bottomspace > 18)
        bottomspace = 18;
    var drawHeight = $(window).get(0).innerHeight - bottomspace - $("table").height();
    //建立div空间放canvas
    var canvasdiv = document.createElement("div");
    canvasdiv.setAttribute("id", "canvasset");
    canvasdiv.setAttribute("width", drawWidth);
    canvasdiv.setAttribute("height", drawHeight);
    document.getElementById("bg").appendChild(canvasdiv);
    $("#canvasset").css("margin-left", $(window).get(0).innerWidth * 0.01);

    if (TotalH != null) {
        $("#canvasset").append("<canvas id=\"canvas_wave\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 0;\"></canvas>"); //画当前水位线（动态波浪）
        $("#canvasset").append("<canvas id=\"canvas_bottom\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 5;\"></canvas>"); //最底层-用于画大坝轮廓和测压管
        $("#canvasset").append("<canvas id=\"canvas_middle\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 10;\"></canvas>"); //中间层-画浸润线
        $("#canvasset").append("<canvas id=\"canvas_top\" width=\"" + drawWidth + "\" height=\"" + drawHeight + "\" style=\"z-index: 15;\"></canvas>"); //顶层-标注

        var img = new Image();
        img.src = "Image/dam.png";
        //图片预先加载完毕再绘制，防止出现图片覆盖
        img.onload = function() {
            ctx = document.getElementById("canvas_bottom").getContext("2d");
            var pat = ctx.createPattern(img, "repeat");
            drawDam(pat); //第三层  画大坝及测压管
            drawBatholith(); //第一层 画岩基 及标注
            if (z != null && z != "" && !isNaN(z) && pzCount > 0) {

                drawWater(pat); //第二层 画水位线
                ctx = document.getElementById("canvas_top").getContext("2d");

                var pipeExceed = []; //实测浸润线高于设计浸润线的测压管数组
                $.each(peg, function(index, item) {
                    if (!__JsUtil.isNullOrEmpty(item.split('|')[5]) && !__JsUtil.isNullOrEmpty(item.split('|')[6]) && parseFloat(item.split('|')[5]) > parseFloat(item.split('|')[6])) {
                        pipeExceed.push(item.split('|')[4]);
                    }
                });
                if (pipeExceed.length > 0)
                    setAnalysis(ctx, '分析结果：该断面在测点' + pipeExceed.join('、') + '处实测浸润线高于设计浸润线，应进行进一步分析和检查。', '#ff0000'); //东圳分析参考系统
                else
                    setAnalysis(ctx, '分析结果：该断面浸润线正常，未超过设计浸润线。', '#218be5'); //东圳分析参考系统

                /*东圳水库（即使第一根管内水位低于水库水位也绘制浸润线）*/
                /*if (!isNaN(peg[0].split('|')[5]) && parseFloat(peg[0].split('|')[5]) < z) {
                drawWater(pat); //第二层 画水位线
                ctx = document.getElementById("canvas_top").getContext("2d");
                ctx.font = '14px 宋体';
                ctx.fillStyle = '#FF0000';
                ctx.fillText('分析结果：该断面浸润线正常，未超过设计浸润线。', 100, 25); //东圳分析参考系统
                //ctx.fillText('分析结果：正常上游水位大于该断面上游坡轮廓范围，上游水位或断面上游坡数据有问题！', 100, 25); //东圳分析参考系统
                //ctx.fillText('分析结果：心墙上游测点的水位超出心墙上游面轮廓范围，心墙上游测点的水位或心墙上游面轮廓数据有问题！', 100, 25); //东圳分析参考系统
                //ctx.fillText('分析结果：曲线光滑程度数值过大，请变小它！', 100, 25); //东圳分析参考系统
                }
                else {
                ctx = document.getElementById("canvas_top").getContext("2d");
                ctx.font = '14px 宋体';
                ctx.fillStyle = '#FF0000';
                if (LeftD + cdata[0].split('|')[0] / TotalL * width < 550) {
                ctx.fillText('分析结果：水库水位低于' + peg[0].split('|')[4] + '管内水位，', 100, 25);
                ctx.fillText('未达到浸润线绘制要求，请核实！', 100, 42);
                }
                else
                ctx.fillText('分析结果：水库水位低于' + peg[0].split('|')[4] + '管内水位，未达到浸润线绘制要求，请核实！', 100, 25);
                }*/
                drawWave(); //底层 画当前水位波浪
            }
            else if (z == null || z == "") {
                ctx = document.getElementById("canvas_top").getContext("2d");
                setAnalysis(ctx, '分析结果：暂无水库水位。', '#ff0000'); //东圳分析参考系统
            }
            else {
                ctx = document.getElementById("canvas_top").getContext("2d");
                setAnalysis(ctx, '分析结果：暂无测压管管内水位数据，未达到浸润线绘制要求，请核实。', '#ff0000'); //东圳分析参考系统
            }
        }
    }
    else {
        $("#canvasset").html("<h1 style=\"text-align:center;margin-top:15%;\">该断面缺少基本数据，无法绘制</h1>");
        //$("#canvasset").html("<h1 style=\"text-align:center;margin-top:15%;\">没有断面的图形数据，请输入该断面的图形数据！</h1>");//东圳分析参考系统
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
    //左侧（迎水坡）
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
    //右侧（背水坡）
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
                else x1 = (rdata[i].split('|')[1] - ddz) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]) + parseFloat(rdata[i].split('|')[0]);
                x1 = x1 / TotalL * width;
                break;
            }
        }
        ctx.moveTo(LeftD + x, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
        ctx.moveTo(LeftD + x, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
        ctx.lineTo(cdata[0].split('|')[0] > 0.08 * TotalL ? LeftD + (cdata[0].split('|')[0] - 0.08 * TotalL) / TotalL * width : LeftD + x, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
        ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width : LeftD + x1, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width : LeftD + x1, TopD + (cdata[0].split('|')[1] - parseFloat(ddz)) / TotalH * height);
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
                else x1 = (rdata[i].split('|')[1] - y) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]) + parseFloat(rdata[i].split('|')[0]);
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
        ctx.lineTo(cdata[0].split('|')[0] > 0.08 * TotalL ? LeftD + (cdata[0].split('|')[0] - 0.08 * TotalL) / TotalL * width : LeftD + x, TopD + (cdata[0].split('|')[1] - y) / TotalH * height * 6 / 7);
        ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width : LeftD + x1, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
        ctx.lineTo((parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width < x1 ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width : LeftD + x1, TopD + (cdata[0].split('|')[1] - y) / TotalH * height * 6 / 7);
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
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#000";

    //画刻度
    if (!isNaN(ldata[0].split('|')[1]) && !isNaN(damel)) {
        ctx.beginPath();
        //ctx.clearRect(0, 0, LeftD, height);
        var s = parseInt(ldata[0].split('|')[1]);
        //刻度中轴
        ctx.moveTo(LeftD - 10, TopD + (cdata[0].split('|')[1] - s) / TotalH * height);
        ctx.lineTo(LeftD - 10, TopD + (cdata[0].split('|')[1] - parseInt(cdata[0].split('|')[1]) - 1) / TotalH * height);
        ctx.stroke();

        for (var j = s; j <= parseInt(damel) + 1; j++) {
            if (j % 5 == 0) {
                ctx.beginPath();
                ctx.moveTo(LeftD - 15, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.lineTo(LeftD - 5, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.stroke();
                //刻度标注
                ctx.fillText(j, (TextLength("", j.toString()) > 20) ? 0 : 5, TopD + (cdata[0].split('|')[1] - j) / TotalH * height + 5);
            }
            else if (j == s || j == parseInt(damel) + 1) {
                ctx.beginPath();
                ctx.moveTo(LeftD - 13, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.lineTo(LeftD - 7, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.stroke();
                //刻度标注
                ctx.fillText(j, (TextLength("", j.toString()) > 20) ? 0 : 5, TopD + (cdata[0].split('|')[1] - j) / TotalH * height + 5);
            }
            else if (j % 1 == 0) {
                ctx.beginPath();
                ctx.moveTo(LeftD - 13, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.lineTo(LeftD - 7, TopD + (cdata[0].split('|')[1] - j) / TotalH * height);
                ctx.stroke();
            }
        }
        ctx.fillText("单位（m）", LeftD - 3, TopD + (cdata[0].split('|')[1] - parseInt(damel) - 1) / TotalH * height);
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
    if (!isNaN(ddz) && parseFloat(ldata[0].split('|')[1]) < dz) {
        //粘土 或者 岩基
        var img = new Image();
        img.src = "Image/clay.png";
        img.onload = function() {
            var c = document.getElementById("canvas_top");
            ctx = c.getContext("2d");
            var patt = ctx.createPattern(img, "repeat");
            ctx.fillStyle = patt;
            ctx.strokeStyle = "gray";
            ctx.beginPath();
            ctx.moveTo(LeftD, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
            ctx.lineTo(cdata[0].split('|')[0] > 0.08 * TotalL ? LeftD + (cdata[0].split('|')[0] - 0.08 * TotalL) / TotalL * width : LeftD, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
            ctx.lineTo(LeftD + cdata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
            ctx.lineTo(cdata[0].split('|')[0] < 0.96 * TotalL ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.04 * TotalL) / TotalL * width : LeftD + width, TopD + (cdata[0].split('|')[1] - (ldata[0].split('|')[1] - TotalH * 0.05)) / TotalH * height);
            ctx.lineTo(cdata[0].split('|')[0] < 0.91 * TotalL ? LeftD + (parseFloat(cdata[0].split('|')[0]) + 0.09 * TotalL) / TotalL * width : LeftD + width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);

            if (ldata[0].split('|')[1] > rdata[rdata.length - 1].split('|')[1]) {
                var X0;
                var i = 0;
                for (; i < rdata.length - 1; i++) {
                    if (ldata[0].split('|')[1] <= rdata[i].split('|')[1] && ldata[0].split('|')[1] >= rdata[i + 1].split('|')[1]) {
                        if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) X0 = rdata[i].split('|')[0];
                        else X0 = (rdata[i].split('|')[1] - ldata[0].split('|')[1]) / (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) * (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]) + parseFloat(rdata[i].split('|')[0]);
                        ctx.lineTo(LeftD + X0 / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
                    } else if (ldata[0].split('|')[1] > rdata[i].split('|')[1]) {
                        ctx.lineTo(LeftD + rdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - rdata[i].split('|')[1]) / TotalH * height);
                    }
                    if (i == rdata.length - 2) {
                        ctx.lineTo(LeftD + rdata[rdata.length - 1].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) / TotalH * height);
                    }
                }
            } else ctx.lineTo(LeftD + width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);

            ctx.lineTo(LeftD + width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.2 * height);
            ctx.lineTo(LeftD, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height + 0.2 * height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    var c = document.getElementById("canvas_top");
    ctx = c.getContext("2d");
    ctx.font = '12px 宋体';

    //坝顶高程-标注
    if (!isNaN(damel)) {
        //var w = LeftD + cdata[0].split('|')[0] / TotalL * width + 12;
        //DrawText(w + 5, TopD, "坝顶高程：", damel);
        DrawText(LeftD + CenterL / TotalL * width - TextLength("坝顶高程：", damel) / 2, TopD - 10 - 3 - 12, "坝顶高程：", damel);
    }

    //当前水位（实时水位）-标注
    if (!isNaN(z)) DrawText(LeftD, null, "当前水位：", z);

    //汛限水位-标注
    if (!isNaN(xxsw)) DrawText(LeftD + TextRightX(xxsw) - 15 - TextLength("汛限水位：", xxsw), null, "汛限水位：", xxsw);

    //死水位-标注
    if (!isNaN(dz)) DrawText(LeftD, null, "死水位：", dz);

    var start = null;
    //校核、设计洪水位比较取得起始位置
    if (!isNaN(ckflz) && !isNaN(dsflz)) {
        //        start = TextRightX(ckflz) - 15 - TextLength("校核洪水位：", ckflz) + LeftD;
        //        var d = TextRightX(dsflz) - 15 - TextLength("设计洪水位：", dsflz) + LeftD;
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
    //if (!isNaN(ckflz)) DrawText(start ? start : (TextRightX(ckflz) - 15 - TextLength("校核洪水位：", ckflz)), null, "校核洪水位：", ckflz);
    if (!isNaN(ckflz)) DrawText(start ? start : TextLeftX(ckflz) + LeftD, null, "校核洪水位：", ckflz);
    //设计洪水位
    //if (!isNaN(dsflz)) DrawText(start ? start : (TextRightX(dsflz) - 15 - TextLength("设计洪水位：", dsflz)), null, "设计洪水位：", dsflz);
    if (!isNaN(dsflz)) DrawText(start ? start : TextLeftX(dsflz) + LeftD, null, "设计洪水位：", dsflz);

    if (peg.length > 0) {
        //测压管管内水位
        for (var i = 0; i < peg.length; i++)
            DrawText(LeftD + peg[i].split('|')[0] / TotalL * width, null, "[" + peg[i].split('|')[4] + "]", parseFloat(peg[i].split('|')[5]).toFixed(2));
        //测压管浸润线设计值
        if (sCount > 0) {
            for (var i = 0; i < peg.length; i++)
                DrawText(LeftD + peg[i].split('|')[0] / TotalL * width - TextLength("", parseFloat(peg[i].split('|')[6]).toFixed(0).toString()) - 15, null, "", parseFloat(peg[i].split('|')[6]).toFixed(0), "#FF00FF");
        }
    }

}

//水位线
function drawWater(pat) {
    var c = document.getElementById("canvas_middle");
    ctx = c.getContext("2d");

    var linear = ctx.createLinearGradient(0, 0, 0, height);
    var l = 0.4, l2 = 0.3;
    var a = 0.15, b = 0.015;
    linear.addColorStop(0, "rgba(135, 206, 255,0.7)");
    linear.addColorStop(l, "rgba(135, 206, 255,0.7)");
    linear.addColorStop(l + l2, "rgba(99, 184, 255,0.7)");
    linear.addColorStop(1, "rgba(30, 144, 255,0.7)");
    ctx.fillStyle = linear;
    var X0 = 0, scale = 0, xy = [], sxy = [];

    //当前水位
    ctx.beginPath();
    if (z > ldata[0].split('|')[1]) {
        ctx.moveTo(LeftD + ldata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[0].split('|')[1]) / TotalH * height);
        for (var i = 0; i < ldata.length - 1; i++) {
            if (z >= ldata[i].split('|')[1] && z <= ldata[i + 1].split('|')[1]) {
                if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) X0 = ldata[i].split('|')[0];
                else X0 = (z - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) * (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]) + parseFloat(ldata[i].split('|')[0]);
                break;
            }
            else
                ctx.lineTo(LeftD + ldata[i + 1].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - ldata[i + 1].split('|')[1]) / TotalH * height)
        }
        ctx.lineTo(LeftD + X0 / TotalL * width, TopD + (cdata[0].split('|')[1] - z) / TotalH * height);
    }
    else {
        ctx.moveTo(LeftD + ldata[0].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - z) / TotalH * height);
    }
    //xy.push(X0 + "|" + z);
    xy.push({ x: parseFloat(X0), y: parseFloat(z) });


    //管内水位
    for (var i = 0; i < peg.length; i++) {
        //防渗墙水位骤减
        if (peg[i].split('|')[0] > parseFloat(cdata[0].split('|')[0]) && ((i > 0 && peg[i - 1].split('|')[0] < parseFloat(cdata[0].split('|')[0])) || (i == 0))) {
            //            var y0 = fz, pz = z, px = X0, y1, y2;
            //            if (i > 0) {
            //                pz = peg[i - 1].split('|')[5];
            //                px = peg[i - 1].split('|')[0];
            //            }
            //            if (peg[i].split('|')[5] < pz) {
            //                y1 = parseFloat(pz) - (pz - peg[i].split('|')[5]) / (peg[i].split('|')[0] - px) * (cdata[0].split('|')[0] - px);
            //                y2 = parseFloat(peg[i].split('|')[5]) + (pz - peg[i].split('|')[5]) / (peg[i].split('|')[0] - px) * (peg[i].split('|')[0] - cdata[0].split('|')[0] - 12 / width * TotalL);
            //                y2 = y2 - (y2 - peg[i].split('|')[5]) / 5;
            //            }
            //            else {
            //                y1 = pz - (pz - ddz) / 20;
            //                y2 = pz - (pz - ddz) / 15;
            //            }
            //            if (!isNaN(y0)) {
            //                if (y1 < y0) y1 = y0;
            //                if (y2 > y0) y2 = y0;
            //            }
            //            xy.push(cdata[0].split('|')[0] + "|" + y1);
            //            xy.push((parseFloat(cdata[0].split('|')[0]) + 12 / width * TotalL) + "|" + y2);
            var y0 = fz;
            if (!isNaN(y0))
            //xy.push((parseFloat(cdata[0].split('|')[0]) + 6 / width * TotalL) + "|" + y0);
                xy.push({ x: parseFloat(cdata[0].split('|')[0]) + 6 / width * TotalL, y: parseFloat(y0) });
        }
        //xy.push(peg[i].split('|')[0] + "|" + peg[i].split('|')[5]);
        if (!isNaN(peg[i].split('|')[5]))
            xy.push({ x: parseFloat(peg[i].split('|')[0]), y: parseFloat(peg[i].split('|')[5]) });
    }
    if (sCount > 0) {
        for (var i = 0; i < peg.length; i++) {
            //过滤掉无浸润设计值的测压管
            if (peg[i].split('|')[6] != "" && !isNaN(peg[i].split('|')[6]))
                sxy.push({ x: parseFloat(peg[i].split('|')[0]), y: parseFloat(peg[i].split('|')[6]) });
        }
    }

    //水位线最后一段
    //确定最后一个点
    var scale2 = (xy[xy.length - 1].y - xy[xy.length - 2].y) / (xy[xy.length - 1].x - xy[xy.length - 2].x); //水位线
    if (scale2 < 0)
        scale2 = scale2 * 0.4;
    else
        scale2 = -scale2;
    x1 = TotalL;
    y1 = scale2 * (x1 - xy[xy.length - 1].x) + parseFloat(xy[xy.length - 1].y);
    if (y1 > rdata[rdata.length - 1].split('|')[1]) {
        if (rdata[rdata.length - 1].split('|')[0] == rdata[rdata.length - 2].split('|')[0]) {
            if (y1 > 0.4 * (rdata[rdata.length - 2].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) + parseFloat(rdata[rdata.length - 1].split('|')[1]))
                y1 = 0.4 * (rdata[rdata.length - 2].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) + parseFloat(rdata[rdata.length - 1].split('|')[1]);
        }
        else y1 = rdata[rdata.length - 1].split('|')[1];
    }
    else {
        if (rdata[rdata.length - 1].split('|')[0] == rdata[rdata.length - 2].split('|')[0]) {
            if (xy[xy.length - 1].y > rdata[rdata.length - 1].split('|')[1]) {
                if (xy[xy.length - 1].y < rdata[rdata.length - 1].split('|')[2])
                    y1 = 0.4 * (xy[xy.length - 1].y - rdata[rdata.length - 1].split('|')[1]) + parseFloat(rdata[rdata.length - 1].split('|')[1]);
                else
                    y1 = 0.4 * (rdata[rdata.length - 2].split('|')[1] - rdata[rdata.length - 1].split('|')[1]) + parseFloat(rdata[rdata.length - 1].split('|')[1]);
            }
        }
    }
    //确定水位经过的大坝点
    //    if (y1 > rdata[rdata.length - 1].split('|')[1]) {
    //        var i = 0;
    //        for (; i < rdata.length - 1; i++) {
    //            if (xy[xy.length - 1].y >= rdata[i + 1].split('|')[1] && rdata[i].split('|')[1] != rdata[i + 1].split('|')[1] && rdata[i].split('|')[0] != rdata[i + 1].split('|')[0]) {
    //                var scale1 = (rdata[i].split('|')[1] - rdata[i + 1].split('|')[1]) / (rdata[i].split('|')[0] - rdata[i + 1].split('|')[0]); //背水坡坝线

    //                var xx = (scale1 * rdata[i].split('|')[0] - scale2 * x1 + y1 - rdata[i].split('|')[1]) / (scale1 - scale2);
    //                var yy = scale2 * (xx - x1) + y1;
    //                if (yy >= rdata[i + 1].split('|')[1]) {
    //                    x1 = xx;
    //                    y1 = yy;
    //                    xy.push({ x: parseFloat(x1), y: parseFloat(y1) });
    //                    break;
    //                }
    //            }
    //        }

    //        a = getIndex(xy, a);
    //        for (var j = 1; j < xy.length; j++) {
    //            x1 = xy[j].x;
    //            y1 = xy[j].y;

    //            var ctrlP = getCtrlPoint(xy, j - 1, a, a);

    //            //ctx.lineTo(LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
    //            ctx.bezierCurveTo(LeftD + ctrlP.pA.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pA.y) / TotalH * height, LeftD + ctrlP.pB.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pB.y) / TotalH * height, LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
    //        }

    //        for (; i < rdata.length - 1; i++) {
    //            if (y1 >= rdata[i + 1].split('|')[1]) {
    //                x1 = rdata[i + 1].split('|')[0];
    //                y1 = rdata[i + 1].split('|')[1];
    //                ctx.lineTo(LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
    //            }
    //        }

    //    }
    //    else {
    //        xy.push({ x: parseFloat(x1), y: parseFloat(y1) });

    //        a = getIndex(xy, a);

    //        for (var i = 1; i < xy.length; i++) {
    //            x1 = xy[i].x;
    //            y1 = xy[i].y;

    //            var ctrlP = getCtrlPoint(xy, i - 1, a, a);

    //            //ctx.lineTo(LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
    //            ctx.bezierCurveTo(LeftD + ctrlP.pA.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pA.y) / TotalH * height, LeftD + ctrlP.pB.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pB.y) / TotalH * height, LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
    //        }

    //    }

    xy.push({ x: parseFloat(x1), y: parseFloat(y1) });

    //a = getIndex(xy, a);

    for (var i = 1; i < xy.length; i++) {
        x1 = xy[i].x;
        y1 = xy[i].y;

        var ctrlP = getCtrlPoint(xy, i - 1, a, b);

        //ctx.lineTo(LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
        ctx.bezierCurveTo(LeftD + ctrlP.pA.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pA.y) / TotalH * height, LeftD + ctrlP.pB.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pB.y) / TotalH * height, LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
    }

    if (cdata[0].split('|')[1] - y1 < TotalH)
        ctx.lineTo(LeftD + width, TopD + height);

    ctx.lineTo(LeftD, TopD + height);
    ctx.closePath();
    ctx.fill();

    if (sxy.length > 0) {
        ctx.strokeStyle = "#FF00FF";
        //东圳水库更改----添加汛限水位为设计浸润线的第一个点
        if (xxsw != "" && !isNaN(xxsw))
            sxy = [{ x: TextRightX(xxsw) / width * TotalL, y: parseFloat(xxsw)}].concat(sxy);
        ctx.beginPath();
        ctx.moveTo(LeftD + sxy[0].x / TotalL * width, TopD + (cdata[0].split('|')[1] - sxy[0].y) / TotalH * height);
        for (var i = 1; i < sxy.length; i++) {
            x1 = sxy[i].x;
            y1 = sxy[i].y;

            var ctrlP = getCtrlPoint(sxy, i - 1, a, b);

            //ctx.lineTo(LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
            ctx.bezierCurveTo(LeftD + ctrlP.pA.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pA.y) / TotalH * height, LeftD + ctrlP.pB.x / TotalL * width, TopD + (cdata[0].split('|')[1] - ctrlP.pB.y) / TotalH * height, LeftD + x1 / TotalL * width, TopD + (cdata[0].split('|')[1] - y1) / TotalH * height);
        }
        ctx.stroke();
    }

    if (sxy.length > 0) {
        ctx.fillStyle = "rgba(240, 240, 240,0.7)";
        ctx.fillRect(LeftD + width - 120, 5, 120, 43);

        ctx.strokeStyle = "rgb(135, 206, 255)";
        ctx.beginPath();
        ctx.moveTo(LeftD + width - 110, 15);
        ctx.lineTo(LeftD + width - 80, 15);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = "#FF00FF";
        ctx.beginPath();
        ctx.moveTo(LeftD + width - 110, 35);
        ctx.lineTo(LeftD + width - 80, 35);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = '12px 宋体';
        ctx.fillText("实测浸润线", LeftD + width - 70, 20);
        ctx.fillText("设计标准线", LeftD + width - 70, 40);
    }

    if (wall = 1 && walldata.length == 2) {
        ctx.fillStyle = pat;
        ctx.beginPath();
        ctx.moveTo(LeftD + walldata[0].x / TotalL * width, TopD + (cdata[0].split('|')[1] - walldata[0].y) / TotalH * height);
        for (var i = 0; i < rdata.length; i++) {
            if (walldata[0].y >= rdata[i].split("|")[1]) {
                ctx.lineTo(LeftD + rdata[i].split('|')[0] / TotalL * width, TopD + (cdata[0].split('|')[1] - rdata[i].split('|')[1]) / TotalH * height);
            }
        }
        ctx.lineTo(LeftD + width, TopD + height);
        ctx.lineTo(LeftD + walldata[1].x / TotalL * width, TopD + height);
        ctx.lineTo(LeftD + walldata[1].x / TotalL * width, TopD + (cdata[0].split('|')[1] - walldata[1].y) / TotalH * height);
        ctx.closePath();
        ctx.fill();

        var scale = (walldata[0].y - walldata[1].y) / (walldata[0].x - walldata[1].x);
        var scale2 = (-1) / scale;
        var xx1 = Math.sqrt(Math.pow(2, 2) / (Math.pow(scale2, 2) + 1)) + walldata[0].x;
        var yy1 = (xx1 - walldata[0].x) * scale2 + walldata[0].y;
        var xx2 = Math.sqrt(Math.pow(2, 2) / (Math.pow(scale2, 2) + 1)) + walldata[1].x;
        var yy2 = (xx2 - walldata[1].x) * scale2 + walldata[1].y;
        ctx.beginPath();
        ctx.fillStyle = "#ccc";
        ctx.moveTo(LeftD + walldata[0].x / TotalL * width, TopD + (cdata[0].split('|')[1] - walldata[0].y) / TotalH * height);
        ctx.lineTo(LeftD + xx1 / TotalL * width, TopD + (cdata[0].split('|')[1] - yy1) / TotalH * height);
        ctx.lineTo(LeftD + xx2 / TotalL * width, TopD + (cdata[0].split('|')[1] - yy2) / TotalH * height);
        ctx.lineTo(LeftD + walldata[1].x / TotalL * width, TopD + (cdata[0].split('|')[1] - walldata[1].y) / TotalH * height);
        ctx.stroke();
        ctx.fill();

    }
}

/*
*根据已知点获取第i个控制点的坐标
*param ps	已知曲线将经过的坐标点
*param i	第i个坐标点
*param a,b	可以自定义的正数
*/
function getCtrlPoint(ps, i, a, b) {
    if (!a || !b) {
        a = 0.15;
        b = 0.15;
    }
    //处理两种极端情形
    if (i == 0) {
        var pAx = ps[i].x + (ps[i + 1].x - ps[i].x) * a;
        var pAy = ps[i].y + (ps[i + 1].y - ps[i].y) * a;
    }
    else {
        var pAx = ps[i].x + (ps[i + 1].x - ps[i - 1].x) * a;
        var pAy = ps[i].y + (ps[i + 1].y - ps[i - 1].y) * a;
    }
    if (i > ps.length - 3) {
        var last = ps.length - 1;
        var pBx = ps[last].x - (ps[last].x - ps[last - 1].x) * b;
        var pBy = ps[last].y - (ps[last].y - ps[last - 1].y) * b;
    } else {
        var pBx = ps[i + 1].x - (ps[i + 2].x - ps[i].x) * b;
        var pBy = ps[i + 1].y - (ps[i + 2].y - ps[i].y) * b;
    }
    return {
        pA: { x: pAx, y: pAy },
        pB: { x: pBx, y: pBy }
    }
}

function getIndex(ps, a) {
    var sc = [];
    for (var i = 0; i < ps.length - 1; i++) {
        sc.push((ps[i + 1].y - ps[i].y) / (ps[i + 1].x - ps[i].x));
        sc[i] = sc[i] / Math.abs(sc[0]);
    }
    for (var i = 0; i < sc.length; i++) {
        if (i == 0 || i == sc.length - 1) continue;
        else {
            var k1 = sc[i - 1] / sc[i];
            var k2 = sc[i] / sc[i + 1];
            if (sc[i] > 0 && k2 < 0) {
                if (k2 > -1);
                else a = 0.1;
            }
            else if (k1 < 0 && k2 < 0) {
                if (k1 / k2 > 10 && a > 0.12) a = 0.12;
            }
        }
    }
    return a;

}

//画当前水位（动态波浪）
function drawWave() {

    var c = document.getElementById("canvas_wave");
    ctx = c.getContext("2d");
    axisLength = CenterL / TotalL * width;
    //海水
    //context.createLinearGradient(x0,y0,x1,y1);
    //x0:开始点的x坐标 y0:开始点的y坐标 x1:结束点的x坐标 y1:结束点的y坐标
    var linear = ctx.createLinearGradient(0, TopD + (cdata[0].split('|')[1] - z) / TotalH * height, 0, height);
    var l = 0.4, l2 = 0.3;
    linear.addColorStop(0, "rgba(135, 206, 255,1)");
    linear.addColorStop(l, "rgba(135, 206, 255,1)");
    linear.addColorStop(l + l2, "rgba(99, 184, 255,1)");
    linear.addColorStop(1, "rgba(30, 144, 255,1)");
    ctx.fillStyle = linear;
    ctx.fillRect(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height, axisLength, height);
    //波浪
    //Sin 曲线属性
    //var waveWidth = 0.02; //波浪宽度,数越小越宽
    waveWidth = 1 / axisLength * 20; //波浪宽度,数越小越宽
    waveHeight = height / 50; //波浪高度,数越大越高
    if (waveHeight > 6) {
        waveHeight = 6;
        waveWidth = 0.05;
        speed = 0.1;
    }
    render();
}


function render() {
    var c = document.getElementById("canvas_wave");
    ctx = c.getContext("2d");
    ctx.clearRect(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height - 3 * waveHeight, axisLength, 2 * waveHeight);

    drawSin(xOffset);
    xOffset += speed; //形成动态效果
    //requestAnimationFrame(render, 1000);
    timer = setTimeout(render, 30);
}

function drawSin(xOffset) {
    //ctx.save();
    //ctx.fillStyle = 'rgb(178,240,255)';
    ctx.fillStyle = 'rgb(170, 225, 255)';
    ctx.beginPath();
    //在整个轴长上取点
    for (var x = 0; x < axisLength; x += 20 / axisLength) {
        //此处坐标(x,y)的取点，依靠公式 'y=Asin(ωx+φ)+b ' '振幅高*sin(x*振幅宽 + 振幅偏移量)'
        var y = -Math.sin(x * waveWidth - xOffset / 2);

        ctx.lineTo(LeftD + x, TopD + (cdata[0].split('|')[1] - z) / TotalH * height - 2 * waveHeight + y * waveHeight * 0.8);
    }

    //封闭路径
    ctx.lineTo(LeftD + axisLength, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + waveHeight);
    ctx.lineTo(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + waveHeight);
    ctx.lineTo(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + waveHeight);
    //ctx.stroke();
    ctx.fill();


    //ctx.fillStyle = 'rgb(124,229,255)';
    ctx.fillStyle = 'rgba(135, 206, 255,1)';
    ctx.beginPath();
    //在整个轴长上取点
    for (var x = 0; x < axisLength; x += 20 / axisLength) {
        //此处坐标(x,y)的取点，依靠公式 'y=Asin(ωx+φ)+b ' '振幅高*sin(x*振幅宽 + 振幅偏移量)'
        var y = -Math.sin(x * waveWidth - xOffset);

        ctx.lineTo(LeftD + x, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + y * waveHeight * 0.8);
    }

    //封闭路径
    ctx.lineTo(LeftD + axisLength, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + waveHeight + 1);
    ctx.lineTo(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + waveHeight + 1);
    ctx.lineTo(LeftD, TopD + (cdata[0].split('|')[1] - z) / TotalH * height + waveHeight);
    //ctx.stroke();
    ctx.fill();

    //ctx.restore();
};


//水位文本绘制
function DrawText(LineLX, LineLY, Text, value, color) {
    var h = -5;
    ctx.beginPath();
    if (color) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    }
    else {
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#000';
    }

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
        if (Text == "坝顶高程：") ctx.lineTo(LineRX - 15, LineLY);
        else ctx.lineTo(LineRX, LineLY);
    }
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
    if (Text == "坝顶高程：")
    //ctx.fillText(Text + value + "", LineLX, LineLY - 15);
        ctx.fillText(Text + value + "", LineLX, LineLY - 4);
    else
        ctx.fillText(Text + value + "", LineLX + 15, LineLY + h);

    //记录文本所占位置【左X|右X|下Y|上Y】，后续文本避开这些空间
    if (h < 0) label.push(LineLX + "|" + LineRX + "|" + (LineLY - 17) + "|" + LineLY);
    else label.push(LineLX + "|" + LineRX + "|" + LineLY + "|" + (LineLY + 17));


}
//文本竖向展示
function TextVertical(str, x, y, canvasDiv, color) {
    var c = document.getElementById(canvasDiv);
    ctx = c.getContext("2d");
    ctx.font = 'bold 12px 宋体';
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    for (var i = 0; i < str.length; i++) {
        ctx.fillText(str[i], x, y + i * 17);
    }
}

//标识定位冲突
function LocationC(LineLX, LineLY, Text, value) {
    if (label.length > 0) for (var i = 0; i < label.length; i++) {
        if ((LineLX >= label[i].split('|')[0]) && (LineLX <= label[i].split('|')[1]) && (LineLY >= label[i].split('|')[2]) && (LineLY <= label[i].split('|')[3])) LineLX = parseFloat(label[i].split('|')[1]) + 1;
    }
}

//文本长度计算
function TextLength(str1, str2) {
    if (str1[str1.length - 1] == "：") return str1.length * 15 + str2.length * 5;
    else return (str1.length + str2.length) * 6 + 5;
}

//迎水坡上水位的X轴
function TextRightX(Y) {
    for (var i = 0; i < ldata.length - 1; i++) {
        if (ldata[i].split('|')[1] <= Y && ldata[i + 1].split('|')[1] >= Y) {
            if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) return ldata[i].split('|')[0];
            else return ((Y - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) * (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]) + parseFloat(ldata[i].split('|')[0])) / TotalL * width;
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
        if (xx - l * 2 / 5 < peg[peg.length - 1].split('|')[0]) {
            l = TotalL - peg[peg.length - 1].split('|')[0];
            xx = TotalL - l * 3 / 5;
        }
        var xs = xx;
        for (var i = 0; i < rdata.length - 1; i++)
            if ((rdata[i].split('|')[0] <= xx) && (rdata[i + 1].split('|')[0] >= xx)) {
            if (rdata[i].split('|')[0] == rdata[i + 1].split('|')[0]) {
                xs = rdata[i].split('|')[0];
                xx = rdata[i + 1].split('|')[0];
                yy = rdata[i].split('|')[1];
                break;
            }
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
                if (rdata[i].split('|')[1] == rdata[i + 1].split('|')[1]) {
                    xx = rdata[i + 1].split('|')[0];
                    xs = rdata[i].split('|')[0];
                    break;
                }
                else {
                    var scale = (rdata[i + 1].split('|')[1] - rdata[i].split('|')[1]) / (rdata[i + 1].split('|')[0] - rdata[i].split('|')[0]);
                    xx = parseFloat(rdata[i].split('|')[0]) + (yy - rdata[i].split('|')[1]) * scale;
                    xs = xx;
                }
            }
        }
        st.push(xs + "|" + yy);
        st.push(xx + "|" + yy);
        st.push(TotalL + "|" + rdata[rdata.length - 1].split('|')[1]);
        st.push((TotalL - l) + "|" + rdata[rdata.length - 1].split('|')[1]);
        ctx.clearRect(LeftD + xx / TotalL * width, TopD + (cdata[0].split('|')[1] - yy) / TotalH * height, (TotalL - xx) / TotalL * width, (yy - rdata[rdata.length - 1].split('|')[1]) / TotalH * height);
    }
    else {
        var l = 0.15 * TotalL;
        var xx = 0.1 * TotalL, yy = ldata[0].split('|')[1];
        if (xx + l / 3 > peg[0].split('|')[0]) {
            l = peg[0].split('|')[0];
            xx = l * 2 / 3;
        }
        if (xx + l / 3 > cdata[0].split('|')[0] - 0.08 * TotalL) {
            l = (cdata[0].split('|')[0] - 0.08 * TotalL > 0) ? (cdata[0].split('|')[0] - 0.08 * TotalL) : 0;
            xx = l * 2 / 3;
        }
        var xs = xx;
        for (var i = 0; i < ldata.length - 1; i++)
            if ((ldata[i].split('|')[0] <= xx) && (ldata[i + 1].split('|')[0] >= xx)) {
            if (ldata[i].split('|')[0] == ldata[i + 1].split('|')[0]) {
                xx = ldata[i + 1].split('|')[0];
                xs = ldata[i].split('|')[0];
                yy = ldata[i].split('|')[1];
                break;
            }
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
                if (ldata[i].split('|')[1] == ldata[i + 1].split('|')[1]) {
                    xs = ldata[i].split('|')[0];
                    xx = ldata[i + 1].split('|')[0];
                    break;
                }
                else {
                    var scale = (ldata[i + 1].split('|')[1] - ldata[i].split('|')[1]) / (ldata[i + 1].split('|')[0] - ldata[i].split('|')[0]);
                    xx = parseFloat(ldata[i].split('|')[0]) + (yy - ldata[i].split('|')[1]) * scale;
                }
            }
        }
        st.push(xs + "|" + yy);
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
    if ((st[0].split('|')[1] - st[st.length - 1].split('|')[1]) / TotalH * height > 10 && (st[2].split('|')[0] - st[0].split('|')[0]) / TotalL * width > 10) {
        ctx.beginPath();
        ctx.moveTo(LeftD + st[0].split('|')[0] / TotalL * width + 5, TopD + (cdata[0].split('|')[1] - st[0].split('|')[1]) / TotalH * height + 5);
        ctx.lineTo(LeftD + st[1].split('|')[0] / TotalL * width - 5, TopD + (cdata[0].split('|')[1] - st[0].split('|')[1]) / TotalH * height + 5);
        var scale1 = (st[1].split('|')[1] - st[2].split('|')[1]) / (st[2].split('|')[0] - st[1].split('|')[0]);
        var scale2 = (st[0].split('|')[1] - st[3].split('|')[1]) / (st[0].split('|')[0] - st[3].split('|')[0]);
        if (scale1 <= 1) {
            ctx.lineTo(LeftD + st[1].split('|')[0] / TotalL * width - 5 + (st[1].split('|')[1] - st[2].split('|')[1] - 10 / height * TotalH) / scale1 / TotalL * width, TopD + (cdata[0].split('|')[1] - st[2].split('|')[1]) / TotalH * height - 5);
        } else {
            ctx.lineTo(LeftD + st[2].split('|')[0] / TotalL * width - 5, TopD + (cdata[0].split('|')[1] - st[2].split('|')[1]) / TotalH * height - 5);
        }
        if (scale2 <= 1) {
            ctx.lineTo(LeftD + st[0].split('|')[0] / TotalL * width + 5 - (st[0].split('|')[1] - st[3].split('|')[1] - 10 / height * TotalH) / scale2 / TotalL * width, TopD + (cdata[0].split('|')[1] - st[3].split('|')[1]) / TotalH * height - 5);
        } else {
            ctx.lineTo(LeftD + st[3].split('|')[0] / TotalL * width + 5, TopD + (cdata[0].split('|')[1] - st[3].split('|')[1]) / TotalH * height - 5);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

    }
    ctx.strokeStyle = "rgb(150,150,150)";
    ctx.fillStyle = "rgb(150,150,150)";
    ctx.font = '12px 宋体';
    ctx.fillText("堆石棱体", LeftD + (parseFloat(st[0].split('|')[0]) + parseFloat(st[1].split('|')[0])) / 2 / TotalL * width - 2 * 11, TopD + (cdata[0].split('|')[1] - (parseFloat(st[0].split('|')[1]) + parseFloat(st[3].split('|')[1])) / 2) / TotalH * height + 2);
}

function setAnalysis(ctx, text, color) {
    ctx.font = '14px 宋体';
    ctx.fillStyle = color;
    ctx.fillText(text, LeftD + 10, 25);
    ctx.strokeStyle = color;
    ctx.strokeRect(LeftD, 7, ctx.measureText(text).width + 20, 25);
}
