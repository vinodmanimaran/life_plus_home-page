import React, {useEffect} from 'react';
import './Whyus.css';

const Whyus = () => {
  const setbookappsource = (source, type) => {
    // Define the logic for setbookappsource
    console.log (`Setting book app source: ${source}, Type: ${type}`);
  };

  const openLeadPopup = () => {
    // Define the logic for openLeadPopup
    console.log ('Opening lead popup');
  };

  useEffect (() => {
    function openNavLinks (event) {
      document.querySelectorAll ('.dropdown_body').forEach (item => {
        item.style.cssText = 'display: none;';
      });
      const parentElement = event.currentTarget;
      const siblingElement = parentElement.nextElementSibling;
      siblingElement.style.cssText = 'display: block;';
    }

    window.addEventListener ('click', function (e) {
      document.querySelectorAll ('.dropdown').forEach (item => {
        if (
          !item.contains (e.target) &&
          item.lastChild.classList.value === 'dropdown_body'
        ) {
          item.lastChild.style.cssText = 'display: none;';
        }
      });
    });

    return () => {
      window.removeEventListener ('click', null);
    };
  }, []);

  return (
    <div style={{fontFamily: 'basic-sans'}}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.3fr 0.7fr',
          backgroundColor: '#0f234f',

        }}
      >
        <div style={{backgroundColor: '#fff'}}>
          <div style={{margin: '12rem 0'}}>
            <h2
              style={{
                color: '#00263E',
                fontFamily: 'basic-sans',
                fontSize: '35px',
                textAlign: 'center',
                fontWeight: 600,
                marginBottom: 0,
              }}
            >
              Why LifePlus Hospital?
            </h2>
            <p
              style={{
                color: '#000000',
                fontFamily: 'basic-sans',
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              Delivering Comprehensive Healthcare Services
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => {
                  setbookappsource ('Why LifePlus Hospital', 'whylifeplus');
                  openLeadPopup ();
                }}
                className="filled appointmentBtn"
                type="text"
                name="callBtn"
                id="call-us-btn"
                style={{
                  backgroundColor: '#df2e26',
                  fontFamily: 'basic-sans',
                  color: '#FFF',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  width: '70%',
                  padding: '7px 3rem',
                }}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div
                    className="call-us-text why_us_cta"
                    style={{textAlign: 'text-center'}}
                  >
                    Book Appointment
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div style={{width: '100%', margin: 'auto'}}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              margin: '3%',
              gap: '5%',
            }}
          >
            <div style={{margin: '12%'}}>
              <div className="num1"
                style={{
                  color: '#df2e26',
fontSize:"3rem",
                  fontWeight: 'bold',
                }}
              >
                01.
              </div>
              <h3
                style={{
                  color: 'white',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  marginTop: 0,
                }}
              >
                LifePlus Hospital Ensures Your Safety
              </h3>
              <p
                style={{
                  color: 'white',
                  fontSize: 'calc(14px + (16 - 14) * ((100vw - 360px) / (1440 - 360))) !important',
                }}
              >
                We prioritize your safety with advanced protocols including temperature checks, social distancing, and sanitized facilities.
              </p>
            </div>
            <div style={{margin: '12%'}}>
              <div
                style={{
                  color: '#df2e26',
                  fontSize:"3rem",

                  fontWeight: 'bold',
                }}
              >
                02.
              </div>
              <h3
                style={{
                  color: 'white',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  marginTop: 0,
                }}
              >
                Personalized Care Coordination
              </h3>
              <p
                style={{
                  color: 'white',
                  fontSize: 'calc(14px + (16 - 14) * ((100vw - 360px) / (1440 - 360))) !important',
                }}
              >
                Our dedicated Care Coordinators assist you at every step, ensuring a seamless healthcare experience.
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              margin: '3%',
              gap: '5%',
            }}
          >
            <div style={{margin: '12%'}}>
              <div
                style={{
                  color: '#df2e26',
                  fontWeight: 'bold',
                  fontSize: "2rem"
                }}>
                03.
              </div>
              <h3
                style={{
                  color: 'white',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  marginTop: 0,
                }}
              >
                Innovative Healthcare Solutions
              </h3>
              <p
                style={{
                  color: 'white',
                  fontSize: 'calc(14px + (16 - 14) * ((100vw - 360px) / (1440 - 360))) !important',
                }}
              >
                Benefit from our advanced medical expertise, cutting-edge technology, and USFDA-approved procedures.
              </p>
            </div>
            <div style={{margin: '12%'}}>
              <div
                style={{
                  color: '#df2e26',
                  fontWeight: 'bold',
                  fontSize:"2rem",

                }}
              >
                04.
              </div>
              <h3
                style={{
                  color: 'white',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  marginTop: 0,
                }}
              >
                Holistic Post-Surgery Care
              </h3>
              <p
                style={{
                  color: 'white',
                  fontSize: 'calc(14px + (16 - 14) * ((100vw - 360px) / (1440 - 360))) !important',
                }}
              >
                We provide comprehensive follow-up consultations and personalized instructions for a smooth recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
