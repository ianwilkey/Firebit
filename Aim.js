var applymode : boolean;

var ObjectToMove: GameObject; 

var smoothTime : float = 1.0f;

var PositionX : float;

var PositionY : float;

var PositionZ : float;

var StartPos: Vector3;

var AimUp : AudioClip;

var AimDown : AudioClip;

function Start(){
	
	StartPos = transform.localPosition;	  
	
}	

function Apply()
{
	
	
	var targetPosition : Vector3 = Vector3.Lerp(ObjectToMove.transform.localPosition, Vector3(PositionX,PositionY, PositionZ), Time.deltaTime * smoothTime);
	
	
	
	ObjectToMove.transform.localPosition = targetPosition;
	
}

function ApplyOff()
{
	applymode = false;
	var targetPositionRes : Vector3 = Vector3.Lerp(ObjectToMove.transform.localPosition, StartPos, Time.deltaTime * smoothTime);
	ObjectToMove.transform.localPosition = targetPositionRes;
	
}

function Update () {
	
	if(Input.GetMouseButtonDown(1) && applymode == false){
		applymode = true;
		Apply();
		GetComponent.<AudioSource>().PlayOneShot(AimUp);
	}
	
	if(Input.GetMouseButtonUp(1)){
		applymode = false;
		
	}
	if(!applymode){
		ApplyOff();
	}	
	
	if(applymode){
		
		Apply();
	}	
	
}
