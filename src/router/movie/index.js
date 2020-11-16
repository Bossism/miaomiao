export default{
    path : '/movie',
    component : () => import('@/views/Movie'),
    // 按需载入  @指的是src目录
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/Comingsoon')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/Nowplaying')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : 'movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}