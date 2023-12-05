const link = "https://api.thecatapi.com/v1/images/search?limit=10";

async function getCats() {
  try {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);

    data.forEach((result) => {
      const contendor = document.getElementById("container");
      const card = document.createElement("div");
      card.className = "cats";
      const image = document.createElement("img");
      contendor.appendChild(card);
      card.appendChild(image);
      image.src = result.url;
      image.style.width = "400px";
      image.style.marginTop = "40px";
    });
  } catch (err) {
    console.log(err);
  }
}
