import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

export const App = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  </>
);
