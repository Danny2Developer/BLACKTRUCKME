import { Accordion, AccordionItem } from "@nextui-org/react";
function BabyShowerFaq({ className, ...props }) {
  const data = [
    {
      title: "Why should I rent a car for a baby shower?",
      content:
        "Renting a luxury car for a baby shower adds a touch of elegance to this special celebration. It allows you or your guests to arrive in style, making the day even more memorable and stress-free with comfortable, chauffeured transportation.",
    },
    {
      title: "What types of vehicles do you offer for baby shower rentals?",
      content:
        "We offer a wide range of vehicles perfect for baby showers, including luxury sedans, SUVs, limousines, and even party buses for larger groups. Whether you’re planning a small gathering or a larger event, we have vehicles to fit your needs.",
    },
    {
      title: "Can we decorate the car for the baby shower?",
      content:
        "Absolutely! If you'd like to personalize the car with decorations like ribbons, balloons, or other baby shower-themed items, we can arrange that. Just let us know in advance, and we’ll help make it happen.",
    },
  ];
  return (
    <div className={`mb-[70px] ${className}`} {...props}>
      <div className="heading font-monts text-[20px] md:text-2xl font-medium mb-[12px] md:mb-[20px]">
        Baby Shower Car Rental FAQ
      </div>
      <Accordion
        itemClasses={{
          title: "font-monts font-medium text-[15px] md:text-[16px]",
          content: "font-dmsans text-white/85 text-[14px] md:text-[16px]",
        }}
        defaultExpandedKeys={["1"]}
        variant="bordered"
      >
        {data.map((data, index) => {
          const { title, content } = data;
          return (
            <AccordionItem key={index + 1} title={title}>
              {content}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default BabyShowerFaq;
