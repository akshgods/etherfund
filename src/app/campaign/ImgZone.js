import React from "react";
import { Icon, Button, Image } from "semantic-ui-react";

const ImgZone = props => {
  if (props.file.length) {
    return (
      <div>
        <Image size="tiny" centered src={props.file[0].preview} />
        <Button
          size="tiny"
          compact
          basic
          color="pink"
          style={{ marginTop: "5px", textAlign: "center" }}
          onClick={props.onClick}
        >
          UPLOAD
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Icon circular size="large" name="photo" />
      <p>Drop your photo or click here to upload</p>
    </div>
  );
};

export default ImgZone;
