import GoldStar from "../../assets/images/icons/goldstar.svg";
import GreyStar from "../../assets/images/icons/greystar.svg";

interface ProductRating {
  rating: number;
}
export default function StarRating(props: ProductRating) {
  return (
    <div>
      {[...Array(props.rating)].map((_, i) => {
        return (
          <span className="btn p-0" key={i}>
            <img className="img-fluid" src={GoldStar} alt="" />
          </span>
        );
      })}
      {[...Array(5 - props.rating)].map((_, i) => {
        return (
          <span className="btn p-0" key={i}>
            <img className="img-fluid" src={GreyStar} alt="" />
          </span>
        );
      })}
    </div>
  );
}
