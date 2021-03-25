import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div className = "social-container">
        
      <a href="http://www.facebook.com/sphhp">
  <FontAwesomeIcon icon={faFacebook} style={{ color: 'white',paddingRight: '0.5em'}} size="2x"/>
</a>

<a href="https://twitter.com/ubsphhp" >
  <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' ,paddingRight: '0.5em'}} size="2x"/>
</a>
<a href="http://www.instagram.com/ubsphhp"
  >
  <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} size="2x"/>
</a>
    </div>
  );
}