
import React from "react";
import {Container} from "react-bootstrap";
import "../styles/AboutUs.css";

import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const hrStyle = {
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "1px",
    backgroundColor: "white",
    width: "100%"
  };

  const hrStyle_2 = {
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "auto",
    height: "1px",
    backgroundColor: "#333",
    width: "80%"
  };

  return (
    <Container id="aboutUs-frame" style={{marginTop: "40px"}}>
    <h3 id="aboutUs-title">Our Mission</h3>
        <hr style={hrStyle}></hr>
    <div className={classes.container}>
    <Slide direction="left" in={true}>
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quality Assurance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
          <li>
          With more than 20 years of extensive experience in the automotive industry, We have all the right 
          connections to make your dream car come together.
          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Automotive Performance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
                          <li>
                            <p> Engine Performance Upgrades (Turbo, Supercharger, Computer Chip,...)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Drivetrain Modifications and Upgrades </p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Suspension Upgrades and Brakes Upgrades</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Enhanced Performance Exhaust Upgrades</p>
                          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Exterior Cosmetics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>  
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
                          <li>
                            <p> Comprehensive Body Kit Modifications (Spoilers, Wide Body, Flares,...)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Custom Powder Coating Rims and Brake Calipers</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                          <p> Ceramic Coating/Premium Paint Protection</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                            <p> Custom 3D PPF(Paint Protection Film)</p>
                          </li>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor: "#333", color:"white"}} TransitionProps={{unmountOnExit: true}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Interior Modifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{width: "100%"}}>
          <hr style={hrStyle}></hr>  
          <ul style = {{ fontSize: "14px", position: 'relative', left: '12px'}}>
                          <li>
                           <p> Complete Custom Interior (Change on Design, Leather, Stiching,...)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                           <p> Custom Sound System, Navigation, Dash Cam, Anti-Theft System with GPS Tracking.</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                          <p> Custom Dash (Gauge and Indicators)</p>
                          </li>
                          <hr style={hrStyle_2}></hr> 
                          <li>
                           <p> LED Ambient Lighting</p>
                          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>    
    </div>
    </Slide>
    </div>
    </Container>
  );
}


// import React, { Component } from "react";
// import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
// import image_performance from "../images/Exterior-intro-2.jpg";
// import image_cosmetic_1 from "../images/Exterior-intro-3-sm.jpg";
// import image_cosmetic_2 from "../images/interior-intro-3.jpg";
// import "../styles/AboutUs.css";

// class AboutUs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const titleStyle = {
//       fontSize: "28px",
//       fontWeight: "500",
//       padding: " 10px 0px 15px 0px",
//       marginLeft: "20px",
//     };
//     const titleStyle_2 = {
//       textDecoration: "underline",
//       fontSize: "24px",
//       fontWeight: "500",
//       padding: " 10px 0px 15px 0px",
//       marginLeft: "20px",
//     };
//     const hrStyle = {
//       display: "block",
//       marginTop: "10px",
//       marginBottom: "10px",
//       marginLeft: "auto",
//       marginRight: "auto",
//       height: "1px",
//       backgroundColor: "#333",
//     };
//     const hrStyle_2 = {
//       display: "block",
//       marginTop: "5px",
//       marginBottom: "30px",
//       marginLeft: "auto",
//       marginRight: "auto",
//       height: "1px",
//       backgroundColor: "white",
//     };

