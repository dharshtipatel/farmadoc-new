import React, { useState, useCallback, useRef } from 'react';
import Image from "next/image";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  StandaloneSearchBox,
  InfoWindow 
} from '@react-google-maps/api';
import { X } from 'lucide-react';

const libraries = ['places'];

const containerStyle = {
  width: '100%',
  height: '350px',
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

export default function LocationPicker({ onClose, showButtonOnMap = false }: MapCardProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || 'AIzaSyAG57urhZzRfpmpl2_Sc5isemW-CuXbwAU', // add your API key here
    libraries: libraries as any,
  });

  const [mapCenter, setMapCenter] = useState(centerDefault);
  const [radius, setRadius] = useState(2);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);
  const [locationName, setLocationName] = useState('');
  const [pharmaciesFound, setPharmaciesFound] = useState(true); // simulate no pharmacies found

  // Calculate zoom level based on radius
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
          setLocationName(place.formatted_address || place.name || '');
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
  const [selectedPlace, setSelectedPlace] = useState<SelectedPlace | null>(null);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="p-6 min-w-7xl w-full mx-auto font-inter bg-white rounded-md shadow-md relative">
      {/* Close Icon */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          <X size={24} />
        </button>
      )}

      <h2 className="font-semibold mb-4 text-lg pr-8">Where are you?</h2>

      <StandaloneSearchBox
        onLoad={onLoadSearchBox}
        onPlacesChanged={onPlacesChanged}
        >
        <div className="flex items-center w-full border border-[#D6DADD] rounded-md px-4 py-4 shadow-sm focus-within:ring-1 mb-4 gap-2">
            
            {/* Left Search Icon */}
            <Image 
            src="/images/search_icon.svg" 
            alt="Error" 
            width={24} 
            height={24} 
        />

            {/* Input */}
            <input
            type="text"
            placeholder="Herba Salus SNS, Italy"
            className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />

            {/* Right Settings Icon */}
            <Image 
            src="/images/dir_icon.svg" 
            alt="Error" 
            width={24} 
            height={24} 
        />
        </div>
      </StandaloneSearchBox>

      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-medium">
          Distance Range
        </label>
        <span className="text-sm font-semibold">Distance: {radius} KM</span>
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
              fillColor: '#54B0F3',
              fillOpacity: 0.2,
              strokeColor: '#1E90FF',
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
                
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                    {/* Image */}
                    <Image 
                        src="/images/medi1.png" 
                        alt="Pharmacy"
                        width={50} 
                        height={50}
                        className="rounded-md object-contain"
                    />

                    {/* Text */}
                    <div>
                        <h2 className="font-semibold text-[14px] text-[#1E3862]">
                        {selectedPlace.name}
                        </h2>
                        <p className="text-xs text-[#6B6F72] mt-1">
                        {selectedPlace.address}
                        </p>
                    </div>
                    </div>
                    <button
                    onClick={() => setSelectedPlace(null)}
                    className="text-gray-400 hover:text-gray-600"
                    >
                    ✕
                    </button>
                </div>

                {/* Hours */}
                <div className="mt-2 text-xs text-[#6B6F72]">
                    <p className="font-semibold mb-1 text-black">Operating Hours</p>
                    {selectedPlace.hours.map((h, i) => (
                    <p key={i}>{h}</p>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-3">
                    <button className="bg-gray-100 p-2 rounded">↩</button>
                    <button className="bg-[#10AF4C] text-white px-2 py-2 rounded">
                    <Image 
                        src="/images/whatsapp.svg" 
                        alt="Error" 
                        width={16} 
                        height={16} 
                    />
                    </button>
                    <button className="bg-[#1192E8] min-w-[232px] text-white px-2 py-2 rounded">
                    View all Offers
                </button>
                </div>

                
                </div>
            </InfoWindow>
          )}
        </GoogleMap>

        {/* Button positioned over the map */}
        {showButtonOnMap && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={onShowProductsClick}
              className="bg-[#1E3862] hover:bg-[#154b8b] transition text-white px-5 py-2 rounded-md text-sm font-semibold shadow-lg"
            >
              SHOW PRODUCTS NEAR YOU
            </button>
          </div>
        )}
      </div>

      {/* Button below map (when not on map) */}
      {!showButtonOnMap && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={onShowProductsClick}
            className="bg-[#1E3862] hover:bg-[#154b8b] transition text-white px-5 py-2 rounded-md text-sm font-semibold"
          >
            SHOW PRODUCTS NEAR YOU
          </button>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600">
       <span>Your Location</span>  
       <p className="font-semibold mt-1">{locationName || 'Country Club, Castel Maggiore, Herba Salus, Italy'}</p>
      </div>

      {!pharmaciesFound && (
        <p className="mt-3 inline-flex items-center gap-2 text-red-600 text-sm border border-red-600 rounded-md px-3 py-2 w-fit bg-[#FFF6F6]">
        <Image 
            src="/images/error_icon.svg" 
            alt="Error" 
            width={16} 
            height={16} 
        />
        <span>
            No pharmacies found in your area. Try expanding your search radius or entering a different location.
        </span>
        </p>
      )}
    </div>
  );
}