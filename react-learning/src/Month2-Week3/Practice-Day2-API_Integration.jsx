import {useState, useEffect} from "react";
function PracticeDay2(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function fetchUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setData(data);
            }catch(error){
                setError("failed to Load users");
            }    
            finally{
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);
    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return (
    <div>

        <h1>Users</h1>

        <input
            type="text"
            placeholder="Search User"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <br /><br />

        {
            data
                .filter((user) =>
                    user.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((user) => (

                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.company.name}</p>
                        <hr />
                    </div>

                ))
        }

    </div>
    );
}

export default PracticeDay2;

//question 1. show only first five users
// {data.slice(0, 5).map((user) => (
//     <div key={user.id}>
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//         <p>{user.company.name}</p>
//         <hr />
//     </div>
// ))}