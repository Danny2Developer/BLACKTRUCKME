import { Accordion, AccordionItem } from "@nextui-org/react";

function PartyBusFAQ({ className, ...props }) {
  const data = [
    {
      title: "What types of party buses do you offer?",
      content:
        "At BLACKTRUCKME, we offer a range of party buses to suit various group sizes and preferences. Our fleet includes buses that accommodate anywhere from 15 to 40 passengers. Each bus comes equipped with amenities like premium sound systems, LED lighting, comfortable seating, and more.",
    },
    {
      title: " How much does it cost to rent a party bus?",
      content:
        "Pricing depends on several factors, including the size of the bus, duration of the rental, and the time of the year. For a personalized quote, please contact us with your trip details, and we’ll be happy to provide a rate.",
    },
    {
      title: "Can we decorate the bus for special events?",
      content:
        "Yes! You’re welcome to decorate the bus for your event. We simply ask that you use non-damaging materials and remove all decorations at the end of your rental period.",
    },
    {
      title: "Are the party buses equipped with restrooms?",
      content:
        "Some of our larger party buses come with restroom facilities for your convenience. Be sure to ask about this when booking if it’s a feature you require.",
    },
  ];
  return (
    <div className={`mb-[70px] ${className}`} {...props}>
      <div className="heading font-monts text-[20px] md:text-2xl font-medium mb-[12px] md:mb-[20px]">
        Party Bus Rental FAQ
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

export default PartyBusFAQ;
