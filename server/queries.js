const { Op } = require('sequelize');
// required matches and likes
const {
  User, Dog, FriendJoint, Location, Matches, Likes,
} = require('./db/db.js');

const isAccCreated = (googleId) => User.findAll({
  where: {
    [Op.and]: [{ googleId }, { username: { [Op.not]: null } }],
  },
})
  .then((list) => !!list.length)
  .catch((err) => err);

const getUser = (userId) => User.findAll({
  where: {
    id: userId,
  },
});

const getUsers = () => User.findAll();

const getDogs = () => Dog.findAll();

const getCurrentDog = (userId) => Dog.findAll({ where: { id_user: userId } });

const getLocs = () => Location.findAll();

const addUser = (userId, userInfoObj) => User.update(userInfoObj, { where: { id: userId } });

const updateDog = (userId, userInfoObj) => Dog.update(userInfoObj, { where: { id_user: userId } });

// addFriend is a function that takes a friend obj and creates a new row in the friendJoint table
const addFriend = (friendObj) => FriendJoint.create(friendObj);

// getFriends takes an id and in the friendjoint table and finds all the frien
const getFriends = (id) => {
  FriendJoint.findAll({ where: { id_dog: id } })
    .then((res) => {
      if (res.length === 1) {
        return Dog.findOne({ where: { id: res[0].dataValues.id_dogFriend } });
      }
      const data = res.map((val) => {
        return Dog.findOne({ where: { id: val.dataValues.id_dogFriend } });
      });
      Promise.all(data)
        .then((res) => {
          const friendData = res.map((friendVal) => {
            return friendVal.dataValues.dog_name;
          });

          return friendData;
        });
    })
    .then((res) => [res.dataValues.dog_name])
    .catch((err) => console.log('getfriends', err));
};

// const unFriend = (dogId, friendId, bool_friend) => {
//   FriendJoint.update(bool_friend, {
//     where: {
//       id_dog: dogId,
//       id_dogFriend: friendId,
//     },
//   });
// };

const addDog = (dogInfo) => Dog.create(dogInfo);

const addLoc = (locObj) => Location.create(locObj);

// add like to like table
const addLike = (likeObj) => Likes.create(likeObj);

const getLikes = () => Likes.findAll();

// query the db for matches
const getMatches = (id) => {
  Matches.findAll({
    where: {
      id_user: id,
      result: true,
    },
  });
};

module.exports = {
  isAccCreated,
  getUsers,
  getDogs,
  getCurrentDog,
  addUser,
  addFriend,
  getFriends,
  updateDog,
  addDog,
  addLoc,
  getUser,
  getLocs,
  addLike,
  getMatches,
  getLikes,
};
