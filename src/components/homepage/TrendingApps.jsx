import { FaDownload, FaStar } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import Link from "next/link";
import AppCard from "../ui/AppCard";

const appsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  return data;
};

const TrendingApps = async ({ from }) => {
  const apps = await appsPromise();

  return (
    <div className="container mx-auto my-15">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">
          {from === "homePage" ? "Trending Apps" : "All Apps"}
        </h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {
        <div className="grid grid-cols-3 gap-5">
          {apps
            .slice(0, from === "homePage" ? 6 : apps.length)
            .map((app, ind) => {
              return <AppCard app={app} key={ind} />;
            })}
        </div>
      }

      {from === "homePage" ? (
        <div className="text-center mt-4">
          <Link href={"/apps"}>
            <button className="btn bg-purple-500 text-white">View All</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TrendingApps;
