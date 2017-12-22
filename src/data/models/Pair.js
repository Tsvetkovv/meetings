import { DataTypes, QueryTypes } from 'sequelize';
import * as _ from 'lodash';
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

Pair.getAll = function() {
  return Model.query('SELECT * FROM [dbo].[PairsGet]', {
    model: Pair,
    type: QueryTypes.RAW,
  })
    .then(recordSets => recordSets[0])
    .then(pairs =>
      pairs.map(pair => {
        const mappedPair = {};
        Object.keys(pair).forEach(key => {
          const origVal = pair[key];
          const val =
            (key === 'dateStart' || key === 'dateEnd') && origVal
              ? moment.utc(new Date(origVal)).format('YYYY-MM-DD')
              : origVal;
          _.set(mappedPair, key, val);
        });
        return mappedPair;
      }),
    );
};

export default Pair;
