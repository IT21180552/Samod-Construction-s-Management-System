import React, { useEffect, useState } from "react";
import DishCard from "../../components/Packages/DashCard";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminOverview from "./AdminOverview";
import AddOnesList from "../../components/Packages/AddOnesList";
import PackageCard from "../../components/Packages/DashCard";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const samplePackages = [
  {
    id: 1,
    name: "The Grandeur",
    source: "Maria's Kitchen",
    href: "#",
    avgRating: 5,
    noOfRatings: 120,
    price: "45,054,000 LKR",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    menu: ["Rice", "Eggs", "Chicken"],
  },
  {
    id: 2,
    name: "Basic Tee 8-Pack 2",
    source: "Maria's Kitchen 2",
    href: "#",
    avgRating: 4,
    noOfRatings: 141,
    price: "$256.25",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    menu: ["Rice", "Eggs", "Chicken"],
  },
  {
    id: 3,
    name: "Basic Tee 8-Pack 3",
    source: "Maria's Kitchen 3",
    href: "#",
    avgRating: 2,
    noOfRatings: 41,
    price: "$100",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    menu: ["Rice", "Eggs", "Chicken"],
  },
  {
    id: 4,
    name: "Basic Tee 8-Pack 3",
    source: "Maria's Kitchen 3",
    href: "#",
    avgRating: 2,
    noOfRatings: 41,
    price: "$100",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    menu: ["Rice", "Eggs", "Chicken"],
  },
];

const PackageDashboard = () => {
  const [dishes, setDishes] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [backgroundImg, setBackgroundImg] = useState(
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  );

  const [userFeedback, setUserFeedback] = useState({
    avgRating: 4.4,
    noOfRatings: 102,
  });
  const [packages, setPackages] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/packages/getAllPackages").then((res) => {
      setPackages(res.data);
    });
  }, []);

  console.log(packages);

  return (
    <div>
      <div>
        <div className="absolute  w-full bg-cover bg-blend-overlay" />

        <div className="w-6xl p-2 backdrop-blur-xl bg-white text-black h-[500px]">
          <div className="flex justify-center space-x-96  ">
            <h1 className="font-bold text-lg text-purple-800">
              Packages List{" "}
            </h1>
            <h1 className="font-bold text-lg text-purple-800">Add-Ons List </h1>
          </div>
          <div className="flex space-x-4 justify-start p-4">
            {/* <div className="w-12/12 " style={{ height: "30rem" }}>
              {packages.map((item, idx) => {
                return (
                  // <div key={item._id}>
                  <PackageCard
                    isButtonVisible={isButtonVisible}
                    item = {item}
                  />
                  // </div>
                );
              })}
            </div> */}

            <div className=" overflow-scroll h-[450px] ">
              <div className=" w-[600px]">
              {packages.map((item, idx) => {
                return (
                  <div key={item._id}>
                  <PackageCard
                    isButtonVisible={isButtonVisible}
                    item = {item}
                  />
                  </div>
                )
              })}
              </div>
            </div>

            <div className=" overflow-x-auto h-[450px]">
              <AdminOverview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDashboard;
