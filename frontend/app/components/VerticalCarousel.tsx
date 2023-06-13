import { FC, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { CarouselListResponseDataItem } from "~/api/strapi";
import classnames from "classnames";

export const VerticalCarousel: FC<{
  carousels: CarouselListResponseDataItem[];
}> = ({ carousels }) => {
  const handlers = useSwipeable({
    onSwipedDown: () => {
      if (active === 0) {
        setActive(carousels.length - 1);
      } else {
        setActive(active - 1);
      }
      setSwiped(true);
    },
    onSwipedUp: () => {
      if (active === carousels.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
      setSwiped(true);
    },
    trackMouse: true,
  });

  const [active, setActive] = useState(0);
  const [swiped, setSwiped] = useState(false);

  useEffect(() => {
    setActive(0);
    setSwiped(false);
  }, [carousels]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!swiped) {
        setActive((active) => {
          if (active === carousels.length - 1) {
            return 0;
          } else {
            return active + 1;
          }
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" {...handlers}>
      <div className="h-96">
        {/* slides */}
        {carousels.map((carousel, i) => (
          <div
            className={classnames(
              "absolute bottom-0 top-0 flex w-full transition-opacity duration-500",
              { "opacity-100": i === active },
              { "opacity-0": i !== active }
            )}
          >
            <div className="flex basis-3/4 flex-col items-end bg-main py-8 pl-16 pr-36">
              <div className="text-3xl text-white">
                {carousel.attributes?.Title}
              </div>
              <div className="text-xs text-white">
                {carousel.attributes?.TitleCaption}
              </div>
              <div>
                {(carousel.attributes?.Body || "")
                  .split("\n")
                  .map((line: string) => (
                    <div className="mb-1 text-xs text-white"> {line}</div>
                  ))}
              </div>
            </div>

            <div className="relative -left-32 flex flex-col items-end">
              <div className="mb-4 text-main">
                {carousel.attributes?.ImageCaption}
              </div>
              <img
                style={{ border: "14px solid #FFFFFF" }}
                src={
                  "http://localhost:1337" +
                  carousel.attributes?.Image?.data?.attributes?.formats.small
                    .url
                }
                alt={carousel.attributes?.Image?.data?.attributes?.name}
              />
            </div>
          </div>
        ))}
      </div>

      {/* indicators */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2 ">
        {carousels.map((_, i) => (
          <div
            className={classnames(
              { "bg-black": i === active },
              { "bg-gray-400": i !== active },
              "h-2 w-2 rounded-full"
            )}
          />
        ))}
      </div>
    </div>
  );
};
