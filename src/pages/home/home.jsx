import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import  { useSelector } from "react-redux";
import Button from "../../components/Button/button"
import PageTransition from "../../components/page-transition/pageTransition"
import './home.scss'

const Home = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    // console.log(darkmode)
    const Backgrounds = [
        {
            path: "/GOAT_1.png"
        },
        {
            path: "GOAT_3.png"
        },
        {
            path: "GOAT_2.png"
        }
    ]

    const projects = [
        {
            img: "/scribblet.png",
            name: "Scribblet.AI",
            platform: "iOS"
        },
        {
            img: "/fezzant.png",
            name: "Fezzant",
            platform: "Website"
        },
        {
            img: "/focusFusion.png",
            name: "FocusFusion.AI",
            platform: "MacOS"
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS"
        },
        {
            img: "/baz.png",
            name: "BAZ",
            platform: "Fashion"
        },
        {
            img: "/cykea.png",
            name: "Cykea",
            platform: "Website"
        },
    ]
    return (
        <main className="home_container" darkmode={`${darkmode}`}>
           <Button text={"contact me"} />
            <section className="hero">
                <p className="paragraph--2 hero_text" darkmode={`${darkmode}`}>
                    I am a Designer and Product Manager currently at Fezzant.
                    I love to build powerful and elegant products and
                    I’m passionate about technology and what it can do for people.
                </p>

                <Navbar iconColor={"rgba(255, 255, 255, 1)"} activeIconColor={"rgba(0, 39, 191, 1)"} />
            </section>

            <section className="project">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="project_container" key={index}>
                                <img src={project.img} alt={project.name} />
                                <p className="project_name" darkmode={`${darkmode}`}>{project.name}</p>
                                <p className="project_platform" darkmode={`${darkmode}`}>{project.platform}</p>
                            </div>
                        )
                    })
                }
            </section>
            {
                Backgrounds.map((background, index) => {
                    return (
                        <div className={`background background-${index}`}>
                             <img src={background.path} alt={background.name} />
                        </div>
                      );
                })
            }
            <ReturnBtn />
        </main>
    );
}

export default PageTransition(Home);