import React from 'react';

import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import AddItem from '../add-item/add-item';

import './app.css';



export default class App extends React.Component {
    constructor() {
        super();
        this.maxId = 100;
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffe'),
                this.createTodoItem('Create Awesome App'),
                this.createTodoItem('Play Civilization'),
            ],
            term: '',
            filter: 'active',
        }
    }

    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            displayStyle: 'block',
            id: this.maxId++,
        }
    }

    deleteItem = (id) => {
        this.setState((state) => {
            const index = state.todoData.findIndex((item) => item.id === id);
            const newArr = [...state.todoData.slice(0, index), ...state.todoData.slice(index + 1)];

            return {
                todoData: newArr,
            }

        })
    }

    addNewItem = (text) => {
        this.setState((state) => {
            const newArr = [...state.todoData, this.createTodoItem (text)];
            return {
                todoData: newArr,
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState((state) => {
            return {
                todoData: this.toggleProps(state.todoData, id, 'important')
            }
        });
    }

  

    onToggleDone = (id) => {
        this.setState((state) => {
            return {
                todoData: this.toggleProps(state.todoData, id, 'done')
            }
        });
        
    }

    toggleProps(arr, id, propName) {
        const index = arr.findIndex((item) => item.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
  
        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onSearchValue = (term) => {
        this.setState({term})
    }
    searchItem (items, term) {
        return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    onChangeFilter = (filter) => {
        this.setState((state) => {
            return {
                filter: filter
            }
        });
        
    }

    filterItems(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    render() {
        const visibleItems = this.filterItems(this.searchItem(this.state.todoData, this.state.term), this.state.filter);
        const done  = this.state.todoData.filter((item) => item.done).length;
        const todo = this.state.todoData.length - done;
        return (
            <div className="todo-app">
                <AppHeader todo={todo} done={done}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchValue={this.onSearchValue}/>
                    <ItemStatusFilter onChangeFilter={this.onChangeFilter}
                                      filter={this.state.filter} />
                </div>
                <TodoList todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onDone={this.onToggleDone}
                    onImportant={this.onToggleImportant}/>
                <AddItem onAddItem={this.addNewItem}/>
            </div>
        )
    }
    
}
