function loadCell() {
	var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Zelle/Zelle_hires.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
	    cell = new THREE.Mesh( geometry, material );
	    cell.scale.x = zelle.scale.z = 3.5;
	    cell.scale.y = 3.5;
	    cell.rotation.y = Math.PI / -2;
	    scene.add(cell);
	});
}

function loadKlo()
{
	var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Klo/klo.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		klo = new THREE.Mesh( geometry, material );
		klo.rotation.y =  Math.PI*0.5;
		klo.position.z = 5;
		klo.position.x = 2.5;
		klo.castShadow = true;
		klo.name = "Klo";
		klo.userData.info = "Sehr schön";
		klo.userData.rotatable = true;
		scene.add(klo);
		var bbox = new THREE.BoundingBoxHelper( klo, 0xffffff );
		bbox.update();
		collidableMeshList.push(klo);
		scene.add( bbox );
	});
}

function loadBecken()
{
	var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Becken/becken.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		becken = new THREE.Mesh( geometry, material );
		becken.rotation.y =  Math.PI*0.5;
		becken.position.z = 13;
		becken.position.x = 1.25;
		becken.position.y = 2.5;
		becken.scale.x = becken.scale.y = becken.scale.x = 1.2;
		becken.castShadow = true;
		becken.name = "Klo";
		becken.userData.info = "Waschbücken";
		becken.userData.rotatable = true;
		scene.add(becken);
		var bbox = new THREE.BoundingBoxHelper( becken, 0xffffff );
		bbox.update();
		collidableMeshList.push(becken);
		scene.add( bbox );
	});
}

function loadFloor()
{
    var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Boden/boden.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
	    boden = new THREE.Mesh( geometry, material );
	    boden.position.x = -6;
        boden.position.z = -8;
        boden.position.y = -0.3;
	    scene.add(boden);

	});
}

function loadBuch()
{
	var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Buch/buch_neu_comb.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		buch = new THREE.Mesh( geometry, material );
		buch.position.y = 0;
		buch.position.x = 10;
		buch.position.z = 12;
		buch.rotation.y =  Math.PI*1.5;
		buch.scale.x = buch.scale.y = buch.scale.z = 0.3;
		buch.name = "Buch";
		buch.userData.info = "Lies Faust";
		buch.userData.rotatable = true;
		scene.add(buch);
		var bbox = new THREE.BoundingBoxHelper( buch, 0xffffff );
		bbox.update();
		//scene.add( bbox );
	});
}

function loadSoap()
{
	var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Seife/seife.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		soap = new THREE.Mesh( geometry, material );
		soap.position.y = 2.5;
		soap.position.x = 0.85;
		soap.position.z = 12.2;
		soap.castShadow = true;
		soap.scale.x = seife.scale.y = seife.scale.z = 0.1;
		soap.name = "Seife";
		soap.userData.info = "Wirf mich runter mit Y!";
		soap.userData.rotatable = true;
		soap.userData.isDropable = true;
		scene.add(soap);
		var bbox = new THREE.BoundingBoxHelper( seife, 0xffffff );
		bbox.update();
		//scene.add( bbox );
	});
}

function loadLuefter()
{
	var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Luefter/luefter.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		luefter = new THREE.Mesh( geometry, material );
		luefter.position.y = 6;
		luefter.position.x = 1;
		luefter.position.z = 9.9;
		luefter.rotation.y =  Math.PI*0.5;
		luefter.scale.y = luefter.scale.z = 0.7;
		luefter.scale.x = 1.2;
		luefter.name = "Luefter";
		luefter.userData.info = "BRRRRRRRR";
		scene.add(luefter);
		var bbox = new THREE.BoundingBoxHelper( luefter, 0xffffff );
		bbox.update();
		scene.add( bbox );
	});
}

function loadLampe()
{	
	//position
	var px = 10.3;
	var py = 0;
	var pz = 10.9;
	//scale
	var sx = sy = sz =  0.1;
	//light position (locally)
	var lx = 6.7;
	var ly = 9.4;
	var lz = -1.7;
	
	var light = new THREE.PointLight(0xffff99, 5, 10 );
	light.shadowCameraVisible = true;
	light.shadowDarkness = 0.95;
	light.castShadow = true;
	light.position.set(lx,ly,lz);
	//var pointLightHelper = new THREE.PointLightHelper(light, 10);
	//scene.add(pointLightHelper);
	
	loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/TischLampe/TischLampeBottom.json', function ( geometry, materials ) {
		var lampeB = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	    lampeB.position.set(px,py,pz);
		lampeB.scale.set(sx,sy,sz);
		scene.add(lampeB);
	});
	
	loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/TischLampe/TischLampeTop.json', function ( geometry, materials ) {
		lampe = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
		lampe.position.set(px,py,pz);
    	lampe.scale.set(sx,sy,sz);
    	lampe.name = "Lampe";
    	lampe.userData.info = "";
    	lampe.userData.rotatable = true;
		lampe.add(light);
		scene.add(lampe);
	});
}

function loadBett()
{

    var loader = new THREE.JSONLoader();
	loader.load( '../Prototypes/Bett/bett.json', function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		bett = new THREE.Mesh( geometry, material );
		bett.rotation.y =  Math.PI;
		bett.position.z = 5;
		bett.position.x = 9;
		bett.scale.x = bett.scale.y = bett.scale.z = 1;
		bett.updateMatrix();
		bett.name = "Bett";
		bett.userData.info = "Einsteigen!";
		scene.add(bett);
		var bbox = new THREE.BoundingBoxHelper( bett, 0xffffff );
		bbox.update();
		scene.add( bbox );
	});
}

function loadDoor1()
{
	loader = new THREE.JSONLoader();
	loader.load( "../Prototypes/Tuer/tuer1.json", function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		tuer1 = new THREE.Mesh( geometry, material );
	    tuer1.position.z = 15.3;
	    tuer1.position.x = 4.8;
	    tuer1.position.y = 3.8;
	    tuer1.scale.y = 1.4;
	    tuer1.castShadow = true;
	    tuer1.updateMatrix();
	    tuer1.name = "Tuer1";
		//tuer1.userData.info = "geschlossen!, öffne mit T";
		scene.add(tuer1);
		var bbox = new THREE.BoundingBoxHelper( tuer1, 0xffffff );
		bbox.update();
		scene.add( bbox );
	});
}
function loadDoor2() {

    var loader = new THREE.JSONLoader();
	loader.load( "../Prototypes/Tuer/tuer2.json", function ( geometry, materials ) {
		var material = new THREE.MeshFaceMaterial( materials );
		tuer2 = new THREE.Mesh( geometry, material );
		tuer2.position.x = 8;
		tuer2.position.z = 14.9;
		tuer2.position.y = 3.8;
		tuer2.castShadow = true;
		tuer2.scale.y = 1.4;
		tuer2.updateMatrix();
		tuer2.name = "Tuer2";
		tuer2.userData.info = "geschlossen!<br/> öffne mit T";
		scene.add(tuer2);
		var bbox = new THREE.BoundingBoxHelper( tuer2, 0xffffff );
		bbox.update();
		//scene.add( bbox );
	});
}


function loadMirror(){
				spiegel = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2,2), verticalMirror.material );
				spiegel.add( verticalMirror );
				spiegel.position.x = 0.9;
				spiegel.position.y = 4;
				spiegel.position.z = 13;
				spiegel.rotation.y = Math.PI / 180 * 90
				spiegel.name = "Spiegel";
				scene.add(spiegel);
}
