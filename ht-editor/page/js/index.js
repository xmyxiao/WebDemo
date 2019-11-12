function init(){
    var pLeft = [ -600, 0, 0 ];
    var pRight = [ 600, 0, 0 ];

    rawS3 = null;
    dataModel = new ht.DataModel();
    g3d = new ht.graph3d.Graph3dView(dataModel);

    toolbar = new ht.widget.Toolbar([
        {
            label: 'Editable',
            type: 'check',
            action: function(){
                g3d.setEditable(this.selected);
            }
        },
        {
            id: 'size',
            label: 'Size',
            slider: {
                width: 120,
                min: 1,
                max: 60,
                value: 1,
                thickness: 1,
                onValueChanged: function(){
                    if(rawS3){
                        var value = this.getValue();
                        var pRightVector = new ht.Math.Vector3(pRight);
                        var vector = new ht.Math.Vector3();
                        dataModel.each(function(data){
                            if(data instanceof ht.Node){
                                var myS3 = data.a('myRawS3');
                                if (myS3) {
                                    vector.copy(data.a('myRawP3')).sub(pRightVector).multiplyScalar(value).add(pRightVector);
                                    data.p3(vector.toArray());
                                    data.s3(myS3[0] * value, myS3[1] * value, myS3[2] * value);
                                }
                                else {
                                    data.s3(rawS3[0] * value, rawS3[1] * value, rawS3[2] * value);
                                }
                                data.s({
                                    'note.scale': value/20,
                                    'note.t3': [0, -value, value]
                                });
                            }
                        });
                    }
                }
            }
        }
    ]);
    toolbar.setStickToRight(true);
    borderPane = new ht.widget.BorderPane();
    borderPane.setTopView(toolbar);
    borderPane.setCenterView(g3d);

    treeView = new ht.widget.TreeView(dataModel);
    treeView.setSortFunc(ht.Default.sortFunc);
    treeView.setCheckMode('descendant');
    treeView.setSelectionModelShared(false);
    treeView.sm().ms(function(e){
        g3d.redraw();
    });
    mainSplit = new ht.widget.SplitView(treeView, borderPane, 'h', 0.2);

    view = mainSplit.getView();
    view.className = 'main';
    document.body.appendChild(view);
    window.addEventListener('resize', function (e) {
        mainSplit.invalidate();
    }, false);

    g3d.setGridVisible(true);
    g3d.getLabel = function(data){return null;};
    g3d.isVisible = function(data){return treeView.isSelected(data);};

    g3d.setHighlightMode('mouseover');

    loadTask = 2;

    ht.Default.loadObj('objs/test1.obj', 'objs/test1.mtl', {
        cube: true,
        center: true,
        shape3d: 'scooter',
        finishFunc: function(modelMap, array, rawS3){
            window.rawS3 = rawS3;
            if(modelMap){
                var node = new ht.Node();
                node.setName('All in ONE');
                node.s({
                    'shape3d': 'scooter',
                    'wf.visible': 'selected',
                    'note': 'One Node',
                    'note.face': 'center',
                    'note.position': 7,
                    'note.background': 'blue',
                    'note.autorotate': 'y'
                });
                node.s3(rawS3);
                node.p3(pLeft);
                dataModel.add(node);
            }
            checkLoaded();
        }
    });

    var scaleFactor = 1;
    ht.Default.loadObj('objs/test1.obj', 'objs/test1.mtl', {
        cube: true,
        center: true,
        part: true,
        finishFunc: function(modelMap, array, rawS3){
            window.modelMap = modelMap;
            if (!modelMap)
                return;
            var lastNode = null,
                firstNode = null,
                parentNode = new ht.Data();

            dataModel.add(parentNode);

            var box = new ht.Math.Box3();
            var v3 = new ht.Math.Vector3();
            var center = new ht.Math.Vector3();
            var size = new ht.Math.Vector3();
            var vs;
            var i, len;
            var model, shape3d;
            var subP3 = new ht.Math.Vector3();
            var subS3 = new ht.Math.Vector3();

            for(var name in modelMap){
                subP3.copy(pRight);
                subS3.copy(rawS3);

                model = modelMap[name];
                shape3d = 'scooter:' + name;
                var img = model.image
                model.image = {func: 'attr@customimage', value: img }
                console.log(model.image)
                // 当前 model 进一步 center / cube 化
                box.makeEmpty();

                vs = model.vs;
                if (vs && (len = vs.length)) {
                    for (i = 0; i < len; i += 3) {
                        box.expandByPoint(v3.fromArray(vs, i));
                    }
                    center.copy(box.min).add(box.max).multiplyScalar(0.5);
                    size.copy(box.max).sub(box.min);

                    for (i = 0; i < len; i += 3) {
                        vs[i] = (vs[i] - center.x) / size.x;
                        vs[i + 1] = (vs[i + 1] - center.y) / size.y;
                        vs[i + 2] = (vs[i + 2] - center.z) / size.z;
                    }

                    subP3.add(center.multiply(subS3).multiplyScalar(scaleFactor));
                    subS3.multiply(size).multiplyScalar(scaleFactor);
                }

                ht.Default.setShape3dModel(shape3d, model);

                var node = new ht.Node();
                node.setParent(parentNode);
                node.setName(name);
                node.s({
                    'wf.visible' : 'selected',
                    'shape3d': shape3d
                });
                lastNode = node;
                if(!firstNode){
                    firstNode = node;
                }
                node.s3(subS3.toArray());
                node.p3(subP3.toArray());

                node.a('myRawS3', node.s3());
                node.a('myRawP3', node.p3())
                dataModel.add(node);
            }
            checkLoaded();
        }
    });
}

function checkLoaded(){
    loadTask--;
    if(loadTask === 0){
        treeView.expandAll();
        treeView.selectAll();

        ht.Default.startAnim({
            action: function(t){
                toolbar.v('size', 50*t);
            }
        });
    }
}

$(function(){
  $('#menu .item').click(function(){
    var imgName = $(this).attr('data-val')
    dataModel.getDatas()._as[2].a('customimage','objs/'+imgName)
  })
})
