import { React, useState } from "react";
import "../pages/Home.css";
import testinomialimage from "../assets/testinomialimage.png";
import testinomialuser from "../assets/testinomialuser.png";
import star1 from "../assets/Star1.png";
import redblur from "../assets/redblur.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";

const Testinomial = () => {
  const [teststate, setTestState] = useState({
    heading: "The Best Financial Accounting App Ever!",
    desc: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
    name: "Nick Jonas",
    image: user1,
    id:'user1'
  });

  let testinomail = [
    {
      heading: "The Best Financial Accounting App Ever!",
      desc: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
      name: "Nick Jonas",
      image: user1,
      id: "user1",
    },
    {
      heading: "An Innovative Product in Finance!",
      desc: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
      name: "John Wick",
      image: user2,
      id: "user2",
    },
    {
      heading: "Amazed By The Features !",
      desc: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
      name: "Harry Solve",
      image: user3,
      id: "user3",
    },
    {
      heading: "The Best Financial Accounting App Ever!",
      desc: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
      name: "Kelly Thomas",
      image: user4,
      id: "user4",
    },
    {
      heading: "Really Its a useful Product!",
      desc: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
      name: "Ani Rouza",
      image: user5,
      id: "user5",
    },
  ];

  const handletest = (e) => {
    const selectedUser = e.target.dataset.user;
    const newTestimonial = testinomail.find((user) => user.id === selectedUser);

    if (newTestimonial) {
      setTestState(newTestimonial);
      const userImages = document.querySelectorAll(".userimagewrapper img");
      userImages.forEach((img) => {
        if (img.dataset.user === selectedUser) {
          img.classList.add("selected-user");
        } else {
          img.classList.remove("selected-user");
        }
      });
    }
  };
  return (
    <div className="container testinomail bg-light py-5" data-aos="fade-left"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <h2 className="">Testinomial</h2>
      <h3>what our users say about us?</h3>
      <div className="homefeatures container d-flex align-items-center justify-items-center bg-light px-0 position-relative">
        <div className="redBlurfeaturestes">
          <img src={redblur} alt="redblur" className="img-fluid" />
        </div>
        <div className="d-flex justify-content-center align-items-center mqw-100  w-100">
          <img
            src={testinomialimage}
            alt="testnomialimage"
            className="img-fluid testnomialimage"
          />
        </div>
        <div className=" featurestext  h-100  ps-0 py-5 mqpy0">
          <ul className="list-unstyled d-flex justify-content-start align-items-start px-5 mqpx0">
            <li className="px-5">
              <p className="mb-1 mqp mqmb-3">
                <span className="faetureheadingp hoverred">
                  {teststate.heading}
                </span>
              </p>
              <p className="featurep ">“{teststate.desc}” </p>
              <div
                className="d-flex align-items-center justify-content-start userimagewrapper"
                onClick={(e) => {
                  handletest(e);
                }}
              >
                 <img
                src={user1}
               alt="user1"
                className={`img-fluid me-2 user1  ${
                  teststate.id === "user1" ? "selected-user" : ""
                }`}
                data-user="user1"
              />
                <img
                  src={user2}
                  alt={user2}
                  className={`img-fluid me-2 user2 ${
                    teststate.id === "user2" ? "selected-user" : ""
                  }`}
                  data-user="user2"
                />
                <img
                  src={user3}
                  alt={user3}
                  className={`img-fluid me-2 user3 ${
                    teststate.id === "user3" ? "selected-user" : ""
                  }`}
                  data-user="user3"
                />
                <img
                  src={user4}
                  alt={user4}
                  className={`img-fluid me-2 user4 ${
                    teststate.id === "user4" ? "selected-user" : ""
                  }`}
                  data-user="user4"
                />
                <img
                  src={user5}
                  alt={user5}
                  className={`img-fluid me-2 user5 ${
                    teststate.id === "user5" ? "selected-user" : ""
                  }`}
                  data-user="user5"
                />
              </div>
              <p className="testinomialnamep mt-3 hoverred">{teststate.name}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="staradtest position-absolute">
        <img src={star1} alt="star2" />
      </div>
    </div>
  );
};

export default Testinomial;
