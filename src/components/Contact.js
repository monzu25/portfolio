import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaUser,
  FaAddressBook,
  FaMailBulk,
} from "react-icons/fa";
import { Form } from 'react-bootstrap';
import { Button } from 'bootstrap';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jbyejfs', 'template_d04822h', form.current, 'user_8GD12Fi9OxRVylvJBgD1B')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };





  return (

    <div id="contact" className="contact">
      <div className="container">
        <div className="contactSection">
          <h2 className="text-center text-danger">Contact Me</h2>
          <div className="row justify-center">
            <div className="col-6 ">
              <div className="icons align-items-center">
                <div className="d-flex ">
                  <div className="me-3 text-white">
                    <FaUser className="contactIcon" />
                  </div>

                  <div className="info text-white">
                    <div className="head text-danger">Name:</div>
                    <div className="sub-title">MD. MONZU</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-3 text-white">
                    <FaAddressBook className="contactIcon" />
                  </div>
                  <div className="info text-white">
                    <div className="head text-danger">Address:</div>
                    <div className="sub-title">
                      22 D Block, Kolpolok Residence, <br />  Chittagong 4000,<br />  Bangladesh

                    </div>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="me-3 text-white">
                    <FaMailBulk className="contactIcon" />
                  </div>
                  <div className="info text-white">
                    <div className="head text-danger">Email:</div>
                    <div className="sub-title">dev.monzu@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <Form className="mt-3" ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-white">Full Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="You Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="text-white">Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} />
                </Form.Group>

                <button className="btn btn-success" type="submit">Submit

                </button>

              </Form>



              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
