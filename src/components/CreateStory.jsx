import { storyOne } from "../data/StoryOne"
import { useState } from "react"
import React from "react";


const CreateStory = () => {
    const stupid = storyOne
    const [answers, setAnswers] = useState([])
    const [input, setInput] = useState('')
    
    //this one works because we start at round 0, and answers.lenght is 0 to begin
    let currentRound = answers.length
    console.log('stupid', stupid)

    const handleSubmit = (event) => {
        event.preventDefault()
        setInput('')
        setAnswers([...answers, event.target[0].value])
        console.log('answered', answers)
    }

    const handleChange = (event) => {
        setInput(event.target.value)
        console.log('changed', input)
    }


    return (
        <div>
            <h1>Please Enter {storyOne[currentRound].thing}</h1>
            <form onSubmit={handleSubmit} >
                {/* <label>Enter {storyOne[currentRound].thing}</label> */}
                <input type="text" value={input} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

// class CreateStory extends React.Component {
//     // input field with onChange > run a function that changes state to the input (this.setAnswers maybe?) and then increments the step to load the next question
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value})
//     }
//     handleSubmit(event) {
//         alert("Submitment of Poo in the form of the best type of " + this.state.value)
//     }

//     render() {
//         return (
//             <div>
//             <h1>Hello</h1>
//             <form onSubmit={this.handleSubmit}>
//                 <label>Enter Noun</label>
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 <input type="submit" value="Submit" />
//             </form>
//             </div>
//         )
//     }
// const [answers, setAnswers] = useState([])
// let step = 0
// const userSubmit = (event) => {

//     console.log("submitment")
// }

// return (
//     <div>
//         <h1>Hello, CreateStory</h1>
//         <p>{storyOne[2]}</p>
//         <p>{step}</p>
//         <p>{answers}</p>
//         <div>
//             <form>
//                 <label htmlFor="answers">Enter A Noun</label>
//                 <input type="text" onSubmit={userSubmit} name="answers" id="answers" />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>


//     </div>
// )
// }

export default CreateStory