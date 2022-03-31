import React, { useState } from 'react';
import { GitHubUser } from './Github';
import { Title } from './Title';
import { Item } from './Item';
import { shoppingList } from './Items';
import { AddItem } from './AddItem';
import { List } from './List';
import './App.css';

export default function App() {
  const [items, setItems] = useState(shoppingList);
  const login = "MengpingBao";
  return (
    <>
      <GitHubUser login= { login } />
      <Title name= { login } />
      <AddItem items={ items } setItems={ setItems }/>
      <List items={ items } renderItem={ (item) => {
        return (
            <Item key={item.id} name={item.name}>
            </Item>
          )
      }} />
      {/* <List items= {[1, 2, 3]} />
      <List items= {["A", "string", "list"]} /> */}
      
    </>
  );
}