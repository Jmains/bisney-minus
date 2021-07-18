import s from "./Card.module.css";

const Card = ({ img }) => {
  return (
    <div>
      <a className={`${s.card}`} href="#">
        <div className={s.card__imgContainer}>
          <img className={s.card__img} src={img.url} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Card;
