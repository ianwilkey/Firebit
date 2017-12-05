var Health = 10;
var Bullet : GameObject;

function OnTriggerEnter (other : Collider){
	if (other.gameObject.tag == "Bullet"){
	Debug.Log("Touch Detected");
	}
}