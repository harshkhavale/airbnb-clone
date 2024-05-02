import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              key={place._id}
              to={"/account/places/" + place._id}
              className="flex cursor-pointer bg-gray-100 p-4 rounded-2xl overflow-hidden"
            >
              <div className="w-52 h-36 rounded-xl bg-gray-300 overflow-hidden ">
                {place.photos.length > 0 && (
                  <div
                    className="h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(http://localhost:4000/uploads/${place.photos[0]})`,
                    }}
                  />
                )}
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold">{place.title}</h2>
                <p className="text-lg font-normal mt-2 ">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}