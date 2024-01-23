import healthy_habits from '../../assets/images/healthy_habits.png'
import healthy from '../../assets/images/healthy.png'
import gain_muscle from '../../assets/images/gain_muscle.png'
import lose_weight from '../../assets/images/lose_weight.png'

export const goalsData = {
    title: 'The Goal',
    subTitle: 'Focus on the health benefits you need. Balanced nutrition will let you achieve them',
    question: 'What are your goals?',
    answerOptions: [
        {
            id: 1,
            image: lose_weight,
            option: 'Lose Weight',
        },
        {
            id: 2,
            image: gain_muscle,
            option: 'Gain Muscle',
        },
        {
            id: 3,
            image: healthy,
            option: 'Develop healthy habits',
        },
        {
            id: 4,
            image: healthy_habits,
            option: 'Develop healthy habits',
        },
    ]
}