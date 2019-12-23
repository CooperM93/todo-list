import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from '@material-ui/icons/Clear';

export default function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle();
    return (
    <ListItem>
        <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
        {isEditing ? <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEdit={toggle} /> : 
            <ListItemText style={{textDecoration: completed ? "line-through" : 'none'}}>
                {task}
            </ListItemText>
        }
        <ListItemSecondaryAction>
            {isEditing 
                ? 
                    <IconButton aria-label="Cancel" onClick={() => toggle()}>
                        <ClearIcon/>
                    </IconButton>
                :
                    <IconButton aria-label="Edit" onClick={() => toggle()}>
                        <EditIcon />
                    </IconButton>
            }
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    )
}
