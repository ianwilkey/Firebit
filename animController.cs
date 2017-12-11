using UnityEngine;
using System.Collections;

public class animController : MonoBehaviour {

	private Animator anim;

	void Start () {
	
		anim = GetComponent<Animator> ();
	}
	
	void Update () {
	
		if (Input.GetButton("Fire1")) {
			anim.SetBool ("shoot", true);
		}
		if (!Input.GetButton("Fire1")) {
			anim.SetBool ("shoot", false);
		}

	}
}