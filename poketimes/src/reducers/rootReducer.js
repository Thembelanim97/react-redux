const initstate = {
    posts: [
        {id: 1, title: 'Buy milk', body: 'I have to buy milk because I cannot eat cereal without it ' },
        {id: 2, title: 'Get a job', body: 'I need a job so that I can buy myself a raspberry pi and pay-off my student debt'},
        {id: 3, title: 'Xmas wish-list', body: 'My Xmas zwish-list comprises of the PLaystation 5 and a raspberry pi4'}
    ]
}


const rootReducer = (state = initstate, action) => {
    console.log(action)
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id 
        })
        return  {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;