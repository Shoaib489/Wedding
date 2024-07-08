import React from 'react'
import classes from "./footer.module.css"
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube,IconBrandWhatsapp } from "@tabler/icons-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className={classes.iconsBrand}>
        <div className={classes.iconsSize}><IconBrandFacebook stroke={2} /></div>
        <div className={classes.iconsSize}><IconBrandTwitter stroke={2} /></div>
        <div className={classes.iconsSize}><IconBrandInstagram stroke={2} /></div>
        <div className={classes.iconsSize}><IconBrandYoutube stroke={2} /></div>
      </div>
      <div className={classes.footerLink}>
        <Link  href="/">home</Link>
        <Link href="/aboutus">about us</Link>
        <Link href="/contactus">contact us</Link>
      </div>
      <div className={classes.footerend}>
        <p>Copyright @ 2022 All Rights Reserved.</p>
      </div>
      <div className={classes.whatsapp}>
            <IconBrandWhatsapp className={classes.iconincrease} stroke={2}  />
        </div>
    </div>

  )
}

export default Footer