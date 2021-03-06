import { DataTypes, QueryTypes } from 'sequelize';
import moment from 'moment';
import Model from '../sequelize';

const Profile = Model.define(
  'Profile',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    requirementId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    getterMethods: {
      city() {
        if (!this.City) {
          throw new Error('You should include a City in request');
        }
        return {
          id: this.City.id,
          name: this.City.name,
        };
      },
      birthday() {
        return moment
          .utc(new Date(this.dataValues.birthday))
          .format('YYYY-MM-DD');
      },
      goal() {
        if (!this.Goal) {
          throw new Error('You should include a Goal in request');
        }
        return {
          id: this.Goal.id,
          value: this.Goal.value,
        };
      },
      interests() {
        if (!this.Interests) {
          throw new Error('You should include a Interests in request');
        }

        return this.Interests;
      },

      requirement() {
        return this.Requirement;
      },

      partner() {
        // TODO too many requests
        return Model.query('EXEC GetCurrentPartnerById :id', {
          type: QueryTypes.SELECT,
          replacements: {
            id: this.id,
          },
        }).then(res => (res.length && res[0]) || null);
      },
    },
  },
);

Profile.findById = function(id) {
  return this.find({
    where: {
      id,
    },
  });
};

Profile.destroyById = function(id) {
  return this.destroy({
    where: {
      id,
    },
  });
};

export default Profile;
