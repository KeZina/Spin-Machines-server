const chalk = require('chalk');

const CoreController = {
    array: [1, 3, 7, 2, 3, 5, 6, 3, 4, 7, 2, 71, 9, 9, 4],
    matrix: null,

    quests: [
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
    ],

    generateArray() {
        let array = new Array(15).fill(null).map(() => {
            let num = Math.floor((Math.random() * 1e1) + 1)
            if(num === 10) {
                let unique = Math.floor(((Math.random() * 2e4) / 10));
                if(unique > 50 && unique < 100) num = unique;
                else num = Math.floor((Math.random() * 1e1) + 1);
            }
            return num
        })

        this.array = array;
    },

    createMatrix() {
        let arr = this.array;
        let j = 0;
        let matrix = new Array(arr.length / 5).fill([]);

        for(let i = 0; i < arr.length; i++) {
            if((i + 1) % 5 !== 0) {
                matrix[j] = [...matrix[j], arr[i]];
            } else if((i + 1) % 5 === 0) {
                matrix[j] = [...matrix[j], arr[i]];
                j++;
            }
        }

        this.matrix = matrix;
    },

    progress() {
        this.generateArray();
        this.createMatrix();
        const matrix = this.matrix;

        const quests = this.quests.map(quest => {
            if(!quest.isCompleted) {
                if(quest.questType === 'do_spin') {
                    let userVal = quest.userQuestValue + 1;

                    if(userVal === quest.questValue) {
                        return ({
                            ...quest,
                            userQuestValue: userVal,
                            isCompleted: true
                        });
                    } else return({
                        ...quest, 
                        userQuestValue: userVal
                    })
                } else if(quest.questType === 'spent_money') {
                    let userVal = quest.userQuestValue + 200;

                    if(userVal === quest.questValue) {
                        return ({
                            ...quest,
                            userQuestValue: userVal,
                            isCompleted: true
                        });
                    } else return({
                        ...quest, 
                        userQuestValue: userVal
                    })
                } else if(quest.questType === 'combo_row') {
                    const nextMatrix = matrix.filter((arr, index) => index !== 0);
                    const prevMatrix = matrix.filter((arr, index, matrix) => index !== (matrix.length - 1));
                    let userVal = quest.userQuestValue;

                    nextMatrix.map((nextArr, mIndex) => {
                        nextArr.map((num, aIndex) => {
                            if(num === prevMatrix[mIndex][aIndex]) userVal++;
                        })
                    })

                    if(userVal > 0) {
                        if(userVal >= quest.questValue) {
                            return ({
                                ...quest,
                                userQuestValue: 2,
                                isCompleted: true
                            })
                        } else return ({
                            ...quest,
                            userQuestValue: userVal
                        })
                    }
                } else if(quest.questType === 'get_symbol') {
                    let userVal = quest.userQuestValue;

                    matrix.map(arr => {
                        arr.map(num => {
                            if(String(num).length === 2) userVal++;
                        })
                    })

                    if(userVal > 0) return({
                        ...quest,
                        userQuestValue: 1,
                        isCompleted: true
                    })
                }
            }
            return quest
        })

        this.quests = quests;
        console.log(chalk.bgCyan.black('Matrix (spin result):'), this.matrix)
        console.log(chalk.bgCyan.black('Quests (progress):'), this.quests);
    }

}

module.exports = CoreController;