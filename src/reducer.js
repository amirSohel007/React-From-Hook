
export const globalReducer = (state = null, action) => {
    switch (action.type) {
        
            case 'USER_LOGIN' : {
               return {
                  state:action.payload
               }
            }

            default : {
                return state
            }
    }
}