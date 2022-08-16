import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    handleAdd() {

    }

    render() {
        return (
            <div>
                <PageHeader name='Taregas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd}></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}