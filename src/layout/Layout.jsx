import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className='p-4'>
        <Header />

        <main className='my-5'>
            <Outlet />
        </main>

    </section>
  )
}

export default Layout