import './CSS/App.css';

function App() {
  var map = L.map('map').setView([51.505, -0.09], 13);
  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default App;
