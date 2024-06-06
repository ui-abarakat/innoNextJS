import Link from "next/link";
import MainMenu from "./mainMenu";
import Image from "next/image";
import WhiteLogo from "/public/img/logo/logo-white.png"
import Style from "./header.module.scss";


export default function Header() {
  return (
    <div className={Style["inno-header"]}>
  <div className="container">
  <div className="row">
    <div className="col-12">
      <div className={Style["inno-header-c"]}>
        <Link href="index.html" className={Style["inno-logo"]}> 
        <Image 
        src={WhiteLogo}
        alt="وزارة الاتصالات وتقنية المعلومات"
        priority={false} 
        />
        </Link>
         <MainMenu />
         
      </div>
    </div>
  </div>
</div></div>
)
}