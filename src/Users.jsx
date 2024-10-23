import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>Number of Users : {user.length}</h2>
      {user.map((users) => (
        <User users={users}></User>
      ))}
    </div>
  );
}
