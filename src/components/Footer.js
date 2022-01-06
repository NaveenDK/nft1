import React from 'react'
import './Footer.css'
import punkLogo from '../assets/header/logo-v3.svg'

const Footer = () => {
    return (
<footer className="footer-3">
        <div className="wrapper-1160">
            <div className="footer-hero">
                    <div className="footer-contact">
                    <div class="mini-heading-green">NO CREDIT CARD REQUIRED</div>
                    <h2 class="heading-h2-v2">Get a Demo of Avo today!</h2>
                   
                    </div>
                    <img src={punkLogo} className='punkLogo' alt="" />
                    {/* <img 
                     src="https://assets.website-files.com/5ec440af4659932990a1020c/6126238e144f7970c00d7c57_60f17a27f09c3f9cecf7ef53_footer-avatar.png" loading="lazy" width="281" alt="" className="footer-avatar"></img> */}
                    
            </div>
            <div className="footer-content">
                <div> 
                    <div className="footar-quote">Ship quality insights in an hour, not days or weeks.</div>
                </div>
                <div className="footer-grid">
                <div><a href="/about" class="footer-link-2">About</a><a href="/jobs" class="footer-link-2">Jobs</a><a href="https://www.avo.app/docs/" class="footer-link-2">Docs</a><a href="/security" class="footer-link-2">Security</a></div>
                <div><a href="/terms" class="footer-link-2">Terms and Conditions</a><a href="/privacy" class="footer-link-2">Privacy Policy</a><a href="/cookies" class="footer-link-2">Cookie Policy</a></div>
                <div><div className="footer-link-2">Let’s chat!</div><a href="mailto:hi@avo.app" className="footer-link-2">hi@avo.app</a><div className="social-wrap"><a href="https://facebook.com/avohq" className="socila-link w-inline-block"><img src="https://assets.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3f7722f7ef58_icon%20(2).svg" loading="lazy" alt=""/></a><a href="https://twitter.com/avohq" className="socila-link w-inline-block"><img src="https://assets.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3fa670f7ef56_icon%20(4).svg" loading="lazy" alt=""/></a><a href="https://www.linkedin.com/company/avohq" className="socila-link w-inline-block"><img src="https://assets.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3f1f0df7ef59_icon%20(1).svg" loading="lazy" alt=""/></a><a href="https://www.instagram.com/avohq" className="socila-link w-inline-block"><img src="https://assets.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3f768ef7ef57_icon%20(3).svg" loading="lazy" alt=""/></a></div></div>
                </div>

            </div>
        </div>
</footer>
        
        // <div className="main-footer">
        //     <div className="container">
        //          <div className="row">
        //             <div className="col">
        //                 <h4>Neuraverse </h4>
        //                 <ul>
        //                     <li>020202</li>
        //                     <li></li>
        //                     <li></li>
        //                 </ul>
        //             </div>
        //             <div className="col">
        //             <h4>Neuraverse </h4>
        //                 <ul>
        //                     <li>020202</li>
        //                     <li></li>
        //                     <li></li>
        //                 </ul>
        //             </div>
        //             <div className="col">
        //             <h4>Neuraverse </h4>
        //                 <ul>
        //                     <li>020202</li>
        //                     <li></li>
        //                     <li></li>
        //                 </ul>
        //             </div>
        //          </div>
        //     </div>
        // </div>
    )
}

export default Footer
