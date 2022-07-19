import React, { Component } from "react";

const skills = ['HTML', 'CSS', 'JavaScript'];
const JxSkills = skills.map((skill) => <li>{skill}</li>)


class About extends Component {
    render() { 
        return (<><h1>Diego Gonçalves Picoli</h1>
        <p>Ola</p>
        <h2>Minhas Habilidades</h2>
        <ul>{JxSkills}</ul>
        </>
        );
    }
}

export default About;