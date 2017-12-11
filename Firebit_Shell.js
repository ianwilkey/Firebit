var bulletsPerSecond = 14.0;
private var shooting = false;
var shell : GameObject;
static var ammo = 32;

function Start () {
	InvokeRepeating("Shell", 0.0, 1.0 / bulletsPerSecond);
}

function Shell () {
   if (!shooting) return;
   var go = Instantiate(shell, transform.position, transform.rotation);
   go.GetComponent.<Rigidbody>().AddRelativeForce(Vector3.left * 50.0);
   ammo --;
}

function Update () {
if(Input.GetAxis("Fire1")){
		 shooting = true;
	 }
if(!Input.GetAxis("Fire1")){
   shooting = false;
	 }
	 
	 if (ammo < 10)
	 {
	 if(Input.GetKey("r")){
		NoReload();
	 }
}
	 
	 if (ammo < 1) {
noammo();
shooting = false;
	 }
	 
	 if (ammo <= 10) {
		if(Input.GetKey("r")){
			reload();
		}
	}
 }
 
function noammo () {
	if(Input.GetButtonDown("Fire1")){
	}
	if(Input.GetKey("r")){
reload();
	}
 }
 
function NoReload(){
noreload = true;
} 
 
function reload () {
	yield WaitForSeconds (2);
	ammo = 32;
	Update();

 } 