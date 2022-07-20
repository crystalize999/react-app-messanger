import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello!", likesCount: 12},
            {id: 2, message: 'My first post! ', likesCount: 14},
            {id: 3, message: 'My second post!', likesCount: 20},
            {id: 4, message: 'My third post!', likesCount: 15}
        ],
        newPostText: 'Your text'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "How's are u?"},
            {id: 2, message: 'Lmao'},
            {id: 3, message: 'Cringe moment!'},
            {id: 4, message: 'Call me!'},
            {id: 5, message: 'Lol'},
            {id: 6, message: 'Good Morning'}
        ],
        
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Yaroslav'},
            {id: 3, name: 'Alexandra'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Oleg'},
            {id: 6, name: 'Anna'},
        ],
        newMessageText:'Your Message'
    },
    sidebar: {}
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 1
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
         id: 2,
         message: state.dialogsPage.newMessageText 
        };
        state.dialogsPage.dialogs.push(newMessage)
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree(state)
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state)
}

window.state = state;


export default state;