import React from "react";
import { Link } from "react-router-dom";
import C from "../assets/c.png";
import Cplus from "../assets/cplus.jpg";
import Java from "../assets/java.png";
import Web from "../assets/web.jpg";
import Python from "../assets/Python.png";
import Flutter from "../assets/flutter.jpg";

const Categories = () => {
  const dummyCategories = [
    { id: 1, title: "JAVA", path: "/java", photo: Java },
    { id: 2, title: "C", path: "/cprog", photo: C },
    { id: 3, title: "C++", path: "/cplus", photo: Cplus },
    { id: 4, title: "Web", path: "/web", photo: Web },
    { id: 5, title: "Python", path: "/python", photo: Python },
    { id: 6, title: "Flutter", path: "/flutter", photo: Flutter },
  ];
  return (
    <div>
      {/* wrapper */}
      <div className="mb-[3em]">
        <h2 className="text-zinc-400 font-bold text-lg sm:text-4xl">
          Please Select A Category
        </h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {dummyCategories.map((item) => (
          <div
            key={item.id}
            className=" w-[100%] sm:w-[55%]  md:w-[30%]  lg:w-[20%] bg-zinc-800 p-3 rounded-xl"
          >
            <Link to={item.path}>
              <img
                src={item.photo}
                alt=""
                className="w-full object-cover rounded-xl"
              />

              <div>
                <p className="text-zinc-300 mt-5">{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
