import "../styles/footer.css"
import Logo from "../components/Logo.jsx"

const Footer = () => {
    return (
        <section>
            <footer className="footer">
                <Logo couleur="blanc"/>
                <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
            </footer>
        </section>
    )    
}
export default Footer;