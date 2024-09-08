import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <div>
            <h1> Custom app|chai</h1>
        </div>
    )
}

const anotherElement=(
    <a href="https://gooogle.com" target='_blank'>visit google</a>
)
const anotheruser='anisha shetty another user'
const reactElement=React.createElement(
    'a',
    {href:'https://gooogle.com',target:'_blank'},
    'click to me to visit google',
    anotheruser
)

createRoot(document.getElementById('root')).render(
  
 reactElement
)
