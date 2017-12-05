var applymode : boolean = false;

var Gun : GameObject;

var smoothTime : float = 1.0f;

var CurrentAmmo = 32;

var StartPos : Vector3;

var PosX : float;
var PosY : float;
var PosZ : float;

function Start() {
	StartPos = transform.localPosition;
}

function Apply () {

	var targetPosition : Vector3 = Vector3.Lerp(Gun.transform.localPosition, Vector3(PosX,PosY, PosZ), Time.deltaTime * smoothTime);
	
	Gun.transform.localPosition = targetPosition;

}

function ApplyOff () {

	applymode = false;
	var targetPositionRes : Vector3 = Vector3.Lerp(Gun.transform.localPosition, StartPos, Time.deltaTime * smoothTime);
	Gun.transform.localPosition = targetPositionRes;

}

function Update() {

	if(Input.GetKeyDown("r")){
isReloading();
	}
	
	if (applymode == true) {
	Apply();
	}

	if (applymode == false) {
		if(Input.GetButton("Fire2")){
			ApplyOff();
		}
	}
}

function isReloading(){
applymode = true;
yield WaitForSeconds (2);
applymode = false;
}

//Y=-3.467
//X=-0.29
//Z=-0.085