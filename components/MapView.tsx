"use client"; // ensure this is a client component
import { MapContainer, TileLayer, Circle, Marker, LayersControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

type MapViewProps = {
  lat: number;
  lng: number;
};

export default function MapView({ lat, lng }: MapViewProps) {
  const position: [number, number] = [lat, lng];

  return (
    <div>
        <h2 className="mb-4 font-semibold text-lg">Map</h2>
        <MapContainer center={position} zoom={14} style={{ height: "600px", width: "100%" }}>
        <LayersControl position="topleft">
            <LayersControl.BaseLayer checked name="Map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Satellite">
            <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
        </LayersControl>

        <Marker position={position} />
        <Circle
            center={position}
            radius={300}
            pathOptions={{ fillColor: "blue", color: "blue", fillOpacity: 0.3 }}
        />
        </MapContainer>
    </div>
  );
}