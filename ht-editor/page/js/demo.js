function init() {
  pRight = [ 0, 0, 0 ];
  
  dataModel = new ht.DataModel();
  g3d = new ht.graph3d.Graph3dView(dataModel);

  view = g3d.getView();
  view.className = 'main';
  document.body.appendChild(view);
  window.addEventListener('resize', function(e) {
    g3d.invalidate();
  }, false);
  g3d.setEye([700, 0, 0]);
  g3d.setMovableFunc(function(data){
    return false
  });
  // 设置网格
  /*g3d.setGridVisible(true);
  g3d.setGridColor('#74AADA');*/
  loadObj('clothing')
}

function loadObj(name, index) {
  ht.Default.loadObj('objs/' + name + '.obj', 'objs/' + name + '.mtl', {
    center: true,
    cube: true,
    shape3d: name,
    finishFunc: function(modelMap, array, rawS3) {
      window.modelMap = modelMap;
      if (!modelMap)
          return;
      var parentNode = new ht.Data();
      dataModel.add(parentNode);
      var model, shape3d;
      var subS3 = new ht.Math.Vector3();
      for(var name in modelMap){
          subS3.copy(rawS3);
          model = modelMap[name];
          shape3d = 'scooter:' + name;
          var img = model.image
          model.image = {func: 'attr@customimage', value: img }
          ht.Default.setShape3dModel(shape3d, model);
          var node = new ht.Node();
          node.setParent(parentNode);
          node.s({
              'wf.visible' : 'selected',
              'shape3d': shape3d
          });
          node.s3(subS3.toArray());
          node.a('myRawS3', node.s3());
          dataModel.add(node);
      }
    }
  });
}

$(function(){
  $('#menu .item').click(function(){
    var imgName = $(this).attr('data-val')
    dataModel.getDatas()._as[2].a('customimage','objs/'+imgName)
  })
})