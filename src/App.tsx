import { BooksProvider } from './books'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes'

function App() {

  return (
    <>
      <BooksProvider>
        <RouterProvider router={router} />
      </BooksProvider>
    </>
  );
}

export default App;
