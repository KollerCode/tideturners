import {
Button,
Carousel,
CarouselItem,
Caption,
Container,
Row,
Col,
Card,
} from "react-bootstrap";

import remi from "../assets/team/remi.png";
import bennie from "../assets/team/bennie.png";
import ryan from "../assets/team/ryan.png";
import jose from "../assets/team/jose.png";
import graham from "../assets/team/graham.png";
import sean from "../assets/team/sean.png";
import adam from "../assets/team/adam.png"

const teamData = [
  {
    id: 1,
    image: require("../assets/team/remi.png"),
    title: "Remi Crespo",
    subtitle: "Creative Director",
    description:
      "Remi has over 15 years experience in production, ranging from AAA studios (Liquid Development, Microsoft) to independent teams. He has since taken all his collective knowledge and poured it into his own company, TideTurners, with a focus in games and film. His previous roles include: Producer, Technical Artist, World Artist, & Level Designer.",
    quote: "Does not sleep",
  },
  {
    id: 2,
    image: require("../assets/team/jose.png"),
    title: "Jose Montanez",
    subtitle: "Production Manager",
    description:
      "With 16 years of project management expertise in the dynamic video game industry, Jose’s focus has primarily revolved around AAA titles. His keen proficiency has been observed in multiple areas, including Level Design and Systems Design. Jose’s previous roles include serving as Production Manager for Liquid Development, a Keywords Studio.",
    quote: "his mom says he has a great smile",
  },
  {
    id: 3,
    image: require("../assets/team/graham.png"),
    title: "Graham Leeb",
    subtitle: "Development Manager",
    description:
      "Having previously worked in Mobile development, Serious Games, Government Simulation, AAA & Indie titles, Graham has amassed 15+ of experience in development. He specializes in Unreal development, and project architecture.",
    quote: "Has cool hair",
  },
  {
    id: 4,
    image: require("../assets/team/ryan.png"),
    title: "Ryan Waller",
    subtitle: "Business Relations",
    description:
      "Ryan stands as a luminary in the entrepreneurial and investment domains, boasting over 15 years of unmatched expertise, primarily rooted in the gaming sector. As the pioneering force behind Forthright Entertainment, a high end quality boutique publishing entity synonymous with curating top-tier indie titles for PC and consoles, Ryan's unparalleled insights into the nuanced business of the gaming realm have solidified his place as a sought-after advisor among the industry's premier independent studios.",
    quote: "Super duper awesome",
  },
  {
    id: 5,
    image: require("../assets/team/bennie.png"),
    title: "Bennie Herdy",
    subtitle: "Art Director",
    description:
      "Bennie is the creative visionary of our team who leads the development and visualization of our projects, setting the artistic direction and ensuring conceptual integrity. They are meticulous in their work, coming from an artistically diverse background with experience in many different mediums of art. They specialize in Concept Art, UI Design, and Illustrations.",
    quote: "Still feeds their neopets",
  },
  {
    id: 6,
    image: require("../assets/team/adam.png"),
    title: "Adam Stagg",
    subtitle: "Lead Programmer",
    description:
      "Adam is a passionate and dedicated individual who embarked on a journey into the world of programming in 2015. With an unwavering love for the craft, Adam discovered their passion for coding through the immersive world of games, which captivated them during their formative years. In September 2022, Adam graduated from Full Sail University, equipped with a solid foundation and a wealth of knowledge in the field. Since then, they have seamlessly transitioned into the professional realm, where their enthusiasm for programming continues to flourish. Adam finds joy and fulfillment in every line of code, turning their childhood fascination with games into a lifelong commitment to creating innovative and impactful software solutions.",
    quote: "Thinks Neuralink is neat",
  },
  {
    id: 7,
    image: require("../assets/team/sean.png"),
    title: "Sean Lockhart",
    subtitle: "Lead Level Designer",
    description:
      "Sean is the silly guy behind the design and creation of our gameplay systems, and is responsible for turning said systems he creates into engaging gameplay loops. Seeing the players having fun with the things he creates is what continues to drive his passion for making games. After spending some time working outside of the creative industries, Sean realized his true calling was creating fun play spaces where others can have memorable experiences with their most cherished friends and family.",
    quote: "Enjoys getting into character",
  },
];
function Team() {
return (
  <section id="team" className="block blog-block">
    <Container fluid>
      <Row className="justify-content-center">
        {teamData.map((team) => {
          return (
            <Col
              sm={3}
              key={team.id}
              className="mb-3 col-sm-12 col-md-6 col-lg-4 col-xl-3"
            >
              <div className="">
                <Card>
                  <Card.Img variant="top" src={team.image} />
                  <Card.Body>
                    <Card.Title>{team.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {team.subtitle}
                    </Card.Subtitle>
                    <Card.Text className="holder">{team.description}</Card.Text>
                    <Card.Text className="quote">{team.quote}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);
}

export default Team;
