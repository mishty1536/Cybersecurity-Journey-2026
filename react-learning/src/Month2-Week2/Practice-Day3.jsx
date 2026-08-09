//Question1: create a book component pass: title, author 
// function Practice({title, author}){
//     return (
//         <div>
//             <p>Book: {title}</p>
//             <p>Author: {author}</p>
//         </div>
//     );
// }

// export default Practice;

//Question2: create an Employee component pass: name, department, salary 
// function Employee({name, department, salary}){
//     return(
//         <div>
//             <h5>Employee Details</h5>
//             <p>Name: {name}</p>
//             <p>Department: {department}</p>
//             <p>Salary: {salary}</p>
//         </div>
//     );
// }

// export default Employee;

//Question3: create car component pass: brand, model, year render different cars using the same component
function Car({brand, model, year}){
    return (
        <div> 
            <h5>Car details</h5>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <hr />
        </div>
    );
}

export default Car;