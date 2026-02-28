import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`container ${styles['contact-section']}`}>
      <h1>CONTACT US</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus asperiores hic exercitationem nesciunt perspiciatis vel dolorum, tempore quos doloribus, fuga a reiciendis! At ut iure maiores obcaecati reiciendis, est nemo vel vero perferendis culpa!</p>
    </div>
  );
};

export default ContactHeader