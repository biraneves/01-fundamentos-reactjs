import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="Bira Neves"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis rem consequuntur magni suscipit harum velit ad, nisi, voluptatem facere distinctio, quo nam totam voluptate explicabo ut soluta repellat veritatis praesentium!"
        />
      </main>
    </div>
  </>
);
