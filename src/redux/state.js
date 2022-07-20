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
        newMessageText:'Your Message',
        newNameText:'Your Name'
    },
    sidebar: {}
}

//добавление постов

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

//  отслеживание текста

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

// добавление диаолга и сообщения

export let AddMessageAndDialog = () => {
    let newDialog = {
         id: 4,
         name: 'Anna'
        };
        let newMessage = {
            id: 3,
            message: state.dialogsPage.newMessageText
        }
    
        state.dialogsPage.dialogs.push(newDialog)
        state.dialogsPage.newMessageText = '';
        state.dialogsPage.messages.push(newMessage)
        state.dialogsPage.newNameText = '';
        rerenderEntireTree(state);
}
// function name by yaroslavsf
//  отслеживание текста

export let updateNewMessageText = (newMessage, newNameText) => {
    state.dialogsPage.newMessageText = newMessage;
    state.dialogsPage.newNameText = newNameText;
    rerenderEntireTree(state)
}

window.state = state;


export default state;