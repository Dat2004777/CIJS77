import './style.scss'

function InputItem({addTask}) {
    return (
        <div className='input_field'>
            <input type="text" className="input_item" placeholder='Enter your task here ...'
            onKeyDown={(event) => addTask(event)}/>
        </div>
    )
}

function TodolistItem({id, text, checkedTask, isCompleted, updateTasks}) {
    return (
        <div className="content">
            <div class="form-check" onClick={checkedTask}>
                <input class="form-check-input" type="checkbox" name="flexRadioDefault" id={id} checked={isCompleted} onChange={(event) => updateTasks(event.target.checked, id)}
                />
                <label class="form-check-label item" for="flexRadioDefault1">
                    {text}
                </label>
            </div>
        </div>
    )
}

function Footer(props) {
    return (
        <div className="footer_content">
            <p className='remaining_tasks'>{props.count} tasks left!</p>
            <p>MindX todolist</p>
        </div>
    )
}

export {TodolistItem};
export {InputItem};
export {Footer};