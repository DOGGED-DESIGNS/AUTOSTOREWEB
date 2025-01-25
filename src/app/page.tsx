import MaxWidthWrapper from "@/components/maxwidthwrapper/MaxWidthWrapper";
import stylegen from "./styles/gen.module.scss";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/phone/Phone";
import { Icons } from "@/components/Icons";
import Reviews from "@/components/reviews/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// import { Icons } from "@/components/icons";
cn;

export default function Home() {
  return (
    <>
      <div className=" bg-slate-50 ">
        {" "}
        <section>
          {" "}
          <MaxWidthWrapper className={stylegen.max}>
            <div className={stylegen.div}>
              <div className={stylegen.wrapper}>
                <div className={stylegen.wrapper__inner}>
                  {" "}
                  <img className="w-full" src="/snake-1.png" />
                </div>
                <h1 className={stylegen.wrapper__h1}>
                  your Image on a{" "}
                  <span className="text-white bg-green-600 px-2"> Custom </span>
                  Phone Case
                </h1>
                <p className={stylegen.wrapper__p}>
                  {" "}
                  Capture your favourite memories with your own,{" "}
                  <span className=" font-semibold "> phone case. </span>
                  CaseCobra allows you to protect your memories, not just your
                  phone case.
                </p>

                <ul className={stylegen.wrapper__ul}>
                  <div className=" space-y-2">
                    <li className={stylegen.wrapper__li}>
                      <Check className=" h-5 w-5 shrink-0 text-green-600" />{" "}
                      High-quility, durable material.
                    </li>
                    <li className={stylegen.wrapper__li}>
                      <Check className=" h-5 w-5 shrink-0 text-green-600" /> 5
                      year print gurantee.
                    </li>
                    <li className={stylegen.wrapper__li}>
                      <Check className=" h-5 w-5 shrink-0 text-green-600" />{" "}
                      Modern iphone models supported.
                    </li>
                  </div>
                </ul>

                {/* users */}
                <div className={stylegen.wrapper__user}>
                  <div className="flex -space-x-4">
                    <img
                      src="/users/user-1.png"
                      className={stylegen.wrapper__userimg}
                    />
                    <img
                      src="/users/user-2.png"
                      className={stylegen.wrapper__userimg}
                    />
                    <img
                      src="/users/user-3.png"
                      className={stylegen.wrapper__userimg}
                    />
                  </div>

                  {/* this is the star section */}
                  <div className={stylegen.wrapper__star}>
                    <div className="flex gap-0.5">
                      <Star className="h-4 w-4 text-green-600 fill-green-600 " />
                      <Star className="h-4 w-4 text-green-600  fill-green-600" />
                      <Star className="h-4 w-4 text-green-600  fill-green-600" />
                      <Star className="h-4 w-4 text-green-600  fill-green-600" />
                      <Star className="h-4 w-4 text-green-600    fill-green-600" />
                    </div>
                    <p>
                      {" "}
                      <span className="font-semibold">1,250</span> happy
                      customers{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={stylegen.wrapper__phone}>
              <div className="relative md:max-w-xl">
                <img
                  className={stylegen.wrapper__phoneimg}
                  src="/your-image.png"
                  alt=""
                />
                <img
                  src="/line.png"
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                />
                <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
        {/* value propostition */}
        <section className="bg-slate-100 py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 ">
            <div className={stylegen.value}>
              <h2 className={stylegen.value__h2}>
                What our{" "}
                <span className="relative px-2">
                  customers
                  <Icons.underline
                    className="hidden sm:block  pointer-events-none absolute inset-x-0
                  -bottom-6 text-green-500
                  "
                  />
                </span>{" "}
                say
              </h2>
              <img src="/snake-2.png" className="w-24 order-0 lg:order-2 " />
            </div>
            {/* testimonials */}

            <div className={stylegen.test}>
              <div className={stylegen.test__star}>
                <div className=" flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8 ">
                  <p>
                    {" "}
                    The case fells durable and I even got a compliment on the
                    design. Had the case for tow and a half month now and
                    <span>the image is super clear</span>, on the case I had
                    before, the image started fading into yellow-ish color after
                    a couple weeks. Love it.""
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img
                    src="/users/user-1.png"
                    alt="user"
                    className="rounded-full h-12 object-cover"
                  />
                  <div className=" flex flex-col">
                    <p className=" font-semibold"> Jonathan </p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm"> verified Purchase </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* second user review */}
              <div className={stylegen.test__star}>
                <div className=" flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8 ">
                  <p>
                    {" "}
                    The case fells durable and I even got a compliment on the
                    design. Had the case for tow and a half month now and
                    <span>the image is super clear</span>, on the case I had
                    before, the image started fading into yellow-ish color after
                    a couple weeks. Love it.""
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img
                    src="/users/user-4.jpg"
                    alt="user"
                    className="rounded-full h-12 object-cover"
                  />
                  <div className=" flex flex-col">
                    <p className=" font-semibold"> Jonathan </p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm"> verified Purchase </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* end of second user review */}
            </div>
          </MaxWidthWrapper>

          {/* this is the revies section */}

          <div className="pt-16">{/* <Reviews /> */}</div>
        </section>
        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mb-12 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className={stylegen.value__h2}>
                    Upload yor photo and get
                    <span className=" bg-green-600 text-white relative px-2">
                      your own case
                      {/* <Icons.underline
                        className="hidden sm:block  pointer-events-none absolute inset-x-0
                  -bottom-6 text-green-500
                  "
                      /> */}
                    </span>{" "}
                    now
                  </h2>
                </div>
              </div>

              {/* this is the pics */}
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className=" relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                  <img
                    src="/arrow.png"
                    className="border-solid  absolute top-[25rem] md:top-1/2 -translate-y-1/2    
                     
                     z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                  />
                  <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm ring-inset rounded-xl bg-gray-900/5 ring-gray-900/10 lg:rounded-2x  ">
                    <img
                      src="/horse.jpg"
                      className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                    />
                  </div>
                  <Phone className="w-60" imgSrc="/horse_phone.jpg" />
                </div>
              </div>
              <ul className=" mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
                <li className=" w-fit">
                  <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
                  High-quality sillicone material.
                </li>
                <li className=" w-fit">
                  <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
                  Scratch and fingerprint resistant coating
                </li>
                <li className=" w-fit">
                  <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
                  wireless charging compatible
                </li>
                <li className=" w-fit">
                  <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />5
                  year print warranty
                </li>

                <div className="flex justify-center">
                  <Link
                    href="/configure/upload"
                    className={buttonVariants({
                      size: "lg",
                      className: "mx-auto mt-8",
                    })}
                  >
                    {" "}
                    Create your case now{" "}
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </div>
              </ul>
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </>
  );
}
