//archivo para declarar las constantes de las rutas de usuario
const routes={
    home: '/',
    login:'/login',
    register:'/register',
    account:'/account',
    projects:'/projects',
    edituser:'/edituser',
    addplayer:'/addplayer',
    showplayer: '/showplayer',
    project: (projectId) => (projectId ? `/projects/:${projectId}` : '/projects/projectId'),
    admin:{
        users:'/admin/users',
        registerAdmin:'/admin/registeradmin',
        acceptusers:'/admin/acceptusers',
        acceptplayer:'/admin/acceptplayer'
    }
}
export default routes;