import s from "./Studios.module.css";

export default function Studios() {
  return (
    <div className={s.studios__container}>
      <div className={s.studios__link}>{/* Bisney */}</div>
      <div className={s.studios__link}>{/* Bixar */}</div>
      <div className={s.studios__link}>{/* Barvel */}</div>
      <div className={s.studios__link}>{/* Bar Wars */}</div>
      <div className={s.studios__link}>{/* Bashional Beographic */}</div>
    </div>
  );
}
