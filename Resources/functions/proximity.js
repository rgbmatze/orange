function proximityDetector() {
			//detect objects hit by raycaster vector
	try{
	if(!animationLock){ // wait for running animations

		raycaster.set(camera.getWorldPosition(),camera.getWorldDirection()); //bind raycaster to camera	
		//showraycasthelper();//Raycaster helper - displays raycaster as vector
		var intersects = raycaster.intersectObjects( scene.children, true); //get all object intersecting with raycast vector
		if ( intersects.length > 0 ) { //if objects are intersected
			if(intersects[0].object.parent.name.length >= 1){ //if object has a name
				if(intersects[0].object.parent.id != lastObject.id){ //do if object is new
					if(intersects[0].distance <= 6){ //only show near objects
						showinfo(intersects[0]); //show alert and log to console
						lastObject = intersects[0].object.parent; //remember last object
					}	
				}
			}
		}
	
		//detect if object previously hit by raycaster has left the field of view
		cam_matrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse ); //calculate matrix for camera
		frustum.setFromMatrix(cam_matrix); //set frustum (camera view)
	
		if(!frustum.intersectsObject(lastObject)){ //if object left field of view
		
			lastObject = new THREE.Object3D(); //reset lastObject to empty object
		}
		}else{
			
		}
	}catch(err){
	}
}

function showraycasthelper(){
	scene.remove (arrow);
	arrow = new THREE.ArrowHelper( camera.getWorldDirection(), camera.getWorldPosition(), 100, 0x00ffff );
	scene.add( arrow );
}

function showinfo(intersect){
	var message = intersect.object.parent.userData.info;
	if(!(message === undefined)){
		showMessage(message);
		//console.log(message + "  Tip! " + intersect.object.parent.name + " can be rotated by pressing q or e");
	}
	
	//log distance to object
	// console.log("distance to " +intersect.object.name + ": " + intersect.distance); 
	//$("#dialog").html(message); //disabled dialogs for now... buggy
	//$("#dialog").dialog( 'option', 'position', ['left',20] );
}
