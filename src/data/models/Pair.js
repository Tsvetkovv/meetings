import { DataTypes, QueryTypes } from 'sequelize';
import moment from 'moment';
import Model from '../sequelize';

const Pair = Model.define(
  'Pair',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dateStart: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
      allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
      allowNull: true,
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
    },
  },
);

Pair.findById = function(id) {
  return this.find({
    where: {
      id,
    },
  });
};

Pair.destroyById = function(id) {
  return this.destroy({
    where: {
      id,
    },
  });
};

Pair.create = function(firstPartnerId, secondPartnerId, dateStart) {
  return Model.query(
    'EXEC PairCreate :firstPartnerId, :secondPartnerId, :dateStart',
    {
      type: QueryTypes.SELECT,
      replacements: {
        firstPartnerId,
        secondPartnerId,
        dateStart,
      },
    },
  );
};

export default Pair;
