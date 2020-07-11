import React from 'react';
import { conwaysGameOfLife, countNeighbours } from './conways-game.js'
import './Game.css'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {grid: this.generateGrid()}
        
    }
    generateGrid = () => {
        const width = this.props.width
        const grid = []
        for (let row = 0; row < width; row++){
            grid.push([])
            for (let cell = 0; cell < width; cell++){
                grid[row].push(Math.floor(Math.random() * 2))
            }
        }
        return grid
    }

    componentDidMount = () => {
        setInterval(() => this.changeGrid(), 100);
    }

    changeGrid = () => {
        const newGrid = conwaysGameOfLife(this.state.grid);
        this.setState({grid: newGrid })
    }

    resetGrid = () => {
        const newGrid = this.generateGrid()
        this.setState({grid: newGrid})
    }

    render() {  
        const style1 = {
            width: '20px',
            height: '20px',
            backgroundColor: 'blue'
        }   
        const style2 = {
            width: '20px',
            height: '20px',
            backgroundColor: 'hotpink'
        } 
        return (
            <div className="Game">
                <div className="game-grid">
                {this.state.grid.map(row => row.map(cell => {
                    return <div style={cell === 0 ? style1 : style2} />
                }))}
                </div>
                <button onClick={this.resetGrid}>Reset</button>
            </div>
        )
    }
}

export default Game;