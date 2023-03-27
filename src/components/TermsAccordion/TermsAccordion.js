import { useState } from "react";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Accordion, AccordionDetails } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import "./TermsAccordion.css";

const TermsAccordion = ({
  title,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
  desc9,
  desc10,
  desc11,
}) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-space">{desc1}</Typography>
          <Typography className="accordion-space">{desc2}</Typography>
          <Typography className="accordion-space">{desc3}</Typography>
          <Typography className="accordion-space">{desc4}</Typography>
          <Typography className="accordion-space">{desc5}</Typography>
          <Typography className="accordion-space">{desc6}</Typography>
          <Typography className="accordion-space">{desc7}</Typography>
          <Typography className="accordion-space">{desc8}</Typography>
          <Typography className="accordion-space">{desc9}</Typography>
          <Typography className="accordion-space">{desc10}</Typography>
          <Typography className="accordion-space">{desc11}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default TermsAccordion;
