import { Accordion, AccordionItem } from "@nextui-org/react";

function WeddingFAQ({...props}) {
  const data = [
    {
      title: "How far in advance should I book my wedding car rental?",
      content:
        "vehicle, we recommend booking your wedding car rental at least 3-6 months in advance. However, we can accommodate last-minute requests depending on availability.",
    },
    {
      title: "Can we decorate the car ourselves?",
      content:
        "Yes, you can add personal decorations to the car. However, we recommend discussing your plans with us beforehand to ensure that the decorations do not damage the vehicle. We also offer decoration services if you prefer to leave it to our team.",
    },
    {
      title:
        "What happens if the car I booked is unavailable on the day of the wedding?",
      content:
        "In the unlikely event that your selected vehicle becomes unavailable, we will provide a comparable or upgraded vehicle at no additional cost. We strive to ensure that your transportation needs are met without compromising quality or style.",
    },
  ];
  return (
    <div {...props} className="pb-[50px] md:pb-[70px]">
      <div className="heading font-monts text-[20px] md:text-2xl font-medium mb-[12px] md:mb-[20px]">
        Wedding Car Rental FAQ
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
          const { title, content,  } = data;
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

export default WeddingFAQ;
