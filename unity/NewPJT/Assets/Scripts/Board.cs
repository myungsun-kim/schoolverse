using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Board : MonoBehaviour
{
    public Material brightMaterial;
    public Material dimMaterial;
    // Start is called before the first frame update

    private void OnTriggerStay(Collider other)
    {
        if (other.tag == "Player")
        {
            transform.GetComponent<Renderer>().material = brightMaterial;

            if (Input.GetKeyDown(KeyCode.Q))
            {
                Debug.Log("keydown");
                transform.GetComponent<Renderer>().material = dimMaterial;
                Application.OpenURL("http://localhost:8081/unity");
            }
        }
    }
    private void OnTriggerExit(Collider other)
    {
        if (other.tag == "Player")
        {
            transform.GetComponent<Renderer>().material = dimMaterial;
        }
    }



}