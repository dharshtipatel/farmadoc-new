"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  StandaloneSearchBox,
  InfoWindow,
} from "@react-google-maps/api";
import { X } from "lucide-react";
import { useAppTranslation } from "@/lib/useAppTranslation";

const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "350px",
};

const centerDefault = {
  lat: 45.43,
  lng: 11.98,
};

const distanceMax = 20;

interface SelectedPlace {
  name: string;
  address: string;
  hours: string[];
}

interface MapCardProps {
  onClose?: () => void;
  showButtonOnMap?: boolean;
}

export default function LocationPicker({
  onClose,
  showButtonOnMap = false,
}: MapCardProps) {
  const { t } = useAppTranslation();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: libraries as any,
  });

  const [mapCenter, setMapCenter] = useState(centerDefault);
  const [radius, setRadius] = useState(2);
  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);
  const [locationName, setLocationName] = useState("");
  const [pharmaciesFound, setPharmaciesFound] = useState(true);
  const [selectedPlace, setSelectedPlace] =
    useState<SelectedPlace | null>(null);

  const getZoomFromRadius = (radius: number) => {
    if (radius <= 2) return 13;
    if (radius <= 5) return 12;
    if (radius <= 10) return 11;
    if (radius <= 15) return 10;
    return 9;
  };

  const [zoom, setZoom] = useState(getZoomFromRadius(2));

  const onLoadSearchBox = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        if (place.geometry?.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          setMapCenter({ lat, lng });
          setLocationName(
            place.formatted_address || place.name || ""
          );
          setPharmaciesFound(false);
        }
      }
    }
  };

  const onRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRadius = Number(e.target.value);
    setRadius(newRadius);
    setZoom(getZoomFromRadius(newRadius));
  };

  const onShowProductsClick = () => {
    setPharmaciesFound(false);
  };

  if (loadError) return <div>{t("map.errorLoading")}</div>;
  if (!isLoaded) return <div>{t("map.loading")}</div>;

  return (
    <div className="p-6 min-w-7xl w-full mx-auto font-inter bg-white rounded-md shadow-md relative">
      
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          <X size={24} />
        </button>
      )}

      <h2 className="font-semibold mb-4 text-lg pr-8">
        {t("map.title")}
      </h2>

      <StandaloneSearchBox
        onLoad={onLoadSearchBox}
        onPlacesChanged={onPlacesChanged}
      >
        <div className="flex items-center w-full border border-[#D6DADD] rounded-md px-4 py-4 shadow-sm mb-4 gap-2">
          <Image src="/images/search_icon.svg" alt="search" width={24} height={24} />

          <input
            type="text"
            placeholder={t("map.searchPlaceholder")}
            className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          />

          <Image src="/images/dir_icon.svg" alt="dir" width={24} height={24} />
        </div>
      </StandaloneSearchBox>

      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-medium">
          {t("map.distanceRange")}
        </label>
        <span className="text-sm font-semibold">
          {t("map.distance")} {radius} KM
        </span>
      </div>

      <input
        type="range"
        min={1}
        max={distanceMax}
        value={radius}
        onChange={onRadiusChange}
        className="w-full mb-4"
      />

      <div className="relative">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoom}
        >
          <Marker
            position={mapCenter}
            onClick={() =>
              setSelectedPlace({
                name: "BENU Pharmacy",
                address: "Via Palmanova, 65, Milano",
                hours: [
                    "Mo: 08:00AM - 10:00PM",
                    "Tu: 08:00AM - 10:00PM",
                    "We: 10:00AM - 12:00PM",
                    "Th: 12:00PM - 02:00PM",
                    "Fr: 02:00PM - 04:00PM",
                    "Sa: Closed",
                    "Su: Closed",
                ],
              })
            }
          />

          <Circle
            center={mapCenter}
            radius={radius * 1000}
            options={{
              fillColor: "#54B0F3",
              fillOpacity: 0.2,
              strokeColor: "#1E90FF",
              strokeOpacity: 0.7,
              strokeWeight: 1,
            }}
          />

          {selectedPlace && (
            <InfoWindow
              position={mapCenter}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div className="w-[356px] bg-white rounded-lg shadow-lg p-3">

                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/medi1.png"
                      alt="pharmacy"
                      width={50}
                      height={50}
                    />

                    <div>
                      <h2 className="font-semibold text-[14px] text-[#1E3862]">
                        {selectedPlace.name}
                      </h2>
                      <p className="text-xs text-[#6B6F72] mt-1">
                        {selectedPlace.address}
                      </p>
                    </div>
                  </div>
                  ✕
                </div>

                <div className="mt-2 text-xs text-[#6B6F72]">
                  <p className="font-semibold mb-1 text-black">
                    {t("map.operatingHours")}
                  </p>
                  {selectedPlace.hours.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <button className="bg-[#1192E8] min-w-[232px] text-white px-2 py-2 rounded">
                    {t("map.viewOffers")}
                  </button>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>

        {showButtonOnMap && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <button className="bg-[#1E3862] text-white px-5 py-2 rounded-md text-sm font-semibold">
              {t("map.showProducts")}
            </button>
          </div>
        )}
      </div>

      {!showButtonOnMap && (
        <div className="mt-3 flex justify-center">
          <button className="bg-[#1E3862] text-white px-5 py-2 rounded-md text-sm font-semibold">
            {t("map.showProducts")}
          </button>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600">
        <span>{t("map.yourLocation")}</span>
        <p className="font-semibold mt-1">
          {locationName || t("map.defaultLocation")}
        </p>
      </div>

      {!pharmaciesFound && (
        <p className="mt-3 text-red-600 text-sm border border-red-600 rounded-md px-3 py-2 bg-[#FFF6F6]">
          {t("map.noResults")}
        </p>
      )}
    </div>
  );
}