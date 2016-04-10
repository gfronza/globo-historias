var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var Promise = require('promise');

function createConnection(cb) {
    MongoClient.connect('mongodb://localhost:27017/globohistorias', cb);
}

module.exports = {
    createStory: function(story) {
        console.log('Persisting story in the db');
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                console.log('has connection to insert story');
                db.collection('stories').insert(story, function(err, result) {
                    if (err) {
                        console.log(err);
                        console.log('error persisting the story');
                        reject(err);
                    }
                    else {
                        console.log('story saved');
                        fulfill(result['ops'][0]);
                    }
                    db.close();
                });
            });
        });
    },
    matchStoryWithActivities: function(newStory) {
        console.log('Matching story with activities');
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                console.log('has connection to update story');

                if (newStory.tags && newStory.tags.length > 0) {
                    db.collection('activities').find({
                        'tags': {'$in': newStory.tags}
                    }).toArray(function(err, activities) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            var simpleActivities = [];

                            activities.forEach(function(act) {
                                simpleActivities.push({'activity_id': new ObjectID(act._id), 'approved': false});
                            });

                            if (simpleActivities.length > 0) {
                                db.collection('stories').update({'_id': new ObjectID(newStory._id)}, {
                                    '$push': {'matched_activities': {'$each': simpleActivities}}
                                }, function(err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        fulfill(newStory);
                                    }
                                    db.close();
                                });
                            } else {
                                console.log('No activities found with this storie\'s tags');
                                fulfill(newStory);
                                db.close();
                            }
                        }
                    });
                } else {
                    console.log('This story has no tags');
                    fulfill(newStory);
                    db.close();
                }
            });
        });
    },
    getActivities: function() {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('activities').find({}).toArray(function(err, activities) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fulfill(activities);
                    }

                    db.close();
                });
            });
        });
    },
    getStoriesByActivityId: function(activity_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').find({
                    'matched_activities.$.activity_id': {'$elemMatch': new ObjectID(activity_id)}
                }).toArray(function(err, stories) {
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
    },
    getApprovedStoriesByActivityId: function(activity_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').find({
                    'matched_activities': {'$elemMatch': {'activity_id': new ObjectID(activity_id), 'approved': true}}
                }).toArray(function(err, stories) {
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
    },
    getStoryById: function(story_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').find({'_id': new ObjectID(story_id)}).toArray(function(err, story) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fulfill(story);
                    }
                });
            });
        });
    },
    approveStoryForActivity: function(activity_id, story_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').update({
                    '_id': story_id,
                    'matched_activities.$.activity_id': new ObjectID(activity_id)
                }, {
                    '$set': {
                        'matched': true,
                        'reviewed': true,
                        'matched_activities.$.approved': true
                    },
                }, function(err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fulfill(result);
                    }

                    db.close();
                });
            });
        });
    },
    banStory: function(story_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').update({
                    '_id': new ObjectID(story_id),
                }, {
                    '$set': {
                        'reviewed': true,
                        'banned': true,
                        'matched': false,
                        'matched_activities.$.approved': false,
                    },
                }, function(err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fulfill(result);
                    }

                    db.close();
                });
            });
        });
    },
    denyStoryForActivity: function(activity_id, story_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').update({
                    '_id': new ObjectID(story_id),
                    'matched_activities.$.activity_id': activity_id
                }, {
                    '$set': {
                        'matched': false,
                        'reviewed': true,
                        'matched_activities.$.approved': false
                    },
                }, function(err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fulfill(result);
                    }

                    db.close();
                });
            });
        });
    },
    reactToStoryForActivity: function(activity_id, story_id, reaction) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').update({
                    '_id': new ObjectID(story_id),
                    'matched_activities': {'$elemMatch': {'activity_id': activity_id, 'approved': true}}
                }, {
                    'reactions.like': {'$inc': reaction.like},
                    'reactions.sad': {'$inc': reaction.sad},
                    'reactions.love': {'$inc': reaction.love},
                    'reactions.angry': {'$inc': reaction.angry},
                    'reactions.wow': {'$inc': reaction.wow},
                });
            }, function(err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    fulfill(result);
                }

                db.close();
            });
        });
    },
    getStoriesByAuthor: function(author_id) {
        return new Promise(function (fulfill, reject) {
            createConnection(function(err, db) {
                db.collection('stories').find({'author.id': new ObjectID(author_id)}).toArray(function(err, stories) {
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
