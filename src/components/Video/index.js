import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import moment from "moment";
import request from "../../api";
import numeral from "numeral";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm: ss");
  const _videoId = id?.videoId || id;
  console.log(_videoId);
  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: _videoId
        },
      });
      setDuration(items[0]?.contentDetails.duration);
      setViews(items[0]?.statistics.viewCount);
      console.log("items", items);
    };
    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request.get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
        <span>{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <span>
          <img src={channelIcon?.url} alt="" />
        </span>
        <span>{channelTitle}</span>
      </div>
    </div>
  );
};

export default Video;
