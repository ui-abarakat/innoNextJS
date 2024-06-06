import Link from "next/link"
import { MainMenuItem } from "./navItems"
import { ProfileMenuItems } from "./profileMenuItems"
import Style from "./header.module.scss"
import Button from "../Button/Button"

export default function MainMenu() {
    return (
    <nav>
        <ul>
            {MainMenuItem.map(link => 
                <li key={link.id}>
                    <a href={link.url}>{link.arName}</a>
                </li>
            )}
            <li>
            <Button size="sm" color="light"><i className="inb in-user"></i></Button>
            <div className={Style["inno-nav-drop"]}>
            <div className={Style["inno-user-card"]}>
             
             <h4 className={Style["inno-user-name"]}>جوانا عبدالوهاب السليمان</h4>
             <p>مدير التسويق والعلاقات العامة</p>
             <a href="mailto:" className={Style["inno-user-email"]}>jsuliman@mcit.gov.sa</a>
             <div className={Style["inno-user-points"]}>
               <span>2,457</span>
             </div>
             <nav>
               <ul>
                 {ProfileMenuItems.map(profilItem =>
                     <li key={profilItem.id}>
                        <Link href={profilItem.url}>{profilItem.arName}</Link>
                        </li>
                 )}
               </ul>
             </nav>
           </div>
         </div>
            </li>

            <li><Button size="sm" color="primary">شارك بفكرة</Button></li>
            </ul>
    </nav>
)}
