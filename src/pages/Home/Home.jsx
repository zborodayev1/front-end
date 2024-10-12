import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Post } from "../../components/Post/Post";
import { TagsBlock } from "../../components/TagsBlock";
import { CommentsBlock } from "../../components/CommentsBlock";
import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../../components/redux/slices/posts";
import { Grid } from "@mui/material";

export const Home = () => {
  const dispath = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";
  const isTagsLoading = tags.status === "loading";

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

    return posts.items.posts.map((obj, index) => {
      if (!obj?._id) {
        return null;
      }
      return (
        <Post
          _id={obj._id}
          key={index}
          title={obj.title}
          imageUrl={obj.imageUrl}
          user={obj.user}
          createdAt={obj.createdAt}
          viewsCount={obj.viewsCount}
          commentsCount={3}
          tags={obj.tags}
          isEditable
        />
      );
    });
  };
  return (
    <div>
      <Header />
      <>
        <Tabs
          style={{ marginBottom: 15 }}
          value={0}
          aria-label="basic tabs example"
        >
          <Tab label="Новые" />
          <Tab label="Популярные" />
        </Tabs>
        <Grid container spacing={4}>
          <Grid xs={8} item>
            {renderPosts()}
          </Grid>
          <Grid xs={4} item>
            <TagsBlock items={tags.items.tags} isLoading={isTagsLoading} />
            <CommentsBlock
              items={[
                {
                  user: {
                    fullName: "Вася Пупкин",
                    avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                  },
                  text: "Это тестовый комментарий",
                },
                {
                  user: {
                    fullName: "Иван Иванов",
                    avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                  },
                  text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
                },
              ]}
              isLoading={false}
            />
          </Grid>
        </Grid>
      </>
    </div>
  );
};
