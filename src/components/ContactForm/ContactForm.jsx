import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { LuMessageCircleHeart } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";


const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<LuMessageCircleHeart fontSize="24px"/>} />
          <Button text="VIA CALL" icon={<PiPhoneCallFill fontSize="24px"/>} />
          
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<TfiEmail fontSize="24px"/>} />



      <form>
        <div className={styles.form_control}>
          <label htmlFor="">Name</label>
          <input type="text" name='Name'/>
        </div>

        <div className={styles.form_control}>
          <label htmlFor="">Email</label>
          <input type="email" name='Email'/>
        </div>

        <div className={styles.form_control}>
          <label htmlFor="">Text</label>
          <input type="text" name='Text' rows="10"/>
        </div>

        <div 
          style={{display: "flex", justifyContent: "end",}}>
          <Button text="Submit" />
        </div>

      </form>
      </div>
      <div className={styles.contact_image}>
        <img src='public/images/hero.jpg' alt='contact us' />
      </div>
    </section>
  );
};

export default ContactForm;
