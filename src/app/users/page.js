import DeleteUser from '@/util/deleteUser';
import Link from 'next/link';

async function userDataHandler() {
  let data = await fetch('http://localhost:3000/api/users');
  data = await data.json();
  return data;
}

export default async function UserList() {
  const users = await userDataHandler();
  console.log(users);
  return (
    <>
      <h1>UserList</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  href={`users/${item.id}`}
                  className="text-blue-500 hover:underline mr-2"
                >
                  {item.name}
                </Link>
                <Link
                  href={`users/${item.id}/update`}
                  className="text-green-500 hover:underline"
                >
                  Edit
                </Link>
                <div className="text-green-500 hover:underline">
                  <DeleteUser props={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
