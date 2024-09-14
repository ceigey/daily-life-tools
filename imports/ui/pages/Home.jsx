import React from 'react'
import { Hello } from '../components/Hello.jsx'
import { Info } from '../components/Info.jsx'

export const Home = () => (
    <div>
        <h1 className="text-3xl font-bold underline">Welcome to Celetemi!</h1>
        <Hello />
        <Info />
    </div>
)