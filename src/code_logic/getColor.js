export const getColor = (passwordStrength) => {
    switch (passwordStrength) {
        case 'risky' : return '#FF2E1D'
        case 'weak' : return '#FF720F' 
        case 'medium' : return '#E8A72C'
        case 'strong' : return '#5BA324'
        case 'very strong' : return '#144A0A'
        default : return 'gray'
    }
}