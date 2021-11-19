import '../styles/Login-Page.css';

function SocialMedia() {

    function handleRedirect (url) {
        return(
            window.open(url)
        )
    }
    return(
        <div className="wrapper">
            <div className="button">
                <div className="icon"><i className="fab fa-facebook-f"></i></div>
                <a className="removeHiperLinks" onClick={()=>{handleRedirect("https://www.facebook.com/WearThere-102306738950908")}}><span>Facebook</span></a>
            </div>
            <div className="button">
                <div className="icon"><i className="fab fa-instagram"></i></div>
                <a className="removeHiperLinks" onClick={()=>{handleRedirect("https://www.instagram.com/wearthere_/?fbclid=IwAR3G3T4Xv970_HeR1Asbppnvu47JHSVM0qcRY9bWSPuEqpiWNzOfhoCLa2U")}}><span>Instagram</span></a>
            </div>
            <div className="button">
                <div className="icon"><i className="fab fa-github"></i></div>
                <a className="removeHiperLinks" onClick={()=>{handleRedirect("https://github.com/WildCodeSchool/2021-09-lisbon-webdev-project2-group3")}}><span>GitHub</span></a>
            </div>
        </div>
    )
}

export default SocialMedia;