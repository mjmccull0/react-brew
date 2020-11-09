import styles from './Card.module.css';
import Button from "@material-ui/core/Button";

const Card = ({ id, title, description, media, link }) => {
  return (
    <Button href={link}>
        <div className={styles.card}>
          <img className={styles.media} alt={title} src={media} />
          <div className={styles.primaryText}>
            <h2 className={`${styles.title} ${styles.truncate}`}>{title}</h2>
            <p className={`${styles.description} ${styles.truncate}`}>{description}</p>
          </div>
        </div>
    </Button>
  );
}

export default Card;
