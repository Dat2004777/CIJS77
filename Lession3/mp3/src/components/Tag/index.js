import './tag_style.css'

function Tag(props) {
    return (
        <div className="tag">
            <a href="#!" className='tag_name'>{props.name}</a>
        </div>
    )
}

export {Tag};