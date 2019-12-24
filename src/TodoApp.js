import React, {useEffect} from 'react'
import useTodoState from './hooks/useTodoState';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Grid from '@material-ui/core/Grid'

export default function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Wash Car", completed: false},
        {id: 2, task: "Eat", completed: true},
        {id: 3, task: "Sleep", completed: false}
    ];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(
        initialTodos
    );

    return (
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Todos w/ hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '6px' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo} 
                        editTodo={editTodo} 
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
