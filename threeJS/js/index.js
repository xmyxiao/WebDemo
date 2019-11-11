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
  var ambientLight = new THREE.AmbientLight( 0xffffff );
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
  //manager.addHandler( /\.tga$/i, new TGALoader() );
  
  var maPath = './testObj/ces/'
  loadObj2(maPath, 'machine')
  loadObj2(maPath, 'cloth01')
  loadObj2(maPath, 'cloth02')
  loadObj2(maPath, 'Cotton')
  loadObj2(maPath, 'left_door')
  loadObj2(maPath, 'right_door')
  loadObj2(maPath, 'rotor')
 
  //loadObj2('./testObj/cc/', 'test')
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
