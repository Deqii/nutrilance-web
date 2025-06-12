import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-4 m-2">
      <div className="">
        <h1 className="text-3xl font-bold">Nutrilance</h1>
      </div>
      <div className="flex gap-6">
        <Link href={"/"}>Home</Link>
        <Link href={"#services"}>Services</Link>
        <Link href={"#faq"}>FAQ</Link>
        <Link href={"/login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