//     return (
//       <Container id="aboutUs-frame">
//         <h3 id="aboutUs-title">Our Mission</h3>
//         <hr style={hrStyle_2}></hr>
//         <Container className="outer-frame">
//           <Container className="frame">
//             <Tab.Container
//               className="left-tabs"
//               id="left-tabs"
//               defaultActiveKey="first"
//             >
//               <Row>
//                 <Col sm={3} className="col-left">
//                   <Nav variant="pills" className="flex-column">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first"> Quality Assurance</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second"> Automotive Performance</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third"> Exterior Cosmetics</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="fourth"> Interior Modifications</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                 </Col>
//                 <Col sm={9}>
//                   <Tab.Content>
//                     <Tab.Pane eventKey="first">
//                       <Container className="assurance">
//                         <h4 style={titleStyle_2}>
//                           Our Commitment to Perfection{" "}
//                         </h4>
//                         <ul className="about-list-img">
//                           <li>
//                             <p>
//                               Our goal is to use the best in business to
//                               complete each area of your project to ensure the
//                               highest quality and craftsmanship in every part of
//                               customization to make the project exceed our
//                               clients expectation and make dreams come true...
//                             </p>
//                           </li>
//                           <hr style={hrStyle}></hr>
//                           <li>
//                             <p>
//                               All kinds of customization (interior, exterior,
//                               performance) Designing interior, exterior and best
//                               performance upgrades for the project. With more
//                               than 20 years of extensive experience in the
//                               automotive industry, We have all the right
//                               connections to make your dream car come together.
//                             </p>
//                           </li>
//                         </ul>
//                       </Container>
//                     </Tab.Pane>

//                     <Tab.Pane eventKey="second">
//                       <h4 style={titleStyle}>Automotive Performance</h4>
//                       <hr style={hrStyle}></hr>
//                       <div className="about-img-container">
//                         <img
//                           src={image_performance}
//                           className="about-img"
//                           alt="car"
//                           width="100%"
//                           height="auto"
//                         />
//                         <ul className="about-list-img">
//                           <li>
//                             <p> Engine Performance Upgrades (Turbo, Supercharger, Computer Chip,...)</p>
//                           </li>
//                           <li>
//                             <p> Drivetrain Modifications and Upgrades </p>
//                           </li>
//                           <li>
//                             <p> Suspension Upgrades and Brakes Upgrades</p>
//                           </li>
//                           <li>
//                             <p> Enhanced Performance Exhaust Upgrades</p>
//                           </li>
//                         </ul>
//                       </div>
//                     </Tab.Pane>

//                     <Tab.Pane eventKey="third">
//                       <h4 style={titleStyle}>Exterior Cosmetics</h4>
//                       <hr style={hrStyle}></hr>
//                       <div className="about-img-container">
//                         <img
//                           src={image_cosmetic_1}
//                           alt="car"
//                           className="about-img"
//                           width="100%"
//                           height="auto"
//                         />
//                         <ul className="about-list-img">
//                           <li>
//                             <p> Comprehensive Body Kit Modifications (Spoilers, Wide Body, Flares,...)</p>
//                           </li>
//                           <li>
//                             <p> Custom Paint Jobs</p>
//                           </li>
//                           <li>
//                             <p> Custom 3D PPF(Paint Protection Film)</p>
//                           </li>
//                           <li>
//                             <p> Ceramic Coating/Premium Paint Protection</p>
//                           </li>
//                           <li>
//                             <p> Custom 3D Wrap in Any Color</p>
//                           </li>
//                           <li>
//                             <p> Custom Powder Coating Rims and Brake Calipers</p>
//                           </li>
//                         </ul>
//                       </div>
//                     </Tab.Pane>

//                     <Tab.Pane eventKey="fourth">
//                       <h4 style={titleStyle}>Interior Modifications</h4>
//                       <hr style={hrStyle}></hr>
//                       <div className="about-img-container">
//                         <img
//                           src={image_cosmetic_2}
//                           alt="car"
//                           width="100%"
//                           className="about-img"
//                           height="auto"
//                         />
//                         <ul className="about-list-img">
//                           <li>
//                             <p> Complete Custom Interior (Change on Design, Leather, Stiching,...)</p>
//                           </li>
//                           <li>
//                             <p> LED Ambient Lighting</p>
//                           </li>
//                           <li>
//                             <p> Custom Sound System, Navigation, Dash Cam, Anti-Theft System with GPS Tracking, and Front and Rear Cameras.</p>
//                           </li>
//                           <li>
//                             <p> Custom Dash (Gauge and Indicators)</p>
//                           </li>
//                         </ul>
//                       </div>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Col>
//               </Row>
//             </Tab.Container>
//           </Container>
//         </Container>
//       </Container>
//     );
//   }
// }


// export default AboutUs;
