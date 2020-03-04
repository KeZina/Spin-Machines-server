class CoreController {

    static getArray() {
        return [1, 3, 7, 2, 3, 5, 6, 3, 4, 7, 2, 71, 9, 9, 4];
    }

    // static spin() {        
    //     const spinResult = this.getSpinResult();        
    // }

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
        let arr = this.getArray();
        let j = 0;
        let temp = [];

        for(let i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    
        j = 0;
        let newArr = new Array(arr.length / 5).fill([]);

        for(let i = 0; i < arr.length; i++) {
            if((i + 1) % 5 !== 0) {
                newArr[j] = [...newArr[j], arr[i]];
            } else if((i + 1) % 5 === 0) {
                newArr[j] = [...newArr[j], arr[i]];
                j++;
            }
        }

        return newArr;

        // return {
        //     matrix: [1, 3, 7, 2, 3, 5, 6, 3, 4, 7, 2, 71, 9, 9, 4],
        //     spentMoney: 1000,
        // }
    }
}

module.exports = CoreController;