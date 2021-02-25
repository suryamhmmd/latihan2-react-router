import React, { Component } from 'react'
import jslogo from '../assets/js.jpg'
import reactlogo from '../assets/react.jpg'
import vuelogo from '../assets/vue.jpg'
import svlogo from '../assets/sv.jpg'
import MainLayout from '../layout/MainLayout'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        skills: [
            {
                id: 1,
                name: "JavaScript",
                description: "Javascript Description",
                image: jslogo,
            },
            {
                id: 2,
                name: "React",
                description: "React Description",
                image: reactlogo,
            },
            {
                id: 3,
                name: "Vue",
                description: "Vue Description",
                image: vuelogo,
            },
            {
                id: 4,
                name: "Svelte",
                description: "Svelte Description",
                image: svlogo,
            }
        ]
    }
    render() {
        const { skills } = this.state;
        return (
            <MainLayout>
                
                <h1 style={{ paddingLeft:"6rem"}}>Home Page</h1>
                <div style={container}>
                    { skills.map((item) => {
                        return (
                            <div key={item.id} style={card}>
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.image} alt={item.name} style={img}/>
                                    <h3>{item.name}</h3>
                                </Link>
                                
                            </div>    
                        ) 
                    }
                    )}
                </div>
            </MainLayout>
        )
    }
}

export default Home;

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between",
}

const card = {
    width: '20%',
    height: "15rem",
}

const img = {
    width: "100%",
    height: "100%"
}