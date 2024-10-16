/* eslint-disable react/prop-types */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

import { SideBlock } from "./SideBlock/SIdeBlock";
// import { Link } from "react-router-dom";

export const TagsBlock = ({ items, isLoading = true }) => {
  const renderTags = () => {
    if(isLoading) {
      return [...Array(5)].map((name, index) => (
        <a
            style={{ textDecoration: "none", color: "black" }}
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
      ))
    }
    if (!items) {
      return console.log('Нет данных')
    }

    return items.map((name, index) => (
      <a
      style={{ textDecoration: "none", color: "black" }}
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
    ))
  }
  

  return (
    <SideBlock title="Тэги">
      <List>
      {renderTags()}
      </List>
    </SideBlock>
  );
};
