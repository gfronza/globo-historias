module.exports = {
    createStory: function(story) {
        return {
            _id: 283239819393,
            author: {
              id: 321321321,
              name: 'Gabriel',
              snapshot_url: 'foto_do_user.jpg'
            },
            video_url: 'samplelink.mp4',
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
        };
    },
    approveStoryForActivity: function(activity_id, story_id) {
      //sets the story as approved
      return {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'samplelink.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: true}
          ],
          banned: false,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
      };
    },
    banStory: function(story_id) {
      return {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'samplelink.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: true}
          ],
          banned: true,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
      };
    },
    denyStoryForActivity: function(activity_id, story_id) {
      //sets the story as approved
      return {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'samplelink.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: false}
          ],
          banned: false,
          reviewed: true,
          reactions: {
            like: 4,
            sad: 2,
            love: 3,
            angry: 2,
            wow: 0
          }
      };
    },
    reactToStoryForActivity: function(activity_id, story_id, reaction) {
      return {
        _id: 283239819393,
        author: {
          id: 321321321,
          name: 'Gabriel',
          snapshot_url: 'foto_do_user.jpg'
        },
        video_url: 'samplelink.mp4',
        story_url: 'address-in-which-the-video-will-be-available',
        story_thumb: 'url-to-img.jpg',
        tags: [],
        time_stamp: '2016-11-04 10:51:00',
        matched: true,
        matched_activities: [
          {activity_id: 321362138921973, approved: false}
        ],
        banned: false,
        reviewed: true,
        reactions: {
          like: 5,
          sad: 2,
          love: 3,
          angry: 2,
          wow: 0
        }
      };
    },
    storiesByAuthor: function(author_id) {
      return [
        {
          _id: 283239819393,
          author: {
            id: 321321321,
            name: 'Gabriel',
            snapshot_url: 'foto_do_user.jpg'
          },
          video_url: 'samplelink.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'url-to-img.jpg',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: true}
          ],
          banned: true,
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
        video_url: 'samplelink.mp4',
        story_url: 'address-in-which-the-video-will-be-available',
        story_thumb: 'url-to-img.jpg',
        tags: [],
        time_stamp: '2016-11-04 10:51:00',
        matched: true,
        matched_activities: [
          {activity_id: 321362138921973, approved: true}
        ],
        banned: true,
        reviewed: true,
        reactions: {
          like: 4,
          sad: 2,
          love: 3,
          angry: 2,
          wow: 0
        }
      }
    ];
  }
}
