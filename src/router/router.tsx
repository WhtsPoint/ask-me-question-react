import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import MainPage from '../components/MainPage/MainPage'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import QuestionForm from '../components/QuestionForm/QuestionForm'
import QuestionHistory from '../components/QuestionHistory/QuestionHistory'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/', 
                element: <MainPage />,
                children: [
                    {
                        path: '/',
                        element: <QuestionForm />
                    },
                    {
                        path: '/history',
                        element: <QuestionHistory />  
                    }
                ]
            }
        ],
    }, 
    {
        path: '*',
        element: <NotFoundPage />
    }
])

export default router