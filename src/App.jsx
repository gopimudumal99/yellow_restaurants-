import './App.css'
import { Map,Marker, GoogleApiWrapper } from "google-maps-react";
import data from "../data.json";
function App(props) {
  return (
    <div className="App" style={{width:"100vw",height:"100vh"}}>
      <Map
        google={props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        className={"map"}
        zoom={5}
      >
        {data.map((el, i) => {
          return (
            <Marker key={el.id} name={el.name} position={{ lat: el.lat, lng: el.long }} />
          );
        })}
      </Map>

    </div>
  )
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDP_PFyWyBQC_RIi-9LOX8qQl_puNyaAsI"
})(App); 