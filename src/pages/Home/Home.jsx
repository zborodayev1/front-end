import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Post } from "../../components/Post/Post";
import { TagsBlock } from "../../components/TagsBlock";
import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../../components/redux/slices/posts";
// import styles from './Home.module.scss';

export const Home = () => {
  const dispath = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  const isPostLoading = posts?.status === "loading";
  const isTagsLoading = tags?.status === "loading";

  useEffect(() => {
    dispath(fetchPosts());
    dispath(fetchTags());
  }, [dispath]);

  const renderPosts = () => {
    if (isPostLoading) {
      return [...Array(5)].map((_, index) => (
        <Post key={index} isLoading={true} />
      ));
    }

    if (!posts || !posts?.items || !posts?.items?.posts) {
      return <div>Нет данных</div>;
    }

    return posts?.items?.posts?.map((obj) => {
      if (!obj?._id) {
        return null;
      }
      return (
        <div key={obj?._id}>
          <Post
            _id={obj._id}
            title={obj.title}
            imageUrl={obj.imageUrl}
            user={obj.user}
            createdAt={obj.createdAt}
            viewsCount={obj.viewsCount}
            commentsCount={3}
            tags={obj.tags}
            isEditable
          />
        </div>
      );
    });
  };
  return (
    <div className="ml-2 ">
      <Header />
      <>
        <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
          <Tab label="Новые" />
          <Tab label="Популярные" />
        </Tabs>
        <div className="flex">
          <div className="grid" >
            {renderPosts()}
          </div>
          <div className="ml-4 mr-4 max-laptopL:w-140 max-laptop:w-124 max-tablet:ml-2 max-tablet:mr-2 max-tablet:w-72 max-mobileL:mr-1 max-mobileL:ml-1 ">
            <TagsBlock items={tags?.items?.tags} isLoading={isTagsLoading} />
          </div>
        </div>
      </>
    </div>
  );
};
