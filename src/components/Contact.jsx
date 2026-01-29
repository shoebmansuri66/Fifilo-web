import aos from "aos"
import "aos/dist/aos.css"
import { use, useEffect } from "react"
export default function Contact() {
    useEffect(() => {
        aos.init({
            duration: 1000,
            once: true,
        });
    }, [])
    return (
        <>
            <div className="port" >
                <div className="para" aos='fade-left'>
                    <h1>Contact with Us</h1>
                    <p>
                        We're here to connect, collaborate, and bring your ideas to life. <br />
                        Whether you're ready to embark on an exciting project or <br />
                        simply wish to explore how we can support your vision.
                    </p>
                    <div className="card">
                        <h2>Got a project or a <br />partnership in mind?</h2>
                        <div className="i">
                            <i className="fa-solid fa-envelope " style={{ margin: "5px", color: "#f4b400" }}>
                                hey@fifilo.com</i><br />
                            <i className="fa-solid fa-phone text-warning" style={{ margin: "5px", color: "#f4b400" }}>
                                +91-7869525027</i><br />
                            <i className="fa-solid fa-phone text-warning" style={{ margin: "5px", color: "#f4b400" }}>
                                +91-9669123488</i>
                        </div>
                    </div>
                </div>
                <form className="form" aos='fade-right'>
                    <h4> <i className="fa-solid fa-user"></i><input type="text" placeholder="Your Name" /><br />
                        <i className="fa-solid fa-envelope text-warning"></i><input type="text" placeholder="Your E-mail" /><br />
                        <i className="fa-solid fa-phone text-warning"></i><input type="text" placeholder="Your Number" /><br />
                        <i className="fa-solid fa-message"></i><input type="text" placeholder="Your Message" /></h4>

                    <button >Submit</button>
                </form>


            </div>
        </>
    )
}