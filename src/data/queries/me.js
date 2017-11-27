import ProfileType from '../types/ProfileType';

const me = {
  type: ProfileType,
  resolve({ request }) {
    return (
      request.user && {
        id: request.user.id,
        email: request.user.email,
      }
    );
  },
};

export default me;
