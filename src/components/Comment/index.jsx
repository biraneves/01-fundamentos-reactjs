import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './styles.module.css';

export const Comment = () => (
  <div className={styles.comment}>
    <img src="https://github.com/biraneves.png" />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Bira Neves</strong>
            <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">
              Cerca de 1h atraás
            </time>
          </div>
          <button title="Excluir comentário">
            <Trash size={24} />
          </button>
        </header>
        <p>Muito bom Devon, parabéns!!</p>
      </div>
      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  </div>
);
