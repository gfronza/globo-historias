module.exports = {
  apiHelper: function(selector, params){
    if (selector == 'stories-by-activity') {
      var stories = [
        {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [],
          banned: false,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
        },
        {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [],
          banned: false,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
        },
        {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [],
          banned: false,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
        }
      ]
      return stories;
    } else if (selector == 'story-by-id') {
      return (
        {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [],
          banned: false,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
        }
      )
    }
  },
  FAKE_ACTIVITIES: [
    {
      _id: 321362138921973,
      source: {id:'techtudo', logo: 'http://tinyurl.com/za43dfu'},
      link_url: 'http://www.techtudo.com.br/noticias/noticia/2016/04/hackathon-globo-comeca-2-edicao-do-evento-com-novidades-no-bbb.html',
      title: 'Hackathon Globo: começa a 2ª edição do evento com novidades no BBB',
      subtitle: 'Acompanhe ao vivo o Hackathon Globo no site do TechTudo',
      time_stamp: '2016-11-04 14:55:45',
      tags: [],
      stories: [],
      pending: 32,
      approved: 20,
      total: 100
    },
    {
      _id: 23323434,
      source: {id:'g1', logo: 'http://tinyurl.com/za43dfu'},
      link_url: 'http://www.techtudo.com.br/noticias/noticia/2016/04/hackathon-globo-comeca-2-edicao-do-evento-com-novidades-no-bbb.html',
      title: 'Hackathon Globo: começa a 2ª edição do evento com novidades no BBB',
      subtitle: 'Acompanhe ao vivo o Hackathon Globo no site do TechTudo',
      time_stamp: '2016-11-04 14:55:45',
      tags: [],
      stories: [],
      pending: 32,
      approved: 20,
      total: 100
    },
    {
      _id: 32334432,
      source: {id:'g1', logo: 'http://tinyurl.com/za43dfu'},
      link_url: 'http://www.techtudo.com.br/noticias/noticia/2016/04/hackathon-globo-comeca-2-edicao-do-evento-com-novidades-no-bbb.html',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
      subtitle: 'Lorem ipsum dolor sit amet',
      time_stamp: '2016-11-04 14:55:45',
      tags: [],
      stories: [],
      pending: 21,
      approved: 2,
      total: 50
    },
    {
      _id: 321234,
      source: {id:'g1', logo: 'http://tinyurl.com/za43dfu'},
      link_url: 'http://www.techtudo.com.br/noticias/noticia/2016/04/hackathon-globo-comeca-2-edicao-do-evento-com-novidades-no-bbb.html',
      title: 'Incrivel Hackathon',
      subtitle: 'muito bacaninha show de bola',
      time_stamp: '2016-11-04 14:55:45',
      tags: [],
      stories: [],
      pending: 32,
      approved: 20,
      total: 100
    }
  ]
}
