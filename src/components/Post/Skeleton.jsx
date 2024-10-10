import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export const PostSkeleton = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width="100%" height={300} />
        <div>
          <div>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            <div>
              <Skeleton variant="text" width={60} height={20} />
              <Skeleton variant="text" width={100} height={15} />
            </div>
          </div>
          <div>
            <Skeleton variant="text" width="80%" height={45} />
            <div>
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};
