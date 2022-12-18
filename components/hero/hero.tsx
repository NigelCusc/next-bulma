import Image from "next/image";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={classes.heroDiv}>
        <Image src="/images/rock-band-bw.jpg" alt="Hero image" fill />
        <div className={classes.container}>
          <h1>
            Bulma NextJS Project{" "}
            <span className={classes.background}>Template</span>
          </h1>
          <p>
            With <span className={classes.underline}>Bulma</span>,{" "}
            <span className={classes.underline}>NextJs 13</span>, and{" "}
            <span className={classes.underline}>Jotai</span>
          </p>
        </div>
      </div>
    </>
  );
}
