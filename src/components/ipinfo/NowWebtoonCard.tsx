import {FunctionComponent} from "react";
import {Card} from "antd";
import "./NowWebtoonCard.css";

interface WebtoonCardProps {
  title: string;
  rating: number;
  views: number;
  rank: number;
  poster: string;
}

const WebtoonCard: FunctionComponent<WebtoonCardProps> = ({
  title,
  rating,
  views,
  rank,
  poster,
}) => {
  return (
    <Card className="webtoon-card">
      <div className="webtoon-cover" style={{backgroundImage: `url(${poster})`}}>
        <img src={poster} alt={`${title} 표지`} className="webtoon-poster"/>
      </div>
      <div className="webtoon-info">
        <div className="webtoon-title-stats">
          <h3 className="webtoon-title">{title}</h3>
          <p className="webtoon-stats">
            평점: {rating.toFixed(1)} | 조회수: {views}M
          </p>
        </div>
        <div className="rank-button"><strong>{rank}위</strong></div>
      </div>
    </Card>
  );
};

export default WebtoonCard;
