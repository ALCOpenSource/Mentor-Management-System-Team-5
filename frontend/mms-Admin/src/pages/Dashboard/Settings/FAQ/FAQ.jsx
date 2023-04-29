import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FAQ.module.scss";
import { getGeneralFaq, getTechnicalFaq } from "@/redux/Settings/SettingsSlice";
import Loader from "@/components/Loader/Loader";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";

import { ReactComponent as ExpandIcon } from "@/assets/icons/faq-expand-icon.svg";
import { ReactComponent as CollapseIcon } from "@/assets/icons/faq-collapse-icon.svg";

function FAQ() {
  const dispatch = useDispatch();

  //It will be used after data is populated
  // const generalFAQData = useSelector((state)=> state?.settings?.getGeneralFaqData);
  // const technicalFAQData = useSelector((state)=> state?.settings?.getTechnicalFaqData);
  const getGeneralFaqLoading = useSelector((state) => state?.loading?.getGeneralFaqLoading);
  const getTechnicalFaqLoading = useSelector((state) => state?.loading?.getTechnicalFaqLoading);

  useEffect(() => {
    dispatch(getGeneralFaq());
    dispatch(getTechnicalFaq());
  }, [dispatch]);

  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const handleToggle = (index) => {
    if (toggle.index === index) {
      setToggle({
        index,
        toggle: !toggle.toggle
      });
    } else {
      setToggle({
        index,
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
          {toggle.index === `${type}${index}` && toggle.toggle && <p className={cx(styles.answer)}>{faq.answer}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className={cx(styles.faqContainer, "flexCol")}>
      <div className={cx(styles.wrapper, "flexCol", styles.generalFAQ)}>
        <h6 className={cx(styles.heading)}>General FAQ</h6>
        {getGeneralFaqLoading ? (
          <Loader fullPage={false} />
        ) : Array.isArray(generalFAQData) && generalFAQData.length > 0 ? (
          <div className={cx(styles.faqList, "flexCol")}>
            {generalFAQData.map((faq, index) => accordionComponent(faq, index, "general"))}
          </div>
        ) : (
          <div className={cx(styles.noDataDiv, "flexCol-fully-centered")}>
            <img src={emptySelectionIcon} alt='empty-selection-icon' className={cx(styles.icon)} />
            <small>The FAQ List is empty</small>
          </div>
        )}
      </div>

      <div className={cx(styles.wrapper, "flexCol", styles.technicalFAQ)}>
        <h6 className={cx(styles.heading)}>Technical FAQ</h6>
        {getTechnicalFaqLoading ? (
          <Loader fullPage={false} />
        ) : Array.isArray(technicalFAQData) && technicalFAQData.length > 0 ? (
          <div className={cx(styles.faqList, "flexCol")}>
            {technicalFAQData.map((faq, index) => accordionComponent(faq, index, "technical"))}
          </div>
        ) : (
          <div className={cx(styles.noDataDiv, "flexCol-fully-centered")}>
            <img src={emptySelectionIcon} alt='empty-selection-icon' className={cx(styles.icon)} />
            <small>The FAQ List is empty</small>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
