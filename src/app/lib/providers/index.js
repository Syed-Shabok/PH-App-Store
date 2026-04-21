"use client";

import InstalledAppsProvider from "@/context/InstalledAppsProvider";

const Providers = ({ children }) => {
  return <InstalledAppsProvider>{children}</InstalledAppsProvider>;
};

export default Providers;
