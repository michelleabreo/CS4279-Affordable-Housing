# Maps Page
The page currently simply displays a map centered on Nashville, displaying the labelled neighborhoods of Nashville as provided by [data.nashville.gov](https://data.nashville.gov/Metro-Government/Neighborhood-Association-Boundaries-GIS-/qytv-2cu8)

The page was implemented in HTML/css, and [Leaflet.js](https://leafletjs.com) was used to create and display a map of Nashville with the neighborhood overlay.

### Demo
Due to the way the page loads the neighborhood information, this page must be accessed through a server. Because Nodejs has not been set up for this page, the easiest way to do this is by opening `python.exe` in the project directory. Enter the command `python -m http.server` in the prompt window and a server should be initialized on `port 8000`. This can be accessed in your web browser at `http://localhost:8000`
