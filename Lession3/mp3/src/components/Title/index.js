import './title_style.css'

function Title(props) {
    return (
        <div className="content_title">
            <h2>{props.name}</h2>
        </div>
    )
}

export {Title}