

const Header = (props) => {
    
    return (
        <div>
            <h1>Login Status</h1>
            <ul>
                <li>Name : {props.item.name}</li>
                <li>Age : {props.item.age}</li>
                <li>City : {props.item.city}</li>
            </ul>
        </div>
    );


};

export default Header;