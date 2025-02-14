import { useParams } from "react-router-dom";
import { Heading, Navbar } from "../../components";
import List from "../../components/List/List";
import Post from "../../components/Post/Post";
import { Header } from "../../components/UI/Header/Header";
import { useGetPostByIdQuery } from "../../store/api/postApi";
import { SCMainPage } from "../MainPage/MainPage.styled";

const PostPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetPostByIdQuery(id!);

  return (
    <SCMainPage>
      <Header />
      <aside className="LeftSide">
        <Navbar />
        <List listType="subscribes" />
      </aside>
      <main className="Main">
        {isLoading && <Heading text="Loading..." variant="h1" />}
        {data && (
          <Post
            name={data.message?.user_fk.name}
            date={data.message?.reg_date}
            postText={data.message.main_text}
            photos={data.message.photos}
            comments={data.message.comments}
          />
        )}
      </main>
      <aside className="RightSide">
        <List listType="closeFriends" />
        <List listType="music" />
      </aside>
    </SCMainPage>
  );
};

export default PostPage;
