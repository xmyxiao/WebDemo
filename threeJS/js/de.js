var camera, scene, renderer, controls;
var container;
init();
animate();
function init() {
  // 容器
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  // 相机
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20000 );
  camera.position.x = -50;
  // 场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xa1a1a1 );
  // 环境光
  var ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
  scene.add( ambientLight );
  // 点光源
  var pointLight = new THREE.PointLight( 0xcccccc, .4 );
  camera.add( pointLight );
  // 平行光
  /*var directionalLight = new THREE.DirectionalLight( 0xffeedd );
  directionalLight.position.set( 0, 0, 1 );
  scene.add( directionalLight );*/

  scene.add( camera );
  
  // 渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  // 控制器
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, - 0.2, - 0.2 );
  controls.update();
  //事件
  window.addEventListener( 'resize', onWindowResize, false );
}

// 窗口大小改变事件
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

//
function animate() {
  requestAnimationFrame( animate );
  render();
}
// 渲染
function render() {
  camera.lookAt( scene.position );
  renderer.render( scene, camera );
}
// 添加模型
function createMtlObj(option){
    var manager = new THREE.LoadingManager();
    manager.addHandler( /\.dds$/i, new THREE.DDSLoader() );
    var mtlLoader = new THREE.MTLLoader(manager);
    mtlLoader.setPath( option.mtlPath );//设置mtl文件路径
    mtlLoader.load( option.mtlFileName, function( materials ) {
        materials.preload();
        var objLoader = new THREE.OBJLoader(manager);
        objLoader.setMaterials( materials );//设置三维对象材质库
        objLoader.setPath( option.objPath );//设置obj文件所在目录
        objLoader.load( option.objFileName, function ( object ) {   
            scene.add( object );
            if(typeof option.completeCallback=="function"){
                option.completeCallback(object,materials);
            }
        }, function ( xhr ) {
            if ( xhr.lengthComputable ) {
                var percentComplete = xhr.loaded / xhr.total * 100;
                if(typeof option.progress =="function"){
                    option.progress( Math.round(percentComplete, 2));
                }
                //console.log( Math.round(percentComplete, 2) + '% downloaded' );
            }
        }, function(error){
                
        });
    });
}
