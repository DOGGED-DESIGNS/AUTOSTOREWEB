import React from "react";

import style from "./nav.module.scss";
import MaxWidthWrapper from "../maxwidthwrapper/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  return (
    <nav className={style.nav}>
      <MaxWidthWrapper>
        <div className={style.nav__linkcont}>
          <Link href="/" className={style.nav__link}>
            dogged <span className=" text-green-600"> case </span>
          </Link>

          {/* this is the link logic */}

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                {" "}
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                  href={"/api/auth/logout"}
                >
                  {" "}
                  SignOut
                </Link>{" "}
                {isAdmin ? (
                  <Link
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                    href={"/dashboard"}
                  >
                    {" "}
                    Dashboard ✨
                  </Link>
                ) : null}{" "}
                <Link
                  className={buttonVariants({
                    size: "sm",

                    className: "hidden sm:flex items-center gap-1",
                  })}
                  href={"/configure/upload"}
                >
                  {" "}
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                  href={"/api/auth/register"}
                >
                  {" "}
                  SignUp
                </Link>{" "}
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                  href={"/api/auth/login"}
                >
                  {" "}
                  Login
                </Link>
                <div className="h-8 w-px bg-zinc-50 hidden sm:block"></div>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                  href={"/configure/upload"}
                >
                  {" "}
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
