import Quest from "../model/Quest.js"

const apiController = {
    getAllQuests: async (req, res) => {
        try {
            const quests = await Quest.findAll();

            if (!quests) {
                return res.status(404).json({ message: 'No quests found' }).end();
            }

            res.status(200).json(quests).end();
        } catch (error) {
            console.error('Error fetching quests:', error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message }).end();
        }
    }
}
export default apiController;