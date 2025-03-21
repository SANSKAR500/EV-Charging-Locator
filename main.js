
    function initMap() {
      // Default location (e.g., New Delhi)
      const defaultLocation = { lat: 28.6139, lng: 77.2090 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: defaultLocation,
      });

      // Add a marker
      new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "New Delhi",
      });
    }
 