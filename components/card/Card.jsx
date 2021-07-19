import s from "./Card.module.css";

const Card = ({ img }) => {
  return (
    <a className={s.card} href="#">
      <div className={s.card__imgContainer}>
        <div>
          <img className={s.card__img} src={img.url} alt="" />
        </div>
      </div>
    </a>
  );
};

export default Card;
