var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
var myCanvas = document.querySelector("#myCanvas");
renderer.setSize( window.innerWidth, window.innerHeight );
myCanvas.appendChild( renderer.domElement );

//sable OK
var textureBrck = new THREE.TextureLoader().load( 'textures/sableDur.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 25, 25 );

} );
var geometry = new THREE.BoxGeometry( 5, 2, 20 );
var material = new THREE.MeshBasicMaterial( { map: textureBrck } );
var cube = new THREE.Mesh( geometry, material );
cube.position.x = 22.5
cube.position.y = 0
cube.position.z = 20
scene.add( cube );


//ciel averiif
var textureCiel = new THREE.TextureLoader().load( 'textures/skybox.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 1, 1 );

} );
//var geometryCiel = new THREE.BoxGeometry( 10000, 10000, 1 );
var geometryCiel = new THREE.BoxGeometry( 700, 700, 700 );
var materialCiel  = new THREE.MeshBasicMaterial( { map: textureCiel, side: THREE.BackSide } );
var Ciel = new THREE.Mesh( geometryCiel , materialCiel  );
Ciel.position.x = -2
Ciel.position.y = -12
Ciel.position.z = 8
scene.add( Ciel );

//herbe1 ok
var textureTerre = new THREE.TextureLoader().load( 'textures/herbe.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 221, 221 );

} );
var geometryTerre = new THREE.BoxGeometry( 10, 2, 20 );
var materialTerre  = new THREE.MeshBasicMaterial( { map: textureTerre } );
var Terre = new THREE.Mesh( geometryTerre , materialTerre  );
Terre.position.x = 30
Terre.position.y = 0
Terre.position.z = 20
scene.add( Terre );

//herbe2 ok
var textureTerre = new THREE.TextureLoader().load( 'textures/herbe.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 221, 221 );

} );
var geometryTerre = new THREE.BoxGeometry( 15, 2,10 );
var materialTerre  = new THREE.MeshBasicMaterial( { map: textureTerre } );
var Terre = new THREE.Mesh( geometryTerre , materialTerre  );
Terre.position.x = 27.5
Terre.position.y = 0
Terre.position.z = 35
scene.add( Terre );

//herbe3 ok
var textureTerre = new THREE.TextureLoader().load( 'textures/herbe.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 221, 221 );

} );
var geometryTerre = new THREE.BoxGeometry( 3, 2,30 );
var materialTerre  = new THREE.MeshBasicMaterial( { map: textureTerre } );
var Terre = new THREE.Mesh( geometryTerre , materialTerre  );
Terre.position.x = 41.5
Terre.position.y = 0
Terre.position.z = 25
scene.add( Terre );


