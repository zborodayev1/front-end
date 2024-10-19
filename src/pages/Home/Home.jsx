import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Post } from "../../components/Post/Post";
import { TagsBlock } from "../../components/TagsBlock";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../../components/redux/slices/posts";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);

  const isPostLoading = posts?.status === "loading";
  const isTagsLoading = tags?.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

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
            isEditable={userData?._id === obj?.user?._id}
          />
        </div>
      );
    });
  };

  return (
    <div className="ml-2 ">
      <>
        <Tabs
          style={{ marginBottom: 15 }}
          value={0}
          aria-label="basic tabs example"
        >
          <Tab label="Новые" />
          <Tab label="Популярные" />
        </Tabs>
        <div className="flex">
          <div className="grid">{renderPosts()}</div>
          <div className="ml-4 mr-4 max-laptopL:w-140 max-laptop:w-124 max-tablet:ml-2 max-tablet:mr-2 max-tablet:w-72 max-mobileL:mr-1 max-mobileL:ml-1 ">
            <TagsBlock items={tags?.items?.tags} isLoading={isTagsLoading} />
          </div>
        </div>
      </>
    </div>
  );
};
