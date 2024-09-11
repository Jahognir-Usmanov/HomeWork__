import { useGetSubscribersQuery } from "../../store/api/subscribersApi";
import { ISubscriber } from "../../store/api/types";
import Heading from "../typography/Heading/Heading";
import ListItem from "./ListItem";
import MusicItem from "./MusicItem";
import { listData } from "./data";

const { music } = listData;

interface ListProps {
  listType: "subscribes" | "music" | "closeFriends";
}

const List = ({ listType }: ListProps) => {
  const { data } = useGetSubscribersQuery(null);

  console.log("data", data);

  const renderList = () => {
    switch (listType) {
      case "subscribes":
        return (
          <div className="List">
            <div className="List__title">
              <Heading variant="h2" text="Подписки" />
              <span className="count">{data ? data.length : ""}</span>
            </div>
            {data &&
              data.map((userElem: ISubscriber) => (
                <ListItem
                  mainText={userElem.username}
                  secondaryText={userElem.name}
                  key={userElem.id}
                  imgUrl="/img/users/andrey-kashirskiy.jpeg"
                  alt={"user"}
                  badgeNumber={null}
                />
              ))}
          </div>
        );
      case "closeFriends":
        return (
          <div className="List">
            <div className="List__title">
              <Heading variant="h2" text="Близкие друзья" />
              <span className="count">{data ? data.length : ""}</span>
            </div>
            {data &&
              data.map((userElem: ISubscriber) => (
                <ListItem
                  isOnline
                  mainText={userElem.username}
                  secondaryText={userElem.name}
                  key={userElem.id}
                  imgUrl="/img/users/sofia-kodra.jpeg"
                  alt={"user"}
                  badgeNumber={null}
                />
              ))}
          </div>
        );
      case "music":
        return (
          <div className="MusicBlock">
            <div className="MusicBlock__title">
              <h2>Вы недавно слушали</h2>
              <span>{music ? music.length : ""}</span>
            </div>
            {music &&
              music.map((musicItem) => (
                <MusicItem
                  imgUrl={musicItem.imgUrl}
                  mainText={musicItem.mainText}
                  secondaryText={musicItem.secondaryText}
                  isActive={musicItem.isActive}
                  alt={musicItem.alt}
                />
              ))}
          </div>
        );
      default:
        break;
    }
  };

  return renderList();
};

export default List;
