import React, { useState } from "react";
import cx from "classnames";
import styles from "./FAQ.module.scss";

import { ReactComponent as ExpandIcon } from "@/assets/icons/faq-expand-icon.svg";
import { ReactComponent as CollapseIcon } from "@/assets/icons/faq-collapse-icon.svg";

const FAQ = () => {
  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const handleToggle = (index) => {
    if (toggle.index === index) {
      setToggle({
        index: index,
        toggle: !toggle.toggle
      });
    } else {
      setToggle({
        index: index,
        toggle: true
      });
    }
  };

  const generalFAQData = [
    {
      question: "General Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    },
    {
      question: "General Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    },
    {
      question: "General Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    },
    {
      question: "General Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    }
  ];

  const technicalFAQData = [
    {
      question: "Technical Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    },
    {
      question: "Technical Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    },
    {
      question: "Technical Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    },
    {
      question: "Technical Frequently Asked Question?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem nesciunt! Corrupti voluptatem a maxime cum dicta, tempora eaque. Quis laboriosam qui non quae illo ad aspernatur nostrum sequi eum."
    }
  ];

  const accordionComponent = (faq, index, type) => {
    return (
      <div className={cx(styles.faqItem, "flexRow")} key={index}>
        <div className={cx(styles.faqToggler)}>
          {toggle.index === `${type}${index}` && toggle.toggle ? (
            <CollapseIcon onClick={() => handleToggle(`${type}${index}`)} />
          ) : (
            <ExpandIcon onClick={() => handleToggle(`${type}${index}`)} />
          )}
        </div>
        <div className={cx(styles.faqBody, "flexCol")}>
          <h6 className={cx(styles.question)}>{faq.question}</h6>
          {toggle.index === `${type}${index}` && toggle.toggle && (
            <p className={cx(styles.answer)}>{faq.answer}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={cx(styles.faqContainer, "flexCol")}>
      <div className={cx(styles.wrapper, "flexCol", styles.generalFAQ)}>
        <h6 className={cx(styles.heading)}>General FAQ</h6>
        <div className={cx(styles.faqList, "flexCol")}>
          {generalFAQData.map((faq, index) => accordionComponent(faq, index, "general"))}
        </div>
      </div>

      <div className={cx(styles.wrapper, "flexCol", styles.technicalFAQ)}>
        <h6 className={cx(styles.heading)}>Technical FAQ</h6>
        <div className={cx(styles.faqList, "flexCol")}>
          {technicalFAQData.map((faq, index) => accordionComponent(faq, index, "technical"))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
