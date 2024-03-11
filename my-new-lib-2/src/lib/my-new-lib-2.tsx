import styles from './my-new-lib-2.module.scss';

/* eslint-disable-next-line */
export interface MyNewLib2Props {}

export function MyNewLib2(props: MyNewLib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyNewLib2!</h1>
    </div>
  );
}

export default MyNewLib2;
