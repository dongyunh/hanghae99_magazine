import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import { Grid, Image, Text } from "../elements";
const Post = (props) => {
  // console.log(props);
  // console.log(props.user_info.use_name);
  // console.log(props.src);
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image
            shape="circle"
            src={props.kkk}
            user_info={props.user_info.use_name}
          />
          <Text bold>{props.user_info.use_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text bold>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    use_name: "dongyun",
    user_profile:
      "https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj",
  },
  insert_dt: "2022-02-04 10:00:00",
  contents: "파댕이다!!",
  image_url:
    "https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj",
  comment_cnt: 10,
  // src: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202107/05/slrclub/20210705215007781fjlg.jpg",
};

export default Post;
