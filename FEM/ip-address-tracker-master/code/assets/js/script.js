const fetchIpAddress = async (event) => {
  event.preventDefault();

  const API_KEY = "at_Raxq9U6Y4XsOdKq8JKy1wUUvBL0dz";
  // GET IP ADDRESS FROM HTML FORM SUBMISSION
  const input = document.querySelector(".search-box");
  const address = input.value.trim();

  if (address) {
    try {
      //   FETCH THE DATA FOR THE RESPECTIVE IP ADDRESS
      const response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${address}`
      );

      // CHECK FOR ERROR

      if (!response.ok) {
        throw new Error("Failed to fetch IP location");
      }

      // PARSE JSON
      const data = await response.json();

      const { location } = data;
      const { city, region, postalCode, timezone } = location;
      const isp = data.isp;

      // POPULATE HTML
      document.querySelector(
        ".location h1"
      ).textContent = `${city}, ${region} ${postalCode}`;
      document.querySelector(".timezone h1").textContent = `UTC ${timezone}`;
      document.querySelector(".isp h1").textContent = isp;
      document.querySelector(".address h1").textContent = address;

      // GENERATE MAP
      generateMap(location.lat, location.lng);
    } catch (error) {
      console.log("Error fetching IP location:", error);
    }
  }
};

// GENERATE MAP FUNCTION
function generateMap(latitude, longitude) {
  const mapContainer = document.getElementById("map");

  // REMOVE PREVIOUS MAP IF IT EXISTS
  if (mapContainer._leaflet_id) {
    mapContainer._leaflet_id = null;
  }

  const map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map);
}

// ADD EVENT LISTENER
const searchForm = document.querySelector(".search-box-container form");
searchForm.addEventListener("submit", fetchIpAddress);