//mer
var textureMer = new THREE.TextureLoader().load( 'textures/eau.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryMer = new THREE.BoxGeometry( 800, 0.1, 800 );
var materialMer  = new THREE.MeshBasicMaterial( { map: textureMer } );
var Mer = new THREE.Mesh( geometryMer , materialMer  );
Mer.position.x = 30
Mer.position.y = 0
Mer.position.z = 30
scene.add( Mer );

//pont
var texturePont = new THREE.TextureLoader().load( 'textures/arbre.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryPont = new THREE.BoxGeometry( 5, 2, 1 );
var materialPont  = new THREE.MeshBasicMaterial( { map: texturePont } );
var Pont = new THREE.Mesh( geometryPont , materialPont  );
Pont.position.x = 37.5
Pont.position.y = 0
Pont.position.z = 34.5
scene.add(Pont);

//arbre
var textureArbre = new THREE.TextureLoader().load( 'textures/sableDur.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryArbre = new THREE.BoxGeometry( 1, 13, 1 );
var materialArbre  = new THREE.MeshBasicMaterial( { map: textureArbre } );
var Arbre = new THREE.Mesh( geometryArbre , materialArbre  );
Arbre.position.x = 41.5
Arbre.position.y = 0
Arbre.position.z = 12.5
scene.add(Arbre);

//trottoir
var textureTrott = new THREE.TextureLoader().load( 'textures/trottoir.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryTrott = new THREE.BoxGeometry( 1, 2.8, 30 );
var materialTrott  = new THREE.MeshBasicMaterial( { map: textureTrott } );
var Trott = new THREE.Mesh( geometryTrott , materialTrott  );
Trott.position.x = 43.5
Trott.position.y = 0
Trott.position.z = 25
scene.add(Trott);

//trottoir2
var textureTrott = new THREE.TextureLoader().load( 'textures/trottoir.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryTrott = new THREE.BoxGeometry( 1, 2.8, 30 );
var materialTrott  = new THREE.MeshBasicMaterial( { map: textureTrott } );
var Trott = new THREE.Mesh( geometryTrott , materialTrott  );
Trott.position.x = 48.5
Trott.position.y = 0
Trott.position.z = 25
scene.add(Trott);

//route
var textureRoute = new THREE.TextureLoader().load( 'textures/route.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryRoute = new THREE.BoxGeometry( 4, 2.5, 30 );
var materialRoute  = new THREE.MeshBasicMaterial( { map: textureRoute } );
var Route = new THREE.Mesh( geometryRoute , materialRoute  );
Route.position.x = 46
Route.position.y = 0
Route.position.z = 25
scene.add(Route);

//immeuble
var textureBuilding = new THREE.TextureLoader().load( 'textures/arbre.png', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 300, 300 );

} );
var geometryBuilding = new THREE.BoxGeometry( 4, 15, 10 );
var materialBuilding  = new THREE.MeshBasicMaterial( { map: textureBuilding } );
var Building = new THREE.Mesh( geometryBuilding , materialBuilding  );
Building.position.x = 51
Building.position.y = 0
Building.position.z = 25
scene.add(Building);


//personnagePrincipal
// parent
parent = new THREE.Object3D();
scene.add( parent );
//perso
var geometryPerso = new THREE.BoxGeometry( 0.6, 3, 0.1 );
var materialPerso = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } );
var Perso = new THREE.Mesh( geometryPerso, materialPerso );
Perso.position.x = 45
Perso.position.y = 8
Perso.position.z = 39
//camera
camera.position.x = 45
camera.position.y = 7.5
camera.position.z = 39;
//perso+cam
parent.add(camera)
parent.add(Perso)

var gun = null;
vitesseTire = 0;

function newPerso(exists, level, pseudo, position, rotation) {
    //adversaire
    var geometryPerso = new THREE.BoxGeometry( 0.6, 2, 0.1 );
    var materialPerso = new THREE.MeshBasicMaterial( { color: 0xFFFF00, opacity: 0.5  } );
    var adversaire = new THREE.Mesh( geometryPerso, materialPerso );
    adversaire.position.x = parseInt(position[0])
    adversaire.position.y = parseInt(position[1])
    adversaire.position.z = parseInt(position[2])
    adversaire.rotation.y = rotation;
    adversaire.name = level;
    if(exists == "ya") {
        try {
            scene.getObjectByName(level).position.x = parseInt(position[0]);
            scene.getObjectByName(level).position.y = parseInt(position[1]);
            scene.getObjectByName(level).position.z = parseInt(position[2]);
            scene.getObjectByName(level).rotation.y = rotation;
        } catch(e) {
            scene.add(adversaire)
        }
        
    }
    if (exists == "na") {
        scene.add(adversaire)
    }
}

var players = [];

function listPlayers(exists, level) {
    players.push(level)
}

function addGun() {
    console.log(0);
    if (gun instanceof THREE.Mesh) {
        gun.position.y = -111
    }
    var textureGun = new THREE.TextureLoader().load( 'textures/bois.png', function ( texture ) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 1, 1 );
    
    } );
    var geometryGun = new THREE.BoxGeometry(0.3, 0.1, 3.5);
    var materialGun = new THREE.MeshBasicMaterial( { map: textureGun } );
    gun = new THREE.Mesh( geometryGun, materialGun);
    gun.position.x = Perso.position.x
    gun.position.y = Perso.position.y - 1
    gun.position.z = Perso.position.z
    scene.add( gun );
    camera.translateZ( 1 );
    Perso.translateZ( 1 );
    gun.rotation.y = Perso.rotation.y
    vitesseTire = -0.3;
    //animate();
    console.log(1);

    function checkGun() {
        console.log('is in')
        players.forEach(function(level) {
            /*
            console.log(level)
            console.log("hihi")
            console.log("Position gun: " + gun.position.x + ", " + gun.position.z)
            console.log("Position adv: " + scene.getObjectByName(level).position.x + ", " + scene.getObjectByName(level).position.z)
            */
            console.log(11)
            if(gun.position.x >= scene.getObjectByName(level).position.x - 1) {
                console.log(22)
                if(gun.position.x <= scene.getObjectByName(level).position.x + 1) {
                    console.log(33)
                    if(gun.position.z >= scene.getObjectByName(level).position.z - 1) {
                        console.log(44)
                        if(gun.position.z <= scene.getObjectByName(level).position.z + 1) {
                            console.log("touched on " + level)
                            isKill(level)
                        }
                    }
                }
            }
        });
    }

    var timer = setInterval(checkGun, 250);
    function clearDelay() {
        clearInterval(timer);
    }
    setTimeout(clearDelay, 2000);
}

document.onkeydown = function() {
    alive(sessionId)
    activeOnlline()
    if(event.keyCode == 37) {
        Perso.rotation.y +=  Math.PI / 8;
        camera.rotation.y +=  Math.PI / 8;
    }
    if(event.keyCode == 38) {
        camera.translateZ( -1 );
        Perso.translateZ( -1 );
    }
    if(event.keyCode == 39) {
        Perso.rotation.y -= Math.PI / 8
        camera.rotation.y -= Math.PI / 8;
    }
    if(event.keyCode == 40) {
        camera.translateZ( 1 );
        Perso.translateZ( 1 );
    }
    if(event.keyCode == 32) {
        if(parTerre) {
            camera.position.y += 2.5;
            Perso.position.y += 2.5;
        }   
    }
    if(event.keyCode == 17) {
        addGun()
    }
}

var parTerre = false;

var animate = function () {
    requestAnimationFrame( animate );
    parTerre = false
    if(Perso.position.y - 2.5 <= Terre.position.y) parTerre = true 
    else parTerre = false

    if(!parTerre) {
        gravity = 0.1
    }
    if(parTerre) {
        gravity = 0
    }

    Mer.rotation.y += Math.PI/2048;
    Ciel.rotation.y += Math.PI/8192;
    camera.position.y -= gravity;
    Perso.position.y -= gravity;
    if (gun instanceof THREE.Mesh)
    gun.translateZ( vitesseTire );
    renderer.render(scene, camera);

};

window.onload = function() {
    setInterval(activeOnlline, 1000)
    animate();

}
