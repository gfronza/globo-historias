module.exports = {
    createStory: function(story) {
        return {
            _id: 283239819393,
            author: {
              id: 321321321,
              name: 'Gabriel',
              snapshot_url: 'foto_do_user.jpg'
            },
            video_url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
            story_url: 'address-in-which-the-video-will-be-available',
            story_thumb: 'http://tinyurl.com/jood6zl',
            tags: [],
            time_stamp: '2016-11-04 10:51:00',
            matched: true,
            matched_activities: [],
            banned: false,
            reviewed: false,
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
          video_url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'http://tinyurl.com/jood6zl',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: true}
          ],
          banned: false,
          reviewed: false,
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
          video_url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'http://tinyurl.com/jood6zl',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: true}
          ],
          banned: true,
          reviewed: false,
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
          video_url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
          story_url: 'address-in-which-the-video-will-be-available',
          story_thumb: 'http://tinyurl.com/jood6zl',
          tags: [],
          time_stamp: '2016-11-04 10:51:00',
          matched: true,
          matched_activities: [
            {activity_id: 321362138921973, approved: false}
          ],
          banned: false,
          reviewed: false,
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
        video_url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
        story_url: 'address-in-which-the-video-will-be-available',
        story_thumb: 'http://tinyurl.com/jood6zl',
        tags: [],
        time_stamp: '2016-11-04 10:51:00',
        matched: true,
        matched_activities: [
          {activity_id: 321362138921973, approved: false}
        ],
        banned: false,
        reviewed: false,
        reactions: {
          like: 5,
          sad: 2,
          love: 3,
          angry: 2,
          wow: 0
        }
      };
    },
    getStoriesByAuthor: function(author_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').find({'author.id': 312213213213}).toArray(function(err, stories) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fulfill(stories);
                    }

                    db.close();
                });
            });
        });
    }
}
