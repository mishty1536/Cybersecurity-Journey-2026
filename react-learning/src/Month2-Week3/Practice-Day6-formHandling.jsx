import { useState } from "react";

function PracticeDay6() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default PracticeDay6;