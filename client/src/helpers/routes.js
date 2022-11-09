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
    editplayer: '/editplayer/:idp',
    verallcompetencias:'/verallcompetencias',
    registrarplayer: '/registrarplayer/:idcomp',
    verregistrados: '/verregistrados/:idcomp',
    project: (projectId) => (projectId ? `/projects/:${projectId}` : '/projects/projectId'),
    admin:{
        users:'/admin/users',
        registerAdmin:'/admin/registeradmin',
        acceptusers:'/admin/acceptusers',
        acceptplayer:'/admin/acceptplayer',
        verdocumentos:'/admin/verdocumentos/:iduser',
        crearcompetencia:'/admin/crearcompetencia',
        vercompetencia:'/admin/vercompetencia',
        editcompetition: '/admin/editcompetition/:idcom'
    }
}
export default routes;