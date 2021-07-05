import React from 'react';
import { Button } from './stories/button';
import { Primary, Small } from './stories/Button.stories';
import { TableAdd } from './features/workers';
import './app.less';

const App = () => {
  return (
    <div>
      {/* <div>
        <Small label="Пер"></Small>
        <Primary label="Пер" size="medium" primary>
          Первая
        </Primary>
      </div>
      <div>
        <Button label="Вт" size="small" primary>
          Вторая
        </Button>
      </div> */}
      <TableAdd />
    </div>
  );
};

export default App;
