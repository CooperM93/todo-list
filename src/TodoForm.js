import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: '6px 0', padding: '0 6px'}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    label='Add New Todo' margin='normal' />

            </form>
        </Paper>
    )
}
