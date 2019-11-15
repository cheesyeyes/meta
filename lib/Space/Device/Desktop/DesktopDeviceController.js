'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _config=require('../../../../config');var _config2=_interopRequireDefault(_config);var _log=require('../../../Utilities/log');var _log2=_interopRequireDefault(_log);var _three=require('three');var _PointerLockControls=require('./Controls/PointerLockControls');var _PointerLockControls2=_interopRequireDefault(_PointerLockControls);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var name='DesktopDeviceController';var scope=void 0;var raycaster=new _three.Raycaster;var raycasterGlobe=new _three.Raycaster;var mouse=new _three.Vector2;mouse.x=null;mouse.y=null;var offset=new _three.Vector3;var intersection=new _three.Vector3;var onMouseMove=void 0,onMouseDown=void 0,onMouseUp=void 0,onKeyDown=void 0,onKeyUp=void 0;var selected=null,hovered=null;var selectedGlobe=null;var selectedGlobePoint=null;var intersectsGlobePlane=null;var MetaPosition=null;var globePlane=null;var moveForward=false;var moveBackward=false;var moveLeft=false;var moveRight=false;var moveUp=false;var moveDown=false;var prevTime=performance.now();var velocity=new _three.Vector3;var metaEntered=false;var metaEnteredData=null;var keys={enter:false,space:false,esc:false};var globe=void 0;var plane=void 0;var data=void 0;function prepare(event){event.preventDefault();event.stopPropagation()}var DesktopDeviceController=function(){function DesktopDeviceController(space){_classCallCheck(this,DesktopDeviceController);scope=this;this.space=space;globe=new _three.Mesh(new _three.SphereGeometry(Math.abs(_config2.default.device.desktop.camera.position.z),32,32),new _three.MeshBasicMaterial({color:_config2.default.device.desktop.globe.color,wireframe:_config2.default.device.desktop.globe.wireframe,transparent:_config2.default.device.desktop.globe.transparency,opacity:_config2.default.device.desktop.globe.opacity,side:_three.DoubleSide}));space.camera.add(globe);space.container.position.copy(_config2.default.device.desktop.container.position);space.camera.position.copy(_config2.default.device.desktop.camera.position);space.scene.fog.far=Math.abs(_config2.default.device.desktop.camera.position.z*5);this.controls=new _PointerLockControls2.default(space.camera);space.scene.add(scope.controls.getObject());this.controls.enabled=false;space.device=this;var havePointerLock='pointerLockElement'in document||'mozPointerLockElement'in document||'webkitPointerLockElement'in document;if(havePointerLock){var element=document.body;var pointerlockchange=function pointerlockchange(event){if(document.pointerLockElement===element||document.mozPointerLockElement===element||document.webkitPointerLockElement===element){scope.controls.enabled=true}else{scope.controls.enabled=false}};var pointerlockerror=function pointerlockerror(event){(0,_log2.default)('[DesktopDevice] - Controls - Pointerlock error.',name)};document.addEventListener('pointerlockchange',pointerlockchange,false);document.addEventListener('mozpointerlockchange',pointerlockchange,false);document.addEventListener('webkitpointerlockchange',pointerlockchange,false);document.addEventListener('pointerlockerror',pointerlockerror,false);document.addEventListener('mozpointerlockerror',pointerlockerror,false);document.addEventListener('webkitpointerlockerror',pointerlockerror,false)}onKeyDown=function onKeyDown(event){switch(event.keyCode){case 13:keys.enter=true;break;case 27:keys.esc=true;break;case 32:keys.space=true;break;case 38:case 87:moveForward=true;break;case 37:case 65:moveLeft=true;break;case 40:case 83:moveBackward=true;break;case 39:case 68:moveRight=true;break;case 86:moveUp=true;break;case 16:moveDown=true;break;}switch(event.charCode){case 32:moveUp=true;break;}if(keys.enter&&keys.space){scope.space.go('release');element.requestPointerLock=element.requestPointerLock||element.mozRequestPointerLock||element.webkitRequestPointerLock;element.requestPointerLock()}};onKeyUp=function onKeyUp(event){switch(event.keyCode){case 13:keys.enter=false;break;case 27:keys.esc=false;break;case 32:keys.space=false;break;case 38:case 87:moveForward=false;break;case 37:case 65:moveLeft=false;break;case 40:case 83:moveBackward=false;break;case 39:case 68:moveRight=false;break;case 86:moveUp=false;break;case 16:moveDown=false;break;}switch(event.charCode){case 32:moveUp=false;break;}};onMouseDown=function onMouseDown(event){prepare(event);if(scope.controls.enabled===true)return;mouse.x=event.clientX/window.innerWidth*2-1;mouse.y=-(event.clientY/window.innerHeight)*2+1;raycaster.setFromCamera(mouse,space.camera);var intersects=raycaster.intersectObjects(scope.space.container.children);if(intersects.length>0){selected=intersects[0].object;scope.space.Meta.forEach(function(Meta){if(Meta.graphics.mesh.id===selected.id){MetaPosition=intersects[0].point;MetaPosition.z=MetaPosition.z+Math.abs(_config2.default.device.desktop.container.position.z);MetaPosition.y=MetaPosition.y+Math.abs(_config2.default.device.desktop.container.position.y);var _data={position:MetaPosition};Meta.go('touch',_data);plane=new _three.Mesh(new _three.PlaneGeometry(100,100,10,10),new _three.MeshBasicMaterial({wireframe:true,transparent:true,opacity:false}));plane.position.copy(MetaPosition);scope.space.container.add(plane)}})}else{(0,_log2.default)('Looking for space reaches',name);var _intersectsGlobe=raycaster.intersectObject(globe);if(_intersectsGlobe.length>0){selectedGlobe=_intersectsGlobe[0].object;selectedGlobePoint=_intersectsGlobe[0].point;selectedGlobePoint.z=selectedGlobePoint.z+Math.abs(_config2.default.device.desktop.container.position.z);selectedGlobePoint.y=selectedGlobePoint.y+Math.abs(_config2.default.device.desktop.container.position.y);globePlane=new _three.Mesh(new _three.PlaneGeometry(100,100,10,10),new _three.MeshBasicMaterial({wireframe:_config2.default.device.desktop.globe.wireframe,transparent:true,opacity:_config2.default.device.desktop.globe.opacity}));globePlane.position.copy(selectedGlobePoint);scope.space.scene.add(globePlane);var _data2={position:selectedGlobePoint};(0,_log2.default)('about to trigger space touch');scope.space.go('touch',_data2)};}};onMouseMove=function onMouseMove(event){prepare(event);if(scope.controls.enabled===true)return;mouse.x=event.clientX/window.innerWidth*2-1;mouse.y=-(event.clientY/window.innerHeight)*2+1;raycaster.setFromCamera(mouse,space.camera);if(globePlane){(0,_log2.default)('Intersected globe',name);intersectsGlobePlane=raycaster.intersectObject(globePlane);if(intersectsGlobePlane.length>0){var position=intersectsGlobePlane[0].point;position.z=position.z+Math.abs(_config2.default.device.desktop.container.position.z);position.y=position.y+Math.abs(_config2.default.device.desktop.container.position.y);var _data3={position:position};scope.space.go('touch',_data3)}}else{(0,_log2.default)('Intersected space',name);var _intersectsGlobe=raycaster.intersectObject(globe);if(_intersectsGlobe.length>0){var _position=_intersectsGlobe[0].point;_position.z=_position.z+Math.abs(_config2.default.device.desktop.container.position.z);_position.y=_position.y+Math.abs(_config2.default.device.desktop.container.position.y);var _data4={position:_position};scope.space.go('point',_data4)}}if(selected){var _intersects=raycaster.intersectObject(plane);if(_intersects.length>0){var object=_intersects[0].object;MetaPosition=_intersects[0].point;MetaPosition.z=MetaPosition.z+Math.abs(_config2.default.device.desktop.container.position.z);MetaPosition.y=MetaPosition.y+Math.abs(_config2.default.device.desktop.container.position.y);scope.space.Meta.forEach(function(Meta){if(Meta.graphics.mesh.id===selected.id){var _data5={position:MetaPosition};Meta.go('touch',_data5)}})}}var intersects=raycaster.intersectObjects(scope.space.container.children);if(intersects.length>0){(0,_log2.default)('Intersected Meta',name);var _position2=intersects[0].point;_position2.z=_position2.z+Math.abs(_config2.default.device.desktop.container.position.z);_position2.y=_position2.y+Math.abs(_config2.default.device.desktop.container.position.y);var _data6={position:_position2};scope.space.Meta.forEach(function(Meta){if(Meta.graphics.mesh.id===intersects[0].object.id){Meta.go('point',_data6);if(!Meta._entered){Meta.go('enter',_data6);Meta._entered=true}else{Meta.go('leave',_data6);Meta._entered=false}}})}else{scope.space.Meta.forEach(function(Meta){if(Meta._entered){Meta.go('leave',data);Meta._entered=false}})}};onMouseUp=function onMouseUp(event){prepare(event);if(scope.controls.enabled===true)return;if(globePlane){scope.space.container.remove(globePlane);globePlane=false}raycaster.setFromCamera(mouse,space.camera);var _intersectsGlobe=raycaster.intersectObjects(scope.space.camera.children);if(_intersectsGlobe.length>0){(0,_log2.default)('Intersected globe (onMouseDown)',name);selectedGlobe=_intersectsGlobe[0].object;var point=_intersectsGlobe[0].point;point.z=point.z+Math.abs(_config2.default.device.desktop.container.position.z);point.y=point.y+Math.abs(_config2.default.device.desktop.container.position.y);var _data7={position:point};scope.space.go('release',_data7)}if(selected){scope.space.container.remove(plane);plane=null;space.Meta.find(function(Meta){if(Meta.graphics.mesh.id===selected.id){var _data8={position:MetaPosition};Meta.go('release',_data8)}});selected=null}else{}};this.init();return this}_createClass(DesktopDeviceController,[{key:'init',value:function init(){document.addEventListener('keydown',onKeyDown,false);document.addEventListener('keyup',onKeyUp,false);addEventListener('mousemove',onMouseMove,false);addEventListener('mousedown',onMouseDown,false);addEventListener('mouseup',onMouseUp,false)}},{key:'deactivate',value:function deactivate(){document.removeEventListener('keydown',onKeyDown,false);document.removeEventListener('keyup',onKeyUp,false);removeEventListener('mousemove',onMouseMove,false);removeEventListener('mousedown',onMouseDown,false);removeEventListener('mouseup',onMouseUp,false)}},{key:'render',value:function render(space){if(!this.controls.enabled)return;var time=performance.now();var delta=(time-prevTime)/1000;var acceleration=_config2.default.device.desktop.acceleration;velocity.x-=velocity.x*10*delta;velocity.z-=velocity.z*10*delta;velocity.y-=velocity.y*10*delta;if(moveForward)velocity.z-=acceleration*delta;if(moveBackward)velocity.z+=acceleration*delta;if(moveLeft)velocity.x-=acceleration*delta;if(moveRight)velocity.x+=acceleration*delta;if(moveDown)velocity.y-=acceleration*delta;if(moveUp)velocity.y+=acceleration*delta;scope.controls.getObject().translateX(velocity.x*delta);scope.controls.getObject().translateY(velocity.y*delta);scope.controls.getObject().translateZ(velocity.z*delta);prevTime=time}}]);return DesktopDeviceController}();exports.default=DesktopDeviceController;