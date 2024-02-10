import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="bg-gray-600 text-center m-2 p-2 text-3xl text-white font-bold">
      User: {id}
    </div>
  );
};

export default User;
