import { Link, Outlet } from "@remix-run/react";
export default function Parent() {
  return (
    <div>
      <Link to="/parent/enfant">Enfant</Link>
      <Outlet />
    </div>
  );
}
