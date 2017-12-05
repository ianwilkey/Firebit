var Cutscene_1 : AudioClip;

function Start () {
	GetComponent.<AudioSource>().PlayOneShot(Cutscene_1);
	yield WaitForSeconds (88);
	Application.LoadLevel("Disclaimer");
}