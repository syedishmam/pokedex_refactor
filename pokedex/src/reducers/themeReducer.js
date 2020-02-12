export default (state = {theme: ''}, action) => {
    switch(action.payload) {
        case 'water':
            return {...state, theme: '#4dd1fa'}

        case 'electric':
            return {...state, theme: '#ffe100'}

        case 'fire':
            return {...state, theme: '#ff6666'}

        case 'grass':
            return {...state, theme: '#58d6ae'}

        case 'ground':
            return {...state, theme: '#dce3a8'}

        case 'normal':
            return {...state, theme: '#e6e6e6'}
            
        case 'fairy':
            return {...state, theme: '#ff9191'}

        case 'ice':
            return {...state, theme: '#aef5fc'}

        case 'steel':
            return {...state, theme: '#dbdbdb'}
    
        case 'psychic':
            return {...state, theme: '#cf9bfa'}
    
        case 'dark':
            return {...state, theme: '#482169'}
    
        case 'rock':
            return {...state, theme: '#75735b'}
    
        case 'poison':
            return {...state, theme: '#9a5cab'}
                
        case 'dragon':
            return {...state, theme: '#ff642b'}
    
        case 'bug':
            return {...state, theme: '#72e653'}

        case 'ghost':
            return {...state, theme: '#cf9bfa'}
        
        case 'flying':
            return {...state, theme: '#d4f0ff'}

        case 'fighting':
            return {...state, theme: '#f7ffb8'}


        default:
            return state
    }
}