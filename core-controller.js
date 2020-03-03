class CoreController {
    static spin() {        
        const spinResult = this.getSpinResult();        
    }

    static getQuests() {
        return [
            {
                id: 1,
                userId: 1,
                questType: 'do_spin',
                questValue: 12,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 1,
                userId: 1,
                questType: 'spent_money',
                questValue: 2000,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 1,
                userId: 1,
                questType: 'combo_row',
                questValue: 2,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 1,
                userId: 1,
                questType: 'get_symbol',
                questValue: 1,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            }
        ]
    }

    static getSpinResult() {
        return {
            matrix: [1, 3, 7, 2, 3, 5, 6, 3, 4, 7, 2, 71, 9, 9, 4],
            spentMoney: 1000,
        }
    }
}

module.exports = CoreController;