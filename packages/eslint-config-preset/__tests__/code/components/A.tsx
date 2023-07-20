import React from 'react';

import type { SomeEnum } from '../enum';

interface AProps {
  e: SomeEnum,
}

const A: React.FC<AProps> = () => {
  return <p>A</p>;
};

export default A;
