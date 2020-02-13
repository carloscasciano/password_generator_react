const zxcvbn = require('zxcvbn')

const checkPasswordStrength = (password) => {
    const score = zxcvbn(password).score
    switch (score) {
        case 0 : return 'risky'
        case 1 : return 'weak'
        case 2 : return 'medium'
        case 3 : return 'strong'
        case 4 : return 'very strong'
        default : return 'unknow'
    }
}

export default {checkPasswordStrength}
