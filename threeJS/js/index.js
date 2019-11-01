import * as THREE from '../build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { DDSLoader } from './jsm/loaders/DDSLoader.js';
import { MTLLoader } from './jsm/loaders/MTLLoader.js';
import { MtlObjBridge } from "./jsm/loaders/obj2/bridge/MtlObjBridge.js";
import { OBJLoader } from './jsm/loaders/OBJLoader.js';
import { OBJLoader2 } from './jsm/loaders/OBJLoader2.js';
import { TGALoader } from './jsm/loaders/TGALoader.js';

var camera, scene, renderer, controls;
var container;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

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
  
  // 模型加载
  var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
    }
  };
  // 加载错误
  var onError = function () { };
  //var manager = '';
   

  var manager = new THREE.LoadingManager();
  manager.addHandler( /\.dds$/i, new DDSLoader() );
  
  // tga纹理
  // comment in the following line and import TGALoader if your asset uses TGA textures
  // manager.addHandler( /\.tga$/i, new TGALoader() );
/*
  new MTLLoader( manager ).load( './obj/3d/machine.mtl', function ( materials ) {
    materials.preload();
    new OBJLoader( manager ).setMaterials( materials ).load( './obj/3d/machine.obj', function ( object ) {
      scene.add( object );
    }, onProgress, onError );
  });
*/

  //loadObj('./obj/male02/', 'male02', manager, onProgress, onError)
  //loadObj('./obj/file/', 'file', manager, onProgress, onError)
  
  //useParseMain()
  
  /*
  new OBJLoader().load( './obj/NOAA/58pic_53cadeab3fd9f.obj', function ( object ) {
    scene.add( object );
  }, onProgress, onError );
  */
  var maPath = './obj/3d/'
  //loadObj('./obj/female02/', 'female02')
  
  
  /*loadObj(maPath, 'machine', manager, onProgress, onError)
  loadObj(maPath, 'cloth01', manager, onProgress, onError)
  loadObj(maPath, 'cloth02', manager, onProgress, onError)
  loadObj(maPath, 'Cotton', manager, onProgress, onError)
  loadObj(maPath, 'left_door', manager, onProgress, onError)
  loadObj(maPath, 'right_door', manager, onProgress, onError)
  loadObj(maPath, 'rotor', manager, onProgress, onError)*/

  //loadObj2('./objs/shyxy/', 'ljt')
  //loadObj2('./objs/shyxy/', 'lud0')
  //loadObj2('./objs/shyxy/', 'a_jianzhu')
  //loadObj2('./objs/shyxy/', 'huap01')
  //loadObj2('./objs/shyxy/', 'hua05')
  //loadObj2('./objs/other/', 'phone')
  //loadObj2('./obj/cs/', 'rotor')
  //loadObj2('./obj/3d/', 'machine')
  //loadObj2('./obj/file/', 'file')
  //loadObj2('./obj/female02/', 'female02')
  
  loadObj2('./obj/ceshi/', 'jixin',manager, onProgress, onError)
  // 渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );
  
  // 控制器
  controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, - 0.2, - 0.2 );
  controls.update();
  //事件
  window.addEventListener( 'resize', onWindowResize, false );
}
function loadObj(path,name,manager,onProgress,onError){
  

  function onLoadMtl ( mtlParseResult ) {
    mtlParseResult.preload()
    new OBJLoader(manager).setMaterials( mtlParseResult ).load( path + name +'.obj', function ( object ) {
        renderer.render(scene, camera);
        scene.add( object );
    }, onProgress, onError );
  }
  let mtlLoader = new MTLLoader(manager);
  mtlLoader.load( path + name + '.mtl', onLoadMtl );
}

function loadObj2(path,name){
  
  let modelName = name;

  let objLoader2 = new OBJLoader2().setModelName( modelName );


  function onLoadMtl ( mtlParseResult ) {
    objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );

    let fileLoader = new THREE.FileLoader();
    fileLoader.setPath( '' );
    fileLoader.setResponseType( 'arraybuffer' );
    fileLoader.load( path + name + '.obj',
      function ( content, message ) {
        let local = new THREE.Object3D();
        local.name = 'Pivot_' + name;
        local.position.set( 0, 0, 0 );
        scene.add( local );
        local.add( objLoader2.parse( content ) );
      }
    );
  }

  let mtlLoader = new MTLLoader();
  mtlLoader.load( path + name + '.mtl', onLoadMtl );
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
