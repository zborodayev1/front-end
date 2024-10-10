import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const AddComent = () => {
  return (
    <>
      <div>
        <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
        <div>
          <TextField
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};
