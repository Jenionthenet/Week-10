function Item(props) {

    const dataItems = props.items.map((item) => {
        return <li key= {item.id}>
            <h2>{item.email}</h2>
            <h2>{item.first_name}</h2>
            <h2>{item.last_name}</h2>
            <img src={item.avatar}/>
        </li>
    }) 

    return (
        <ul>{dataItems}</ul>
    )
}

export default Item