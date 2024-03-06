import styles from './styles.module.css';
import { PencilLine } from '@phosphor-icons/react';

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <img
      className={styles.cover}
      src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=60&w=540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <div className={styles.profile}>
      <img className={styles.avatar} src="https://github.com/biraneves.png" />
      <strong>Bira Neves</strong>
      <span>Frontend Engineer</span>
    </div>
    <footer>
      <a href="#">
        <PencilLine size={20} /> Editar seu perfil
      </a>
    </footer>
  </aside>
);
