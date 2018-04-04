import React from 'react'
import Dropzone from 'react-dropzone'
import { Container } from "semantic-ui-react";
import axios from 'axios'
import ImgZone from './ImgZone'

class DropZone extends React.Component {
  constructor() {
    super()
    this.state = {
      accepted: []
    }
  }

  handleDrop = accepted => {
    this.setState({ accepted }
  )}
  
  handleUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", this.state.accepted[0]);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", "pvhilzh7"); // Replace the preset name with your own
    formData.append("api_key", "1234567"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      console.log(data);
    })
  }
  

  render() {

    const { accepted } = this.state

    return <div className="dropzone">
        <Dropzone multiple={false} disableClick={accepted.length ? true : false} accept="image/jpeg, image/png" onDrop={this.handleDrop}>
          <Container textAlign="center" style={{ padding: "50px" }}>
            <ImgZone file={accepted} onClick={this.handleUpload} />
          </Container>
        </Dropzone>
      </div>;
  }
}

export default DropZone
