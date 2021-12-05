import React from 'react'
import { HeaderDiv } from '../styled-components/WeatherContainer'

export default function Header() {
    return (
        <HeaderDiv>
            <form>
                <input placeholder = "Enter city name">
                </input>
                <button>
                    Search
                </button>
            </form>
        </HeaderDiv>
    )
}
