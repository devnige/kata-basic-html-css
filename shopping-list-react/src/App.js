import React, { useState } from 'react';
import { GitHubUser } from './Github';
import { Title } from './Title';
import { Item } from './Item';
import { shoppingList } from './Items';
import { AddItem } from './AddItem';
import { List } from './List';
import { Footer } from './Footer';
import './App.css';

export default function App() {
  const [items, setItems] = useState(shoppingList);
  const login = "elizabethholmes";
  return (
    <>
      <div id="wrapper">
        <GitHubUser login= { login } />
        <Title name= { login[0].toUpperCase() + login.slice(1,) } />
        <AddItem items={ items } setItems={ setItems }/>
        <List items={ items } renderItem={ (item) => {
            return (
                <Item key={item.id} name={item.name}>
                </Item>
              )
          }} />
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
}