import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg'
import { ReactComponent as DonutIcon } from '../../assets/icons/donut.svg'
import { ReactComponent as PizzaIcon } from '../../assets/icons/pizza.svg'
import { ReactComponent as SaltIcon } from '../../assets/icons/salt.svg'
import { ReactComponent as SodaIcon } from '../../assets/icons/soda.svg'

export const behaviorsData = {
    title: 'Destructive behaviors',
    subTitle: 'We all have them! Which are yours?',
    answerOptions: [
        {
            id: 1,
            option: "I don't rest enough",
            icon: MoonIcon,
        },
        {
            id: 2,
            option: 'I have a sweet tooth',
            icon: DonutIcon,
        },
        {
            id: 3,
            option: 'I have too much soda',
            icon: SodaIcon,
        },
        {
            id: 4,
            option: 'I eat many salty foods',
            icon: SaltIcon,
        },
        {
            id: 5,
            option: 'I enjoy midnight snacks',
            icon: PizzaIcon,
        },
        {
            id: 6,
            option: 'None of the above',
            icon: CrossIcon,
        },
    ],
}
