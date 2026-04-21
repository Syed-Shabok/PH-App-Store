"use client";

import { InstallAppsContext } from "@/InstalledAppsProvider";
import { useContext } from "react";

const InstallToggleButton = ({ app }) => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  console.log(installedApps);

  const handleInstall = () => {
    if (installedApps.includes(app)) {
      alert("Already Installed.");
      return;
    }
    setInstalledApps([...installedApps, app]);
    alert("App Installed.");
  };

  return (
    <button onClick={handleInstall} className="btn btn-primary">
      Install
    </button>
  );
};

export default InstallToggleButton;
