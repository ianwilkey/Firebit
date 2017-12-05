
//Firebit Core by Ian Wilkey
//hi//Version 1.5

var speed = 10;
static var ammo = 32;
var bullet : GameObject;
var bulletsPerSecond = 14.0;
private var shooting = false;
private var isreload = false;
private var noreload = true;
var ReloadSound : AudioClip;
var NoAmmoSound : AudioClip;
var GunFire : AudioClip;

//0.01931129

//GUI
var MyFont : Font;
var Size : float;

function Start() {
    InvokeRepeating("Shoot", 0.0, 1.0 / bulletsPerSecond);
 }
 
function Shoot () {
   if (!shooting) return;
   var go = Instantiate(bullet, transform.position, transform.rotation);
   go.GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward * 10000.0);
   ammo --;
   GetComponent.<AudioSource>().PlayOneShot(GunFire);
   GetComponent.<ParticleSystem>().Play();
	Destroy(GameObject.Find("Sphere(Clone)"), 5);
 }
 
 function Update (){
 	 isreload = false;
     shooting = false;
     if(Input.GetAxis("Fire1")){
         shooting = true;
     }
     
     if (ammo < 10)
     {
     if(Input.GetKey("r")){
		NoReload();
     }
}
     
     if (ammo < 1) {
noammo();
     }
     
     if (ammo <= 10) {
		if(Input.GetKey("r")){
			reload();
			GetComponent.<AudioSource>().PlayOneShot(ReloadSound);
		}
 	}
 }
 
function noammo () {
	isreload = false;
 	shooting = false;
 	if(Input.GetButtonDown("Fire1")){
 	GetComponent.<AudioSource>().PlayOneShot(NoAmmoSound);
 	}
 	if(Input.GetKey("r")){
reload();
 	}
 }
 
function NoReload(){
noreload = true;
} 
 
function reload () {
	noreload = false;
	isreload = true;
 	yield WaitForSeconds (2);
 	ammo = 32;
 	Update();
 	noreload = true;
 }

function OnGUI () {

    GUI.skin.font = MyFont;
    
	GUI.Label(Rect(40,40, 700, 700), "Ammo: "+ammo);
	if (ammo == 0){
	GUI.Label(Rect(140,40, 1000, 1000), "Out of ammo. Press 'r' to reload");
	}
	
	if (ammo == 10){
	GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
	}
		if (ammo == 9){
		GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
		}
			if (ammo == 8){
			GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
			}
				if (ammo == 7){
				GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
				}
					if (ammo == 6){
					GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
					}
						if (ammo == 5){
						GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
						}
							if (ammo == 4){
							GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
							}
								if (ammo == 3){
								GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
								}
									if (ammo == 2){
									GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
									}
										if (ammo == 1){
										GUI.Label(Rect(140,40, 1000, 1000), "Low ammo. Press 'r' to reload");
										}

		if (isreload == true) {
	GUI.Label(Rect(400,40, 1000, 1000), "Currently Reloading... Please Wait");
	GUI.Label(Rect(660,40, 1000, 1000), " - (No animation cause you're adopted)");
	}
	
	if(Input.GetKey("r")){
		if (noreload == true) {
		GUI.Label(Rect(140,40, 1000, 1000), "You have plenty of ammo, scrub...");
		}
	}
}