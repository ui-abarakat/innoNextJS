import Image from "next/image";
import Style from "../../components/Hero/Hero.module.scss";
import Button from "../../components/MainLayouts/Button/Button";
import { Challenge } from "../../utils/types";

interface ChallengeItemProps {
  challenge: Challenge;
  index?: number;
  activeIndex: number;
  onActivate: (index: number) => void;
}

const ChallengeItem = ({ challenge, index, activeIndex, onActivate }: ChallengeItemProps) => {
  return (
    <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
      <div className={Style["inno-slider-i"]}>
        <div className={Style["inno-slider-img"]}>
          <Image src={challenge.cover} alt={challenge.title} width={1600} height={900} priority />
        </div>
        <div className={Style["inno-slider-c"]}>
          <span>{challenge.category}</span>
          <h1 className="inno-black">{challenge.title}</h1>
          <p>{challenge.description}</p>
          <Button size="md" variant="secondary">
            تفاصيل التحدي
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeItem;
