import { Link, useLocation } from "react-router-dom";

export default function NavLink({
  to,
  className,
  inActiveClassname,
  activeClassName,
  children,
  ...etc
}) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={`${className} ${
        isActive ? activeClassName : inActiveClassname
      }`}
      {...etc}
    >
      {children}
    </Link>
  );
}
