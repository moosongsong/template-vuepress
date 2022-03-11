module.exports = {
    title: 'template-vuepress',
    description: 'template-vuepress',
    base: "/template-vuepress",
    dest: 'build',
    themeConfig: {
        logo: 'https://picsum.photos/300/300/?random',
        nav: [
            {text: 'test', link: '/about/me'},
            {text: 'Home', link: '/'}
        ],
        sidebar: [
            {
                title: '카테고리1',
                collapsable: true,
                children: [
                    '/폴더1/테스트1',
                    '/폴더1/테스트2',
                ]
            },
            {
                title: '카테고리2',
                collapsable: true,
                children: [
                    '/폴더2/테스트1',
                    '/폴더2/테스트2',
                ]
            },
        ]
    }
}
