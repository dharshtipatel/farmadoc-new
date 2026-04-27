"use client"; // ensure this is a client component
import { MapContainer, TileLayer, Circle, Marker, LayersControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAppTranslation } from "@/lib/useAppTranslation";

// Fix marker icons
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })._getIconUrl;
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
  const { t } = useAppTranslation();
  const position: [number, number] = [lat, lng];

  return (
    <div>
        <h2 className="mb-4 font-semibold text-lg">{t("mapView.title")}</h2>
        <MapContainer center={position} zoom={14} style={{ height: "600px", width: "100%" }}>
        <LayersControl position="topleft">
            <LayersControl.BaseLayer checked name={t("mapView.map")}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name={t("mapView.satellite")}>
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
