import { Accordion, AccordionItem } from "@nextui-org/react";

function PromRentalFAQ({ className, ...props }) {
  const data = [
    {
      title: "Why should I rent a car for prom?",
      content:
        "Renting a luxury car for prom adds a touch of elegance and style to your night. You’ll make a grand entrance, create unforgettable memories, and enjoy the comfort of a chauffeur-driven vehicle.",
    },
    {
      title: "What types of cars do you offer for prom rentals?",
      content:
        "We offer a variety of luxury cars, including classic limousines, sleek sedans, stretch limos, and even exotic cars like sports models. Each car is designed to match the sophistication of your prom night.",
    },
    {
      title: "Are there any restrictions on who can rent a car for prom?",
      content:
        "We require that an adult over 18 years of age books the rental. All passengers must follow local laws, including rules regarding alcohol consumption for those under 21.",
    },
  ];
  return (
    <div className={`mb-[70px] ${className}`} {...props}>
      <div className="heading font-monts text-[20px] md:text-2xl font-medium mb-[12px] md:mb-[20px]">
        Prom Car Rental FAQ
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

export default PromRentalFAQ;
