function PrisonCell()
{
	THREE.Object3D.call( this );
	var object = new THREE.Object3D();
	loader = new THREE.JSONLoader();
	
	
	/*loader.load( '../Prototypes/Zelle/Zelle_hires.json', 
	
	function ( geometry, materials ) {
		object.add(new THREE.Mesh( geometry,new THREE.MeshFaceMaterial(materials)));
	});*/
	
	loader.load( '../Prototypes/Zelle/boden.json', 
	
	function ( geometry, materials ) {
		object.add(new THREE.Mesh( geometry,new THREE.MeshFaceMaterial(materials)));
		object.castShadow = true;
		object.recieveShadow = true;
	});

	
	object.name = 'PrisonCell_' + this.id;
	//object.castShadow = true;
	object.receiveShadow = true;
	object.scale.x =  object.scale.y = object.scale.z = 3.5;
	object.rotation.y = Math.PI / -2;
	
	var wallCell1 = new WallCell1();
	wallCell1.position.set(0,0,0.6);
	wallCell1.rotation.y = Math.PI*-0.5;
	this.add(wallCell1);
	
	var wallCell2 = new WallCell2();
	wallCell2.position.set(4.8,0,0.6);
	wallCell2.rotation.y = Math.PI*-0.5;
	this.add(wallCell2);
	
	var wallCellWindow = new WallCellWindow();
	wallCellWindow.position.set(0,0,0.6);
	wallCellWindow.rotation.y = Math.PI*-0.5;
	this.add(wallCellWindow);
	
	var ceilingCell = new CeilingCell();
	ceilingCell.position.set(11,6,16);
	this.add(ceilingCell);

	
	var soap = new Soap();
	soap.position.set(0.85,2.5,12.2);
	this.add(soap);
	
	var toilet = new Toilet();
	toilet.position.set(2.5,0,5);
	toilet.rotation.y =  Math.PI*0.5;
	this.add(toilet);
	
	var sink = new Sink();
	sink.position.set(1.25,2.5,13);
	sink.rotation.y = Math.PI*0.5;
	this.add(sink);
	
	var book = new Book();
	book.position.set(10,2,11.2);
	book.rotation.y =  Math.PI/180*90;
	this.add(book);
	
	var table = new Table();
	table.position.set(10,0,13);
	table.rotation.y =  Math.PI/180*90;
	this.add(table);
	
	var radiator = new Radiator();
	radiator.position.set(1,5.6,9.9);
	radiator.rotation.y =  Math.PI/180*90;
	this.add(radiator);
	
	var tablelamp = new TableLamp();
	tablelamp.position.set(10.3,2,10.9);
	this.add(tablelamp);
	
	var bed = new Bed();
	bed.position.set(9,0,5);
	bed.rotation.y =  Math.PI;
	this.add(bed);
	
	var door1 = new Door1();
	door1.position.set(4.8,3.8,15.3);
	this.add(door1);
	
	var door2 = new Door2();
	door2.position.set(8,3.8,14.9);
	this.add(door2);
	
	var mirror = new Mirror();
	mirror.position.set(0.8,4,13);
	mirror.rotation.y =  Math.PI/180*90;
	this.add(mirror);

	this.add(object);
}
PrisonCell.prototype = new THREE.Object3D();
PrisonCell.prototype.constructor = PrisonCell;