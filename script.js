function validointi() {
    //resetoidaan error
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.textContent = "";
    })

    const kayttaja = document.getElementById("kayttaja").value;
    const salasana = document.getElementById("salasana").value;
    const nimi = document.getElementById("nimi").value;
    const osoite = document.getElementById("osoite").value;
    const maa = document.getElementById("maa").value;
    const postinumero = document.getElementById("postinumero").value;
    const sposti = document.getElementById("sposti").value;
    const sukupuoli = document.querySelector("input[name='sukupuoli']:checked");
    const kieli = document.querySelector("input[name='kieli']:checked");

    //validointi 
    let isValid = true




}