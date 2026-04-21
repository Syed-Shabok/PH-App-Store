"use client";

import { InstallAppsContext } from "@/context/InstalledAppsProvider";
import Image from "next/image";
import React, { useContext } from "react";

import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
  // console.log(installedApps, "contextData");

  const handleUninstall = (app) => {
    // console.log(app, "need to uninstall");

    const restApps = installedApps.filter((iApp) => iApp.id != app.id);
    // console.log(restApps, "restApps");

    setInstalledApps(restApps);
    toast.warning(`${app.title} is uninstalled!`);
  };

  return (
    <div className="container mx-auto my-10">
      {installedApps.length === 0 ? (
        <div className="h-screen flex items-center justify-center">
          <h2 className="font-bold text-4xl my-5">No installed apps found!</h2>
        </div>
      ) : (
        installedApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={app.image}
                  width={200}
                  height={200}
                  className="h-15 md:h-50 w-auto object-contain"
                  alt="App Logo"
                ></Image>
                <h2 className="font-semibold md:text-2xl">{app.title}</h2>
              </div>
              <button
                className="btn bg-secondary text-white"
                onClick={() => handleUninstall(app)}
              >
                Uninstall
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApps;
