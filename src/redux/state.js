import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello!", likesCount: 12},
            {id: 2, message: 'My first post! ', likesCount: 14},
            {id: 3, message: 'My second post!', likesCount: 20},
            {id: 4, message: 'My third post!', likesCount: 15}
        ]
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
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 1
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;