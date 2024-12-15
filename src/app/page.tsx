import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center p-4 bg-primary-veryDarkBlue">
      <section className="max-w-screen-lg w-full flex max-sm:flex-col-reverse rounded-lg bg-primary-darkDesaturatedBlue">
        <div className="sm:w-1/2 w-full flex flex-col p-10 sm:p-16 gap-6">
          <h1 className="text-3xl text-second-white font-semibold font-inter max-sm:text-center">
            Get <span className="text-primary-softViolet">insights</span> that
            help your business grow.
          </h1>
          <p className="text-second-slightlyTransparentWhite-200 font-inter max-sm:text-center">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col justify-end h-full">
            <div className="flex max-sm:flex-col items-center gap-6 sm:gap-10 ">
              <div className="flex flex-col gap-1 max-sm:items-center">
                <h2 className="text-2xl text-second-white font-inter font-semibold">
                  10k+
                </h2>
                <p className="text-second-slightlyTransparentWhite-200">
                  COMPANIES
                </p>
              </div>
              <div className="flex flex-col gap-1 max-sm:items-center">
                <h2 className="text-2xl text-second-white font-inter font-semibold">
                  314
                </h2>
                <p className="text-second-slightlyTransparentWhite-200">
                  TEMPLATES
                </p>
              </div>
              <div className="flex flex-col gap-1 max-sm:items-center">
                <h2 className="text-2xl text-second-white font-inter font-semibold ">
                  12M+
                </h2>
                <p className="text-second-slightlyTransparentWhite-200">
                  QUERIES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2  w-full rounded-t-lg sm:rounded-r-lg ">
          <div className="bg-violet-600 rounded-t-lg sm:rounded-r-lg max-sm:hidden">
            <Image
              src={"/images/image-header-desktop.jpg"}
              alt="header"
              width={500}
              height={300}
              className="w-full rounded-t-lg sm:rounded-r-lg opacity-70"
            />
          </div>
          <div className="bg-violet-600 rounded-t-lg sm:rounded-r-lg sm:hidden">
            <Image
              src={"/images/image-header-mobile.jpg"}
              alt="header"
              width={500}
              height={300}
              className="w-full rounded-t-lg sm:rounded-r-lg opacity-70"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
