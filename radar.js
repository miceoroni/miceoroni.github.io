const kffcradar = document.getElementById("kffcradar")

export function fetchRadar(wxstation) {
  let url = `https://radar.weather.gov/ridge/standard/{wxstation}_loop.gif`;
  fetch(url)
    .then((response) => {
      let sucess = response.status == 200 ? "sucess" : "failure";
      console.log(sucess);
      return response.blob();
    })
    .then((myBlob) => {
      const objectURL = URL.createObjectURL(myBlob);
      final = document.createElement(Image);
      kffcradar.appendChild(final);
    });
};

