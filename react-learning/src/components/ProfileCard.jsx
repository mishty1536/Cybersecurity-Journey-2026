import "./ProfileCard.css";

function ProfileCard({ name, branch }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Branch: {branch}</p>
        </div>
    );
}

export default ProfileCard;