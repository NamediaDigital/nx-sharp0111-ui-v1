import { Button } from '@sharp0111/components'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Button><b>THE BUTTON</b></Button>
      <NxWelcome title="nx-sharp0111-ui-v1" />
    </div>
  );
}

export default App;
