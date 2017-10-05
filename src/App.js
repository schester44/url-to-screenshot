import React, { Component } from "react"

import Generator from "./Generator"

import "./App.css"

class App extends Component {
    render() {

        return (
            <div className="App">
                <div className="Header">
                    <div className="Header__left-text">
                        <h1 className="Header__h1">URLs to screenshots.</h1>
                        <h2 className="Header__h2">Enter a URL, get a screenshot. It can't get any easier.</h2>
                    </div>

                    <div className="Header__right">
                        <Generator></Generator>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
