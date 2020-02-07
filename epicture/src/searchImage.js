async function searchImage(tag) {
  console.log('Contacting ImgurAPI to search image with tag : ' + tag);
  return await fetch('https://api.imgur.com/3/gallery/search?q=' + tag, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer f4c5ebd4deb286d867dd5699ef4a9e9bd6c23cf8',
    },
  })
    .then(res => res.json())
}






import ImagePicker from 'react-native-image-picker';

function imagePicker() {
  ImagePicker.showImagePicker(response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
    } else {
      console.log('Uploading image...');
      return fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer f4c5ebd4deb286d867dd5699ef4a9e9bd6c23cf8',
        },
        body: response.data,
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.error('ERROR: ', error);
        });
    }
  });
}

export default imagePicker;






async function getImagesUrlList() {
  console.log('Contacting the Imgur API...');
  return await fetch('https://api.imgur.com/3/account/me/images', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer f4c5ebd4deb286d867dd5699ef4a9e9bd6c23cf8',
    },
  })
    .then(res => res.json())
}





function addFav(hash) {
  return fetch('https://api.imgur.com/3/image/' + hash + '/favorite', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer f4c5ebd4deb286d867dd5699ef4a9e9bd6c23cf8',
    },
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error('ERROR: ', error);
    });
}

export default addFav;