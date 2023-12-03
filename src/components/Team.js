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
      "Remi has been working for 15 years in production ranging in AAA at various studios (Liquid development/Microsoft) as well as work for independent and being a company owner outsourcing for both games and film. Such roles I have filled are technical artist/World artist, level designer and producer.",
    quote: "VTec coffee powered",
  },
  {
    id: 2,
    image: require("../assets/team/jose.png"),
    title: "Jose Montanez",
    subtitle: "Production Manager",
    description:
      "16 years of project management expertise in the dynamic video game industry, my focus has primarily revolved around AAA titles as the Production Manager for Liquid Development a Keywords Studio. During my career, I have displayed proficiency in multiple areas, including level design and systems design.",
    quote: "is super pretty",
  },
  {
    id: 3,
    image: require("../assets/team/graham.png"),
    title: "Graham Leeb",
    subtitle: "Development Manager",
    description:
      "15 years of development experience working in mobile development, serious games, government simulation, AAA and indie development. Specialist in Unreal Development, and project architecture.",
    quote: "has cool hair",
  },
  {
    id: 4,
    image: require("../assets/team/ryan.png"),
    title: "Ryan Waller",
    subtitle: "Business Relations",
    description:
      "Ryan stands as a luminary in the entrepreneurial and investment domains, boasting over 15 years of unmatched expertise, primarily rooted in the gaming sector. As the pioneering force behind Forthright Entertainment, a high end quality boutique publishing entity synonymous with curating top-tier indie titles for PC and consoles, Ryan's unparalleled insights into the nuanced business of the gaming realm have solidified his place as a sought-after advisor among the industry's premier independent studios.",
    quote: "has cool hair",
  },
  {
    id: 5,
    image: require("../assets/team/bennie.png"),
    title: "Bennie Herdy",
    subtitle: "Art Director",
    description:
      "Bennie is the creative visionary of our team who leads the development and visualization of our projects, setting the artistic direction and ensuring conceptual integrity.",
    quote: "still feeds their neopets",
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
    description: "coming soon",
    quote: "has cool hair",
  },
];
function Team() {
return (
  <section id="team" className="block blog-block">
    <Container fluid>
      <Row className="justify-content-center">
        {teamData.map((team) => {
          return (
            <Col sm={3} key={team.id} className="mb-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={team.image} />
                  <Card.Body>
                    <Card.Title>{team.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                       {team.subtitle}
                    </Card.Subtitle>
                    <Card.Text>{team.description}</Card.Text>
                    <Card.Text>{team.quote}</Card.Text>
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
