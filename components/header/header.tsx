import Link from "next/link";

export const HeaderComponent = () => {
  
    
    return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-8 px-24 bg-slate-300">
      <Link href={"/"}><h1 className="font-extrabold text-4xl">Ovos</h1></Link>
      <nav className="sm:flex flex-row items-center justify-center list-none gap-4">
        <Link href={"/aboutus"}>
          <li>Aboutus</li>
        </Link>
        <Link href={"/doctors"}>
          <li>Doctors</li>
        </Link>
        <Link href={"/testimonials"}>
          <li>Testimonials</li>
        </Link>
        <Link href={"/auth/register"}>
          <li>Auth</li>
        </Link>
      </nav>
    </div>
  );
};
