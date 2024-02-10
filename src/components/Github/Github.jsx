// import { useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);
  const data = useLoaderData();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Alanmp1857")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-gray-600 m-9 w-1/2">
        <div className="text-center m-2 p-2 text-white text-3xl">
          Name: {data.name}
        </div>
        <div className="flex justify-center">
          <img
            className="h-72 w-72 m-2 p-2"
            src={data.avatar_url}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Alanmp1857");
  return response.json();
};
