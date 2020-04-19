export default function getProducts(
  dataOperation,
  url = "http://127.0.0.1:3000/api/cameras"
) {
  const fetchProducts = async function () {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log("dta", data);
        return dataOperation(data);
      } else {
        let err = response.status;
        if (err == 404) {
          console.log("error 404");
          error(err);
        } else {
          console.error("retour du serveur: ", err);
        }
      }
    } catch (err) {
      console.log("error", err);
      error(err);
    }
  };
  fetchProducts().then("promise log", console.log);
  console.log("bonjour");

  const error = (err) => {
    console.error("pas de donnée:", err);

    const imageUrl =
      "https://image.freepik.com/vecteurs-libre/glitch-error-404-page_23-2148105404.jpg";
    const divHome = document.getElementById("home");
    const createDiv = document.createElement("div");

    divHome.appendChild(createDiv);

    createDiv.innerHTML = `
  <h2>erreur avec le serveur de donnée</h2>
  <p>${err}</p>
  <img src="${imageUrl}" alt="erreur 503">
`;
  };
}
