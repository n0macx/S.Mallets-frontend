import { SliderModal } from './SliderModal';

const ProductsSeriesPage = () => {
  return (
    <>
      <h3 className="p-8 text-center text-6xl">ProductSeriesPage</h3>
      <SliderModal />
      <div
        id="indicators-carousel"
        className="relative mt-8 mb-8 "
        data-carousel="static"
      >
        <div className=" relative h-[500px] w-[1000px] overflow-hidden rounded-lg">
          <div className="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://www.fillmurray.com/800/401"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="1"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.fillmurray.com/600/402"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="2"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.fillmurray.com/600/403"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="3"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.fillmurray.com/600/404"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="4"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.fillmurray.com/600/405"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="5"
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg
              className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg
              className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
export default ProductsSeriesPage;
