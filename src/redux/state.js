import postReducer from "./postReducer"
import messageReducer from "./messageReducer"

let store = {
  _state: {

    WallPosts: {
      PostData: [
        { id: 1, likecount: 25, message: 'Hi my name is Evpatyi' },
        { id: 2, likecount: 4, message: 'How are you?' },
        { id: 3, likecount: 8, message: 'Ok, fine' },
        { id: 4, likecount: 0, message: 'Good, bye' }
      ],
      newPost: ''
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
      ],
      newMessageBody: ''
    }
  
  },

  getState() {
    return this._state
  },

  _callObserver () {
    console.log('State changed')
  },

  subscribe(observer) {
    this._callObserver = observer
  },
  
  dispatch(action) {

    this._state.WallPosts = postReducer (this._state.WallPosts, action)
    this._state.MessagesDia = messageReducer (this._state.MessagesDia, action)
    this._callObserver ()

  }

}

export default store;