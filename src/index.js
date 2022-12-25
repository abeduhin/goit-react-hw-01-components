import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// Імпортуємо загальні дані (підключаємо бібліотеку react, react-dom, кореневий компонент-App, стилі CSS )

import { Profile } from 'components/profile/Profile';
import user from './components/profile/user.json';
// Імпортуємо компоненти 1 завдання (окрема папка profile (React-компонент, файл з CSS стилями та ісходний файл user.json ) в папці components.


import { Statistics } from 'components/statistics/Statistics';
import data from './components/statistics/data.json';
// Імпортуємо компоненти 2 завдання (окрема папка statistics (React-компонент Statistics, файл з CSS стилями та ісходний файл data.json ) в папці components.

import { FriendList } from 'components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
// Імпортуємо компоненти 3 завдання (окрема папка friendList (React-компонент FriendList, React-компонент FriendListitem, файл з CSS стилями та ісходний файл friends.json ) в папці components.

import { TransactionHistory } from 'components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';
// Імпортуємо компоненти 4 завдання (окрема папка transaction-history (React-компонент TransactionHistory, файл з CSS стилями та ісходний файл transactions.json ) в папці components.

ReactDOM.createRoot(document.getElementById('root')).render(
  // Робимо рендеринг React елементів в DOM
  // Спочатку передаємо DOM-элемент в ReactDOM.createRoot(), потім передаємо з React-элементом в root.render():
  <React.StrictMode>
    {/* суворий режим */}    
     <App>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> 
      {/* На всяк випадок зробив рендеринг, коли title не передається */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
