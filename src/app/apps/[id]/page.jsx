export const metadata = {
  title: "App Details | PH-App-Store",
};

const AppsDetails = async ({ params }) => {
  const { id } = await params;

  console.log("App ID: ", id);

  return (
    <div>
      <h1 className="text-blue-500 bg-blue-50 font-bold text-5xl h-screen flex items-center justify-center">
        App Details Page
      </h1>
    </div>
  );
};

export default AppsDetails;
