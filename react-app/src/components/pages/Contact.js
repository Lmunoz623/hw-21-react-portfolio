import React from "react";

function Contact() {
  return (
    <div>
        <main action="" className="container contact-contain">
            <h2>Contact</h2>
            <ul className="contact">
                <li className="cont">Email: lisa_munoz817@yahoo.com</li>
                <li className="cont">Phone: 210.326.9111</li>
                <li className="cont">
                    <a href="Assets/Resume/LisaMunozResume.pdf">Resume</a>
                </li>
            </ul>
        </main>

        <aside>
            <h3>Find Me @</h3>
            <div className="row">
                <div className="col-4-md logo">
                    <a href="https://www.linkedin.com/in/lisa-munoz-0817?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJXsUjGEBSW%2Br65Jshadfpg%3D%3D"><img src="Assets/Photos/linkedin.png" alt="Linkedin Logo"/></a> 
                </div>
                <div className="col-4-md logo">
                    <a href="https://www.instagram.com/lisa_munoz817/"><img src="Assets/Photos/instagram.png" alt="Instagram Logo"/></a> 
                </div>
                <div className="col-4-md logo">
                    <a href="https://github.com/Lmunoz623"><img src="Assets/Photos/githubPhoto.jpg" alt="github Logo"/></a> 
                </div>
            </div>
        </aside> 
    </div>

  );
}

export default Contact;