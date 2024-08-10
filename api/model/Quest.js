import { DataTypes, Model } from "sequelize";
import sequelize from './sequelizeClient.js';

class Quest extends Model { }
Quest.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    sequelize,
    tableName: "quests",
    timestamps: false,
});

export default Quest;