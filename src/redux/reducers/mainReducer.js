const initialState = {
    posts: [
        {id: 0, text: 'Hey, why nobody loves me?!'},
        {id: 1, text: 'Hey, why nobody loves me?!'},
        {id: 2, text: 'Hey, why nobody loves me?!'},
    ]
}

const reducer = (state = initialState, {type}) => {
    switch (type) {
        case 'LOG': {
            console.log("LOGING")
            break
        }
        default:
            return state
    }
}

export default reducer