import React from "react";
import MaxWidthWrapper from "../maxwidthwrapper/MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          <div className="h-full pt-4 flex flex-col md:flex-row md:justify-between justify-center items-center">
            <div>
              <p className=" text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All rights reserved{" "}
              </p>
            </div>
            <div className=" flex items-center justify-center">
              <div className=" flex space-x-8">
                <Link
                  rel="stylesheet"
                  href="8"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Terms
                </Link>
                <Link
                  rel="stylesheet"
                  href="8"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Privacy Policy
                </Link>
                <Link
                  rel="stylesheet"
                  href="8"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Footer Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
