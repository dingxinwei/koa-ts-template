import UserModel from '../models/user';

class User {
  getUsers(ctx, next) {
    UserModel.find(
      (err, doc) => {
        console.log('find()', err, doc)
      }
    );
    ctx.body = 'this is a users response!';
  }
}

export default new User();