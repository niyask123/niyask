"use client";
import { CardBody, CardContainer, CardItem } from "../../AceternityUI/3D-cardEffect/3d-card";


export function ThreeDCardDemo() {
  return (
    <div className="flex flex-col lg:flex-row">
    <CardContainer className="inter-var">
    
      <CardBody className="bg-gray-300/30 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] gap-4 h-auto rounded-xl p-6 border  ">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="150" className="w-full mt-4">
          <img
            src="/img/niyas/niyashead.jpeg"
            height="1000"
            width="1000"
            className="h-[30rem] w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          
        </CardItem>
        
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
          
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
    
      <CardBody className="bg-gray-300/30 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="150" className="w-full mt-4">
          <img
            src="/img/niyas/niyasstay.jpeg"
            height="1000"
            width="1000"
            className="h-[30rem] w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          
        </CardItem>
        
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
          
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
    
      <CardBody className="bg-gray-300/30 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="150" className="w-full mt-4">
          <img
            src="/img/niyas/niyas2.jpeg"
            height="1000"
            width="1000"
            className="h-[30rem] w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          
        </CardItem>
        
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
          
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
      </CardContainer>
      </div>

  );
}
