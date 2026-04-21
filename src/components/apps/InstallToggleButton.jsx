"use client";

import { InstallAppsContext } from "@/context/InstalledAppsProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleButton = ({ app }) => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  const isInstalled = installedApps.find((a) => a.id === app.id);

  // console.log(installedApps);

  const handleInstall = () => {
    if (installedApps.some((a) => a.id === app.id)) {
      toast.error("App is Already Installed.");
      return;
    }
    setInstalledApps([...installedApps, app]);
    toast.success("App Successfully Installed.");
  };

  return (
    <button
      disabled={isInstalled ? true : false}
      onClick={handleInstall}
      className="btn btn-primary"
    >
      Install
    </button>
  );
};

export default InstallToggleButton;
