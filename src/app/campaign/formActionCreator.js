import { postImage, postRequest } from "../../utils/data/API";

export function uploadImage(file) {
  return dispatch => {
    dispatch(uploadImageBegin());
    return postImage(file)
      .then(response => {
        dispatch(uploadImageSuccess(response.data.secure_url));
      })
      .catch(error => dispatch(uploadImageError(error)));
  }
}

export function postCampaign(data, token) {
  const url = '/api/item'
  return dispatch => {
    dispatch(postCampaignBegin());
    return postRequest(url, data, token)
      .then(response => {
        console.log(response)
        dispatch(postCampaignSuccess(response));
      })
      .catch(error => dispatch(postCampaignError(error)));
  }
}

export const changeTab = tabIndex => ({
  type: "CHANGE_TAB",
  payload: { tabIndex, status: "empty" }
});

export const dropImage = () => ({
  type: "DROP_IMAGE",
  status: "dropped"
});

export const saveChange = items => ({
  type: "SAVE_CHANGE",
  payload: { items }
});

export const uploadImageBegin = () => ({
  type: "UPLOAD_IMAGE_BEGIN",
  payload: { status: "uploading" }
});

export const uploadImageSuccess = fileURL => ({
  type: "UPLOAD_IMAGE_SUCCESS",
  payload: { fileURL, status: "uploaded"}
});

export const uploadImageError = error => ({
  type: "UPLOAD_IMAGE_FAILURE",
  payload: { error, status: "failed" }
});

export const postCampaignBegin = () => ({
  type: "POST_CAMPAIGN_BEGIN",
  payload: { status: "started" }
});

export const postCampaignSuccess = () => ({
  type: "POST_CAMPAIGN_SUCCESS",
  payload: { status: "posted"}
});

export const postCampaignError = error => ({
  type: "POST_CAMPAIGN_FAILURE",
  payload: { error, status: "failed" }
});
