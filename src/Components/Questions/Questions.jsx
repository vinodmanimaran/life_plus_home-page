import React, {useState} from 'react';
import './Questions.css'; // Import your CSS file

const Questions = () => {
const [faqItems, setFaqItems] = useState ([
  {
    question: 'How does a care coordinator help a patient at LifePlus Hospital?',
    answer: "At LifePlus Hospital, our care coordinators work closely with patients from the initial interaction. They strive to understand the patient's concerns and guide them with the best treatment options. The care coordinator will assist in scheduling appointments and help connect patients with the most suitable doctor based on their needs.",
    isOpen: false,
  },
  {
    question: 'Does LifePlus Hospital provide any emergency surgical treatment?',
    answer: 'Yes, LifePlus Hospital is equipped to handle emergency surgeries and provide prompt treatments for urgent medical conditions.',
    isOpen: false,
  },
  {
    question: 'Can I consult with a doctor online at LifePlus Hospital?',
    answer: "Yes, LifePlus Hospital offers online doctor consultations. Patients can conveniently consult with our doctors online, discussing their health concerns via call or online chat. Our doctors ensure a thorough understanding of the patient's issues and provide necessary recommendations and prescriptions.",
    isOpen: false,
  },
  {
    question: 'Does LifePlus Hospital have insurance coverage for all surgeries?',
    answer: 'LifePlus Hospital works with various insurance providers. However, insurance coverage depends on the type of health insurance (personal, corporate) and the terms set by the insurance provider. Our insurance team is dedicated to helping patients maximize the benefits of their policies.',
    isOpen: false,
  },
  {
    question: 'Does LifePlus Hospital provide a second opinion for any disease?',
    answer: 'Yes, at LifePlus Hospital, patients can seek a second medical opinion from specialized doctors for various diseases. Our doctors review pathology reports, post-operative reports, discharge summaries, current treatment plans, and provide guidance for the necessary or alternative treatment course.',
    isOpen: false,
  },
]);

  const toggleAnswer = index => {
    setFaqItems (prevItems =>
      prevItems.map ((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };

  const replyClick = (i, k) => {
    const updatedFaqItems = faqItems.map ((item, j) => ({
      ...item,
      isOpen: j === i ? !item.isOpen : false,
    }));

    setFaqItems (updatedFaqItems);
  };

  return (
    <div className="container_new">
      <div className="container_new">
        <div
          className="surgery_QA"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="surgery_FQA_box">
            <div className="faq_section_heading">
              <h3 className="section_heading">Frequently Asked Questions</h3>
            </div>
            <div className="options_container horizontal_scroll">
              <div className="col-12 col-md-6 surgery_FQA_blocks">
                {faqItems.map ((item, index) => (
                  <div
                    className={`options ${item.isOpen ? 'active' : ''}`}
                    key={index}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <div className="question_div">
                      <h4
                        className="text_font_size weighted_font_500 faq_question"
                        itemProp="name"
                      >
                        {item.question}
                      </h4>
                      <div
                        className="cross_box color_border5 flex_box flex_secondary_center flex_primary_center"
                        style={{marginTop: '17px'}}
                        onClick={() => toggleAnswer (index)}
                        role="button"
                        tabIndex="0"
                      >
                        <img
                          loading="lazy"
                          src={
                            item.isOpen
                              ? 'https://img.pristyncare.com/New%20Homepage%20Images%2Fplus%20(-1.svg?alt=media&token=4a1ce376-1dcd-484f-b7b6-b54fc4343948'
                              : 'https://img.pristyncare.com/New%20Homepage%20Images%2Fplus%20(4).svg?alt=media&token=94d56f8d-7ff5-4a43-8abe-4a028fa47b4e'
                          }
                          alt="expand icon"
                          className="expand_icon"
                        />
                      </div>
                    </div>
                    <div
                      className={`options ${item.isOpen ? 'active' : 'inactive hidden'}`}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div
                        className="type_based_content_container"
                        itemProp="text"
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;