import React from 'react';
import { FacebookShareButton , WhatsappShareButton, TwitterShareButton, TelegramShareButton, FacebookIcon,  WhatsappIcon, TwitterIcon, TelegramIcon} from 'react-share';

function ShareButton() {
  const shareUrl = window.location.href;
  const size = 32;
  const round = (true);
  const style ={marginRight:'12px'}

  
  return (
    <>
       <div className='share-icons'>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={size} round={round} style={style}/>
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl}>
          < WhatsappIcon size={size} round={round} style={style}/>
       </WhatsappShareButton>
       <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={size} round={round} style={style}/>
       </TwitterShareButton>
       <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={size} round={round} style={style}/>
       </TelegramShareButton>
       </div>
    </>

  );
}

export default ShareButton;