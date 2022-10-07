import { storyOne } from "../data/StoryOne"
import { useState } from "react"


const CreateStory = () => {
    // input field with onChange > run a function that changes state to the input (this.setAnswers maybe?) and then increments the step to load the next question
    const [answers, setAnswers] = useState([])
    let step = 0

    return (
        <div>
            <h1>Hello, CreateStory</h1>
            <p>{storyOne[2]}</p>
            <p>{step}</p>
            <p>{answers}</p>


        </div>
    )
}

export default CreateStory