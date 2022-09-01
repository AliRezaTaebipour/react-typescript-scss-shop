import { FC, FormEvent, ReactElement } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./Login.module.scss";

const Login: FC = (): ReactElement => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container__row}>
          <div className={styles.container__col}>
            <Input
              className={styles.container__input}
              placeholder="Email or Username"
            />
          </div>
          <div className={styles.container__col}>
            <Input
              className={styles.container__input}
              placeholder="Enter your Password"
            />
          </div>
          <div className={styles.container__col}>
            <Button className={styles.container__button}>Login</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
