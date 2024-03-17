import { useEffect, useState } from "react";
import { User } from "../../interfaces/users";
import { getAllUsers } from "../../shared/http/json-placeholder-data/getAllUsers";
import SideBarMenu from "../../shared/components/SideBarMenu";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const [Users] = await Promise.all([getAllUsers()]);

        setUsers(Users);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <>
      <SideBarMenu />
      <ul>
        {users.map((user) => (
          <li>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
