/* eslint-disable react/prop-types */
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
// import { Link } from "react-router-dom";

export const TagsBlock = ({ items, isLoading = true }) => {
  const renderTags = () => {
    if (isLoading) {
      return [...Array(5)].map((name, index) => (
        <a
          href={`/tags/${name}`}
          key={index}
        >
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TagIcon />
              </ListItemIcon>
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                <ListItemText primary={name} />
              )}
            </ListItemButton>
          </ListItem>
        </a>
      ));
    }
    if (!items) {
      return console.log("Нет данных");
    }

    return items.map((name, index) => (
      <a
        href={`/tags/${name}`}
        key={index}
      >
        <div className="hover:bg-slate-100 duration-500 rounded-md" key={index} >
          <ListItemButton>
            <ListItemIcon>
              <TagIcon />
            </ListItemIcon>
            {isLoading ? (
              <Skeleton width={100} />
            ) : (
              <ListItemText primary={name} />
            )}
          </ListItemButton>
        </div>
      </a>
    ));
  };

  return (
    <div className='bg-[#Ffff] rounded-md border border-gray-400 p-2 max-laptopL:min-h-[135px]'>
      <p className='text-xl '>Тэги</p>
      <div className="m-2">{renderTags()}</div>
    </div>
  );
};
