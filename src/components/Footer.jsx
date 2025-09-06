import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/95eTQrdDCrwxW4iV9" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Samastipur, Bihar</p></a>
                            <a href="tel:+91-9065382715" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-phone"></i>+91-9065382715</p></a>
                            <a href="mailto:omtarafoundation21@gmail.com" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-envelope"></i>omtarafoundation21@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom"  target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom"  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom"  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com//"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom"  target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Events</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="/">The Om Tara Foundation</a> | 2025, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://namastetech.in">Namaste Tech Solutions (NTS)</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}