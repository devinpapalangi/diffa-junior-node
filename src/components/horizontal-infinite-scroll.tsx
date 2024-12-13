import React, { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import { CalendarDays } from "lucide-react";

interface Props {
  images: { img: string }[];
  scrollSpeed?: number; // Optional scroll speed prop
}

const HorizontalInfiniteScroll = ({ images, scrollSpeed = 1 }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const originalChildren = [...scrollContainer.children];
      originalChildren.forEach((child) => {
        const clone = child.cloneNode(true) as HTMLElement;
        scrollContainer.appendChild(clone);
      });
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar gap-16"
      >
        {images.map((item, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <img
                src={item.img}
                alt={`Image ${index}`}
                className="h-32 w-32 m-2 rounded-lg object-cover"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white border rounded-lg shadow-lg p-4">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-gray-500">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default HorizontalInfiniteScroll;
