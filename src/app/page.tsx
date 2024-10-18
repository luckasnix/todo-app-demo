import Button from '@mui/material/Button';

import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <Button variant='contained'>Contained</Button>
    </div>
  );
};

export default Home;
