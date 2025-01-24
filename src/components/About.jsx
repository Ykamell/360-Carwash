import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Container } from "react-bootstrap";

const position = [10.998313461851168, -74.81171485187767];

// Solución para íconos personalizados en Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const About = () => {
  return (
    <Container className="address d-flex flex-row align-items-center">
      <Container>
        <h2>Encuéntranos</h2>
        <div>
          <p>Calle 79 # 46-40</p>
          <p>Barranquilla, Atlántico</p>
        </div>
        <div>
          <h4>Horarios</h4>
          <p><b>Lunes-Viernes: </b> 7:00am - 7:00pm</p>
          <p><b>Sábados, domingos y festivos: </b>8:00am - 7:00pm</p>
        </div>
        <p>+573205072692</p>
      </Container>
      <MapContainer
        className="map-address"
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
      >
        {/* Capa base del mapa (usando OpenStreetMap) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marcador con Popup */}
        <Marker position={position}>
          <Popup>
            Calle 70 #68-15 <br /> Barranquilla, Colombia
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default About;
