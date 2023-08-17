import "./contact-us.scss"

export default function ContactForm(){
    return(
        <div className="contact-us" id="contact">
            <div className="contact-header">Contact Us</div>
            <form action="https://formsubmit.co/davidtgondo@gmail.com" method="POST">
                <div className="form-group">
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" name="fname" placeholder="Full Name" id="fname"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email Address" id="email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Message" id="message"/>
                </div>
                
                <button type="submit">Submit</button>



            </form>
        </div>
    )
}