import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import A from './components/A';
import B from './components/B';
import { SomeEnum } from './enum';

const App: FC = () => {
  const [value] = useState(0);

  useEffect(() => {
    console.log(value);
  });

  return (
    <>
      <A e={SomeEnum.X} />
      <B />
    </>
  );
};

export default App;
