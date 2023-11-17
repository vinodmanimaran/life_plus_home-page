import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Dept.css';
import {FaHeart, FaUserMd, FaCut} from 'react-icons/fa'; 
import {GiCheckMark, GiHospital} from 'react-icons/gi';
import {FaFileInvoiceDollar, FaCreditCard} from 'react-icons/fa';
import Specialities from '../Specialities/Specialities';
import Whyus from '../Whyus/Whyus.jsx'
import {BsArrowRightShort} from 'react-icons/bs';
import News1 from '../../Assets/about_assets/news1.png'
import News0 from '../../Assets/about_assets/news0.png';
import News2 from '../../Assets/about_assets/news2.png';
import News3 from '../../Assets/about_assets/news3.png';
import News4 from '../../Assets/about_assets/news4.png';



import {
  AiOutlineSmile,
  AiOutlineHome,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import {RiHospitalLine} from 'react-icons/ri';


const Proctology = () => {
  const proctologists = [
    ' Bangalore',
    ' Chennai',
    ' Delhi',
    ' Faridabad',
    ' Ghaziabad',
    'Gurgaon',
    ' Hyderabad',
    'Mumbai',
    'Noida',
    ' Pune',
  ];

  const proctologytreatments = [
    'Proctology Treatments In Bangalore',
    'Proctology Treatments In Chennai',
    'Proctology Treatments In Delhi',
    'Proctology Treatments In Faridabad',
    'Proctology Treatments In Ghaziabad',
    'Proctology Treatments In Gurgaon',
    'Proctology Treatments In Hyderabad',
    'Proctology Treatments In Mumbai',
    'Proctology Treatments In Noida',
    'Proctology Treatments In Pune',
  ];

  const diseases = [
    'Hemorrhoids',
    'Anal Fistula',
    'Anal Fissure',
    'Pilonidal Sinus',
    'Colorectal Disorders',
    'Laser Surgery Procedures',
  ];

  const proctologyTreatments = [
    'Piles Treatment',
    'Anal Fistula Treatment',
    'Anal Fissure Treatment',
    'Pilonidal Sinus Treatment',
    'Colorectal Treatment',
    'Laser Surgery Treatment',
  ];

  const cities = [
    'Agra',
    'Ahmedabad',
    'Aurangabad',
    'Bangalore',
    'Bhopal',
    'Bhubaneswar',
    'Chandigarh',
    'Chennai',
    'Coimbatore',
    'Dehradun',
    'Delhi',
    'Faridabad',
    'Ghaziabad',
    'Gurgaon',
    'Guwahati',
    'Gwalior',
    'Hyderabad',
    'Indore',
    'Jaipur',
    'Jammu',
    'Kanpur',
    'Kochi',
    'Kolkata',
    'Kozhikode',
    'Lucknow',
    'Ludhiana',
    'Madurai',
    'Meerut',
    'Mumbai',
    'Mysore',
    'Nagpur',
    'Nashik',
    'Noida',
    'Patna',
    'Pune',
    'Raipur',
    'Ranchi',
    'Siliguri',
    'Surat',
    'Thiruvananthapuram',
    'Vadodara',
    'Varanasi',
    'Vijayawada',
    'Visakhapatnam',
  ];

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
const [faqItems, setFaqItems] = useState ([
  {
    question: 'What is Proctology?',
    answer: 'Proctology is a branch of medicine that deals with the diagnosis and treatment of diseases and medical conditions related to the anus and the rectum.',
    isOpen: false,
  },
  {
    question: 'Who are the Proctologists at LifePlus Hospital?',
    answer: 'At LifePlus Hospital, we have a team of experienced proctologists specializing in the diagnosis and treatment of various proctology-related conditions. They have extensive expertise in handling cases related to hemorrhoids, anal fistula, anal fissure, and more.',
    isOpen: false,
  },
  {
    question: 'What treatments are offered for Proctology conditions?',
    answer: 'LifePlus Hospital provides a range of treatments for Proctology conditions, including but not limited to piles treatment, anal fistula treatment, anal fissure treatment, pilonidal sinus treatment, colorectal treatment, and laser surgery treatment.',
    isOpen: false,
  },
  {
    question: 'Can I schedule a consultation with a Proctologist online?',
    answer: 'Yes, LifePlus Hospital offers online consultations with our proctologists. Patients can discuss their health concerns, receive expert advice, and get prescriptions through online appointments for added convenience.',
    isOpen: false,
  },
  {
    question: 'How can I book an appointment at LifePlus Hospital for Proctology?',
    answer: 'Booking an appointment at LifePlus Hospital is easy. You can call our helpline, use our online appointment booking system, or visit any of our clinics directly. Our team will assist you in scheduling a convenient time for your consultation or treatment.',
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


  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
  };

  const handleSubmit = () => {
    
  };

  return (
    <>
    <div className="header_content">
      <div className="dept_header_content">
        <div className="dept_header_text">
  <h2 className="dept_header_title">Specialized center for Proctology Treatment</h2>
  <p className="text_header">
    Pristyn Care is a Multispecialty healthcare provider which aims to deliver a hassle-free surgical experience to <br/>all patients by leveraging technology, and a set of advanced operations and powerful processes.<br/> Proctology is  a branch of medicine that deals with the diagnosis and treatment of diseases and medical conditions related  to the anus and the rectum.
  </p>
          <div className="cta_btn"  >
            <button className="dept_cta_btn">Call us Now 9844447766</button>
          </div>
            <h4 className="cta_text">Book Free Appointments With Our Expert Doctors Near You</h4>
          <div className="header_features" >
            <Card className="dept_card" style={{margin:"20px"}}>
              <Card.Body>
                <span className="dept_header_icon"><FaHeart size={60}/></span>
           <p>     Centre of Excellence For Colorectal Surgery</p>
              </Card.Body>
            </Card>
            <Card className = 'dept_card' style={{margin: '20px'}}>
              <span className="dept_header_icon"><FaUserMd size={60}/></span>
              <Card.Body><p>Best Proctologists With 15+ Years of Experience</p></Card.Body>
</Card>
            <Card className = 'dept_card'style={{margin:"20px"}}>
              <span className="dept_header_icon"><FaCut size={60}/></span>
              <Card.Body><p>Advanced Laser Surgery for Anorectal Diseases</p></Card.Body>
            </Card>

</div>
</div>
<div className="dept_header_form">
          <Card className="header_form" style={{margin:"30px"}}>
            
          <h3 className="header_form_title">Book FREE Doctor Appointment</h3>
            <div className="header_form_inputs">
                          <input type="text" placeholder="Patient Name" required className = 'header_input'/>
            <input type="text" placeholder="Mobile Number" required  className = 'header_input'/>
<Form.Group controlId="formCity" className="header_input">
  <Form.Control as="select" value={selectedCity} onChange={handleCityChange} style={{borderRadius:"15px",padding:"2%"}}>
    <option value="" className="opt">
      Select a city
    </option>
    {cities.map ((city, index) => (
      <option key={index} value={city}>
        {city}
      </option>
    ))}
  </Form.Control>
</Form.Group>

            </div>
<button className="book_now">Book Now</button>
          </Card>        
</div>
        </div>
        </div>

      <div className="dept_details">
        <h2 className="dept-details_text">Proctology Treatment With Advanced Laser Treatment</h2>
        <p className="details_para"style={{margin:"15px"}}>Proctology is the branch of medicine that deals with diagnosis, managing and treating problems related to anal, colon and rectum. It is also known as colorectal treatment. Pristyn Care is a multispeciality clinic that aims to provide best proctology treatment in India. The highly experienced Proctologists at Pristyn Care conduct minimally invasive laser treatment for problems that include hemorrhoids, anal fistula, fissure, chronic constipation  and pilonidal sinus.</p>
        <div className="dept_qualities">
          <Card className="quality_card" style={{margin:"20px"}}>
            <Card.Body>
             <p className="quality"> <span style={{margin:"10px",width:"100px"}}><GiCheckMark  size={60}/></span> USFDA-Approved Procedure</p>
            </Card.Body>
          </Card>
          <Card className = 'quality_card' style={{margin:"20px"}}>
  <Card.Body>
    <p className = 'quality'> <span style={{margin:"10px",width: '100px'}}><FaFileInvoiceDollar size={60}/></span> Support in Insurance Claim</p>
  </Card.Body>
</Card>
<Card className = 'quality_card' style={{margin:"20px"}}>
  <Card.Body>
   <p className = 'quality'> <span style={{margin:"10px",width:"100px"}}><FaCreditCard size={60}/></span> No-Cost EMI</p>
  </Card.Body>
</Card>
<Card className = 'quality_card' style={{margin:"20px"}}>
  <Card.Body>
 <p className = 'quality'><span style={{margin:"10px",width:"100px"}}><GiHospital size={60} /></span> 1-day Hospitalization</p>
  </Card.Body>
</Card>

        </div>
      </div>
      <Container fluid>
      <div className="our_dept_specialities" style={{backgroundColor:"lightgray"}}>
        <h2 className="our_dept_specialities_title">Our Specialities</h2>
        <div className="our_dept_special">
        <div className="special_card" style={{margin:"15px"}}>
          <BsArrowRightShort/>
          <h6>Image</h6>
          <h4>Piles</h4>
          <p>descvription</p>
        </div>
<div className="special_card" style={{margin:"15px"}}>
  <BsArrowRightShort />
  <h6>Image</h6>
  <h4>Piles</h4>
  <p>descvription</p>
</div>

<div className="special_card" style={{margin:"15px"}}>
  <BsArrowRightShort />
  <h6>Image</h6>
  <h4>Piles</h4>
  <p>descvription</p>
</div>
<div className="special_card" style={{margin:"15px"}}>
  <BsArrowRightShort />
  <h6>Image</h6>
  <h4>Piles</h4>
  <p>descvription</p>
        </div>
        </div> 
        </div>
        </Container>

<div className="dashboard" >
  <h1 className="dashboard_title">Pristyn Care in Numbers</h1>
  <div className="count_board">
    <div className="count_board_item" style={{margin:"20px"}}>
      <AiOutlineSmile size={70}  className="count_icon"/>
      <h2 className = 'count_board_item_content count'>2M+</h2>
      <p className="count_board_item_content text">Happy Clients</p>
    </div>
    <div className="count_board_item" style={{margin:"20px"}}>
      <AiOutlineHome size={70}  className="count_icon"/>
      <h2 className = 'count_board_item_content count'>150+</h2>
      <p className = 'count_board_item_content text'>Clinics</p>
    </div>
    <div className="count_board_item"  style={{margin:"20px"}}>
      <AiOutlineGlobal size={70}  className="count_icon"/>
      <h2 className = 'count_board_item_content count'>45+</h2>
      <p className = 'count_board_item_content text'>Cities</p>

    </div>
    <div className="count_board_item" style={{margin:"20px"}}>
      <AiOutlineHeart size={70}  className="count_icon"/>
      <h2 className = 'count_board_item_content count' >150k+</h2>
      <p className = 'count_board_item_content text'>Surgeries</p>
    </div>
    <div className="count_board_item" style={{margin:"20px"}}>
      <AiOutlineUser size={70}  className="count_icon" />
      <h2 className = 'count_board_item_content count'>400+</h2>
      <p className = 'count_board_item_content text'>Doctors</p>
    </div>
    <div className="count_board_item hospital" style={{margin:"20px"}}>
      <RiHospitalLine size={70}  className="count_icon"/>
      <h2 className = 'count_board_item_content count'>800+</h2>
      <p className = 'count_board_item_content text'>Hospitals</p>
    </div>

  </div>
      </div>
      <div className='section_whyus'>
     <Whyus />
 
      </div >

      <div className="dept_news_container">
        <div className="dept_news_container_title">
          <h3>Pristyn Care in news</h3>
          {/* <hr className="hr_news"/> */}
        </div>
        <div className="news_items_container">
<div className="news_item">
            <img src={News0} alt="news" className="news_img"/>
          </div>
          <div className="news_item">
            <img src={News2} alt="news" className = 'news_img'/>
</div><div className="news_item">
            <img src={News3} alt="news" className = 'news_img'/>
</div><div className="news_item">
            <img src={News4} alt="news" className = 'news_img'/>
</div><div className="news_item">
  <img src={News1} alt="news"  className = 'news_img'/>
</div>

        </div>
      </div>
{/* Banner Image  */}
      <div className="dept_faq">
        <div className="container_new">
  <div className="container_new">
    <div className="surgery_QA" itemScope itemType="https://schema.org/FAQPage">
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
                  <div className="type_based_content_container" itemProp="text">
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

</div>
      <Container>
        <div className="cities_container">
        <h4
  className="top_cities_container_title"
  style={{textAlign: 'center', margin: '10px'}}
>
  Top Cities Where We Provide Proctology Treatment
</h4>

        <div className="top_cities_container">
            {proctologytreatments.map((treatments, index) => (
  <div className="card">
  <h6 className="treatment">{treatments}</h6>

</div>

))}
  {/* <Card className="card">
    <h6 className="treatment">Treatments In Chennai</h6>

  </Card>
  <Card className = 'card'>
    <h6 className="treatment">Treatments In Pune</h6>

  </Card>
  <Card className = 'card'>
    <h6 className="treatment">Treatments In Hyderabad</h6>

  </Card>
  <Card className = 'card'>
    <h6 className="treatment">Treatments In Bangalore</h6>

  </Card>
 */}

</div>

       </div>
       <div className="top_cities_content">
  <h3>Proctology Treatments at Pristyn Care for Various Diseases</h3>
  <p className="top_cities_details">
    Pristyn Care houses proctologists and general surgeons who specialize in the diagnosis and treatment of various types of anorectal diseases such as piles, fissures, fistula, pilonidal sinus, etc. All ailments that are related to the anal, colon, and rectal region are handled by them. Another term is also used for them, i.e., Colorectal Surgeons. The doctors we have at Pristyn Care are certified and have years of experience.
  </p><br />
  <p>
    With the help of Pristyn Care surgeons, you can get proper treatment for various diseases, including:
  </p>
  <h5 style={{color:"red"}} className="readmore">Readmore</h5>
</div>

        </Container>
      

      <Container>
        <Row>
          <Col md={6}>
            <div className="get_in_touch_content">
              <div className="get_in_touch_text">
              
              <h3 className="container_heading" >Get in Touch</h3>
              <p>
                Tell us about your problems and we'll figure out the best
                treatment option for you
                </p>
                </div>
<Col md={6}>
  <Card className="get_in_touch_form" style={{marginLeft:"30%"}}>
    <Card.Title>
      <h4 className="form_heading">Let's Schedule your Surgery</h4>
    </Card.Title>
    <Card.Body>
      <Form onSubmit={handleSubmit}>
      <div className="submit_form">
        <Form.Group controlId="formPatientName" className="input">
          <Form.Control type="text" required placeholder="Patient Name" />
        </Form.Group>
        <Form.Group controlId="formMobileNumber" className="input">
          <Form.Control type="tel" required placeholder="Mobile Number" />
        </Form.Group>
        <Form.Group controlId="formPatientName" className="input">
          <Form.Control type="text" required placeholder="Patient Name" />
        </Form.Group>
        <Form.Group controlId="formCity" className="input">
          <Form.Control
            as="select"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" className="opt">
              Select a city
            </option>
            {cities.map ((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formDisease" className="input">
          <Form.Control
            as="select"
            value={selectedDisease}
            onChange={handleDiseaseChange}
          >
            <option value="" className="opt">
              Select a Disease
            </option>
            {diseases.map ((disease, index) => (
              <option key={index} value={disease}>
                {disease}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
</Col>


            </div>
                          <div className="get_in_touch_areas">
                <h5 className="content">
                  LifePlus services are accessible Pan India
                </h5>
                <p className="content">
                  LifePlus has taken the latest medical technologies to ensure
                  consistent quality of advanced surgical care in 45+ cities of
                  India, including
                  <span
                    style={{ cursor: 'pointer', color: '#00BFFF' }}
                  >
                    {' '}
                    Agra, Ahmedabad, Aurangabad, Bangalore, Bhopal,
                    Bhubaneswar, Chandigarh, Chennai, Coimbatore, Dehradun,
                    Delhi, Faridabad, Ghaziabad, Gurgaon, Guwahati, Gwalior,
                    Hyderabad, Indore, Jaipur, Jammu, Kanpur, Kochi, Kolkata,
                    Kozhikode, Lucknow, Ludhiana, Madurai, Meerut, Mumbai,
                    Mysore, Nagpur, Nashik, Noida, Patna, Pune, Raipur, Ranchi,
                    Siliguri, Surat, Thiruvananthapuram, Vadodara, Varanasi,
                    Vijayawada, and Visakhapatnam{' '}
                  </span>
                  .
                </p>

<div className="treatments_cities">
                <div className="city">
                  <h5>Proctologists in Top Cities</h5>
                  <Row>
                    {proctologists.map((proctologist, index) => (
                      <Col key={index} md={3}>
                        <ol className="city_list">
                          <li>
                            {' '}
                            <span
                              style={{
                                cursor: 'pointer',
                                color: '#00BFFF',
                              }}
                            >
                              {proctologist}
                            </span>
                          </li>
                        </ol>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="treatments">
                  <h5>Proctology Treatments</h5>
                  <Row>
                    {proctologyTreatments.map((treatment, index) => (
                      <Col key={index} md={4}>
                        <ol className="treatments_list">
                          <li>
                            <span
                              style={{
                                cursor: 'pointer',
                                color: '#00BFFF',
                              }}
                            >
                              {treatment}
                            </span>
                          </li>
                        </ol>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Proctology;
