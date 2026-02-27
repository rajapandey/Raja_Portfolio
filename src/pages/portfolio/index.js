import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import taskManagerImg from "../../assets/images/taskManager.png";
import cryptoAppImg from "../../assets/images/cryptoApp.png";
import cartImg from "../../assets/images/cart.png";
import portfolioImg from "../../assets/images/portfolio.png";
import intakeImg from "../../assets/images/intake.png";
import krislinImg from "../../assets/images/krislin.png";
import fourPillarsImg from "../../assets/images/fourPillars.png";
import tumchaDabbaImg from "../../assets/images/tumchaDabba.png";

export const Portfolio = () => {
  const getImageSrc = (imgName) => {
    switch (imgName) {
      case "taskManager.png": return taskManagerImg;
      case "cryptoApp.png": return cryptoAppImg;
      case "cart.png": return cartImg;
      case "portfolio.png": return portfolioImg;
      case "intake.png": return intakeImg;
      case "krislin.png": return krislinImg;
      case "fourPillars.png": return fourPillarsImg;
      case "tumchaDabba.png": return tumchaDabbaImg;
      default: return `../../assets/images/${imgName}`;
    }
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={getImageSrc(data.img)} alt={data.description} />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
