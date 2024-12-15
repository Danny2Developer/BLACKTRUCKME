import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const VehicleRentalFaq = ({ className, ...props }) => {
  const data = [
    {
      title: "What insurance do you require?",
      content:
        "You need a full coverage auto insurance policy with comprehensive and collision coverage that transfers over to a rental vehicle.",
      content2:
        "Premium luxury and exotic vehicles with MSPRs over $150K require bodily injury/property damage liability with property damage coverage of at least $300K depending on the value of the vehicles.",
      content3:
        "Standard luxury vehicles with MSRPs under $150K require bodily injury/property damage liability with property damage coverage of at least $100K depending on the value of the vehicle. Our team will help verify your coverage and make any adjustments, if necessary.",
    },
    {
      title: "What documents do you require?",
      content:
        "A valid driver’s license and proof of insurance Your reservation deposit and rental fee are due at time of pick up.",
    },
    {
      title: "Is there a minimum rental period?",
      content: "No, there is not.",
    },
    {
      title: "Is smoking permitted in the vehicles?",
      content:
        "Smoking is NOT permitted in any of a BLACKTRUCKME vehicle, and is subject to a fee, which is mentioned in our vehicle rental contracts.",
    },
    {
      title: "How old do you need to be to rent an exotic car?",
      content: "You must be 18 years of age, with a valid driver’s license.",
    },
    {
      title: "Do you deliver?",
      content:
        "Yes, returning customers and 3-day rentals are eligible for free delivery.",
    },
    {
      title: "Is a deposit required?",
      content:
        "Yes, a $500 – $3,000 deposit is required to reserve your rental. Your deposit will be fully refunded after your vehicle has been inspected for damage. Your refund can take 2-5 days to complete depending on your bank.",
    },
    {
      title: "Can I go anywhere with my BLACKTRUCKME rental?",
      content:
        "No; all BLACKTRUCKME vehicles are strictly limited to a 30-mile radius from our offices. We remind our customers not to engage in any activity deemed inappropriate with the rental car. That involves racing, unlicensed driving, or any illegal actions.",
    },
  ];
  return (
    <div className={`mb-[50px] md:mb-[70px] ${className}`} {...props}>
      <div className="heading font-monts text-[20px] md:text-2xl font-medium mb-[12px] md:mb-[20px]">
        Vehicle Rental FAQ
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
          const { title, content, content2, content3 } = data;
          return (
            <AccordionItem key={index + 1} title={title}>
              {content}
              <p className="mt-[10px]">{content2}</p>
              <p className="mt-[10px]">{content3}</p>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default VehicleRentalFaq;
