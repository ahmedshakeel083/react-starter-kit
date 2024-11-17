import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

export default function Home() {
  const [open, isOpen] = useState<true | false>(false);
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Homepage",
    });
  }, []);

  const handleNavigate = () => {
    navigate("/two");
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-[33%] h-screen">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex flex-col justify-start items-center w-full h-screen gap-5 pt-[150px] pb-[150px] bg-[url('https://www.datamatics.com/hs-fs/hubfs/ms-copilot-pageherobanner-mobile.jpg?width=521&quality=low')] bg-cover">
                <h1 className="text-white font-bold text-4xl px-10">
                  Datamatics Microsoft Copilot Services
                </h1>
                <p className="text-white text-xl px-10">
                  Learning the way Microsoft Pilot Integration
                </p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-start items-center w-full h-screen gap-5 pt-[150px] pb-[150px] bg-[url('https://www.datamatics.com/hubfs/Home%20page-Navigate%20the%20Ocean%20of%20AI-Mobile-homepage%20copy.webp')] bg-cover"></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Button
            variant="primary"
            className="w-[33%] text-lg bottom-0 fixed"
            onClick={() => isOpen((prev) => !prev)}
          >
            Manage
          </Button>
        </div>
      </div>
      <Drawer open={open}>
        <DrawerContent className="flex justify-center items-center">
          <DrawerHeader className=" w-[33%]">
            <DrawerTitle className="text-[50px] text-primary font-semibold text-center">
              Manage your finances easily
            </DrawerTitle>
            <DrawerDescription>
              Making a budget is the first and the most important step of money
              management. It is a fairly simple measure and has been used for
              centuries. In order to make a budget, estimate the amount of money
              you will ideally need to spend each month
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex flex-row w-[33%] gap-4">
            <Button
              variant="primary"
              className="w-1/2"
              onClick={handleNavigate}
            >
              Submit
            </Button>
            <Button
              variant="primary-outline"
              className="w-1/2"
              onClick={() => isOpen(false)}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
