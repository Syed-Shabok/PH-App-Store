import TrendingApps from "@/components/homepage/TrendingApps";

export const metadata = {
  title: "Apps Page | PH-App-Store",
};

const AppsPage = () => {
  return (
    <div>
      <TrendingApps from="appsPage" />
    </div>
  );
};

export default AppsPage;
