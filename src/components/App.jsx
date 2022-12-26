import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
// // Імпортуємо компоненти 1 завдання (окрема папка profile (React-компонент, файл з CSS стилями та ісходний файл user.json ) в папці components.


import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
// // Імпортуємо компоненти 2 завдання (окрема папка statistics (React-компонент Statistics, файл з CSS стилями та ісходний файл data.json ) в папці components.

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
// // Імпортуємо компоненти 3 завдання (окрема папка friendList (React-компонент FriendList, React-компонент FriendListitem, файл з CSS стилями та ісходний файл friends.json ) в папці components.

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
// // Імпортуємо компоненти 4 завдання (окрема папка transaction-history (React-компонент TransactionHistory, файл з CSS стилями та ісходний файл transactions.json ) в папці components.

export default function App() {
  return (
    <div>
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
      
    </div>
  );
};
// Kореневий компонент-App 