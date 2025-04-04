import { Link, Outlet } from "@remix-run/react";
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet />
    </div>
  );
}

// export function loader({ request }: LoaderFunctionArgs) {
//   const userId = await requireUserId(request);
//   const user = await getUserById(userId);
//   return json({ user });
// }


