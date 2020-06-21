let renderEntireTree = () => {
  console.log('ChangeSave');
}

let State = {

  WallPosts: {
    PostData: [
      { id: 1, likecount: 25, message: 'Hi my name is Evpatyi' },
      { id: 2, likecount: 4, message: 'How are you?' },
      { id: 3, likecount: 8, message: 'Ok, fine' },
      { id: 4, likecount: 0, message: 'Good, bye' }
    ]
  },

  MessagesDia: {
    DialogsName: [
      { id: 1, name: 'Ekaterina' },
      { id: 2, name: 'Pavel' },
      { id: 3, name: 'Eva' },
      { id: 4, name: 'User' },
      { id: 5, name: 'SuperUser' }
    ],
    Messages: [
      { id: 1, time: '12:32', text: 'Hello how are you' },
      { id: 2, time: '12:34', text: 'Fine thanks!' }
    ]
  }

}

export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    likecount: 3,
    message: postMessage
  }
  State.WallPosts.PostData.push (newPost)
  renderEntireTree ()
}

export const subscribe = (observer) => {
  renderEntireTree = observer
} 

export default State;