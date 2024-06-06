import Style from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={Style["inno-footer"]}><div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="inno-footer-c">  جميع الحقوق محفوظة © 2021 <a className="ms-2" href="https://www.mcit.gov.sa/" target="_blanck">وزارة الاتصالات وتقنية المعلومات</a></div>
          </div>
          <div className="col-12 col-md-6">
            <nav>
              <ul>
              <li><a href="about.html">عن المنصة</a></li>
              <li><a href="terms-and-conditions.html">الشروط والأحكام</a></li>
              <li><a href="privacy-policy.html">سياسة الخصوصية</a></li>
              </ul>
            </nav>
          </div>
     </div>
      </div>
      </footer>
    )
    }