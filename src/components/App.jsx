import user from '../configs/user.json';
import data from '../configs/data.json';
import friends from '../configs/friends.json';
import transactions from '../configs/transactions.json';

import { Profile } from './Profile';
import { Statisctics } from './Statisctics';
import { Friends } from './Friends';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',

        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statisctics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
