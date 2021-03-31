import './profileinfo.scss';

const Profileinfo = () => {
    return(
      <div className="page">
        <div className="page__top"><img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/></div>
        <div className="page__user">
            <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="" className="page__icon"/>
            <div className="page__content">
                <h1 className="page__name">Dima C</h1>
                <div className="page__info active"> sfgkljgfkjgfklgjfklgfkljg</div>
            </div>
        </div>
      </div>
    );
}
export default Profileinfo;