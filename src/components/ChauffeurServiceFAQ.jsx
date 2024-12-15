import { Accordion, AccordionItem } from "@nextui-org/react";

function ChauffeurServiceFAQ({ ...props}) {
  const data = [
    {
      title: "What is included in the chauffeur service?",
      content:
        "Our chauffeur service includes a professional, well-dressed driver dedicated to providing you with a luxurious, safe, and comfortable travel experience. We offer door-to-door service, assistance with luggage, and flexible routing to meet your specific needs.",
    },
    {
      title: "Are the chauffeurs professionally trained?",
      content:
        "Yes, all of our chauffeurs are professionally trained, experienced, and background-checked to ensure the highest level of service and safety. They are knowledgeable about the best routes and are dedicated to providing a smooth and enjoyable ride.",
    },
    {
      title: "How is chauffeur service different from ride-sharing?",
      content:
        "Our chauffeur service provides a personalized and luxurious experience with dedicated drivers and premium vehicles. Unlike ride-sharing, you won’t have to wait for a car, deal with surge pricing, or compromise on the quality of your ride. Our chauffeurs are committed to offering a superior, tailored service for your needs.",
    },
    {
      title: "What if I need to cancel my booking?",
      content:
        "We understand that plans can change. Please notify us as soon as possible if you need to cancel or reschedule your booking. Our cancellation policy will be outlined at the time of booking, and we strive to be as accommodating as possible.",
    },
  ];
  return (
    <div {...props} className={`mb-[70px]`}>
      <div className="heading font-monts text-[20px] md:text-2xl font-medium mb-[12px] md:mb-[20px]">
        Chauffeur Service FAQ
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

export default ChauffeurServiceFAQ;
