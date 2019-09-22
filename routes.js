import { SignInPage, SignUpPage, MoviesListPage, Description } from './src/pages'

const pathParams = [
    {
        key: 'Home',
        path: '/',
        component: SignInPage,
    },
    {
        key: 'signin',
        path: '/signin',
        component: SignInPage,
    },
    {
        key: 'signup',
        path: '/signup',
        component: SignUpPage,
    },
    {
        key: 'moviesList',
        path: '/moviesList',
        component: MoviesListPage,
    },
    {
        key: 'description',
        path: '/description',
        component: Description,
    }

]

export {
    pathParams
}
