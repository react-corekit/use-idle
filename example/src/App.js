import React from 'react'
import { useMyHook } from '@react-corekit/use-idle'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App