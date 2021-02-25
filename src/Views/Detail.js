import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout'
import jslogo from '../assets/js.jpg'
import reactlogo from '../assets/react.jpg'
import vuelogo from '../assets/vue.jpg'
import svlogo from '../assets/sv.jpg'
import { Link } from 'react-router-dom'

class Detail extends Component {
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
        ],
        data: ""
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const data = this.state.skills.find(item => item.id === parseInt(id))
        this.setState({ data })
    }

    render() {
        const { data } = this.state;
        return (
            <MainLayout>
                <div style={container}>
                    <h1>{data.name}</h1>
                    <div style={box}>
                        <img src={data.image} alt={data.name} style={img} />
                        <p>{data.description}</p>
                        <p><Link to='/'>Back Home</Link></p>
                    </div>

                </div>
            </MainLayout>
        )
    }
}

export default Detail

const container = {
    padding: "0 6rem"
}

const img = {
    width: "15rem",
    height: "20rem",
    marginRight:"2rem"
}

const box = {
    display: "flex"
}