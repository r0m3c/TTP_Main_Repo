import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  console.log(userId);

  return <h1>User ID: {userId}</h1>;
}

export default User;