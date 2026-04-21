import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl">Apps Details Loading...</h1>
      {/* <HashLoader color="#ad46ff" className="bg-red-500" /> */}
    </div>
  );
};

export default loading;
