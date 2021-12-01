import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import { render} from '@testing-library/react'
import "jest-dom/extend-expect";


it("render without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Cards></Cards>, div)
})

it("render cards correctly",()=>{
   const {getByTestId} = render(<Cards></Cards>)
   expect(getByTestId('card')).toHaveTextContent("Card")
})