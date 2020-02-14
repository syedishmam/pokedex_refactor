export default (state = {theme: ''}, action) => {
    switch(action.payload) {
        case 'Water':
            return {...state, theme: '#4dd1fa'}

        case 'Electric':
            return {...state, theme: '#ffe100'}

        case 'Fire':
            return {...state, theme: '#ff6666'}

        case 'Grass':
            return {...state, theme: '#58d6ae'}

        case 'Ground':
            return {...state, theme: '#dce3a8'}

        case 'Normal':
            return {...state, theme: '#e6e6e6'}
            
        case 'Fairy':
            return {...state, theme: '#ff9191'}

        case 'Ice':
            return {...state, theme: '#aef5fc'}

        case 'Steel':
            return {...state, theme: '#dbdbdb'}
    
        case 'Psychic':
            return {...state, theme: '#cf9bfa'}
    
        case 'Dark':
            return {...state, theme: '#482169'}
    
        case 'Rock':
            return {...state, theme: '#75735b'}
    
        case 'Poison':
            return {...state, theme: '#9a5cab'}
                
        case 'Dragon':
            return {...state, theme: '#ff642b'}
    
        case 'Bug':
            return {...state, theme: '#72e653'}

        case 'Ghost':
            return {...state, theme: '#cf9bfa'}
        
        case 'Flying':
            return {...state, theme: '#d4f0ff'}

        case 'Fighting':
            return {...state, theme: '#f7ffb8'}


        default:
            return state
    }
}