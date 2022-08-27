import { createContext } from 'react';
const navBar = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Custom-Hooks',
        path:'/hooks'
    },
    {
        name:'Context',
        path:'/context'
    },
    {
        name:'Libraries',
        path:'libraries'
    }

]

export const headerContext = createContext(navBar);